import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse } from "@nestjs/swagger";
import { Container } from "inversify/lib/container/container";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";
import { NAMED_TARGET, TYPES } from "src/infrastructure/common";
import { container } from "src/infrastructure/container";
import { CreateUserReqDto, CreateUserResDto } from "./dto";

@Controller("profile")
@ApiExtraModels(CreateUserReqDto, CreateUserResDto)
export class AppController {
  private container: Container;
  constructor() {
    this.container = container;
  }

  @Post("insert")
  @ApiOkResponse()
  async create(@Body() createUserReqDto: CreateUserReqDto) {
    const commandHandler: ICommandHandler =
      this.container.getNamed<ICommandHandler>(
        TYPES.ICommandHandler,
        NAMED_TARGET.getProfile
      );
    return commandHandler.execute(createUserReqDto);
  }
}
