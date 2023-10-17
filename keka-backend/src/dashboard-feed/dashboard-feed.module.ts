import { Module } from '@nestjs/common';
import { DashboardFeedService } from './dashboard-feed.service';
import { DashboardFeedController } from './dashboard-feed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NormalPost, PostSchema } from './models/normalPost.model';
import { Announcement, AnnouncementSchema } from './models/announcement.model';
import { Poll, PollSchema } from './models/pollPost.model';
import { Praise, PraiseSchema } from './models/praisePost.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NormalPost.name, schema: PostSchema },
      { name: Announcement.name, schema: AnnouncementSchema },
      { name: Poll.name, schema: PollSchema },
      { name: Praise.name, schema: PraiseSchema },
    ]),
  ],
  controllers: [DashboardFeedController],
  providers: [DashboardFeedService],
})
export class DashboardFeedModule {}
