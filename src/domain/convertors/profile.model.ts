import { UserEntity } from "src/infrastructure";
import { ProfileM } from "../model";

export interface IProfileModelConvertor {
  toProfileMFromUserEntity(userEntity: UserEntity): ProfileM;
}
