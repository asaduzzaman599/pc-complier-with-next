
import RootLayouts from '@/layouts/RootLayouts';
import { Descriptions } from 'antd';
import Image from 'next/image';

import ReactStars from "react-rating-stars-component";

const ProductDetailsPage = ({part}) => {
    return (
  <div className='container mx-auto mt-10'>
    <div className='w-full md:w-1/2 mx-auto p-6 bg-white shadow-lg rounded-lg mt-4'>
      <Image src={part.image} width={200} height={200} layout="responsive" />
    </div>
    <div className='w-full md:w-1/2 mx-auto p-6 bg-white mt-10'>
    <Descriptions title="Product Info" layout="vertical">
      <Descriptions.Item label="Product">{part?.productName}</Descriptions.Item>
      <Descriptions.Item label="Category">{part?.category}</Descriptions.Item>
      <Descriptions.Item label="Rating"> 
        <div>
        <p>{part.averageRating}</p>
        <ReactStars 
          value={part.averageRating} 
          edit={false}
          starCount={5}
          starColor={'#ffb400'}
         emptyStarColor={'#ccc'}
        />
      </div>
    </Descriptions.Item>

    <Descriptions label="Description" span={2} className=''>
      {part.description}
    </Descriptions>
    <Descriptions.Item label="Price" span={2} className='font-bold'>
      {part.price}
    </Descriptions.Item>
    <Descriptions.Item label="Key Features"  className=''>
      <ul className='px-4'>
        {
          Object.entries(part?.keyFeatures)?.map(([k,v],i)=><li key={i}>{k} : {v}</li>)
        }
      </ul>
    </Descriptions.Item>
    </Descriptions>
    </div>
    <div className='w-full md:w-1/2  mx-auto bg-white mt-6 p-6'>
    <h4 className='text-black'>User Ratings</h4>
    <div className='grid gap-2 mt-2'>
    {
      part.individualRating.map((r,i)=><div key={i} className='flex w-full justify-between'>
        <p className='text-black'>{r.userName}</p>
        <ReactStars 
          value={r.rating} 
          edit={false}
          starCount={5}
          starColor={'#ffb400'}
          emptyStarColor={'#ccc'}
        />
        </div>)
      }
    </div>
    </div>
    <div className='w-full md:w-1/2  mx-auto bg-white mt-6 p-6'>
      <h4 className='text-black'>Reviews</h4>
      <div className='grid gap-2 mt-2'>
      {
        part.reviews.map((r,i)=><div key={i} className='flex gap-2 w-full justify-between'>
         <p className='text-black'>{r.userName}</p>
         <p className='text-gray-400'>{r.comment}</p>
        </div>)
      }
    </div>
   </div>
 </div>
);

};

export default ProductDetailsPage;


ProductDetailsPage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>{page}</RootLayouts>
  )
} 

export async function getStaticPaths() {
  const res = await fetch('https://pc-complier.vercel.app/api/parts')
  const data = await res.json()

 
  const paths = data.result.map((part) => ({
    params: { productId: part._id },
  }))
 
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  
  const res = await fetch(`https://pc-complier.vercel.app/api/parts/${context.params.productId}`)
  const data = await res.json()
  return {
    props: {
      part:data.result
    },
    revalidate: 30
  }
} 