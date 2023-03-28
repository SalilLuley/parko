import { InternalServerErrorException } from "@nestjs/common";
import { inject, injectable } from "inversify";
import { ProfileM } from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { IProfileDataService } from "src/domain/dataservice/profile.dataservice";
import { CreateUserReqDto, CreateUserResDto } from "src/infrastructure";
import { TYPES } from "src/infrastructure/common";
import { MESSAGES } from "src/infrastructure/common/messages";
import { IResponse } from "src/parko/core/domain";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";

@injectable()
export class GetProfile implements ICommandHandler {
  constructor(
    @inject(TYPES.IProfileDataService)
    private profileDataService: IProfileDataService,
    @inject(TYPES.IProfileDtoConvertor)
    private profileDtoConvertor: IProfileDtoConvertor
  ) {}

  async execute(id: string): Promise<IResponse<CreateUserResDto>> {
    const profileM: ProfileM = await this.profileDataService.getProfile(id);
    const data: CreateUserResDto =
      await this.profileDtoConvertor.toGetProfileResDto(profileM);
    try {
      return {
        data,
        message: MESSAGES.PROFILE.GET.SUCCESS,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
