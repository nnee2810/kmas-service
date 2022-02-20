import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ScheduleModule } from "./modules/schedule/schedule.module"

@Module({
  imports: [ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
