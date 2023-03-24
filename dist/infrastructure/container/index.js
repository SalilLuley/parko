"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const container_1 = require("inversify/lib/container/container");
const usecase_1 = require("../../application/usecase");
const namedTarget_1 = require("../common/namedTarget");
const types_1 = require("../common/types");
exports.container = new container_1.Container();
exports.container
    .bind(types_1.TYPES.ICommandHandler)
    .to(usecase_1.GetProfile)
    .whenTargetNamed(namedTarget_1.NAMED_TARGET.getProfile);
//# sourceMappingURL=index.js.map