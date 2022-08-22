const addToDb = (id) => {
    let shoppintCart;

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppintCart = JSON.parse(storedCart);
    }
    else {
        shoppintCart = {};
    }

    const quantity = shoppintCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppintCart[id] = newQuantity;
    }
    else {
        shoppintCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppintCart));

}

const removeFromDb = (id) => {

}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
};
