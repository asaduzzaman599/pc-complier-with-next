import Part from '@/components/Parts';
import RootLayouts from '@/layouts/RootLayouts';
import { Col, Row } from 'antd';
import Head from 'next/head';


export default function HomePage({parts}) {
  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };
  return (
    <>
      <Head>
        <title>PC Complier</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{color:'black'}}>
        This is Home Page
      </h1>
      <div className='container mx-auto grid grid-cols-3 gap-4 mt-8'>
             {
            parts?.map((part)=> <Part part={part} key={part._id}></Part>)
          }
      </div>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>{page}</RootLayouts>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/parts/featured')
  const parts = await res.json()
  
  const categoriesRes = await fetch('http://localhost:3000/api/categories?limit=6')
  const categories = await categoriesRes.json()
  console.log(categories)
  
  return {
    props: {
      parts:parts.result,
      categories:categories.result
    },
    revalidate: 30
  }
}