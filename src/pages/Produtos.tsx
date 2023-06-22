import { useState, useEffect, useCallback, useRef } from "react";
import NavBar from "../components/NavBar"
import { FaEdit,FaArrowRight,FaArrowLeft, FaPlus,FaTrash,FaSearch, FaDownload} from "react-icons/fa"
import { toast } from "react-toastify";
import { IProdutosPendentes } from '../interface/ProdutosPendentes';
import ModalEscolhaCert from "../components/ModalEscolhaCert";
import { useReactToPrint } from "react-to-print";
import { IProdutosGerais } from "../interface/ProdutosGerais";
import Modal from "../components/Modal";
import Form from "../components/FormPendentes";




const Produtos = () => {

  const JSON = [
    {
      'id': 1,
      'descricao': 'PRODUTO TESTE 1',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 2,
      'descricao': 'PRODUTO TESTE 2',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 3,
      'descricao': 'PRODUTO TESTE 3',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 4,
      'descricao': 'PRODUTO TESTE 4',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 5,
      'descricao': 'PRODUTO TESTE 5',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 6,
      'descricao': 'PRODUTO TESTE 6',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 7,
      'descricao': 'PRODUTO TESTE 7',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 8,
      'descricao': 'PRODUTO TESTE 8',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 9,
      'descricao': 'PRODUTO TESTE 9',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 10,
      'descricao': 'PRODUTO TESTE 10',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 11,
      'descricao': 'PRODUTO TESTE 11',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 12,
      'descricao': 'PRODUTO TESTE 12',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 13,
      'descricao': 'PRODUTO TESTE 13',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 14,
      'descricao': 'PRODUTO TESTE 14',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    {
      'id': 15,
      'descricao': 'PRODUTO TESTE 15',
      'ean' : '7898489770834',
      'ncm' : '20031000',
      'ncmEx' : '0',
      'registro' : '02/06/2023'
    },
    
  ]

  const componentRef = useRef(null);
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Produtos'
  })


  const handlePrints = useCallback(
    () => handlePrint(),
    []
  );

 

  const [produtos, setProdutos] = useState<IProdutosGerais[]>([])
  
  const [abrirModalEscolha, setAbrirModalEscolha] = useState<boolean>(false)
  
    const [documento, setDocumento] = useState<string>('');
    const [razao, setRazao] = useState<string>('');
    const [dataini, setDataIni] = useState<string>('');
    const [datafim, setDataFim] = useState<string>('');
    const [title, setTitle] = useState<string>('Cadastrar/Editar Produto');
    const [produtosCadastrar, setProdutosCadastrar] = useState<IProdutosPendentes | null>(null)
    const [abrirModal, setAbrirModal] = useState<boolean>(false)
    const [checked, setChecked] = useState<any>([]);
    const [lote, setLote] = useState<boolean>(false)

    const handleOpenModal = useCallback(
      () => setAbrirModal(true),
      []
    );
  
    const handleData = async () => {

      let url = ''

                    
      if (dataini != ''){
        url = url + `&datainicial=${dataini.split('-').reverse().join('/')}` 
      } 

      if (datafim != ''){
        url = url + `&datafinal=${datafim.split('-').reverse().join('/')}` 
      }
    
      if (documento != ''){
        url = url + `&documento=${documento}` 
      } 
      
      if (razao != ''){
        url = `&razaosocial=${razao}` 
      } 


      toast.success('Produtos Carregados Com Sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setProdutos(JSON)


    

    }
    const handleRegister = (produtos: IProdutosPendentes) :void => {
      setProdutosCadastrar(produtos)

      setAbrirModal(true)
    }


    const handleSide = useCallback(
      () => setAbrirModal((abrirModal) => !abrirModal),
      []
    );





    const handleSideEscolha = useCallback(
      () => setAbrirModalEscolha((abrirModalEscolha) => !abrirModalEscolha),
      []
    );
  
    

 
  return (
    <div className="flex flex-col">
      <NavBar/>
      <ModalEscolhaCert openModal={abrirModalEscolha} openModalCad={handleOpenModal} closeModalExclusao={handleSideEscolha} certificados={produtos} print={handlePrints}/>
      <Modal  openModal={abrirModal} closeModal={handleSide}  title={title} children={<Form produto={produtosCadastrar} lote={lote} produtoCheck={checked} closeModal={handleSide}/>}/>
      <div className="overflow-x-auto ">
        <div className="flex justify-between py-3 pl-2 ">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="w-48 md:25 mb-6 md:mb-0 px-4">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="descricao">
                  Documento
              </label>
              <input value={documento} onChange={(e) => setDocumento(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="descricao" type="text" />
            </div>
            <div className="w-48 md:25 mb-6 md:mb-0  px-4">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " htmlFor="ean">
                  Razão Social
              </label>
              <input value={razao} onChange={(e) => setRazao(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight bg-gray-200 text-black focus:outline-none focus:bg-white" id="ean" type="text" />
            </div>
            <div className="w-48 md:25 mb-6 md:mb-0  px-4">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " htmlFor="ncm">
                  Data Inicial
              </label>
              <input value={dataini} onChange={(e) => setDataIni(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight bg-gray-200 text-black focus:outline-none focus:bg-white" id="ncm" type="date" />
            </div>
            <div className="w-48 md:25 mb-6 md:mb-0  px-4">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " htmlFor="data">
                  Data Final
              </label>
              <input value={datafim} onChange={(e) => setDataFim(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight bg-gray-200 text-black focus:outline-none focus:bg-white" id="data" type="date" />
            </div>
            <div className="relative top-4">
              <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm py-1 focus:z-10 focus:outline-none focus:ring-1 " onClick={() => handleData()}>
                <span className="relative inline-flex items-center px-3 py-3  text-sm font-medium text-gray-600 bg-white border hover:bg-gray-300 border-gray-300 rounded-md sm:py-2">
                <div>
                <FaSearch size={20} />
                </div>
                
                </span>
              </button>
             </div>
          </div>
          <div className="flex items-center space-x-2">
          <div className="relative top-3">
            <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:ring-1 " onClick={() => setAbrirModalEscolha(true)}>
              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border hover:bg-gray-300 border-gray-300 rounded-md sm:py-2">
              <div>
               <FaPlus />
              </div>
              <div className="hidden sm:block" >
                   Opções
              </div>
              </span>
            </button>
          </div>
        </div>
        </div>

        {/* TABELA DE IMPRESSAO INICIO */}

        <div className="hidden ">

          <div ref={componentRef} className="w-full ">
            <h1 className="text-xl font-bold text-center text-black-500 uppercase bg-gray-50 mb-10">Lista de Produtos</h1>

  
            <table className="min-w-full divide-y divide-gray-200" >
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                        DESCRICAO
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                        EAN
                      </th>
                      <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                        NCM
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-gray-200 " >
                      {produtos.length > 0 ? (
                        produtos.map((produtos) => (
                            <tr key={produtos.id}>
                                <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                                  {produtos.descricao}
                                </td>
                                <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                                  {produtos.ean}
                                </td>
                                <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                                  {produtos.ncm}
                                </td>
                            </tr>
                        ))
                      
                      ) : null }
                  
                  </tbody>
                  
                </table>
            </div>

        </div>
        {/* FIM TABELA DE IMPRESSAO FIM */}

        <div className="p-1.5 w-full inline-block align-middle relative">
          <div className="overflow-hidden border rounded-lg">            
            <table className="min-w-full divide-y divide-gray-200" >
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase  ">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    DESCRIÇÃO
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    EAN
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    NCM
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-center text-black-500 uppercase ">
                    AÇÃO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-200 " >
                  {produtos.length > 0 ? (
                    produtos.map((produtos) => (
                        <tr key={produtos.id}>
                          <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                              {produtos.id}
                            </td>
                            <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                              {produtos.descricao}
                            </td>
                            <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                              {produtos.ean}
                            </td>
                            <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300 ">
                              {produtos.ncm}
                            </td>
                            <td className="px-6 py-3 text-sm font-medium text-center whitespace-nowrap border-b-2 border-gray-300 " >
                                <button className="text-green-600 hover:text-green-700 " onClick={() => handleRegister(produtos)}>
                                  <FaEdit size={25} />
                                </button>                           
                            </td>
                        </tr>
                    ))
                  
                  ) : null }
               
              </tbody>
              
            </table>
            
          </div>
         
          
        </div>
      </div>
    </div>
  )
}

export default Produtos;