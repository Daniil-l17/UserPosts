import { Avatar, Button } from "@chakra-ui/react"
import { getAllPost } from "../../redux/type/TypeGetAllPost"
import { FC } from "react"
import { useAppSelector } from "../../hooks/useTyped"
import { useDeletePostMutation } from "../../api/inject/deletePost"
import { useUpDatePostMutation } from "../../api/inject/updatePost"


  interface getAllPos {
    el: getAllPost
  }

const Right:FC<getAllPos> = ({el}) => {
    const {user,userAcc} = useAppSelector(state => state.post)
  const [deletePost] = useDeletePostMutation()
  const [upDetePost] = useUpDatePostMutation()

  
  const deletePostUser = () => {
    if(user && userAcc?.Login === el.meta.Login){
      deletePost(el.id)
    }
  }

    const upDetePosts = (el:getAllPost) => {
      if(user && userAcc.Login === el.meta.Login){
        const texts = prompt()
        const newObj = {...el,text: texts}
        upDetePost(newObj)
      }
    }
  
  return (
    <div style={{ border: '1px solid #6c86d2' }} className="flex bg-[#91a4c77e] : gap-4 rounded-2xl ">
    <div className='w-[700px] flex flex-col'>
    <div
      style={{
        backgroundImage:
          `url(${el.img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className=" h-[400px] rounded-2xl w-[700px] "></div>
      <div className='flex flex-1 items-center px-4 justify-between '>
      <h1 className='text-[20px] uppercase '>{el.tema}</h1>
      <div className="flex gap-6 items-center">
      <Button onClick={deletePostUser} colorScheme='blue'>Удалить</Button>
      <Button onClick={() => upDetePosts(el)} colorScheme='red'>Редактировать</Button>
      </div>
      </div>
    </div>
    <div className=" px-6 py-3">
      <div className='flex gap-3 mb-3 items-center'>
      <Avatar name='Dan Abrahmov' src={el.meta.imgAvtor} />
      <h1 className=" uppercase font-bold text-[16px] text-[#ffffff]">{el.meta.author}</h1>
      </div>
      <div className=' overflow-auto h-[400px]'>
      <p className=' text-lg w-[400px] '>
      {el.text}
      </p>
      </div>
    </div>
  </div>
  )
}

export default Right