import { Container } from 'inversify/lib/container/container';
import { GetProfile } from 'src/application/usecase';
import { ICommandHandler } from 'src/core/handler/commandHandler';
import { NAMED_TARGET } from '../common/namedTarget';
import { TYPES } from '../common/types';

export const container = new Container();

container
  .bind<ICommandHandler>(TYPES.ICommandHandler)
  .to(GetProfile)
  .whenTargetNamed(NAMED_TARGET.getProfile);
