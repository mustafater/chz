export default function sortNewsByImage (news:NewResponse){
    const newWithImage = news.data.filter((item)=>item !==null);
    const newWithoutImage=news.data.filter((item)=>item === null);
    const sortedNewsResponse:NewResponse ={
        pagination: news.pagination,
        data:[...newWithImage,...newWithoutImage],
    };
    return sortedNewsResponse;
}