import { CreateUserReqDto } from "src/infrastructure";
import { ProfileM } from "../model/profile.model";

export interface IProfileDtoConvertor {
  toGetProfileResDto(createUserReqDto: CreateUserReqDto): ProfileM;
}
