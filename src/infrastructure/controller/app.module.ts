import { Module } from "@nestjs/common";
import { AppController } from "./profile/profile.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
