"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui"
import { Post } from "../types/types"

type PostCardProps = {
    post: Post
}
export const PostCard = (props:PostCardProps) =>{
    const {post} = props
    return(
        <Card className="w-80 m-2">
            <CardHeader>
                <CardTitle>
                    {post.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    {post.body}
                </div>
            </CardContent>
        </Card>
    )
}