// var Movie = function(movie) {
//   this.title = movie.title;
//   this.seen = movie.seen;
// }

MovieModel = Backbone.Model.extend({
  url: "/movies"
});