import { Injectable } from '@nestjs/common';
import { NormalPost, PostDocument } from './models/normalPost.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DashboardFeedService {
  constructor(@InjectModel(NormalPost.name) private normalPostModel: Model<PostDocument>) {}
  async create(post: NormalPost): Promise<NormalPost> {
    const createNormalPost = new this.normalPostModel(post);
    return createNormalPost.save();
  }
}
