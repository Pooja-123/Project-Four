class ContactsController < ApplicationController
  def index
    puts params
    @contacts =Contact.all
    # render json: @contacts
  end

  def show
    @contact = Contact.find(params[:id])
    render json: @contact
  end

  def create
    @contact = Contact.new( name: params[:name], email: params[:email], active: params[:active])

    if @contact.save
      render 'show', formats: [:json], handlebars: [:jbuilder], status: 201
    else
      render json: {error: "Contact could  be created"}
    end
  end
  def update
          if @story.update_attributes(title: params[:story][:title])
            render 'show', formats: [:json], handlers: [:jbuilder], status: 200
          else
            render json: { error: "Story could not be updated." }, status: 422
          end
        end

    def destroy
      @contact = Contact.find(params[:id])
      if @contact.destroy
        render json: {}, status: 200
      else
        render json: {error: "contact could not be deleted"}, status: 422
      end
    end

    private
    def find_contacts
      @contact= contact.find(params[:id])
    end
  end
