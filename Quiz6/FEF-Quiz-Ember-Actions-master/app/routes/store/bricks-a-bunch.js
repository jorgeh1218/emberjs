import Ember from 'ember';

export default Ember.Route.extend({
  warehouse: Ember.inject.service('brick-warehouse'),
  shoppingCart: Ember.inject.service('shopping-cart'),
  model() {
    return this.get('warehouse').getRedBricks();
  },
  actions: {
	addToCart(color, size, prize)
	{ 
		this.get('shoppingCart').addToCart(color,size,prize);
		this.get('warehouse').decreaseBrickQuantity(color, size); //Decrease the number of bricks
	}
  }
  
});
