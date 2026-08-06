//function overloading
/**
 * duplicate function aalowedd in java script but always latest function get called
 * function overloading not possible in java script
 */

function search() {
    console.log('Hi');
}

function search(productName) {
    console.log('Hello', productName);
}

function search(productName, price){
    console.log(`Product info: Product name: ${productName} and price: ${price}`);
}


search(); //Product info: Product name: undefined and price: undefined
search('iphone');//Product info: Product name: iphone and price: undefined
search('Moto', 3000); //Product info: Product name: Moto and price: 3000

