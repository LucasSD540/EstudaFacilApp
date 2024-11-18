from django.core.mail import send_mail
from django.shortcuts import render
from decouple import config
from django.shortcuts import render, redirect
from django.contrib import messages
from users.models import User
from django.utils.crypto import get_random_string
import hashlib

def generate_reset_token(user):
    token = get_random_string(32)
    token_hash = hashlib.sha256((str(user.id) + token).encode()).hexdigest()
    return token, token_hash

def send_password_reset_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        user = User.objects.filter(email=email).first()
        
        if user:
            token, token_hash = generate_reset_token(user)
            user.reset_token = token_hash
            user.save()

            reset_link = f"https://lucassd770.pythonanywhere.com/api/estudafacilapp/reset-password/{user.id}/{token}/"
            send_mail(
                'Redefinição de Senha',
                f'Clique aqui para redefinir sua senha: {reset_link}',
                config("EMAIL_HOST_USER"),
                [email],
                fail_silently=False,
            )
            messages.success(request, 'E-mail de redefinição de senha enviado! Verifique sua caixa de entrada.')
            return render(request, 'email_confirmation.html')
        else:
            messages.error(request, 'E-mail não registrado.')
    return render(request, 'send_password_reset_email.html')

def reset_password(request, user_id, token):
    user = User.objects.get(id=user_id)
    token_hash = hashlib.sha256((str(user.id) + token).encode()).hexdigest()

    if request.method == 'POST':
        new_password = request.POST.get('new_password')
        user.set_password(new_password)
        user.reset_token = None
        user.save()
        messages.success(request, 'Senha redefinida com sucesso!')
        return redirect('https://estuda-facil-app.vercel.app/login')

    if user.reset_token == token_hash:
        return render(request, 'reset_password.html', {'user_id': user_id, 'token': token})
    else:
        messages.error(request, 'Token inválido ou expirado.')
        return redirect('https://estuda-facil-app.vercel.app/login')
    