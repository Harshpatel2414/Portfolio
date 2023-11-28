import { useState } from 'react';
import { reviews } from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];
    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <section className='mx-auto flex flex-col w-full justify-center px-5 py-5 gap-10'>
            <SectionTitle text="Review's about me"/>
            <article className='sm:w-3/4 md:w-2/3 flex flex-col items-center mx-auto py-10 shadow-md hover:shadow-lg'>
                <div className='before:bg-emerald-200 before:translate-x-2 before:translate-y-[-0.5rem] w-36 h-36 relative before:absolute before:h-full before:w-full before:rounded-full'>
                    <img src={image} alt={name} className='object-cover relative w-full h-full rounded-full' />
                    <span className='bg-emerald-400 w-12 h-12 absolute top-0 left-0 translate-y-1/4 rounded-full items-center justify-center flex'>
                        <FaQuoteRight className='text-white h-5 w-5' />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='text-gray-400 text-center sm:w-2/3 p-2'>{text}</p>
                <div className='my-4 gap-8 flex'>
                    <button className='prev-btn' onClick={prevPerson}>
                        <FaChevronLeft className='text-emerald-300'/>
                    </button>
                    <button className='next-btn' onClick={nextPerson}>
                        <FaChevronRight className='text-emerald-300'/>
                    </button>
                </div>
                <button className='btn btn-hipster' onClick={randomPerson}>
                    surprise me
                </button>
            </article>
        </section>
    );
};

export default Reviews;