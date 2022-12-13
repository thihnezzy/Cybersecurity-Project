import axios from 'axios';

const url = 'http://172.30.150.117/products';

export const fetchProducts = () => axios.get(url);
export const fetchSingleProduct = (id) => axios.get(`${url}/${id}`);
export const createProduct = (data) => axios.post(url, {data})

export const getProductsNumber = () =>{
    if (JSON.parse(localStorage.getItem('products') === null))
        return 0;
    const data = JSON.parse(localStorage.getItem('products'));
    let count = 0;
    for (let i = 0 ;i < data.length; i++){
        count += data[i].quantity;
    }
    return count;

}
export const getLocalStorage = (term = 'products') => {
    if (JSON.parse(localStorage.getItem(term) === null))
        return [];
    return JSON.parse(localStorage.getItem(term));
}

export const postLocalStorage = (product, increase = true) =>{
    const data = getLocalStorage('products');
    let added = false;
    data.forEach(element => {
        if (element._id === product._id && increase){
            if (product.quantity !== 1){
                element.quantity += product.quantity;    
            }else
                {element.quantity +=1;}
            added = true;
        }else if (element._id === product._id && !increase && element.quantity > 1){
            element.quantity -=1;
            added = true;
        }
    });
    if (!added && increase){
        data.push(product);
        console.log(product);
    }
    localStorage.setItem('products', JSON.stringify(data));
}
function removeObjectWithId(arr, id) {
    return arr.filter((obj) => obj._id !== id);
  }
export const removeItemLocalStorage = (productId) =>{
    const data = getLocalStorage('products');
    const newData = removeObjectWithId(data, productId);
    localStorage.setItem('products', JSON.stringify(newData));
}
export const removeAllItemsLocalStorage = () =>{
    localStorage.removeItem('products');
}