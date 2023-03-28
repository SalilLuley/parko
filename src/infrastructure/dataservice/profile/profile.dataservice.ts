import { inject, injectable } from "inversify";
import {
  IProfileModelConvertor,
  IProfileRepository,
  ProfileM,
} from "src/domain";
import { IProfileDataService } from "src/domain/dataservice/profile.dataservice";
import { TYPES } from "src/infrastructure/common";
import { UserEntity } from "src/infrastructure/entity";

@injectable()
export class ProfileDataService implements IProfileDataService {
  constructor(
    @inject(TYPES.IProfileRepository)
    private profileRepository: IProfileRepository,
    @inject(TYPES.IProfileModelConvertor)
    private profileModelConvertor: IProfileModelConvertor
  ) {}

  async getProfile(id: string): Promise<ProfileM> {
    const userEntity: UserEntity =
      await this.profileRepository.createProfile<UserEntity>(id);
    return this.profileModelConvertor.toProfileMFromUserEntity(userEntity);
  }
}
