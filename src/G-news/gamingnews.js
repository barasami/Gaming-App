import axios from "axios";

const Url='https://videogames-news2.p.rapidapi.com/videogames_news/search_news'

const options = {
    params: {query: 'GTA'},
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
    }
};

export const gameNews=async()=>{

    try{
        const getNews=await axios.get(Url,options)
        return getNews
    }
    catch(err){
        console.log(err);
    }

}