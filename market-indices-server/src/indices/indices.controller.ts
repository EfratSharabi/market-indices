import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IndicesService } from './indices.service';
import { Indice } from './models/indice.model';

@Controller('api/indices')
@ApiTags('indices')
export class IndicesController {

    constructor(private indicesService: IndicesService) { }

    @Get('/all')
    getAll(): Promise<Array<Indice>> {
        return this.indicesService.getAll();
    }
}
