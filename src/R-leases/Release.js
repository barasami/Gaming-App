import axios from "axios";

const Url='https://steam-game-release.p.rapidapi.com/'

const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'steam-game-release.p.rapidapi.com'
    }
  };

export const releaseMovies=async()=>{
    try{
        const mydata=await axios.get(Url,options)
        return mydata
    }
    catch(err){
        console.log(err);
    }
}