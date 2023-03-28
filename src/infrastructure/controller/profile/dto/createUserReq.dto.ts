import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserReqDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly id: string;
}
