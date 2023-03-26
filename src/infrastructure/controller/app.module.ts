import { Module } from "@nestjs/common";
import { FirebaseRepo } from "src/parko/database/domain/repository/firebase.repo";
import { ProfileController } from "./profile";

@Module({
  imports: [],
  controllers: [ProfileController],
  providers: [FirebaseRepo],
})
export class AppModule {}
