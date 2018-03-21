var SearchView = Backbone.View.extend({

  el: '.search',
  events:{
    'click button': 'handleClick()',
    'keyup .form-control' : 'handleKeyup',
    'change #auto-play': 'handleCheck'
  },
  
  handleClick: function(){
    var query = this.$el.find('.form-control').val();
    this.collection.search(query);
  },
  
  handleKeyup: function(e){
    if (e.keyCode === 13) {
      var query = this.$el.find('.form-control').val();
      this.collection.search(query); 
    }
  },
  
  handleCheck: function(e){
    if(e.currentTarget.checked){
      this.collection.autoPlay = true;
    } else {
      this.collection.autoPlay = false;
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
