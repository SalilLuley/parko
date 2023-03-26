import { ProfileM } from "../model/profile.model";

export interface IProfileDataService {
  getProfile(profileM: ProfileM): ProfileM;
}
