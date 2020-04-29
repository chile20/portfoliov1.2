import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'react-feather';

const Post = ({ title, author, path, date, body }) => {
    return(
        <div className="w-full sm:w-1/2 h-full p-4 bg-gray-500">
            <Link to={path} className="block"/>
            <div className="px-8 py-20 relative z-10 w-full h-full rounded-lg p-6 bg-black">
                <h1  className="tracking-widest px-8 text-4xl font-bold text-white">{title}</h1>
                <div className="font-semibold text-gray-500 px-8">
                <span className="inline-block px-2 py-1 text-sm mr-2">{date}</span>
                <span className="inline-block px-2 py-1 text-sm mr-2">{author}</span>
                <span className="inline-block px-2 py-1 text-sm mr-2">{body}</span>
                </div>
            </div>
        </div>
        
        
    )
}

export default Post;