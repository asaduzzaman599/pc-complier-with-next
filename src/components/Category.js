import { useRouter } from 'next/router';
import React from 'react';

const Category = ({category}) => {
    const router = useRouter()
    return (
        <div className='w-full py-10 text-center shadow-lg rounded-lg bg-slate-800 text-slate-100 font-bold text-lg hover:shadow-2xl cursor-pointer' onClick={()=>router.push(`/categories/${category.title.replace('/','-')}`)}>
            { category.title}
        </div>
    );
};

export default Category;