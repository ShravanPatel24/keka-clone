import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type PostDocument = NormalPost & Document;
@Schema({ timestamps: true })
export class NormalPost {
  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  like: number;

  @Prop([String])
  comments: string[];

  @Prop({ type: String, enum: ['Organisational', 'Software development'] })
  category: string;
}

export const PostSchema = SchemaFactory.createForClass(NormalPost);

