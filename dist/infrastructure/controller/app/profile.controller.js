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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("../../common");
const container_1 = require("../../container");
const createUser_dto_1 = require("./dto/createUser.dto");
let AppController = class AppController {
    constructor() {
        this.container = container_1.container;
    }
    async create(createUserDto) {
        const commandHandler = this.container.getNamed(common_2.TYPES.ICommandHandler, common_2.NAMED_TARGET.getProfile);
        return commandHandler.execute(createUserDto);
    }
};
__decorate([
    (0, common_1.Post)("insert"),
    (0, swagger_1.ApiOkResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
AppController = __decorate([
    (0, common_1.Controller)(""),
    (0, swagger_1.ApiExtraModels)(createUser_dto_1.CreateUserDto),
    __metadata("design:paramtypes", [])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=profile.controller.js.map