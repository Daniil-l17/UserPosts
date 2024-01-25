import {useDisclosure } from '@chakra-ui/react';
import Header from './components/Header/Header';
import LeftMain from './components/LeftMain/LeftMain';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import Right from './components/RightMain/Right';
import { useGetAllPostQuery } from './api/api';
{
  /*<Button
onClick={() =>
  toast({
    title: 'Account created.',
    description: "We've created your account for you.",
    status: 'success',
    isClosable: true,
    position: 'top-left'
  })
}
>
Show Toast
</Button>*/
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {data,isLoading,error,} = useGetAllPostQuery(null)
  /*  const toast = useToast()*/
  
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
          <div className='flex flex-col gap-5 mb-6'>
            {isLoading ? <div>loading...</div> : data?.map(el =>
        <Right el={el} />
              ) }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
