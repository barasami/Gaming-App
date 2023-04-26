import axios from "axios";

const Url='https://epic-store-games.p.rapidapi.com/onSale'

export const onSale=async()=>{

    try{
        const data=await axios.get(Url,{
          params: {searchWords: 'GTA', locale: 'us', country: 'us'},
          headers: {
            'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
            'X-RapidAPI-Host': 'epic-store-games.p.rapidapi.com'
          }
        })
        return data
    }
    catch (err){
        console.log(err);
    }

}