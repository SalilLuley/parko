import { ProfileM } from "src/domain";

export interface IAuthService {
  signIn(username: string, password: string): Promise<ProfileM>;
}
