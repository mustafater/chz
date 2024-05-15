import { gql} from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
const fetchLists=async(

    category?: Categorty | string ,
    keywords?:string  ,
    isDynamic?:boolean
)=>{
    // GraphQl query
    const query =gql`
        query MyQuery(
            $access_key:String
            $keywords:String
           
           ){
        myQuery(access_key:$access_key
            keywords:$keywords
           
            
           
            ){
            data{
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination{
                count
                limit
                offset
                total
            }
        }
    }`;
    
      const apı= "bd1f34611baa3ef4de140824c53626ef";
      // Fetch  function   for caching
      const res = await fetch("https://jaguaruna.stepzen.net/api/truculent-aardwolf/__graphql",{
        method:'POST',
        cache: isDynamic ? "no-cache" : "default",
        next : isDynamic ? {revalidate:0} : {revalidate:20},
        headers:{
            "Content-Type": "application/json",
            "Authorization" : `APIKey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query : query,
            Variables:{
                access_key:process.env.MEDIASTACK_API_KEY,
                keywords:keywords,
            },
           
        }),
      });
      
      const NewsResponse = await res.json();

      //Sort function by image and not image 
      const  news = sortNewsByImage(NewsResponse.data.myQuery);
      return news;

};

export default fetchLists;

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=bd1f34611baa3ef4de140824c53626ef&research=business,sport"

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=bd1f34611baa3ef4de140824c53626ef&counries=tr%2Cgb&limit=100&offset=0&sort=published_desc"