
import React from 'react';
import { Descriptions } from 'antd';
import RootLayouts from '@/layouts/RootLayouts';
import Image from 'next/image';

const ProductDetailsPage = ({part}) => {
    return (

 <div className='container mx-auto'>
  <Image src="" height={200} width={200} />
   <Descriptions title="User Info" layout="vertical">
    <Descriptions.Item label="UserName">{part.productName}</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
  </Descriptions>
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
  const res = await fetch('http://localhost:3000/api/parts')
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
  
  const res = await fetch(`http://localhost:3000/api/parts/${context.params.productId}`)
  const data = await res.json()
  return {
    props: {
      part:data.result
    },
  }
}