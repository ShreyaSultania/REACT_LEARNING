import { createContext, useContext, useReducer
 } from "react";
 export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    addInitialPost:()=>{}
 });
 const postListReducer=(currPostList,action)=>{
   let newPostList=currPostList;
   if(action.type==="DELETE_POST"){
      newPostList=currPostList.filter(post=>{
      return post.id!=action.payload.postId;
      })
   }
   else if(action.type==="ADD_POST"){
      newPostList=[...currPostList,action.payload]
   }
   else if(action.type==="ADD_INITIAL_POST"){
      newPostList=action.payload.post;
   }
return newPostList;
 }
 const PostListProvider=({children})=>{
   const [postList,dispatch]=useReducer(postListReducer,[]);
   const addPost=(t,b,r)=>{
     dispatch({
      type:"ADD_POST",
      payload:{
        title:t,
        body:b,
        reaction:r
      }
     })
   }
   const addInitialPost=(posts)=>{
     dispatch({
      type:"ADD_INITIAL_POST",
      payload:{
       post:posts,
      }
     })
   }
   const deletePost=(postId)=>{
    dispatch({
      type:"DELETE_POST",
      payload:{
         postId
      }
    })
   }
return <PostList.Provider value={
    {postList:postList,
    addPost:addPost,
    deletePost:deletePost,
    addInitialPost:addInitialPost
    }
}>{children}</PostList.Provider>
 }
//  const DEFAULT_POST_LIST=[
//     {
//     id:'1',
//     title:"Going to mumbai",
//     body:"hyy fiends",
//     reaction:3,
//     userId:"",
//     tags:["vacation","enjoy","beaches vibe"]
//  },
//  {
//     id:'2',
//     title:"Eating momos",
//     body:"enjoing momos",
//     reaction:30,
//     userId:"",
//     tags:["vacation","enjoy","momos lover"]
//  }
// ]

 export default PostListProvider;