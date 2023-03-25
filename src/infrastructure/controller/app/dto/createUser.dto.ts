import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsOptional()
  readonly password: string;
}
