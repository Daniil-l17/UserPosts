import { CircularProgress, useDisclosure } from '@chakra-ui/react';
import Header from './components/Header/Header';
import LeftMain from './components/LeftMain/LeftMain';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import Right from './components/RightMain/Right';
import { useGetAllPostQuery } from './api/api';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading, error } = useGetAllPostQuery(null);


  return (
    <div className=" flex flex-col h-[100vh]">
      <Header click={onOpen} />
      <main className="flex gap-[40px] px-14 pt-8 pb-[100px]">
        <LeftMain />
        <div className="w-full">
          <Modal isOpen={isOpen} onClose={onClose} />
          <div>
            <h1 className="text-[28px] uppercase">Посты пользователей</h1>
          </div>
          <div className="flex flex-col gap-5 mb-6">
            {!error ? (
              isLoading ? (
                <div className="h-[600px] justify-center flex items-center">
                  <CircularProgress isIndeterminate color="blue.300" />
                </div>
              ) : (
                data?.map(el => <Right el={el} />)
              )
            ) : (
              <div className="h-[600px] justify-center flex items-center">
                <h1 className="text-[40px] text-[red] uppercase">Запустите Сервер</h1>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
