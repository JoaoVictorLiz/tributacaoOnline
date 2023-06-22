
type Props = {
    openModal: boolean;
    closeModalExclusao: () => void;
    certificados: any;
    print: () => void;
    openModalCad: () => void;
  }
  
  
  const ModalEscolhaCert = ({openModal, closeModalExclusao, certificados, print, openModalCad}: Props) => {
    console.log(print)




    return (
      <>
        {openModal ? (
          <>
           <div  className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-1 ">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => closeModalExclusao()}>
                        <span className="sr-only">Close modal</span>
                        <h1 className="text-red-600 text-lg">X</h1>
                    </button>
                    <div className="p-6 text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">O que você deseja fazer?</h3>
                        <button onClick={() => openModalCad()}  type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Adicionar Novo Produto
                        </button>
                        <button onClick={() => print()}   type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg border border-green-200 text-sm font-medium px-5 py-2.5 focus:z-10">Imprimir Certificados</button>
                    </div>

                  
                </div>
            </div>
        </div>
          </>
        ) : null}
      </>
    );
  };
  
  export default ModalEscolhaCert;