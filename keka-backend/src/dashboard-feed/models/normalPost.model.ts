import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type PostDocument = NormalPost & Document;
@Schema()
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
  
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(NormalPost);

