import Component from '@/components/Component';
import RootLayouts from '@/layouts/RootLayouts';
import React from 'react';

const PCBuilderPage = ({categories}) => {
    return (
        <div className='container mx-auto'>
            {
                categories?.map(c=><Component key={c._id} category={c}></Component>)
            }
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return (
      <RootLayouts>{page}</RootLayouts>
    )
  }

  
export async function getServerSideProps() {
  
    const res = await fetch(`http://localhost:3000/api/categories`)
    const data = await res.json()
    return {
      props: {
        categories:data.result
      },
    }
  }