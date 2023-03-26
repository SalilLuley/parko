import { ProfileM } from "../model/profile.model";

export interface IProfileDataService {
  createProfile(profileM: ProfileM): ProfileM;
}
