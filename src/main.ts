import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./infrastructure/controller/app.module";
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(
    `${process.env.API_PREFIX.trim()}/${process.env.VERSION.trim()}`
  );
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle("Parko tool Microservice")
    .setDescription("Parko Clean Architecture")
    .setVersion("0.0.1")
    .setExternalDoc("Postman Collection", "../api-json")
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
