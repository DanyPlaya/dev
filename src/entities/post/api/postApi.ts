import { baseApi } from "@/shared/api"
import { Post } from "../types/types";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { postsKeys } from "../lib/queryKeys";


export const useGetTodoHydrate = () => {
    const fetcher = async () => (await baseApi.get<Post[]>('/posts')).data;
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: postsKeys.useGetTodo(),
        queryFn:fetcher
    })
    return queryClient
   
};
export const useGetTodo = () => {
    const fetcher = async () => (await baseApi.get<Post[]>('/posts')).data;
    return useQuery({
        queryKey: postsKeys.useGetTodo(),
        queryFn:fetcher
    })
};