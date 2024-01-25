import { Button, Input } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { ChevronDownIcon, Image } from 'lucide-react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useTyped';
import { useCreatePostMutation } from '../../api/inject/addPost';

const LeftMain = () => {
  const { user, userAcc } = useAppSelector(state => state.post);
  const [createPost] = useCreatePostMutation()

  const theme = [
    'Природа',
    'Спорт',
    'Программирование',
    'Политика',
    'Рестораны',
    'Улицы моего города',
    'Моя жизнь',
  ];
  const [step, setStep] = useState(-1);
  const thema = theme[step]
  const [input, setInput] = useState('');
  const [inputImg, setInputImg] = useState('');

    
  
  const addPostCreate = () => {
    if(user && input.length && inputImg.length && thema){
      createPost({
        id: Date.now(),
        text: input,
        tema: thema,
        img: inputImg,
        meta: {
          author: userAcc.name,
          imgAvtor: userAcc.imgAvatar,
          Login: userAcc.Login
        }
      }).then(() => {
        setInput('')
        setInputImg('')
        setStep(-1)
      })
    }
  }


  return (
    <div className=" h-[700px] sticky top-5  px-6 flex flex-col py-3 rounded-lg bg-[#6c86d2]">
      <h1 className=" text-[20px] uppercase text-[white] font-bold">Добавить Пост</h1>
      <ul className=" flex flex-col gap-3 items-center mt-4">
        <li className="flex items-center w-[300px] gap-3">
          <Avatar
            name="Dan Abrahmov"
            src={
              !user
                ? 'https://as2.ftcdn.net/v2/jpg/03/05/37/53/1000_F_305375322_2ZndLqWXETW0sgbm7LccoERzv6X7hNJZ.jpg'
                : userAcc.imgAvatar
            }
          />{' '}
          <Input
            className=" placeholder:!text-[white] cursor-pointer"
            focusBorderColor="red.400"
            placeholder="Имя и фамилия"
            value={userAcc.name}
          />
        </li>
        <li className="flex items-center w-[300px] gap-3">
          <div className="flex justify-center w-[58px] h-[48px]">
            <Image width={30} className="text-white" />
          </div>
          <Input
            className=" placeholder:!text-[white] cursor-pointer"
            focusBorderColor="green.400"
            value={inputImg}
            onChange={e => setInputImg(e.target.value)}
            placeholder="Введите сылку на изображение"
          />
        </li>
        <li className="flex items-center w-[300px] gap-3">
          <Menu>
            <MenuButton className="w-full" as={Button} rightIcon={<ChevronDownIcon />}>
              {step === -1 ? 'Выберите тему' : thema}
            </MenuButton>
            <MenuList className="!w-full">
              {theme.map((e, index) => (
                <MenuItem
                  key={index}
                  onClick={() => setStep(index)}
                  className="!w-full !text-[black]">
                  {e}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </li>
        <li className=" w-full">
          <Textarea
            className=" !placeholder-[#f4f3f3] !max-h-[300px]"
            focusBorderColor="green.400"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Here is a sample placeholder"
          />
        </li>
      </ul>
      <div className="flex-1 flex-col flex justify-end items-center  ">
        <Button onClick={addPostCreate} colorScheme={user ? 'green' : 'red'}>
          {user ? 'Добавить Пост' : 'Авторизуйтесь'}
        </Button>
      </div>
    </div>
  );
};

export default LeftMain;
