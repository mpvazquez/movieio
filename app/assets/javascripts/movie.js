var MovieModel = Backbone.Model.extend({
  urlRoot: "/movies"
});

var MovieCollection = Backbone.Collection.extend({
  model: MovieModel,
  url: '/movies'
});

//how individual movies appear 
var MovieView = Backbone.View.extend({
  tagName: "li",

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = $("script.template").html();
    console.log(template);
    var rendered = _.template(template, { movie: this.model });
    this.$el.html(rendered);
    console.log(rendered);
  }
});

var MovieList = Backbone.View.extend({
  el: "ul",

  initialize: function() {
    this.listenTo(this.collection, "add", this.addOne);
  },

  addAll: function() {
    this.collection.each(this.addOne.bind(this));
  },

  addOne: function(movie) {
    var view = new MovieView({model: movie});
    this.$el.append(view.el);
  }
});

$(document).ready(function() {
  var movies = new MovieCollection();
  var movieList = new MovieList({collection: movies});
  // movies.fetch({ reset: true});
});