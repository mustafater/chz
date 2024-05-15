import ReadButton from "./ReadButton";


type Props ={
    article:DataEntry;
}

function Article({article}:Props) {
  return ( 
    <article className="bg-slate-800  flex flex-col
    rounded-lg shadow-sm hover:scale-105 hover:shadow-lg
     transiton-all duration-200 ease-out" >
    
    {article.image && (
          <picture>
         <img
            src={article.image}
            alt={article.title}
            className="h-56 w-full object-cover rounded-t-lg shadow-md"
            />
            </picture>
         )}
    <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
            <h2 className="font-bold font-serif">{article.title}</h2>

            <section className="mt-2 flex-1">
                <p className="text-xs line-clamp-6">{article.description} </p>
            </section>
            <footer className="text-xs text-right ml-auto flex space-x-1">
                <p>{article.source}</p>
                <p>{article.published_at}</p>
            </footer>

        </div>
        {/** Read topic in more detail  */}
        <ReadButton article={article}/>
    </div>
  </article>
  )
}

export default Article