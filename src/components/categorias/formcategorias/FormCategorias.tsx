


import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categorias from "../../../models/Categorias";

function FormCategorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias);
        } catch (error: any) {
            console.error("Erro ao buscar a categoria por ID:", error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            if (id !== undefined) {
                await atualizar(`/editarcategoria/${id}`, categorias, setCategorias);
                alert('A Categoria foi atualizada com sucesso!');
            } else {
                await cadastrar(`/categorias`, categorias, setCategorias);
                alert('A Categoria foi cadastrada com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao salvar a Categoria:', error);
            alert('Erro ao salvar a Categoria.');
        }
    
        setIsLoading(false);
        retornar();
    }
    

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.nome}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.descricao}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-400   hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategorias;



