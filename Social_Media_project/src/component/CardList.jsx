import React, { useContext } from "react";
import Cards from "./Cards";
import { PostList } from "../Stores/post-list-stores";
import Message from "./Message";

function CardList() {
  const { postList } = useContext(PostList);
  return (
    <>
    {postList.length==0 && <Message></Message>}
    <div className="space-y-4">
      
      {postList.map((post) => (
        <Cards key={post.id} post={post}></Cards>
      ))}
    </div>
    </>
  );
}

export default CardList;
