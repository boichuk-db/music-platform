import { Controller, Get } from '@nestjs/common';

@Controller('/albums')
export class AlbumController {
  create() {}
  @Get()
  getAll() {
    return 'album page';
  }
  getOne() {}
  delete() {}
}
