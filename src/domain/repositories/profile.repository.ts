export interface IProfileRepository {
  createProfile<T>(id: string): Promise<T>;
}
