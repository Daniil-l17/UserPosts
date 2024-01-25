import { Button } from "@chakra-ui/react"
import { FC } from "react"
import { Avatar } from '@chakra-ui/react'
import { useAppSelector } from "../../hooks/useTyped"
  interface ud {
    click: () => void
  }

const Header:FC<ud> = ({click}) => {

  const {user,userAcc} = useAppSelector(state => state.post)



  return (
    <header className=" py-3 bg-[#6c86d2]">
      <div className="flex justify-between items-center max-w-[1750px] m-auto px-7 ">
        <div className="flex gap-4 items-center">
        <img width={60} src="./cube-icon.svg" alt="" />
          <h1 className=" uppercase text-[18px] text-[white] font-bold">Interesting posts</h1>
        </div>
        {!user ? 
        <Button onClick={click} colorScheme='whiteAlpha'>Создать Пользователя</Button>
        : 
        <div className="flex items-center gap-6">
      <Avatar className=" cursor-pointer" name={userAcc.name} src={userAcc.imgAvatar} />
      <h1 className=" text-[20px] font-bold">{userAcc.name}</h1>
        </div>
      }
      </div>
    </header>
  )
}

export default Header