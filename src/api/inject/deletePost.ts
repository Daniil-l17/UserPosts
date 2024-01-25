import { api } from "../api";

  
  export const deletePost = api.injectEndpoints({
    endpoints: builder => ({
      deletePost: builder.mutation({
        query: (id) => ({
          url: `/todos/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: () => [{
          type: 'Post'
        }]
      })
    })
  })

  export const {useDeletePostMutation} = deletePost