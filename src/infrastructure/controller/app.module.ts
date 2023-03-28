import { Module } from "@nestjs/common";
import { GetProfile } from "src/application/usecase";
import { LoggerModule } from "src/parko/logger/logger.module";
import { ProfileController } from "./profile";

@Module({
  imports: [],
  controllers: [ProfileController],
  providers: [],
})
export class AppModule {}
