import { addComponent } from '@/redux/featured/pc-complier-slice';
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { useRouter } from 'next/router';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';

const Component = ({category}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const state = useSelector(state =>state.pcBuilder)
    console.log(state)
    return (
        <div className='w-full text-black border border-gray-300 rounded  py-2 px-10'>
            <div className='w-full flex justify-between p-2 bg-slate-400 text-white rounded'>
                <h3>{category.title}</h3>
                {
                    state.category[category.title] ? <Button onClick={()=>dispatch(addComponent({product: null, category: category.title}))} className='bg-red-500 text-white font-semibold'><DeleteOutlined /></Button> : <Button className='bg-transparent text-white font-semibold' onClick={()=>router.push(`/pc-builder/${category.title.replace('/','-')}`)}>Choose</Button>
                }
            </div>
           
                { state.category[category.title] &&
                    <div className='grid grid-cols-4 border p-2 bg-gray-100'>
                        <h3 className=' text-sm font-light'>{state.category[category.title]?.productName}</h3>
                        <h3 className=' text-sm font-light'>{state.category[category.title].price}</h3>
                        <ReactStars 
                            value={state.category[category.title].averageRating} 
                            onStarClick={(nextValue, prevValue, name) => handleStarClick(nextValue, prevValue, name)}
                            starCount={5}
                            starColor={'#ffb400'}
                            emptyStarColor={'#ccc'}
                            edit={false}
                        />
                        <Button onClick={()=>router.push(`/pc-builder/${category.title.replace('/','-')}`)}>Change</Button>
                    </div>
                }
        </div>
    );
};

export default Component;