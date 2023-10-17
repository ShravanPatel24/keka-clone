import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardFeedService } from './dashboard-feed.service';
import { NormalPost } from './models/normalPost.model';
import { Announcement } from './models/announcement.model';
import { Poll } from './models/pollPost.model';
import { Praise } from './models/praisePost.model';

@Controller('dashboard-feed')
export class DashboardFeedController {
  constructor(private readonly dashboardFeedService: DashboardFeedService) {}

  @Post("post")
  create(@Body() post:NormalPost){
    const data = this.dashboardFeedService.create(post)
    return data;
  }
  @Get("allpost")
  getPost(){
    return this.dashboardFeedService.getPostData();
  }
  @Post("announcement")
  createAnnouncement(@Body() AnnouncePost:Announcement){
    const data = this.dashboardFeedService.createAnnouncement(AnnouncePost)
    return data;
  }
  @Post("poll")
  createPoll(@Body() PollPost:Poll){
    const data = this.dashboardFeedService.createPoll(PollPost)
    return data;
  }
  @Post("praise")
  createPraise(@Body() PraisePost:Praise){
    const data = this.dashboardFeedService.createPraise(PraisePost)
    return data;
  }
}
