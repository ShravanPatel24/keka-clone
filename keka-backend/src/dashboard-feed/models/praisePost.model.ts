import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PostDocument = Praise & Document;
@Schema({ timestamps: true })
export class Praise {
  @Prop()
  praiseUsername: string;

  @Prop()
  praiseText: string;

  @Prop()
  tagBadge: string;

  @Prop({ type: String, enum: ['Organisational', 'Software development'] })
  category: string;
}

export const PraiseSchema = SchemaFactory.createForClass(Praise);
