import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateUserResDto {
  @ApiProperty({ required: false })
  @IsOptional()
  readonly name: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsOptional()
  readonly employeeCode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  readonly id: number;
}
