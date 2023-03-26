import { IResponse } from "../domain";

export interface ICommandHandler {
  execute(session?: any, args?: any): Promise<IResponse<any>>;
}
