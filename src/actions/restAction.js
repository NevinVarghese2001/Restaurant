import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restConstant";




//api to access all restaurant data
export const getRestaurants=async (dispatch)=>{
    try{
        const {data}=await axios.get('/restaurants.json')
        console.log(data.restaurants);
        dispatch(
            {
            payload:data.restaurants,
            type:SUCCESS
        }
        )
    }
    catch(err){
        dispatch(
            {
            payload:err,
            type:FAIL
        }
        )
    }
}
