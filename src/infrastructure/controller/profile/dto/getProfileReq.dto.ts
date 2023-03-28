import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetProfileReqDto {
  @ApiProperty({ required: false })
  @IsString()
  readonly id: string;
}
