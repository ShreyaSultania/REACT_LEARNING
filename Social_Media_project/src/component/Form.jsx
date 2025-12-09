import React, { useContext, useRef } from "react";
import { PostList } from "../Stores/post-list-stores";

function Form() {
  const { addPost } = useContext(PostList);
  const title = useRef("");
  const body = useRef("");
  const reaction = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const t = title.current.value;
    const b = body.current.value;
    const r = parseInt(reaction.current.value);
    addPost(t, b, r);
  };
  return (
    <div className="flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm ">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Create Post
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">
              Title
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter post title"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
              ref={title}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">
              Body
            </label>
            <textarea
              name=""
              id=""
              placeholder="Enter post content"
              rows="4"
              ref={body}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
            ></textarea>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">
              No. of Reactions
            </label>
            <input
              type="number"
              ref={reaction}
              name=""
              id=""
              placeholder="Enter number of reactions"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-slate-900 font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-6"
            onClick={()=>{
              alert("post created successfully");
            }}
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
