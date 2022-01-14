import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
  ) {}
  async create() {}
  async getAll() {}
  async getOne() {}
  async delete() {}
}
