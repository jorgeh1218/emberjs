import Ember from 'ember';

export default Ember.Route.extend({
	model()
	{
		/*return [
			
			{
				name:"Oatmeal",
				count: 182,
				price: 0.5,
				dozen:6.5
			},
			{
				name:"Peanut Butter",
				count: 102,
				price: 0.34,
				dozen:5.5
			},
			{
				name:"Shortbread",
				count: 115,
				price: 0.14,
				dozen: 2.5
			}
		];*/
		return Ember.$.get("/menu/model.json");
	}
});
