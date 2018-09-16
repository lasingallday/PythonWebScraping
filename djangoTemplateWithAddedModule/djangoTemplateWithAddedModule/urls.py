from django.conf.urls import include, url
from django.contrib import admin

# Import the view:
from . import views
from addedModule.views import addedModule

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home),
    url(r'', addedModule)

]
