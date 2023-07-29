import React from 'react';
import { GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

const LoginPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-white p-6 gap-4'>
            <div className=' w-full md:w-60 shadow-lg h-40 bg-slate-700 rounded  flex flex-col justify-center items-center gap-4'>
                <h4>Login</h4>
            <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
            </div>
        </div>
    );
};

export default LoginPage;