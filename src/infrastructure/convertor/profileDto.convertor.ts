import { injectable } from "inversify";
import { ProfileM } from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { CreateUserReqDto, CreateUserResDto } from "../controller";

@injectable()
export class ProfileDtoConvertor implements IProfileDtoConvertor {
  toCreateUserReqDto(createUserReqDto: CreateUserReqDto): ProfileM {
    return {
      userId: createUserReqDto.id,
    };
  }

  toGetProfileResDto(profileM: ProfileM): CreateUserResDto {
    return { ...profileM };
  }
}
