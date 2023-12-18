import { Injectable, Inject } from '@nestjs/common';
import { FileReaderService } from '../shared/file-reader/file-reader.service';
import { IIndicesService } from './indices-service.interface';
import { Indice } from './models/indice.model';

@Injectable()
export class IndicesService implements IIndicesService {

    constructor(@Inject('INDICES_DATA_PATH') private filePath: string,
                private fileReader: FileReaderService) { }

    getAll(): Promise<Array<Indice>> {
        const promise = this.fileReader.readFileToJson(this.filePath, 'utf8');
        return promise.then(json => json.Indices);
    }
}
