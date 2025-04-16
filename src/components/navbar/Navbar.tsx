import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4	bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmacia Local</Link>

                    <div className='flex gap-4'>
                        Lista de Categorias
                        Cadastrar Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar