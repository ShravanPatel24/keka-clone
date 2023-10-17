import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PostDocument = Poll & Document;
@Schema()
export class Poll {
  @Prop()
  pollTitle: string;

  @Prop([String])
  options: string[];

  @Prop()
  like: number;

  @Prop([String])
  comments: string[];

  @Prop()
  notifyEmployees: boolean;

  @Prop()
  anonymousPoll: boolean;

  @Prop()
  pollEnded: Date;

  @Prop({ type: String, enum: ['Organisational', 'Software development'] })
  category: string;
  
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt: Date;
}

export const PollSchema = SchemaFactory.createForClass(Poll);
