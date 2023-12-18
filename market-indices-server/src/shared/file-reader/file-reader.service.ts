import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { IFileReader } from './file-reader.interface';

@Injectable()
export class FileReaderService implements IFileReader {

    async readFile(path: string, encoding?: BufferEncoding): Promise<string> {
        return fs.readFileSync(path, encoding);
    }

    async readFileToJson(filePath: string, encoding?: BufferEncoding): Promise<any> {
        const contents = await fs.readFileSync(filePath, encoding);
        return JSON.parse(contents);
    }
}
