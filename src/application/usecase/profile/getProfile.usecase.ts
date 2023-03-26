import { InternalServerErrorException, ValidationPipe } from "@nestjs/common";
import { inject, injectable } from "inversify";
import { ProfileM } from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { IProfileDataService } from "src/domain/dataservice/profile.dataservice";
import { TYPES } from "src/infrastructure/common";
import { MESSAGES } from "src/infrastructure/common/messages";
import { CreateUserReqDto } from "src/infrastructure/controller/profile/dto";

@injectable()
export class GetProfile {
  constructor(
    @inject(TYPES.IProfileDataService)
    private profileDataService: IProfileDataService,
    @inject(TYPES.IProfileDtoConvertor)
    private profileDtoConvertor: IProfileDtoConvertor
  ) {}

  async execute(createUserReqDto: CreateUserReqDto): Promise<any> {
    const profileM: ProfileM =
      await this.profileDtoConvertor.toGetProfileResDto(createUserReqDto);
    const data = await this.profileDataService.getProfile(profileM);
    try {
      return {
        data,
        message: MESSAGES.PROFILE.GET,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
