import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

//Apilerde güncelleme için put, ekleme için post kullanılacak.Ancak güncelleme ve eklemeyi postlada yapabiliyorlar.
export function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ""),//product.id||"" gönderilen product'un id si varsa onu koy yoksa hiçbirşey koyma
        {
            method: product.id ? "PUT" : "POST",
            headers: { "content-type": "application/json" }, //eğer bizim apimiz bizden farklı headerlar istiyorsa bu content type olabilir , autenizasyon olabilir
            body: JSON.stringify(product) //body bu "(fetch("yukarıdaki adres"))" adrese gönderdiğimiz datadır.
        })
        .then(handleResponse)
        .catch(handleError);
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct => {
            product.id ? dispatch(updateProductSuccess(savedProduct)) 
            : dispatch(createProductSuccess(savedProduct)) //product id varsa updateProductSuccess aksiyonunu çalıştır ve savedProduct'ı yolla değilse createProductSuccess aksiyonunu çalıştır.
        }).catch(error=>{throw error})
    }
}

export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }

    const error = await response.text()
    throw new Error(error)
}

export function handleError(error){
    console.log("bir hata oluştu")
    throw error;
}



export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}