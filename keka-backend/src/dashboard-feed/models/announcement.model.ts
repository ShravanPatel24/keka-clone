import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type PostDocument = Announcement & Document;
@Schema({ timestamps: true })
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
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
