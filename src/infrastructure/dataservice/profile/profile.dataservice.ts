import { inject, injectable } from "inversify";
import { IProfileRepository, ProfileM } from "src/domain";
import { IProfileDataService } from "src/domain/dataservice/profile.dataservice";
import { TYPES } from "src/infrastructure/common";

@injectable()
export class ProfileDataService implements IProfileDataService {
  constructor(
    @inject(TYPES.IProfileRepository)
    private profileRepository: IProfileRepository
  ) {}

  createProfile(profileM: ProfileM): ProfileM {
    const { id } = profileM;
    return this.profileRepository.createProfile(id);
  }
}
