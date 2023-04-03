import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { AppModule } from "./infrastructure";
import {
  ResponseFormat,
  ResponseInterceptor,
} from "./parko/core/infrastructure";
import "reflect-metadata";
import { AllExceptionFilter } from "./parko/application/filter/exception.filter";
import { LoggingInterceptor } from "./parko/logger/interceptors/logger.interceptor";
import { LoggerService } from "./parko/logger/logger.service";

async function bootstrap() {
  const env = process.env.NODE_ENV;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`${process.env.API_PREFIX}/${process.env.VERSION}`);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.use(helmet());

  if (env !== "production") {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle("Parko tool Microservice")
      .setDescription("Parko Clean Architecture")
      .setVersion("1.0")
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      extraModels: [ResponseFormat],
      deepScanRoutes: true,
    });
    SwaggerModule.setup("parko/v1/api", app, document);
  }

  await app.listen(3000);
}
bootstrap();
