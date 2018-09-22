# Using this tutorial: 
# https://realpython.com/python-web-scraping-practical-introduction/

from django.http import HttpResponse
from django.shortcuts import render
from utils.scraper import *
from utils.parse_scraped import *
from json import dumps

def home(request):
    #return HttpResponse("Hello world!")
    return render(request, 'home.html')

def about(request):
    url = 'https://toolkit.rescuegroups.org/j/3/list3_layout.php?petfocus_0=204&location_0=&distance_0=&resultSort_0=animalName&resultOrder_0=asc&page_0=1&searchString_0=&action_0=search&animalID=undefined&toolkitIndex=0&toolkitKey=nxhKP5s7'
    raw_html = simple_get(url)

    url_parsed = parse_html(raw_html)

    return render(
        request, 'about.html',
        {'urlParsed': dumps(url_parsed)}
    )








