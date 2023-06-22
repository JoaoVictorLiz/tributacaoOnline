import { useState, useEffect, useCallback } from "react";
import NavBar from "../components/NavBar"
import { FaEdit,FaArrowRight,FaArrowLeft, FaPlus} from "react-icons/fa"
import { toast } from "react-toastify";
import Moment from 'moment';
import { IProdutosPendentes } from '../interface/ProdutosPendentes';
import ReactPaginate from 'react-paginate';
import Modal from "../components/Modal";
import Form from "../components/FormPendentes";

// import "bootstrap/dist/css/bootstrap.min.css";



const ProdutosPendentes = () => {

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



    const [produtos, setProdutos] = useState<IProdutosPendentes[]>(JSON)
    const [pageMax, setPageMax] = useState<number>(1)
    const [page, setPage] = useState<number>(1)
    const [produtosCadastrar, setProdutosCadastrar] = useState<IProdutosPendentes | null>(null)
    const [abrirModal, setAbrirModal] = useState<boolean>(false)
    const [totalProd, setTotalProd] = useState<number>(0)
    const [checked, setChecked] = useState<any>([]);
    const [lote, setLote] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('');




    const handlePageClick = (data: any) => {
      setPage(data.selected + 1) 
    }   

    const handleRegister = (produtos: IProdutosPendentes, lote: boolean) :void => {
      setTitle('Cadastrar Produto')
      setProdutosCadastrar(produtos)
      setLote(lote)
      setAbrirModal(true)
    }

    const handleSide = useCallback(
      () => setAbrirModal((abrirModal) => !abrirModal),
      []
    );

 
    const handleCheckAllChange = (e: any ) => {
    
      if (e.target.checked) {
        
        const allProducts = produtos.map((c) => c);
   
        setChecked(allProducts);
      } else {
        setChecked([]);
      }
    };

    const handleCheckBoxChange = (e: any, c: any) => {
      
      if (e.target.checked) {
        setChecked([...checked, c]);
      } else {
        setChecked(checked.filter((item: any) => item !== c));
      }
    };


    const handleRegisterLote = (produtos: IProdutosPendentes) => {
      if(checked.length == 0) {
        toast.warn('Selecione um produto !!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        return false;
      }
     
      setTitle('Cadastrar Produto em Lote')
      setProdutosCadastrar(produtos)
      setLote(true)
      setAbrirModal(true)
    }

   
    console.log(produtos)
    
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Modal  openModal={abrirModal} closeModal={handleSide} title={title} children={<Form produto={produtosCadastrar} lote={lote} produtoCheck={checked} closeModal={handleSide}/>}/>
      <div className="overflow-x-auto ">
        <div className="flex justify-between py-3 pl-2 ">
          <div className="relative max-w-xs">
            <p className="text-white font-medium">Total de Registros: {JSON.length}</p>
          </div>
          <div className="flex items-center space-x-2">
          <div className="relative">
            <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 " onClick={() => handleRegisterLote(checked)}>
              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
              <div>
               <FaPlus />
              </div>
              <div className="hidden sm:block" >
                  Altera Lote
              </div>
              </span>
            </button>
          </div>
        </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle relative">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input type='checkbox' id="checkbox-all"  className="text-green-600 border-green-800 rounded focus:ring-green-700" checked={checked.length === produtos.length} onChange={handleCheckAllChange}/>
                      <label htmlFor="checkbox" className="sr-only">Checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase  ">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    Descrição
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    EAN
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    NCM
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercase ">
                    NCM EX
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-black-500 uppercases ">
                    REGISTRO
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-black-500 uppercase ">
                    Ação
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-200 " >
                  {produtos.length > 0 ? (
                    produtos.map((produtos) => (
                        <tr key={produtos.id}>
                          <td className="px-3 pl-4 border-b-2 border-gray-300" >
                            <div className="flex items-center h-5">
                              <input type="checkbox" className="text-green-600 border-green-800 rounded focus:ring-green-700" value={produtos.id} checked={checked.includes(produtos)} onChange={(e) => handleCheckBoxChange(e, produtos)}/>
                              <label htmlFor="checkbox" className="sr-only">Checkbox</label>
                            </div>
                          </td>
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
                            <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300  ">
                              {produtos.ncmEx}
                            </td>
                            <td className="px-6 py-3 text-sm font-medium text-gray-800 whitespace-nowrap border-b-2 border-gray-300  ">
                              {Moment(produtos.registro).format('DD/MM/YYYY')}
                            </td>
                            <td className="px-6 py-3 text-sm font-medium text-right whitespace-nowrap border-b-2 border-gray-300">
                              <button className="text-green-600 hover:text-green-700" onClick={() => handleRegister(produtos, false)}>
                                <FaEdit size={25} />
                              </button>
                            </td>
                        </tr>
                    ))
                  
                  ) : null }
               
              </tbody>
              
            </table>
            
          </div>
          <div className="py-3 justify-center flex">
          <ReactPaginate
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                breakLabel={'...'}
                pageCount={pageMax}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                nextClassName={"item next "}
                nextLabel={<FaArrowRight  style={{ fontSize: 18, width: 50, color: 'white' }}/>}
                pageClassName={'item pagination-page '}
                previousClassName={"item previous"}
                previousLabel={<FaArrowLeft  style={{ fontSize: 18, width: 50, color: 'white'}}/>}
                onPageChange={handlePageClick}
              />        
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProdutosPendentes