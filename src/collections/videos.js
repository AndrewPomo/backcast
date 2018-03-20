var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  key: window.YOUTUBE_API_KEY,
  
  parse: function(response){
    return response.items;
  },
  
  search: function(queryString){
    this.fetch({
      data:{
        q: queryString,
        key: this.key,
        maxResults: 5,
        videoEmbeddable: true,
        part: 'snippet',
        type: 'video'
      },
      success: function (data) {
        // console.log(data);
      },
      error: function (data) {
        // console.log("fail");
      }
    });
  }
});