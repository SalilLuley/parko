import { Body, Controller, Post } from "@nestjs/common";
import { ApiExtraModels } from "@nestjs/swagger";
import { Container } from "inversify";
import { NAMED_TARGET, TYPES } from "src/infrastructure/common";
import { container } from "src/infrastructure/container";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";
import { ApiResponseOk } from "src/parko/core/swagger";
import { LoginReqDto } from "./dto";

@Controller("login")
@ApiExtraModels()
export class LoginController {
  private container: Container;
  constructor() {
    this.container = container;
  }

  @Post()
  @ApiResponseOk(null)
  async signIn(@Body() loginReqDto: LoginReqDto) {
    const commandHandler: ICommandHandler =
      this.container.getNamed<ICommandHandler>(
        TYPES.ICommandHandler,
        NAMED_TARGET.signIn
      );
    return commandHandler.execute(loginReqDto);
  }
}
