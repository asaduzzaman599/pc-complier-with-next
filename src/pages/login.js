import React from 'react';
import { GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

const LoginPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-white p-6 gap-4'>
            <div className=' w-full md:w-80 shadow-lg h-40 bg-slate-700 rounded  flex flex-col justify-center items-center gap-4'>
                <h4 className='mb-4'>WELCOME TO PC COMPILERS</h4>
           <div className='text-2xl flex gap-2 items-center border border-light-50 cursor-pointer' 
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }>
           <GithubOutlined   />
          <p>Login With Github</p>
           </div>
            </div>
        </div>
    );
};

export default LoginPage;