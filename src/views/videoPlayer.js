var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  autoPlay: false,

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.on('select', function(video) {
      if (this.collection.autoPlay) {
        video.attributes.autoplay = 1;
      } else {
        video.attributes.autoplay = 0;
      }
      this.$el.html(this.template(video));
    }, this);
  },

  render: function() {
    if (this.collection.autoPlay) {
      this.collection.models[0].attributes.autoplay = 1;
    } else {
      this.collection.models[0].attributes.autoplay = 0;
    }
    this.$el.html(this.template(this.collection.models[0]));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
