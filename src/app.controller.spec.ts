import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./infrastructure/controller/profile/profile.controller";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.create()).toBe("Hello World!");
    });
  });
});
