import Ember from 'ember';

export default Ember.Route.extend({
	model(){
    return this.store.query('classunit', { orderBy: 'day', equalTo: 4 } );
	}
});
