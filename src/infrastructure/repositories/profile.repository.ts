import { injectable } from "inversify";
import { IProfileRepository, ProfileM } from "src/domain";

@injectable()
export class ProfileRepository implements IProfileRepository {
  createProfile(id: number): ProfileM {
    return {
      employeeCode: "ABC",
      id,
      name: "Salil",
    };
  }
}
