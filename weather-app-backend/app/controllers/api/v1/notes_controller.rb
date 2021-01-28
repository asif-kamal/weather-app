class Api::V1::NotesController < ApplicationController

    def index
    end

    def create
        @notes = Note.all
    end

end
