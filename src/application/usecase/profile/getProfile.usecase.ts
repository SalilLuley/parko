import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { inject, injectable } from "inversify";
import { ProfileM } from "src/domain";
import { IProfileDtoConvertor } from "src/domain/convertors/profile.convertor";
import { IProfileDataService } from "src/domain/dataservice/profile.dataservice";
import { GetProfileReqDto, GetProfileResDto } from "src/infrastructure";
import { TYPES } from "src/infrastructure/common";
import { MESSAGES } from "src/infrastructure/common/messages";
import { IResponse } from "src/parko/core/domain";
import { ICommandHandler } from "src/parko/core/handler/commandHandler";
import { LoggerService } from "src/parko/logger/logger.service";

@injectable()
export class GetProfile implements ICommandHandler {
  constructor(
    @inject(TYPES.IProfileDataService)
    private profileDataService: IProfileDataService,
    @inject(TYPES.IProfileDtoConvertor)
    private profileDtoConvertor: IProfileDtoConvertor
  ) {}

  async execute(
    getProfileReqDto: GetProfileReqDto
  ): Promise<IResponse<GetProfileResDto>> {
    const { id } = getProfileReqDto;
    const profileM: ProfileM = await this.profileDataService.getProfile(id);
    const data: GetProfileResDto =
      await this.profileDtoConvertor.toGetProfileResDto(profileM);
    try {
      return {
        data,
        message: MESSAGES.PROFILE.GET.SUCCESS,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
