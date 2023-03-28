import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserResDto {
  @ApiProperty({ required: false })
  @IsOptional()
  readonly userId: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly lastName?: string;
}
