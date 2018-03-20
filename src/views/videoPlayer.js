var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function(){
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
