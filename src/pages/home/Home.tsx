
import ListaCategorias from "../../components/categorias/listarcategorias/ListarCategorias"

    function Home() {
        return (
            <>
                <div className="bg-indigo-900 flex justify-center">
                    <div className='container grid grid-cols-2 text-white'>
                        <div className="flex flex-col gap-4 items-center justify-center py-4">
                            <h2 className='text-5xl font-bold'>
                                Farmacia Local
                            </h2>
                            <p className='text-xl'>
                                Compre online e receba em casa 24h!
                            </p>
                        
                            <div className="flex justify-around gap-4">
                                <div className="flex justify-around gap-4">

                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center ">
                            <img
                                src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586"
                                alt="Imagem Página Home"
                                className='w-2/3'
                            />
                        </div>
                    </div>
                </div>
    
                <ListaCategorias />
            </>
        )
    }
    
    export default Home
