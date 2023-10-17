import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardFeedService } from './dashboard-feed.service';
import { NormalPost } from './models/normalPost.model';

@Controller('dashboard-feed')
export class DashboardFeedController {
  constructor(private readonly dashboardFeedService: DashboardFeedService) {}

  @Post()
  create(@Body() post:NormalPost){
    const data = this.dashboardFeedService.create(post)
    return data;
  }
}
