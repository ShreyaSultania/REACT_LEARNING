import React, { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar';
import Form from './component/Form';
import CardList from './component/CardList';
import PostListProvider from './Stores/post-list-stores';

function App() {
  const [selectedTabs,setSelectedTabs]=useState("Home");
  return (
    <PostListProvider>
    <div className='flex flex-col h-screen w-full bg-slate-50'>
      <Header></Header>
      <div className='flex flex-1 overflow-hidden'>
  <Sidebar selectedTabs={selectedTabs}
  setSelectedTabs={setSelectedTabs}></Sidebar>
  <div className='flex-1 overflow-auto'>
    {selectedTabs==='Home' ?  <CardList></CardList> : <Form></Form>}
  </div>
</div>
      <Footer></Footer>
    </div>
   </PostListProvider>
  )
}

export default App;