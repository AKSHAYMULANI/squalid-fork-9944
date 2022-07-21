import axios from "axios";

export function getProducts(product_type){
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${product_type}`)
}

export function addProductApi({ type,title,desc,color,price,imgUrl }) {
    return axios({
      url: `https://sephora-unit-4.herokuapp.com/posts/`,
      method: "POST",
      data: {
        type,
        title,
        desc,
        color,
        price,
        imgUrl
      }
    });
  }