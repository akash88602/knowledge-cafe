import React from 'react';
import {FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';
const Blog = ({blog,handleAddToBookmark ,handleMarkAsRead}) => {
    const {id,title,cover,reading_time,author,author_img , posted_date , hashtags } =blog;
    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt="" className='rounded' />
            <div className='flex justify-between mt-5 '>
                <div className="flex">
                    <img src={author_img} alt="" className='w-14 rounded-full' />
                    <div className="ml-6">
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    </div>
                    <div className=''>
                        <span>{reading_time}min read   </span>
                              <button onClick={()=>handleAddToBookmark(blog)}
                               className='ml-2  text-2xl '><FaBookmark /></button>
                      
                      
                    </div>
                
            </div>
            <h1 className='text-4xl font-bold mt-5'>{title}</h1>

            <p className='mt-5'>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href=""> {hash}  </a></span>)
                }
            </p>
            <button  onClick={()=>handleMarkAsRead(id,reading_time)}
             className='text-purple-800 font-bold underline'>Mark As Read </button>
        </div>
    );
};
Blog.PropTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;