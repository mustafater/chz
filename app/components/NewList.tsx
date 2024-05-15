import Article from "./News";

type Props = {
    news:NewResponse;
}

function NewList({news}:Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    
         {news.data.map((article ) => (
            <Article key={article.title} article={article} />
         ))}
        
    </main>
  )
}

export default NewList