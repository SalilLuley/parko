import { ProfileM } from "../model";

export interface IProfileDataService {
  getProfile(id: string): Promise<ProfileM>;
}
