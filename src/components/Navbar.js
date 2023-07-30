import { Button, Dropdown, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { useGetCategoriesQuery } from '@/redux/api/api';
import { useRouter } from 'next/router';
import { CloseOutlined,UnorderedListOutlined } from "@ant-design/icons";

import { DownOutlined  } from "@ant-design/icons";
import { useState } from 'react';
const { Header } = Layout;

const Navbar = () => {
  const router = useRouter()
  const {data} = useGetCategoriesQuery()
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState()


  const items = data?.result?.map((c,i)=>({
    key:i,
    label:(
      <Link href={`/categories/${c.title.replace('/',('-'))}`}>
        {c.title}
      </Link>
    ),
  })) 

    return (
      <div className='bg-slate-900'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between p-4 '>
          
        <div className='flex justify-between items-center'>
          <Link href={'/'}><h3 className='text-white'>PC Compilers</h3></Link>
          <div className='lg:hidden'>
          { isOpen ? <CloseOutlined onClick={()=>setIsOpen(!isOpen)}  className='lg:hidden p-6'/>
          :
          <UnorderedListOutlined  onClick={()=>setIsOpen(!isOpen)}  className='lg:hidden p-6'/>}

          </div>
        </div>


        <div className={`${!isOpen ? 'hidden': 'flex'} lg:flex flex-col lg:flex-row gap-4 items-center mb-2 lg:mb-0`}>
        <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/"
            >
              <items>Home</items>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/products"
            >
              <items>All Products</items>
            </Link>
          </div>
        <div className={`${!isOpen ? 'hidden': 'flex'} lg:flex flex-col lg:flex-row gap-4 items-center`}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
            className='bg-transparent text-white '
          >
            <Button>Categories <DownOutlined /></Button>
          </Dropdown>
          <Button onClick={()=>router.push(`/pc-builder`)} className='bg-transparent text-white'>Build Your PC</Button>

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
    </div>
    );
};

export default Navbar;