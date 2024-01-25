import { getAllPost } from "../../redux/type/TypeGetAllPost";
import { api } from "../api";

  
  export const updatePost = api.injectEndpoints({
    endpoints: builder => ({
      upDatePost: builder.mutation<getAllPost[],getAllPost>({
        query: (newObj) => ({
          body: newObj ,
          url: `/todos/${newObj.id}`,
          method: 'PATCH'
        }),
        invalidatesTags: () => [{
          type: 'Post'
        }]
      })
    })
  })

  export const {useUpDatePostMutation} = updatePost