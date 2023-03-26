import { injectable } from "inversify";
import { ProfileM } from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { CreateUserReqDto } from "../controller";

@injectable()
export class ProfileDtoConvertor implements IProfileDtoConvertor {
  toGetProfileResDto(createUserReqDto: CreateUserReqDto): ProfileM {
    return { ...createUserReqDto };
  }
}
