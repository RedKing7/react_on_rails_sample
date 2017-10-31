class Api::SongsController < ApplicationController
  def index
    @songs = Artist.find(params[:artist_id]).songs.all
    render json: @songs
  end

  def create
    @artist = Artist.find(params[:artist_id])
    @song = Song.new(song_params)
    @artist.songs << @song
    @artist.save!

    # render status: :ok #--sometimes we don't need anything back
    render json: @song
  end

  def show
    @song = Song.find(params[:id])
    render json: @song
  end

  def update
    @song = Song.find(params[:id])
    @song.update!(song_params)
  end

  def destroy
    @song = Song.find(params[:id]).delete
    render status: :ok
  end

  private

  def song_params
    params.require(:song).permit(:title, :album)
  end
end
