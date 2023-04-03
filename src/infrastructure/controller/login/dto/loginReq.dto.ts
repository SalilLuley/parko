import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class LoginReqDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly username: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly password: string;
}
