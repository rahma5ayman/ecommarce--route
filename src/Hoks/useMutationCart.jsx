import { useMutation,useQueryClient  } from '@tanstack/react-query'

export default function useMutationCart(fun) {

    const queryClient = useQueryClient()
return useMutation({
    mutationFn:fun,
    onSuccess:(()=> {
        queryClient.invalidateQueries({ queryKey: ['getcart'] })
    })
})
}





