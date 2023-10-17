import { Module } from '@nestjs/common';
import { DashboardFeedService } from './dashboard-feed.service';
import { DashboardFeedController } from './dashboard-feed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NormalPost, PostSchema } from './models/normalPost.model';

@Module({
  imports:[MongooseModule.forFeature([{ name: NormalPost.name, schema: PostSchema }])],
  controllers: [DashboardFeedController],
  providers: [DashboardFeedService],
})
export class DashboardFeedModule {}
