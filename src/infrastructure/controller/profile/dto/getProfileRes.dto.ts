import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetProfileResDto {
  @ApiProperty({ required: false })
  @IsOptional()
  readonly userId?: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly lastName?: string;
}
