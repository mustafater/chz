"use client";
import { notFound } from "next/navigation"
import { CONTRACT} from "@/app/utils/constants"
import { useReadContract } from "thirdweb/react";
import Comment from "./Comment";

 

type Props={
    searchParams?:DataEntry
}





const page :React.FC = ({searchParams}:Props) =>{

  // eslint-disable-next-line react-hooks/rules-of-hooks
const { data:com, isLoading: isLoadingCount}= useReadContract({
  contract:CONTRACT,
  method:"getMessageAll"
});


    console.log(searchParams);
  if(
    (searchParams && Object.entries(searchParams).length ===0) ||
    !searchParams
  ){
    return notFound();
  }  
  const article:DataEntry=searchParams;


  return (
    <article>
        <section className="flex flex-col lg-flex-row pb-24 px-0 ">
          {article.image && (
            <picture>
            <img 
            className="w-full max-w-4xl mx-auto md:max-w-lx
            object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
            />
            </picture>
          )}      
        <div className="px-12 mx-20">
            <h1 className="headerTitle px-0 no-underline pb-2">
                {article.title}
            </h1>
            <div className="flex divide-x-2 space-x-4">
                <h2 className="font-bold"> {article.author }</h2>
                <h2 className="fond-bold pl-4"> Source: {article.source}</h2>
                <p className="pl-4">{article.published_at}</p>
            </div>
            <p className="pt-4">{article.description}</p>
            <h1 className="text-4xl font-mono font-extrabold py-3">Comment</h1>
           
               
              
        </div>
        <div className="space-y-3.5">
       {com?.map((c)=>(
        <Comment  key={c.title} com={c}/>
          ))}
        </div>
        </section>
        
       
    </article>
  )
}

export default page
