import { EllipsisOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useRouter } from 'next/router';
import ReactStars from "react-rating-stars-component";
const { Meta } = Card;
const Part = ({part, children}) => { 
    const router = useRouter()
    return (
  <Card
    style={{
      width: 300,
      margin:'0 auto',
      
    }}
    cover={
      <img
        alt="example"
        src={part.image}
      />
    }
    actions={[
      <EllipsisOutlined key="ellipsis" onClick={()=>router.push(
        `/products/${part._id}`
      )}/>,
    ]}
  >
    <Meta
      title={part.productName}
      description={part.category}
      style={{textAlign:'center'}}
    />

    <div className='grid grid-cols-2 gap-4 mt-4 text-center font-semibold'>
    <div>
    <p className='text-xs font-semibold text center'>Price</p>
      <div>${part.price}</div>
    </div>
      <div className='flex flex-col items-center'>
        <p className='text-xs font-semibold text center'>Rating</p>
        <ReactStars 
   value={part.rating} 
   onStarClick={(nextValue, prevValue, name) => handleStarClick(nextValue, prevValue, name)}
   starCount={5}
   starColor={'#ffb400'}
   emptyStarColor={'#ccc'}
   edit={false}
/>
</div>
<div>
<p className='text-xs font-semibold text center'>Status</p>
      <div className={part.status === 'In Stock' ? 'text-green-500' : 'text-red-500'}>{part.status}</div>
</div>

      <div></div>
    </div>
<div className='w-full flex justify-center my-4'>
  
{children}
</div>
  </Card>
);}
export default Part;