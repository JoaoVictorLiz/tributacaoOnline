import React, { FormEvent, useEffect, useState } from 'react'
import { IProdutosPendentes } from '../interface/ProdutosPendentes';
import { toast } from "react-toastify";

type Props = {
    produto?: IProdutosPendentes | null;
    lote: boolean;
    produtoCheck: any[];
    closeModal: () => void;
}


const Form = ({produto, lote}: Props) => {
    

    const [id, setID] = useState<number>(0)
    const [descr, setDesc] = useState<string>('')
    const [ean, setEan] = useState<string>('')
    const [ncm, setNcm] = useState<string>('')
    const [ncmEx, setNcmEx] = useState<string>('')
    const [cest, setCest] = useState<string>('')
    const [cbnef, setCbnef] = useState<string>('')
    const [cst, setCst] = useState<string>('')
    const [aliqicms, setAliqIcms] = useState<string>('')
    const [fcpicms, setFcpIcms] = useState<string>('')
    const [redbaseicms, setRedBaseIcms] = useState<string>('')
    const [csosn, setCsosn] = useState<string>('')
    const [aliqicmsst, setAliqIcmsST] = useState<string>('')
    const [fcpicmsst, setFcpIcmsST] = useState<string>('')
    const [redbaseicmsst, setRedBaseIcmsST] = useState<string>('')
    const [mvainterna, setMvaInterna] = useState<string>('')
    const [mvaajustada, setMvaAjustada] = useState<string>('')
    const [cstentrada, setCstEntrada] = useState<string>('')
    const [cstsaida, setCstSaida] = useState<string>('')
    const [tipocredito,setTipoCredito] = useState<string>('')
    const [naturezareceita,setNaturezaReceita] = useState<string>('')
    const [aliqpiscumulativo, setAliqPisCumulativo] = useState<string>('')
    const [aliqcofinscumulativo, setAliqCofinsCumulativo] = useState<string>('')
    const [aliqpisnaocumulativo, setAliqPisNaoCumulativo] = useState<string>('')
    const [aliqcofinsnaocumulativo, setAliqCofinsNaoCumulativo] = useState<string>('')


    useEffect(() => {
        if(produto){
            setID(produto.id)
            setDesc(produto.descricao)
            setEan(produto.ean)
            setNcm(produto.ncm)
            setNcmEx(produto.ncmEx)
        }
    },[produto])
    
   

    


    const handleRegister = () => {

        if(ncm.length > 8 || ncm.length < 8) {
            toast.warn('O Ncm é necessário ter 8 caracteres para ser válido.', {
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

        if(ncmEx.length > 2) {
            toast.warn('Execeção NCM só é permitido no máximo 2 caracteres.', {
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

        if(cest.length > 7) {
            toast.warn('CEST só é permitido no máximo 7 caracteres.', {
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

        if(cbnef.length > 8) {
            toast.warn('CBNEF só é permitido no máximo 8 caracteres.', {
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

        if(cst == '') {
            toast.warn('CST não pode ser vazio.', {
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

        if(csosn == '') {
            toast.warn('CSOSN não pode ser vazio.', {
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

      
        toast.success('Produto Cadastrado com Sucesso!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

       
       
    }


    const handleRegisterLote =  () => {

        toast.success('Produto Cadastrado com Sucesso!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        
    }
   



    const handleEmptyInputs = () => {
        setDesc('');
        setEan('');
        setNcm('');
        setNcmEx('');
        setCest('');
        setCbnef('');
        setCst('');
        setAliqIcms('');
        setFcpIcms('');
        setRedBaseIcms('');
        setCsosn('');
        setAliqIcmsST('');
        setFcpIcmsST('');
        setRedBaseIcmsST('');
        setMvaInterna('');
        setMvaAjustada('');
        setCstEntrada('');
        setCstSaida('');
        setTipoCredito('');
        setNaturezaReceita('');
        setAliqPisCumulativo('');
        setAliqCofinsCumulativo('');
        setAliqPisNaoCumulativo('');
        setAliqCofinsNaoCumulativo('');
    }


    return (
        <>
            <div className="relative p-2 flex-auto">
                <form >
                    <div className="flex flex-wrap -mx-3  ">
                        {
                        lote ? 
                        <>
                            <div className="w-96 md:25 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="descricao">
                                    Descrição
                                </label>
                                <input value={'N/A'}  className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="descricao" type="text" disabled/>
                            </div>
                            <div className="w-25 md:25 px-3 ">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    EAN
                                </label>
                                <input value={'N/A'} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" disabled/>
                            </div>
                        </>
                        :
                        <>
                            <div className="w-96 md:25 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="descricao">
                                    Descrição
                                </label >
                                <input value={descr} onChange={(e) => setDesc(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="descricao" type="text" />
                            </div>
                            <div className="w-25 md:25 px-3 ">
                                <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    EAN
                                </label>
                                <input value={ean} onChange={(e) => setEan(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                            </div>
                        </>
                        }
                        <div className="w-32 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                NCM
                            </label>
                            <input value={ncm} onChange={(e) => setNcm(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-32 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Exceção NCM
                            </label>
                            <input value={ncmEx} onChange={(e) => setNcmEx(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-32 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Cest
                            </label>
                            <input value={cest} onChange={(e) => setCest(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-32 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                CBenef
                            </label>
                            <input value={cbnef} onChange={(e) => setCbnef(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                    </div>
                    <div className="flex text-2xl my-4 font-bold text-center text-black justify-center">
                        <h3>ICMS</h3>
                    </div>
                    <div className="flex flex-wrap -mx-3 my-4">
                        <div className="w-96 md:25 px-3">
                        <label htmlFor="cst" className="block uppercase tracking-wide text-black text-xs font-bold mb-2">CST</label>
                        <select id="cst" value={cst} onChange={(e) => setCst(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                            <option selected value=""></option>
                            <option value="00">00 - Tributada integralmente</option>
                            <option value="10">10 - Tributada c/ cobrança do ICMS por subst trib</option>
                            <option value="20">20 - Com redução de base de cálculo</option>
                            <option value="30">30 - Isenta ou não trib c/ cobrança do ICMS p/ subst.trib</option>
                            <option value="40">40 - Isenta</option>
                            <option value="41">41 - Não tributada</option>
                            <option value="50">50 - Suspensão</option>
                            <option value="51">51 - Diferimento</option>
                            <option value="60">60 - ICMS cobrado anteriormente por subst.trib</option>
                            <option value="70">70 - Com redução base de cálculo cobrança do ICMS p/ subst.trib.</option>
                            <option value="90">90 - Outros</option>  
                        </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Aliq ICMS
                            </label>
                            <select id="aliqicms" value={aliqicms} onChange={(e) => setAliqIcms(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="17">17%</option>
                                <option value="12">12%</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                FCP ICMS
                            </label>
                            <input value={fcpicms} onChange={(e) => setFcpIcms(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-44 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Red.Base ICMS
                            </label>
                            <select id="redbaseicms" value={redbaseicms} onChange={(e) => setRedBaseIcms(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0</option>
                                <option value="100">100</option>
                                <option value="58.33">58,33</option>
                                <option value="41.17">41,17</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                MVA Ajustada
                            </label>
                            <input value={mvaajustada} onChange={(e) => setMvaAjustada(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-96 md:25 px-3">
                        <label htmlFor="csosn" className="block uppercase tracking-wide text-black text-xs font-bold mb-2">CSOSN</label>
                        <select id="csosn" value={csosn} onChange={(e) => setCsosn(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                            <option selected value=""></option>
                            <option value="101">101 - Tributada Simples Nacional c/ perm. créd. (v.2.0)</option>
                            <option value="102">102 - Tributada Simples Nacional s/ perm. créd.</option>
                            <option value="103">103 - Isenção ICMS no Simples Nacional p/ faixa rec. bruta.</option>
                            <option value="201">201 - Tributada pelo Simples Nacional c/ perm. de crédito c/ cobrança ICMS ST</option>
                            <option value="202">202 - Tributada pelo Simples Nacional s/ perm. de crédito c/ cobrança ICMS ST</option>
                            <option value="203">203 - Isenção do ICMS Simples Nacional p/ receita bruta c/ cobrança ICMS ST</option>
                            <option value="300">300 - Imune</option>
                            <option value="400">400 - Não tributada pelo Simples Nacional (v.2.0)</option>
                            <option value="500">500 - ICMS cobrado anteriormente por ST (substituído) ou p/ antecipação</option>
                            <option value="900">900 - Outros</option>
                        </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Aliq ICMS-ST
                            </label>
                            <select id="aliqIcmsST" value={aliqicmsst} onChange={(e) => setAliqIcmsST(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0%</option>
                                <option value="20">20%</option>
                                <option value="25">25%</option>
                                <option value="17">17%</option>
                                <option value="27">27%</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                FCP ICMS-ST
                            </label>
                            <input value={fcpicmsst} onChange={(e) => setFcpIcmsST(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-44 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Red.Base ICMS-ST
                            </label>
                            <select id="redbaseicmsST" value={redbaseicmsst} onChange={(e) => setRedBaseIcmsST(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0</option>
                                <option value="100">100</option>
                                <option value="58.33">58,33</option>
                                <option value="41.17">41,17</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                MVA interna
                            </label>
                            <input value={mvainterna} onChange={(e) => setMvaInterna(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                       
                    </div>
                    <div className="flex text-2xl font-bold text-center text-black justify-center">
                        <h3>PIS/COFINS</h3>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 my-5 ">
                        <div className="w-80 md:25 px-3">
                        <label htmlFor="cstEntrada" className="block uppercase tracking-wide text-black text-xs font-bold mb-2">CST Entrada</label>
                        <select id="cstEntrada" value={cstentrada} onChange={(e) => setCstEntrada(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                            <option selected value=""></option>
                            <option value="50">50 - Oper. c/ Direito a Crédito - Vinc. Exclus. a Rec. Trib. Mercado Interno</option>
                            <option value="51">51 - Oper. c/ Direito a Crédito - Vinc. Exclus. a Rec. Não Trib. Mercado Interno</option>
                            <option value="52">52 - Oper. c/ Direito a Crédito - Vinc. Exclus. a Rec. de Expor.</option>
                            <option value="53">53 - Oper. c/ Direito a Crédito - Vinc. a Rec. Trib. Não-Trib. Mercado Interno</option>
                            <option value="54">54 - Oper. c/ Direito a Crédito - Vinc. a Rec. Trib. no Mercado Interno de Exp. </option>
                            <option value="55">55 - Oper. c/ Direito a Crédito - Vinc. a Rec. Não-Trib. no Mercado Interno de Exp.</option>
                            <option value="56">56 - Oper. c/ Direito a Crédito - Vinc. a Rec. Trib. Não-Trib. Mercado Interno, Exp.</option>
                            <option value="60">60 - Crédito Presumido Oper. de Aquis. Vinc. Exclus. Rec. Trib. Mercado Interno</option>
                            <option value="61">61 - Crédito Presumido Oper. de Aquis. Vinc. Exclus. Rec. Não Trib. Mercado Interno</option>
                            <option value="62">62 - Crédito Presumido Oper. de Aquis. Vinc. Exclus. Rec. de Expor.</option>
                            <option value="63">63 - Crédito Presumido Oper. de Aquis. Vinc. a Rec. Trib. Não-Trib. Mercado Interno</option>
                            <option value="64">64 - Crédito Presumido Oper. de Aquis. Vinc. a Rec. Trib. Mercado Interno Exp.</option>
                            <option value="65">65 - Crédito Presumido Oper. de Aquis. Vinc. a Rec. Não-Tribut. Mercado Interno Exp.</option>
                            <option value="66">66 - Crédito Presumido Oper. de Aquis. Vinc. a Rec. Tribut. Não-Trib. Mercado Interno Exp.</option>
                            <option value="67">67 - Crédito Presumido Outras Operações</option>
                            <option value="70">70 - Oper. de Aquisição s/ Direito a Crédito</option>
                            <option value="71">71 - Oper. de Aquisição c/ Isenção</option>
                            <option value="72">72 - Oper. de Aquisição c/ Suspensão</option>
                            <option value="73">73 - Oper. de Aquisição a Alíquota Zero</option>
                            <option value="74">74 - Oper. de Aquisição s/ Incidência da Contrib.</option>
                            <option value="75">75 - Oper. de Aquisição p/ ST</option>
                            <option value="98">98 - Outras Operações de Entrada</option>
                            <option value="99">99 - Outras Operações</option>
                        </select>
                        </div>
                        <div className="w-80 md:25 px-3">
                        <label htmlFor="cstSaida" className="block uppercase tracking-wide text-black text-xs font-bold mb-2">CST Saída</label>
                        <select id="cstSaida" value={cstsaida} onChange={(e) => setCstSaida(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight bg-gray-200 text-black focus:outline-none focus:bg-white">
                            <option selected value=""></option>
                            <option value="01">01 - Oper. Tribut. com Aliq. Básica (base de cálculo = valor da Oper. aliq. normal)</option>
                            <option value="02">02 - Oper. Tribut. com Alíq. Diferenciada (base de calc. = vlr da Oper. (aliq. difer.))</option>
                            <option value="03">03 - Oper. Tribut. com Alíq. por UN de Medida Prod. (base calc. = qtde x aliq. UN produto)</option>
                            <option value="04">04 - Oper. Tribut.(tributação monofásica (alíquota zero))</option>
                            <option value="05">05 - Oper. Tribut. por ST</option>
                            <option value="06">06 - Oper. Tribut. (alíquota zero)</option>
                            <option value="07">07 - Oper. Isenta da Contrib.</option>
                            <option value="08">08 - Oper. Sem Incidência da Contrib.</option>
                            <option value="09">09 - Oper. com Suspensão da Contrib.</option>
                            <option value="49">49 - Outras Operações de Saída</option>
                        </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Tipo Credito
                            </label>
                            <input value={tipocredito} onChange={(e) => setTipoCredito(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Natureza Receita
                            </label>
                            <input value={naturezareceita} onChange={(e) => setNaturezaReceita(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white" id="grid-last-name" type="text" />
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Aliq Pis Cumulativo
                            </label>
                            <select id="aliqpiscumulativo" value={aliqpiscumulativo} onChange={(e) => setAliqPisCumulativo(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0</option>
                                <option value="0.65">0,65</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Aliq Cofins Cumulativo
                            </label>
                            <select id="aliqcofinscumulativo" value={aliqcofinscumulativo} onChange={(e) => setAliqCofinsCumulativo(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0</option>
                                <option value="3.00">3,00</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Aliq Pis Não Cumulativo
                            </label>
                            <select id="aliqpisnaocumulativo" value={aliqpisnaocumulativo} onChange={(e) => setAliqPisNaoCumulativo(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0</option>
                                <option value="1.65">1,65</option>
                            </select>
                        </div>
                        <div className="w-25 md:25 px-3">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Aliq Cofins Não Cumulativo
                            </label>
                            <select id="aliqcofinsnaocumulativo" value={aliqcofinsnaocumulativo} onChange={(e) => setAliqCofinsNaoCumulativo(e.target.value)} className="block w-full text-sm rounded-md border-0 py-1.5 leading-tight  bg-gray-200 text-black focus:outline-none focus:bg-white">
                                <option selected value=""></option>
                                <option value="0">0</option>
                                <option value="7.6">7,6</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-end p-3 border-t border-solid border-green-600 rounded-b b">
               {
                lote ? 
                <>
                    <button
                    className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleRegisterLote}
                    >
                        Gravar LOTE
                    </button>
                </>
                :
                <>
                    <button
                    className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleRegister}
                    >
                    Gravar
                    </button>

                </>
               }
            </div>
        </>        
    )
}

export default Form