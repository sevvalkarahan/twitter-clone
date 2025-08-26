import { posts as postData } from "../../../mock/posts";
import Post from "../../../components/post";
import { useState } from "react";

export default function ForYou() {

    const [posts, setPosts] = useState(postData)

    return (
        <div>
            {posts.map((post, key) => <Post post={post} key={post.id + key} />)}

        </div>

    )
}