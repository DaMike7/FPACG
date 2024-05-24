import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  return (
      <section className="bg-white dark:bg-gray-900 mt-28">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-sm text-center">
                                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-primary-500">Oops!</h1>
                                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">404 Page Not Found.</p>

                                <Link to='/' className="inline-flex text-white bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-rose-500 my-4" >Back To Home</Link>
                            </div>   
                  </div>
      </section>
  );
}
