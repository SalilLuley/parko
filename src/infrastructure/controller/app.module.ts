import { Module } from "@nestjs/common";
import { ProfileController } from "./profile";

@Module({
  imports: [],
  controllers: [ProfileController],
  providers: [],
})
export class AppModule {}
