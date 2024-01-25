import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, Stack} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slice';


  interface iPro {
    isOpen: boolean ,
    onClose: () => void,
  }


const Modal:FC<iPro> = ({isOpen,onClose}) => {

  const [name,setName] = useState('')
  const [Login,setLogin] = useState('')
  const [imgAvatar,setImgAvatar] = useState('')

  const db = useDispatch()

  const ceateAccount = () => {
    if(name.length > 3 && Login.length > 3 && imgAvatar.length) {
      db(actions.createLogin({name,Login,imgAvatar}))
      setName('')
      setLogin('')
      setImgAvatar('')
    }
  }

  return (
<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='!text-[black]' borderBottomWidth='1px'>
            Создайте Новый Аккаунт
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel className='!text-[black]' htmlFor='username'>Имя и фамилия</FormLabel>
                <Input
                className='!text-[black]'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id='username'
                  placeholder='Введите имя и фамилию'
                />
              </Box>
              <Box>
                <FormLabel className='!text-[black]' htmlFor='username'>Придумайте логин</FormLabel>
                <Input
                className='!text-[black]'
                  value={Login}
                  onChange={e => setLogin(e.target.value)}
                  id='username'
                  placeholder='Введите Логин'
                />
              </Box>

              <Box>
                <FormLabel className='!text-[black]' htmlFor='url'>Ссылка на аватарку</FormLabel>
                <InputGroup>
                  <Input
                  className='!text-[black]'
                    type='url'
                    id='url'
                    placeholder='Введите Ссылку'
                    value={imgAvatar}
                    onChange={e => setImgAvatar(e.target.value)}
                  />
                </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button className='!text-[black]' variant='outline' mr={3} onClick={onClose}>
              Зыкрыть
            </Button>
            <Button onClick={ceateAccount} className='!text-[black]' colorScheme='blue'>Зарегестрироваться</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default Modal