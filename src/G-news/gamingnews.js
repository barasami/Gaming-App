import axios from "axios";

const Url='https://free-to-play-games-database.p.rapidapi.com/api/filter'

const options = {
    params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
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