import { addComponent } from '@/redux/featured/pc-complier-slice';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Component = ({category}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const state = useSelector(state =>state.pcBuilder)
    console.log(state)
    return (
        <div className='w-full text-black border border-gray-300 rounded  py-2 px-10'>
            <div
            className='grid grid-cols-4'>
                <h3>{category.title}</h3>
                <h3>{category.title}</h3>
                <h3>{category.title}</h3>
                {
                    state[category.title] ? <Button onClick={()=>dispatch(addComponent({product: null, category: category.title}))}>Remove</Button> : <Button onClick={()=>router.push(`/pc-builder/${category.title.replace('/','-')}`)}>Choose</Button>
                }
            </div>
           
                { state[category.title] &&
                    <div className='grid grid-cols-4'>
                        <h3>{state[category.title].productName}</h3>
                        <h3>{state[category.title].price}</h3>
                        <Button onClick={()=>router.push(`/pc-builder/${category.title.replace('/','-')}`)}>Choose</Button>
                    </div>
                }
        </div>
    );
};

export default Component;