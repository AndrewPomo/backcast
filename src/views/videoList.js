var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  // exampleVideoData = this.collection

  render: function() {
    this.$el.html(this.template());
    this.$el.find('.video-list').empty();
    this.collection.each(function(video) {
      var videoView = new VideoListEntryView({'model': video});
      this.$el.find('.video-list').append(videoView.render().$el);
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
