import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className='border mb-4 rounded-lg p-6'>
            <h2 className='font-bold'>{blog.question}</h2>
            <p><span className='font-bold'>Ans: </span>{blog.answer}</p>
        </div>
    );
};

export default Blog;