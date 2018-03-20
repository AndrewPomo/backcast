var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.on('select', function(video) {
      this.$el.html(this.template(video));
    }, this);
  },
  


  render: function() {
    this.$el.html(this.template(this.collection.models[0]));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
