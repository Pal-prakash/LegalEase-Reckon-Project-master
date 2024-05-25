from django.shortcuts import render
from .models import User
import json
from django.contrib.auth import authenticate, login , logout
from django.http import HttpResponse,JsonResponse
from django.template.loader import render_to_string
from datetime import datetime


def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        full_name = data.get('full_name')
        email = data.get('email')
        password = data.get('password')

        if not (full_name and email and password):
            return JsonResponse({'error': 'Please provide full_name, email, and password'}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)

        user = User.objects.create_user(full_name=full_name, email=email, password=password)
        if user:
            return JsonResponse({'message': 'User registered successfully'}, status=201)
        else:
            return JsonResponse({'error': 'Failed to register user'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)




def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email', '')
        password = data.get('password', '')
        
        user = authenticate(request, email=email, password=password)
        
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)



def logout_user(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            logout(request)
            return JsonResponse({'detail': 'Logout successful'}, status=200)
        else:
            return JsonResponse({'error': 'User is not authenticated'}, status=401)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)




def generate_pdf(request):

    if request.method == "POST":
        # if request.user.is_authenticated :
            print(request.body)
            print(datetime.today().strftime("%d-%m-%y"))
            load=json.loads(request.body)
            context={
                  "nameOfLandlord":load.get('nameOfLandlord'),
                  "fatherName":load.get("fatherName"),
                  "address" : load.get("address"),
                  "date":datetime.today().strftime("%d-%m-%y"),
                  
                  "nameOfTenant":load.get("nameOfTenant"),
                  "propertyNumber":load.get("propertyNumber"),
                  "rent":load.get("rent"),
                  "dateOfCommencement":load.get("dateOfCommencement"),
                  "place":load.get("place")
                    }
            
            
            pdf_content=render_to_string('test.html',context)
            pdf_response = HttpResponse(content_type='template/pdf')
            pdf_response['Content-Disposition'] = 'filename="bill.pdf"'

            # helpers.render_pdf(template='bill.html',file_=pdf_response,context=context)
            pdf_response.write(pdf_content)

            return pdf_response
        # else:
        #     return JsonResponse({'message':'You are not looged in'},status=401)
        
    else:
        return JsonResponse({'message':'Invalid request method'},status=405)


