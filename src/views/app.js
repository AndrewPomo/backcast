var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // console.log(this.collection)
    this.videos = new Videos(this.collection);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      collection: this.videos 
    }).render();
    new VideoPlayerView({
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});


