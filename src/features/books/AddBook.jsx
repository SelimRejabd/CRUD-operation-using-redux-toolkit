import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {id: uuidv4 ,title, author};
        dispatch(addBook(book));
        navigate('/show-books', {replace:true});
    };

    return (
        <div className='text-black align-center'>
            <h3 className="text-xl font-bold mb-4">Add Book</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor='title' name='title' className="block text-sm font-medium"> Title:</label>
                    <input type='text' id='title' name='title'className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={title} onChange={
                        (e)=>setTitle(e.target.value)
                    }
                    required
                    />
                </div>
                <div>
                    <label htmlFor='author' name='author' className="block text-sm font-medium"> Author:</label>
                    <input  type='text' id='author' name='author' className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={author} onChange={
                        (e)=>setAuthor(e.target.value)
                    }
                    required
                    />
                </div>
                <button type='submit' className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;