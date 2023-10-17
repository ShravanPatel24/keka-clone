import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type PostDocument = Announcement & Document;
@Schema()
export class Announcement {
  @Prop()
  title: string;

  @Prop()
  details: string;

  @Prop()
  like: number;

  @Prop([String])
  comments: string[];

  @Prop()
  notifyEmployees: boolean;

  @Prop()
  requireAcknowledgment: boolean;

  @Prop()
  hideAfter: boolean;

  @Prop({ type: String, enum: ['Organisational', 'Software development'] })
  category: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt: Date;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
