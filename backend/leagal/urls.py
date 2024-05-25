
from django.urls import path
from leagal import views

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('generate-pdf/', views.generate_pdf, name='pdf'),
]
