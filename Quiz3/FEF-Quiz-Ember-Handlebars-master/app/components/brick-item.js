import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['col-sm-4 well'],
	tagName:"div",
	classNameBindings: ['sale:on-sale']
});
