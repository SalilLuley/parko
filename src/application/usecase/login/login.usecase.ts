import { InternalServerErrorException } from "@nestjs/common";
import { inject, injectable } from "inversify";
import { ProfileM } from "src/domain";
import { TYPES } from "src/infrastructure/common";
import { MESSAGES } from "src/infrastructure/common/messages";
import { LoginReqDto } from "src/infrastructure/controller/login";
import { IAuthService } from "src/parko/authDataservice";
import { IResponse } from "src/parko/core/domain";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";

@injectable()
export class LoginUsecase implements ICommandHandler {
  constructor(
    @inject(TYPES.IAuthService)
    private authService: IAuthService
  ) {}

  async execute(loginReqDto: LoginReqDto): Promise<IResponse<null>> {
    const { password, username } = loginReqDto;
    const profileM: ProfileM = await this.authService.signIn(
      username,
      password
    );

    console.log(profileM);
    try {
      return {
        data: null,
        message: MESSAGES.LOGIN.SUCCESS,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
