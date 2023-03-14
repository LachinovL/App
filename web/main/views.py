from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'main/index.html')

def auth(request):
    return render(request, 'main/auth.html')

def archive(request):
    return render(request, 'main/archive.html')

def contacts(request):
    return render(request, 'main/contacts.html')

def create_news(request):
    return render(request, 'main/create-news.html')

def current_manager(request):
    return render(request, 'main/current-manager.html')

def current_news(request):
    return render(request, 'main/current-news.html')

def editorial_board(request):
    return render(request, 'main/editorial-board.html')

def editors(request):
    return render(request, 'main/editors.html')

def footer(request):
    return render(request, 'main/footer.html')

def form_archive(request):
    return render(request, 'main/form-archive.html')

def form_contact(request):
    return render(request, 'main/form-contact.html')

def form_event(request):
    return render(request, 'main/form-event.html')

def form_expert(request):
    return render(request, 'main/form-expert.html')

def form_managers(request):
    return render(request, 'main/form-managers.html')

def form_news(request):
    return render(request, 'main/form-news.html')

def header(request):
    return render(request, 'main/header.html')

def info_for_autors(request):
    return render(request, 'main/info-for-autors.html')

def managers(request):
    return render(request, 'main/managers.html')

def news(request):
    return render(request, 'main/news.html')

def pagination(request):
    return render(request, 'main/pagination.html')

