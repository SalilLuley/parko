import { injectable } from "inversify";
import { ProfileM } from "src/domain";
import { IProfileModelConvertor } from "src/domain/convertors/profile.model";
import { UserEntity } from "../entity";

@injectable()
export class ProfileModelConvertor implements IProfileModelConvertor {
  toProfileMFromUserEntity(userEntity: UserEntity): ProfileM {
    const { firstName, lastName, userId } = userEntity;
    return {
      firstName,
      lastName,
      userId,
    };
  }
}
