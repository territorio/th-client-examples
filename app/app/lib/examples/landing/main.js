console.log('main landing');

Th.Application = Em.Application.extend({

  ready: function() {

    console.log('app is ready');
    var view = Th.LandingScreenView.create();
    view.appendTo('#init-app');

  }

});

App = Th.Application.create({});
