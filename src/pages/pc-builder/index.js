import Component from '@/components/Component';
import RootLayouts from '@/layouts/RootLayouts';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

const PCBuilderPage = ({categories}) => {
  
  const state = useSelector(state =>state.pcBuilder)
  const buildPc = () =>{
    alert('Your PC Build Completed!')
  }
    return (
        <div className='container mx-auto'>
          <h2 className='text-center my-8 text-3xl text-gray-700'>
        Build Your PC Here
      </h2>
            {
                categories?.map(c=><Component key={c._id} category={c}></Component>)
            }

            <div>
            <div className='w-full flex justify-center'>
                    <Button disabled={!state.enabledBuild} onClick={buildPc}>Complete Build</Button>
                </div>
            </div>
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
  
    const res = await fetch(`https://pc-complier.vercel.app/api/categories`)
    const data = await res.json()
    return {
      props: {
        categories:data.result
      },
    }
  } 