
Th.Application = Em.Application.extend({

  ready: function() {

    this.initStore();
    this.loadData();

    console.log('app is ready');
    var categories = App.store.findAll(Th.Category);
    var events = App.store.findAll(Th.Event);

    var view = Th.LandingScreenView.create({
      container: this.__container__,
      categories: categories,
      //selectedCategory: App.store.find(Th.Category, 1),
      selectedCategory: Th.CategoryAllType,
      isAsideLeft: false,
      events: events
      //events: null
    });
    view.appendTo('#init-app');

    App.view = view;

  },


  loadData: function() {
    App.store.findAll(Th.Category);
    App.store.findAll(Th.Event);
  },

  initStore: function() {

		this.store = DS.Store.create({
			revision: 12,
      adapter: 'DS.FixtureAdapter'
		});

  }

});
App = Th.Application.create({});

Ember.lookup.App = App;
