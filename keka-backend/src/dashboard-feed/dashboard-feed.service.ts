import { Injectable } from '@nestjs/common';
import { NormalPost, PostDocument } from './models/normalPost.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Announcement } from './models/announcement.model';
import { Poll } from './models/pollPost.model';
import { Praise } from './models/praisePost.model';

@Injectable()
export class DashboardFeedService {
  constructor(
    @InjectModel(NormalPost.name) private normalPostModel: Model<PostDocument>,
    @InjectModel(Announcement.name) private AnnouncementModel: Model<PostDocument>,
    @InjectModel(Poll.name) private PollModel: Model<PostDocument>,
    @InjectModel(Praise.name) private PraiseModel: Model<PostDocument>
    ) {}
  async create(post: NormalPost): Promise<NormalPost> {
    const createNormalPost = new this.normalPostModel(post);
    return createNormalPost.save();
  }
  async createAnnouncement(AnnouncePost:Announcement){
    const createNormalPost = new this.AnnouncementModel(AnnouncePost);
    return createNormalPost.save();
  }
  async createPoll(PollPost:Poll){
    const createNormalPost = new this.PollModel(PollPost);
    return createNormalPost.save();
  }
  async createPraise(PraisePost:Praise){
    const createNormalPost = new this.PraiseModel(PraisePost);
    return createNormalPost.save();
  }
  async getPostData(){
    const postdata=await this.normalPostModel.find();
    const announcedata = await this.AnnouncementModel.find();
    const polldata = await this.PollModel.find();
    const praisedata = await this.PraiseModel.find();
    const alldata =[...postdata,...announcedata,...polldata,...praisedata] 
    alldata.sort((a, b) => {
      const timestampA = a.updatedAt || a.createdAt;
      const timestampB = b.updatedAt || b.createdAt;
      return timestampB.getTime() - timestampA.getTime();
    });
    return alldata;
  }
}
