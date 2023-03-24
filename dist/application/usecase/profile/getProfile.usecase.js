"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfile = void 0;
const common_1 = require("@nestjs/common");
const inversify_1 = require("inversify");
const messages_1 = require("../../../infrastructure/common/messages");
const dto_1 = require("../../../infrastructure/controller/app/dto");
let GetProfile = class GetProfile {
    constructor() {
        this.validationPipe = new common_1.ValidationPipe();
    }
    async execute(createUserDto) {
        await this.validationPipe.transform(createUserDto, {
            type: "custom",
            metatype: dto_1.CreateUserDto,
        });
        try {
            return {
                data: null,
                message: messages_1.MESSAGES.PROFILE.GET,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
GetProfile = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], GetProfile);
exports.GetProfile = GetProfile;
//# sourceMappingURL=getProfile.usecase.js.map