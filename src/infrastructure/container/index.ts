import { Container } from "inversify/lib/container/container";
import { GetProfile, LoginUsecase } from "src/application/usecase";
import {
  IProfileDataService,
  IProfileModelConvertor,
  IProfileRepository,
} from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { IAuthService } from "src/parko/authDataservice/domain/service/auth.service";
import { AuthService } from "src/parko/authDataservice/infrastructure/service/auth.service";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";
import { FirebaseRepo } from "src/parko/database/domain/repository/firebase.repo";
import { NAMED_TARGET } from "../common/namedTarget";
import { TYPES } from "../common/types";
import { ProfileDtoConvertor } from "../convertor/profileDto.convertor";
import { ProfileModelConvertor } from "../convertor/profileModel.convertor";
import { ProfileDataService } from "../dataservice";
import { ProfileRepository } from "../repositories/profile.repository";

export const container = new Container();

container
  .bind<FirebaseRepo>(TYPES.FirebaseRepo)
  .to(FirebaseRepo)
  .inSingletonScope();

container
  .bind<ICommandHandler>(TYPES.ICommandHandler)
  .to(GetProfile)
  .whenTargetNamed(NAMED_TARGET.getProfile);

container
  .bind<ICommandHandler>(TYPES.ICommandHandler)
  .to(LoginUsecase)
  .whenTargetNamed(NAMED_TARGET.signIn);

//Profile
container
  .bind<IProfileDataService>(TYPES.IProfileDataService)
  .to(ProfileDataService);

container
  .bind<IProfileRepository>(TYPES.IProfileRepository)
  .to(ProfileRepository);

container
  .bind<IProfileDtoConvertor>(TYPES.IProfileDtoConvertor)
  .to(ProfileDtoConvertor);

container
  .bind<IProfileModelConvertor>(TYPES.IProfileModelConvertor)
  .to(ProfileModelConvertor);

container.bind<IAuthService>(TYPES.IAuthService).to(AuthService);
