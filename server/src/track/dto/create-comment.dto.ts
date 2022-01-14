import * as mongoose from 'mongoose';
export class CreateCommentDto {
  readonly username: string;
  readonly text: string;
  readonly trackId: mongoose.Schema.Types.ObjectId;
}
