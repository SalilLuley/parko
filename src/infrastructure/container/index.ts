import { Container } from "inversify/lib/container/container";
import { CreateProfile } from "src/application/usecase";
import { IProfileDataService, IProfileRepository } from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";
import { NAMED_TARGET } from "../common/namedTarget";
import { TYPES } from "../common/types";
import { ProfileDtoConvertor } from "../convertor/profileDto.convertor";
import { ProfileDataService } from "../dataservice";
import { ProfileRepository } from "../repositories/profile.repository";

export const container = new Container();

container
  .bind<ICommandHandler>(TYPES.ICommandHandler)
  .to(CreateProfile)
  .whenTargetNamed(NAMED_TARGET.getProfile);

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
