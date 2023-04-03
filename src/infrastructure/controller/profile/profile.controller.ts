import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse } from "@nestjs/swagger";
import { Container } from "inversify/lib/container/container";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";
import { NAMED_TARGET, TYPES } from "src/infrastructure/common";
import { container } from "src/infrastructure/container";
import { ApiResponseOk } from "../../../parko/core/swagger";
import {
  CreateUserReqDto,
  CreateUserResDto,
  GetProfileReqDto,
  GetProfileResDto,
} from "./dto";
import { AuthGuard } from "src/infrastructure/guards/auth.guard";

@Controller("profile")
@ApiExtraModels(
  GetProfileReqDto,
  GetProfileResDto,
  CreateUserReqDto,
  CreateUserResDto
)
export class ProfileController {
  private container: Container;
  constructor() {
    this.container = container;
  }

  @Get("/:id")
  @UseGuards(AuthGuard)
  @ApiResponseOk(GetProfileResDto)
  async create(@Param() getProfileReqDto: GetProfileReqDto) {
    const commandHandler: ICommandHandler =
      this.container.getNamed<ICommandHandler>(
        TYPES.ICommandHandler,
        NAMED_TARGET.getProfile
      );
    return commandHandler.execute(getProfileReqDto);
  }
}
