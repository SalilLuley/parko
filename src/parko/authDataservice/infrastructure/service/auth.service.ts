import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { inject, injectable } from "inversify";
import { IProfileRepository, ProfileM } from "src/domain";
import { TYPES } from "src/infrastructure/common";
import { IAuthService } from "../../domain/service/auth.service";

@injectable()
export class AuthService implements IAuthService {
  jwtService: JwtService;
  constructor(
    @inject(TYPES.IProfileRepository)
    private profileRepository: IProfileRepository
  ) {
    this.jwtService = new JwtService();
  }

  async signIn(username: string, password: string): Promise<ProfileM> {
    const user = await this.profileRepository.getProfileByUsername<ProfileM>(
      username
    );
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.userId };
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      accessToken,
    };
  }
}
