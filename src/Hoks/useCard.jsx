import { useQuery } from '@tanstack/react-query'

export default function useCard(key,fun) {
  return useQuery({queryKey:[key],
    queryFn:fun,
    select:(data)=>data?.data
  })
}


