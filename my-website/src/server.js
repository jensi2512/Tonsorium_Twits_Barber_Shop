import axios from "axios";

const CART_API = "http://localhost:3003/cart"
const PERSONAL_DETAILS_API = "http://localhost:3003/PersonalDetails_data";

const postCart = async (obj) => {
    try {
        await axios.post(CART_API, obj)
    } catch (error) {
        console.log(error)
    }
}

const getCart = async () => {
    try {
        const response = await axios.get(CART_API)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const getPersonalDetails = async () => {
    try {
      const response = await axios.get(PERSONAL_DETAILS_API);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const postPersonalDetails = async (obj) => {
    try {
      await axios.post(PERSONAL_DETAILS_API, obj);
    } catch (error) {
      console.log(error);
    }
  };
  


export {postCart, getCart,getPersonalDetails,postPersonalDetails}