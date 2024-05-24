import React from "react";
import client from '../api.js'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () =>{
    const [pin,setPin] = useState('')
    const [error1,setError1] = useState(null)
    const [error2,setError2] = useState(null)
    const [message,setMessage] = useState(null)

    const VerifyPin = async () => {
        try {
          const response = await client.get(`auth/verify-pin/${pin}/`);
          if (response.status === 200) {
            setMessage('Pin is still valid!');
            setError1(null);
            setError2(null);
          }
        } catch (error) {
          setMessage(null);
          setError1(null);
          setError2('Invalid or Expired pin.');
          console.error('Error:', error);
        }
      };

    return(
        <>
            <section className="min-h-screen bg-cpurple flex items-center justify-center">

            <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto w-full md:h-screen lg:py-0">

                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-100 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    FPAPinGenerator
                </a>
                <div className="w-full py-8 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="space-y-4 md:space-y-6" >
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin</label>
                                <input type="text" onChange={(e) => setPin(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot matric number?</a>
                            </div>
                            <button onClick={()=> VerifyPin()} className="w-full text-white bg-cpurple hover:bg-cpurple_light focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verify</button>
                                { message &&(<h1 className="text-md text-center text-emerald-600">{message}</h1>)}
                                { error1 &&(<div className="text-md bg-yellow-400">{error1}</div>)}
                                { error2 &&(<h1 className="text-md text-center text-pink-600">{error2}</h1>)}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have a pin? <Link to={'/new-pin'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">New pin</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Index