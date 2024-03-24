from django.contrib.auth import authenticate, login, logout  
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def user_signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        password2 = request.POST['password2']
        email = request.POST['email']

        # Check if username is already taken
        if User.objects.filter(username=username , email=email).exists():
            return JsonResponse({'message': 'Username or Email is already taken'}, status=400)
        # Create the user
        user = User.objects.create_user(username=username, email=email, password=password,password2=password2)
        # Optionally, you can create a UserProfile instance as well
        
        return JsonResponse({'message': 'Signup successful'})
    else:
        return JsonResponse({'message': 'Only POST requests are allowed'}, status=405)
def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=400)
    else:
        return JsonResponse({'message': 'Only POST requests are allowed'}, status=405)

def user_logout(request):
    logout(request)
    return JsonResponse({'message': 'Logout successful'})


