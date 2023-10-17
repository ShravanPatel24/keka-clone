import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PostDocument = Praise & Document;
@Schema()
export class Praise {
  @Prop()
  praiseUsername: string;

  @Prop()
  praiseText: string;

  @Prop()
  tagBadge: string;

  @Prop({ type: String, enum: ['Organisational', 'Software development'] })
  category: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt: Date;
}

export const PraiseSchema = SchemaFactory.createForClass(Praise);
