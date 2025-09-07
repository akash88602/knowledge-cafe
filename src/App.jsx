import React, { useState } from 'react';
import Header from './Component/Header/Header';
import Blogs from './Component/Blogs/Blogs';
import Bookmarks from './Component/Bookmarks/Bookmarks';

const App = () => {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleAddToBookmark =blog=>{ 
     const newBookmarks = [...bookmarks,blog];
     setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (id,time )=>{
    const remainigBookmarks=bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookmarks(remainigBookmarks)
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime)
  }
  return (
   
    <div className='max-w-7xl mx-auto' >
      <Header></Header>
      <div className='md:flex mx-auto  '>
         <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime}   ></Bookmarks>
      </div>
    </div>
  );
};

export default App;