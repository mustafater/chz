import fetchLists from "../../../lib/fetchLists"
import NewsList from "../NewList"

type Props = {
    searchParams?:{term:string};

}

async function search({searchParams}:Props) {
    const news:NewResponse =await fetchLists(
        "general",
        searchParams?.term,
        true
        
    );

  return (
    <div>

        <h1 className="headerTitle">
            Search Results  {searchParams?.term}

        </h1>
        <NewsList news={news} />
    </div>
  )
}

export default search