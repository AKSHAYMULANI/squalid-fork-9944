import axios from "axios";

export function getProducts(product_type){
    return axios.get(`https://sephora-unit-4.herokuapp.com/posts?type=${product_type} `)
}

export function getPriceFiltered(product_type,min,max){
  return axios.get(`https://sephora-unit-4.herokuapp.com/posts?type=${product_type}&price_gte=${min}&price_lte=${max}
  `)
}

export function getProductQuery(query){
  return axios.get(`https://sephora-unit-4.herokuapp.com/posts?q=${query}
  `)
}

export function getPricefilterSort(product_type,min,max,sort){
  return axios.get(`https://sephora-unit-4.herokuapp.com/posts?type=${product_type}&price_gte=${min}&price_lte=${max}&_sort=price&order=${sort}
  `)
}
export function getPriceSort(product_type,sort){
  return axios.get(`https://sephora-unit-4.herokuapp.com/posts?type=${product_type}&_sort=price&order=asc
  `)
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