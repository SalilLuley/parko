import {
  CreateUserReqDto,
  CreateUserResDto,
  GetProfileResDto,
} from "src/infrastructure";
import { ProfileM } from "../model";

export interface IProfileDtoConvertor {
  toCreateUserReqDto(CreateUserReqDto: CreateUserReqDto): ProfileM;
  toGetProfileResDto(profileM: ProfileM): GetProfileResDto;
}
