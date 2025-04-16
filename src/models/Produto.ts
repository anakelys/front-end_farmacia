import Categoria from "./Categorias";


export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    foto: string;
    fabricante: string;
    categoria: Categoria| null;
}