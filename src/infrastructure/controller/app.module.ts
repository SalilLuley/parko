import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { LoginController } from "./login";
import { ProfileController } from "./profile";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [ProfileController, LoginController],
  providers: [],
})
export class AppModule {}
