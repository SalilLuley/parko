import { inject, injectable } from "inversify";
import { IProfileRepository } from "src/domain";
import { FirebaseRepo } from "src/parko/database/domain/repository/firebase.repo";
import { MetaDataFirestore, TYPES } from "../common";

@injectable()
export class ProfileRepository implements IProfileRepository {
  constructor(
    @inject(TYPES.FirebaseRepo)
    private firebaseRepo: FirebaseRepo
  ) {}
  async createProfile<T>(id: string): Promise<T> {
    const snapshot = await this.firebaseRepo
      .getDb()
      .collection(MetaDataFirestore.users)
      .doc(id)
      .get();

    const users = snapshot.data();
    return users as T;
  }
}
