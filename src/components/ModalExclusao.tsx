import apiProdutos from "../services/apiProdutos";
import { toast } from 'react-toastify'

type Props = {
    openModal: boolean;
    closeModalExclusao: () => void;
    titleExclusao: string;
    idProduto: number;
  }
  
  
  const ModalExclusao = ({openModal, closeModalExclusao, titleExclusao,idProduto}: Props) => {
    
    const value = localStorage.getItem('TOKEN');
    const deleteProduto = async () => {
        await toast.promise(
            apiProdutos.get(`/produtos/${idProduto}`,{
              headers:{
                  'Authorization' : 'Bearer ' + value
              }
            }),
            {
              pending: 'Carregando produtos...',
              success: {
                render({data}: any){
                  console.log(data)
                 
                  return 'Produto deletado com sucesso'
              }
              } ,
              error: {
                render({data}: any){

                  
                  return 'Erro: ' + data
                  
                }
              }
            }
          )
    }
 
    return (
      <>
        {openModal ? (
          <>
           <div  className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-1 ">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => closeModalExclusao()}>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Você tem certeza que deseja deletar este produto? {titleExclusao}</h3>
                        <button  onClick={() => deleteProduto()}  type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Sim, tenho certeza
                        </button>
                        <button onClick={() => closeModalExclusao()} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
                    </div>
                </div>
            </div>
        </div>
          </>
        ) : null}
      </>
    );
  };
  
  export default ModalExclusao;