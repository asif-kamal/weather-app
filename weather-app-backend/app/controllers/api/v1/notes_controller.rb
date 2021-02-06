class Api::V1::NotesController < ApplicationController

    def index
        @notes = Note.all
        render json: @notes
        end
    

    def show
        @note = Note.find(params[:id])
        render json: @note
    end

    def create
        @note = Note.create(note_params)
        render json: @note
    end

    private

    def item_params
        params.require(:note).permit(:content, :city)
    end

end
