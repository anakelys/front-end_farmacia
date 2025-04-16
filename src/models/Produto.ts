import Categoria from "./Categoria";


export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    foto: string;
    fabricante: string;
    categoria: Categoria| null;
}