class ShoppingCart {
    constructor(){
        this.items = [];
    }
    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price){
        const extraItem = {
          name: itemName,
          quantity: quantity,
          pricePerUnit: price
        }
        this.items.push(extraItem)
    }

    clear(){
        this.items = [];
    }

    duplicate(){
      const newShopCart = new ShoppingCart()
      this.items.map(cart => {
          newShopCart.addItem(cart.name, cart.quantity, cart.pricePerUnit)
          return cart
        })
      return newShopCart
    }
}

module.exports = { ShoppingCart }
