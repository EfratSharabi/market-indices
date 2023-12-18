import { Indice } from './models/indice.model';

export interface IIndicesService {

    getAll(): Promise<Array<Indice>>;

}
