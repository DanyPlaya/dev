"use client"
import { useGetTodoHydrate } from "@/entities/post"
import { PostList } from "@/widget/postList"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

export const Main = async () => { 

    const queryClient  = useGetTodoHydrate()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PostList />
            </HydrationBoundary>
        </main>
      )
}