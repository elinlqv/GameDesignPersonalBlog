import { getSortedPostsData } from "../../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section>
      <h2 className="text-4xl font-bold mt-20">All Posts</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post}></ListItem>
        ))}
      </ul>
    </section>
  );
}
