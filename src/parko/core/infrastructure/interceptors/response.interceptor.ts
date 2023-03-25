import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { ResponseStatusTextEnum } from "../common";

class Status {
  code: number;
  text: ResponseStatusTextEnum;
}

export declare class ResponseFormat<T> {
  statusCode: Status;
  message: string;
  data?: T;
  errorData?: T;
}

export declare class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseFormat<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<ResponseFormat<T>>;
}
