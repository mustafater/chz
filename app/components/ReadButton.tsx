'use client'

import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

type Props = {
 article:DataEntry
};

function ReadButton({article}:Props) {
    const router=useRouter();
    
    const handleClick = ()=>{
        const queryString = Object.entries(article)
            .map(([key, value])=>`${key}=${value}`)
            .join("&");
            const url = `/components/article?${queryString}`;
            console.log(url);
            router.push(url);
    }
  return <button
  onClick={handleClick}
  className="bg-yellow-600 h-10 rounded-b-lg hover:bg-yellow-800"
  >
    Read More...
  </button>
}

export default ReadButton