"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./infrastructure/controller/app.module");
require("reflect-metadata");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(`${process.env.API_PREFIX.trim()}/${process.env.VERSION.trim()}`);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle("Parko tool Microservice")
        .setDescription("Parko Clean Architecture")
        .setVersion("0.0.1")
        .setExternalDoc("Postman Collection", "../api-json")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map