import { ProfileM } from "../model";

export interface IProfileRepository {
  createProfile(id: number): ProfileM;
}
