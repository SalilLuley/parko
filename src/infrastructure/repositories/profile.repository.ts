import { injectable } from "inversify";
import { IProfileRepository, ProfileM } from "src/domain";

@injectable()
export class ProfileRepository implements IProfileRepository {
  getProfile(id: number): ProfileM {
    return {
      employeeCode: "ABC",
      id: 123,
      name: "Salil",
    };
  }
}
