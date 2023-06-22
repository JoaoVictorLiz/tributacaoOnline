type Props = {
  children: React.ReactNode;
  openModal: boolean;
  closeModal: () => void;
  title: string;
}


const Modal = ({children,openModal, closeModal, title}: Props) => {
  
  return (
    <>
      {openModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-1 ">
            <div className="relative w-full my-6 mx-3 max-w-6xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-white">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t bg-green-600">
                  <h3 className="text-3xl font=semibold text-white" >{title}</h3>
                  <button
                    className=" border-white text-white float-right rounded-full px-3 "
                    onClick={() => closeModal()}
                  >
                    <span className="text-white font-bold opacity-7 text-2xl flex ">
                      X
                    </span>
                  </button>
                </div>
               {children}
              </div>
            </div>
          </div> 
        </>
      ) : null}
    </>
  );
};

export default Modal;