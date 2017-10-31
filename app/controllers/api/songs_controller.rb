class Api::SongsController < ApplicationController
  def index
    @songs = Artist.find(params[:artist_id]).songs.all
    render json: @songs
  end

  def create
    @song = Song.create!(song_params)
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
    @song = Song.find(params[:id])
    @song.destroy
  end

  private

  def song_params
    params.require(:song).permit(:title, :album, :preview_url, :artist_id)
  end
end
