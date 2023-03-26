import { inject, injectable } from "inversify";
import { IProfileRepository, ProfileM } from "src/domain";
import { IProfileDataService } from "src/domain/dataservice/profile.dataservice";
import { MetaDataFirestore, TYPES } from "src/infrastructure/common";
import { FirebaseRepo } from "src/parko/database/domain/repository/firebase.repo";

@injectable()
export class ProfileDataService implements IProfileDataService {
  constructor(
    private firebaseRepo: FirebaseRepo,

    @inject(TYPES.IProfileRepository)
    private profileRepository: IProfileRepository
  ) {}

  async createProfile(profileM: ProfileM): Promise<ProfileM> {
    const snapshot = await this.firebaseRepo
      .getDb()
      .collection(MetaDataFirestore.users)
      .doc("3kaZoBXdERkLrDxfW6Bsxn")
      .get();

    const users = snapshot.data();
    const { id } = profileM;
    return this.profileRepository.createProfile(id);
  }
}
