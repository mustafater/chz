"use client";
import { useRouter } from 'next/navigation';
import {FormEvent, useState}from 'react'

function Search() {
  const [input, setInput]=useState("");
  const router = useRouter()
  const formSearch=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!input) return ;

    router.push(`/components/search?term=${input}`);
  }

  return (
  
    <form onSubmit={formSearch}
    className="container flex items-center justify-between space-x-6 mx-auto  max-w-6xl  py-3
      px-5">
        <input type="text" placeholder="Searching..." 
          onChange={(e)=>setInput(e.target.value)}
          className="w-full h-14 rounded-sm flex-1
         placeholder-gray-300 text-yellow-600 outline-none 
          bg-transparent py-3 px-4  " />
        <button type="submit"
        disabled={!input}
        className="text-yellow-600 disabled:text-gray-300"
        >Search</button>
       

    </form>

  );
}

export default Search