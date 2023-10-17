import { PartialType } from '@nestjs/mapped-types';
import { CreateDashboardFeedDto } from './create-dashboard-feed.dto';

export class UpdateDashboardFeedDto extends PartialType(CreateDashboardFeedDto) {}
