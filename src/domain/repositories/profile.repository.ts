import { ProfileM } from "../model";

export interface IProfileRepository {
  getProfile(id: number): ProfileM;
}
