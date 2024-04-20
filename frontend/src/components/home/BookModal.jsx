import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center '
            onClick={onClose}
        >

            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose} />

                <h2 className='w-fit bg-green-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start align-items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-'>{book.author}</h2>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure nihil facere consequuntur dolorem unde delectus, adipisci facilis omnis cupiditate quia repudiandae in reprehenderit sequi recusandae quidem culpa exercitationem! Assumenda, aperiam aut quidem blanditiis officiis, harum consequuntur eius ea eveniet unde, tenetur reiciendis ipsum velit iusto dignissimos iste quaerat magnam.</p>
                </div>
            </div>

        </div>
    )
}

export default BookModal