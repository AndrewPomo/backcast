var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.$el.html(this.template());
    this.videos = new Videos(this.collection);
    console.log(this.videos);
    this.render();
  },


  render: function() {
    new VideoListView({
      collection: this.videos 
    }).render();
    new VideoPlayerView({
      collection: this.videos
    }).render();
    new SearchView({
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});


