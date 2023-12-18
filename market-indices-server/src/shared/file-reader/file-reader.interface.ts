export interface IFileReader {

    readFile(path: string, encoding?: BufferEncoding): Promise<string>;

    readFileToJson(filePath: string, encoding?: BufferEncoding): Promise<any>;

}
