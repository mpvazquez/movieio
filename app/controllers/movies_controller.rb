class MoviesController < ApplicationController
  def index
    @movies = Movie.all

    # respond_to do |format|
    #   format.html { render :index }
    #   format.json { render json: @movies }
    # end
  end

  def create
    @movie = Movie.new(movie_params)
    @movie.poster_url = get_movie_poster(@movie.title)

    @movie.save
    render json: @movie
  end

  def update(title)
    @movie = Movie.find_by(title: title)
  end

  def get_movie_poster(title)
    format_title = title.gsub(" ", "%20")
    poster = JSON(HTTParty.get('http://www.omdbapi.com/?t=' + format_title))
    return poster["Poster"]
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :seen)
  end
end
