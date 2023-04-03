export interface IProfileRepository {
  getProfile<T>(id: string): Promise<T>;
  getProfileByUsername<T>(username: string): Promise<T>;
}
