class CompletedLessonsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_completed_lesson, only: [:show, :edit, :update, :destroy]

  # GET /completed_lessons
  # GET /completed_lessons.json
  def index
    @completed_lessons = CompletedLesson.all
  end

  # GET /completed_lessons/1
  # GET /completed_lessons/1.json
  def show
end

  # GET /completed_lessons/new
  def new
    @completed_lesson = CompletedLesson.new
  end

  # GET /completed_lessons/1/edit
  def edit
  end

  # POST /completed_lessons
  # POST /completed_lessons.json
  def create
    @completed_lesson = CompletedLesson.new(completed_lesson_params)
    @completed_lesson.user = current_user
    @completed_lesson.save
    
    respond_to do |format|

      if @completed_lesson.save
        format.html { redirect_to @completed_lesson, notice: 'Completed lesson was successfully created.' }
        format.json { render :show, status: :created, location: @completed_lesson }
      else
        format.html { render :new }
        format.json { render json: @completed_lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /completed_lessons/1
  # PATCH/PUT /completed_lessons/1.json
  def update
    respond_to do |format|
      if @completed_lesson.update(completed_lesson_params)
        format.html { redirect_to @completed_lesson, notice: 'Completed lesson was successfully updated.' }
        format.json { render :show, status: :ok, location: @completed_lesson }
      else
        format.html { render :edit }
        format.json { render json: @completed_lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /completed_lessons/1
  # DELETE /completed_lessons/1.json
  def destroy
    @completed_lesson.destroy
    respond_to do |format|
      format.html { redirect_to completed_lessons_url, notice: 'Completed lesson was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_completed_lesson
      @completed_lesson = CompletedLesson.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def completed_lesson_params
      params.require(:completed_lesson).permit(:lesson_id)
    end
end
