export interface ICommandHandler {
    execute(user?: any, command?: any): void;
}
