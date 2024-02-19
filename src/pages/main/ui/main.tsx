import { hydrateFetcher, postsKeys } from "@/entities/post";
import { PostList } from "@/widget/postList";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export const Main = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: postsKeys.useGetTodo(),
    queryFn: hydrateFetcher,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostList />
      </HydrationBoundary>
    </main>
  );
};
