import { InternalServerErrorException, ValidationPipe } from "@nestjs/common";
import { injectable } from "inversify";
import { MESSAGES } from "src/infrastructure/common/messages";
import { CreateUserDto } from "src/infrastructure/controller/app/dto";

@injectable()
export class GetProfile {
  protected validationPipe: ValidationPipe;

  constructor() {
    this.validationPipe = new ValidationPipe();
  }

  async execute(createUserDto: CreateUserDto): Promise<any> {
    await this.validationPipe.transform(createUserDto, {
      type: "custom",
      metatype: CreateUserDto,
    });

    try {
      return {
        data: null,
        message: MESSAGES.PROFILE.GET,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
