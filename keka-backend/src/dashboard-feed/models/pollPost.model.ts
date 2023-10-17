import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
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
}

export const PollSchema = SchemaFactory.createForClass(Poll);
