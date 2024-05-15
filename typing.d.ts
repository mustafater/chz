
type DataEntry ={
    author: string | null;
    category: string ;
    country: string | null;
    description:string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
 };
 
 
 
 type Pagination = {
     count:Int;
     limit:Int;
     offset:Int;
     total:Int;
 };
 

 
 type NewResponse = {
     pagination:Pagination;
     data: DataEntry[];
     
     
 
 };
 
 
 type Categorty=
 |"ERC20"
 |"ERC721"
 |"ERC1155"
 |"Title4"
 |"Title5"
 |"Title6"
 ;