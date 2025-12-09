import React, { useContext } from "react";
import { PostList } from "../Stores/post-list-stores";

function Message() {
  const { postList, addInitialPost } = useContext(PostList);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-12 text-center max-w-md">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">No Posts Yet</h1>
        <p className="text-slate-600 text-lg mb-8">
          There are no posts to display. Click the button below to fetch posts
          from the server.
        </p>
        <button
          onClick={() => {
            fetch("https://dummyjson.com/posts")
              .then((res) => res.json())
              .then((data) => {
                addInitialPost(data.posts);
              })
              .catch((error) => console.error("Error fetching posts:", error));
          }}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          🔄 Get Posts from Server
        </button>
      </div>
    </div>
  );
}

export default Message;
