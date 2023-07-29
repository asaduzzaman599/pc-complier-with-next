import { Button, Dropdown, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { useGetCategoriesQuery } from '@/redux/api/api';
import { useRouter } from 'next/router';
const { Header } = Layout;

const Navbar = () => {
  const router = useRouter()
  const {data} = useGetCategoriesQuery()
  const { data: session } = useSession();


  const items = data?.result?.map((c,i)=>({
    key:i,
    label:(
      <Link href={`/categories/${c.title}`}>
        {c.title}
      </Link>
    ),
  })) 

    return (
        <Header
        
      >
        <div className='container mx-auto flex justify-between'>
          
        <Link href={'/'}><h3 className='text-white'>PC Compilers</h3></Link>
        <div className='flex gap-4 items-center'>
          <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Button>Categories</Button>
    </Dropdown>
    <Button onClick={()=>router.push(`/pc-builder`)} className='bg-white text-black'>Build Your PC</Button>

{session?.user ? (
          <items>
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </items>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
        </div>
        </div>
      </Header>
    );
};

export default Navbar;