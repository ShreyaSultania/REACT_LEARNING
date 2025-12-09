import React, { useContext } from "react";
import { PostList } from "../Stores/post-list-stores";

function Cards({post}) {
  const {deletePost}=useContext(PostList)
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200">
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
         {post.body}
        </p>
        <div className="flex gap-3">
          <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-slate-900 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            👍 {post.reaction} likes
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" onClick={()=>{deletePost(post.id)}}>
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
