import { api } from "../api";

  
  export const createPostAdd = api.injectEndpoints({
    endpoints: builder => ({
      createPost: builder.mutation({
        query: (postNew) => ({
          body: postNew,
          url: '/todos',
          method: 'POST'
        }),
        invalidatesTags: () => [{
          type: 'Post'
        }]
      })
    })
  })

  export const {useCreatePostMutation} = createPostAdd