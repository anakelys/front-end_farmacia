import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import Categorias from '../../../models/Categorias';
import { buscar, deletar } from '../../../services/Service';

function DeletarCategorias() {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias);
        } catch (error) {
            console.error("Erro ao buscar categoria por ID:", error);
        }
    }

    async function deletarCategorias() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`);
            alert('Categoria apagada com sucesso');
            retornar();
        } catch (error: any) {
            alert('Erro ao deletar a Categoria.');
            console.error("Erro ao deletar:", error);
        }

        setIsLoading(false);
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                            hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarCategorias}>
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategorias;
