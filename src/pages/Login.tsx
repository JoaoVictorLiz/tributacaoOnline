import React, { FormEvent, useState } from "react";
import videoBg from '../assets/bgvideo.mp4'
import { FaEye, FaEyeSlash, FaLock, FaUserAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const [eye,seteye] = useState(true);
  const [passwordEye,setpasswordEye] = useState("password");

  const [user, setUser] = useState<string>('admin')
  const [password, setPassword] = useState<string>('admin')


  const Eye=()=>{
    if(passwordEye == "password"){
      setpasswordEye("text");
      seteye(false);
    }else{
      setpasswordEye("password");
      seteye(true);
    }
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if(user == 'admin' && password == 'admin'){
        toast.success('Logado com sucesso', {
         position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });


          navigate('/produtospendentes')

          setUser('')
          setPassword('')
      } else {
        toast.error('Usuário e/ou Senha incorretos!!', {
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

    
     
    } catch ($e) {
      console.log($e)
    }
    
  }

  return (
    <div className='relative flex items-center justify-center h-screen overflow-hidden'>
      <video src={videoBg} autoPlay loop muted className="object-cover w-full h-full"/>
      <div className="absolute w-full p-6 m-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 lg:max-w-xl"> 
        <h1 className="text-3xl font-bold text-center text-white">
          Tributação <span className="text-green-700">Online</span>
        </h1>
        <h4 className="text-center text-white">Faça o login para continuar</h4>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-2 relative">
            <label htmlFor="text" className="block  font-semibold text-white text-lg">
              Usuário
            </label>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Entre com seu usuário" className="block w-full px-10 mt-2  bg-white border rounded-md focus:border-green-700 focus:ring-green-300 focus:outline-none focus:ring-opacity-40"  required />
            <FaUserAlt className="absolute left-3 top-12"/>
          </div>
          <div className="mb-2 relative">
            <label htmlFor="password" className="block text-lg  font-semibold text-white">
              Senha
            </label>
            <input  type={passwordEye} value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Entre com sua senha" className="block w-full px-10 mt-2  bg-white border rounded-md focus:border-green-700 focus:ring-green-300 focus:outline-none focus:ring-opacity-40" required/>
            <FaLock className="absolute left-3 top-12"/>
            <i onClick={Eye} className="absolute right-3 top-12 cursor-pointer">{eye ? <FaEyeSlash/> : <FaEye /> }</i>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login