import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { cadastrarProduto } from '../../services/Service' // sua função de POST
import { RotatingLines } from 'react-loader-spinner' // opcional, pra loading bonito

function Cadastro() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produto, setProduto] = useState({
        id: 0,
        nome: '',
        descricao: ''
    })

    // Atualizando o estado de produto
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        })
    }

    // Função para cadastro do produto
    async function cadastrarNovoProduto(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (produto.nome.trim() === '' || produto.descricao.trim() === '') {
            alert('Preencha todos os campos!')
            return
        }

        setIsLoading(true)

        try {
            // Chama a função de cadastrar produto (que faz a requisição)
            await cadastrarProduto('/produtos', produto, () => {})
            alert('Produto cadastrado com sucesso!')
            navigate('/produtos') // Redireciona após o cadastro
        } catch (error) {
            alert('Erro ao cadastrar o produto!')
            console.error(error)
        }

        setIsLoading(false)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={cadastrarNovoProduto}
                className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col gap-4"
            >
                <h2 className="text-slate-900 text-3xl text-center font-bold mb-4">Cadastrar Produto</h2>

                <div className="flex flex-col">
                    <label htmlFor="nome" className="mb-1 font-semibold">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome do Produto"
                        className="border border-slate-400 rounded p-2"
                        value={produto.nome}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="descricao" className="mb-1 font-semibold">Descrição</label>
                    <input
                        type="text"
                        id="descricao"
                        name="descricao"
                        placeholder="Descrição"
                        className="border border-slate-400 rounded p-2"
                        value={produto.descricao}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex justify-between gap-4 mt-4">
                    <button
                        type="reset"
                        onClick={() => navigate('/')}
                        className="w-1/2 py-2 rounded text-white bg-red-400 hover:bg-red-600 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className="w-1/2 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-700 transition flex justify-center items-center"
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            "Cadastrar"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Cadastro
