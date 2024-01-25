import { IconButton, Input } from "@chakra-ui/react"
import { MoveRight } from "lucide-react"


const Footer = () => {
  return (
    <div className="flex flex-auto bg-[#6c86d2bc] fixed right-0 left-0 bottom-0">
    <div className=" w-[100%] flex flex-col justify-end">
      <div className="flex py-8 justify-center">
        <div className="!w-[800px]  flex items-center gap-3">
          <Input focusBorderColor='green.400' className=" placeholder:text-white !text-white !w-[800px]" placeholder="Добавить комментарий" />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            icon={<MoveRight className=" w-[20px]" />}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer