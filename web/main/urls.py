from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('archive', views.archive, name='archive'),
    path('auth', views.auth),
    path('contacts', views.contacts),
    path('create-news', views.create_news),
    path('current-news', views.current_news),
    path('current-manager', views.current_manager),
    path('editorial-board', views.editorial_board),
    path('editors', views.editors),
    path('form-archive', views.form_archive),
    path('form-contact', views.form_contact),
    path('form-event', views.form_event),
    path('form-expert', views.form_expert),
    path('form-managers', views.form_managers),
    path('form-news', views.form_news),
    path('info-for-autors', views.info_for_autors),
    path('managers', views.managers),
    path('news', views.news),
    path('', views.index),
]