"use client"
import { PostCard, useGetTodo } from "@/entities/post"
import { Post } from "@/entities/post/types/types"
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// export const getStaticProps = (async (context) => {
//     const {data:posts} = useGetTodo()
//     return { props: { posts } }
//   }) satisfies GetStaticProps<{
//     posts: Post[] | undefined
//   }>

export const PostList = () =>{
    const {data:posts} = useGetTodo()
    return(
        <div>
            {posts?.map(post=> <PostCard key={post.id} post={post}/>)}
        </div>
    )
}