require 'rails_helper'

RSpec.feature 'marking lessons as complete' do
  let!(:organisation) { FactoryBot.create(:organisation, :with_learning_manager_enabled, title: 'University of Life') }
  let!(:organisation_team_membership) { FactoryBot.create(:organisation_team_membership, organisation: organisation) }
  let(:inviter_email) { 'inviter@example.com' }
  let!(:inviter) { FactoryBot.create(:user, email: inviter_email) }
  let(:invitee_email) { 'invitee@example.com' }
  let!(:user) { FactoryBot.create(:user, email: invitee_email) }

  # when_i_go_to_the_home_page
  # and_i_click_on_a_lesson
  # then_i-get_redirected_to_the_login_page
  # and_i_log_in
  # and_i_go_to_x_page
  # and_i_click_the_lessons_tab
  # and_i_click_on_a_lesson
  # and_i_mark_it_as_complete
  # and_i_go_to_my_completed_lessons
  # then_i_see_my_completed_lessons
  # and_i_click_mark_as_incomplete
  # then_i_should_go_to_that_lesson_again

  scenario 'joining as a team member with Course Creator access' do
    given_i_have_a_valid_organisation_team_membership_invitation
    and_the_organisation_team_membership_has_a_permission_with_course_creator_access

    when_i_follow_the_invitation_link
    then_i_should_see_a_description_of_my_invitation
    and_my_email_address_should_be_prepopulated

    when_i_sign_in_to_accept_my_invitation
    then_i_should_be_taken_to_the_organisation_page_in_course_creator
    and_the_inviter_should_be_sent_a_notification_email
  end

  scenario 'joining as a team member with Learning Manager access only' do
    given_i_have_a_valid_organisation_team_membership_invitation
    and_the_organisation_team_membership_has_a_permission_with_learning_manager_access

    when_i_follow_the_invitation_link
    then_i_should_see_a_description_of_my_invitation
    and_my_email_address_should_be_prepopulated

    when_i_sign_in_to_accept_my_invitation
    then_i_should_be_taken_to_learning_manager
    and_the_inviter_should_be_sent_a_notification_email
  end

  def given_i_have_a_valid_organisation_team_membership_invitation
    @invitation = Invitations::OrganisationTeamMembership.create(inviter: inviter, email: invitee_email, organisation_team_membership: organisation_team_membership)
  end

  def and_the_organisation_team_membership_has_a_permission_with_course_creator_access
    FactoryBot.create(:organisation_admin_permission, organisation: organisation, organisation_team_membership: organisation_team_membership)
  end

  def and_the_organisation_team_membership_has_a_permission_with_learning_manager_access
    FactoryBot.create(:learning_manager_permission, organisation: organisation, organisation_team_membership: organisation_team_membership)
  end

  def when_i_follow_the_invitation_link
    visit invitation_path(@invitation)
  end

  def then_i_should_see_a_description_of_my_invitation
    expect(page.body).to have_content('You have been invited to join the University of Life team on FutureLearn.')
  end

  def and_my_email_address_should_be_prepopulated
    expect(page.body).to have_field('Email', with: invitee_email)
  end

  def when_i_sign_in_to_accept_my_invitation
    fill_in 'Password', with: user.password
    click_on 'Sign in'
  end

  def then_i_should_be_taken_to_the_organisation_page_in_course_creator
    expect(page.title).to include('University of Life - FutureLearn Course Creator')
  end

  def then_i_should_be_taken_to_learning_manager
    expect(page.title).to include('Learning Manager')
  end

  def and_the_inviter_should_be_sent_a_notification_email
    emails = ActionMailer::Base.deliveries.select do |email|
      email.to.include?(inviter_email) &&
        email.subject.include?('accepted') &&
        email.body.include?('accepted your invitation to join the University of Life team')
    end
    expect(emails.count).to eq(1)
  end
end
