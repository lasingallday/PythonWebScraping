# Using this tutorial: 
# https://realpython.com/python-web-scraping-practical-introduction/

from django.http import HttpResponse
from django.shortcuts import render
from utils.scraper import *
from utils.parse_scraped import *
from json import dumps
import json


def home(request):
    page = 1                # Keep track of pages of dogs
    allUrlParsedList = []   # Store raw html as list.
    keep_parsing = True     # Boolean to tell us when to stop looking through urls.
    rawHTMLStr =  ""        # For storing raw html as a string.

    while keep_parsing:
        url = 'https://toolkit.rescuegroups.org/j/3/list3_layout.php?petfocus_0=204&location_0=&distance_0=&resultSort_0=animalName&resultOrder_0=asc&page_0='\
            + str(page)\
            + '&searchString_0=&action_0=search&animalID=undefined&toolkitIndex=0&toolkitKey=nxhKP5s7'
        raw_html = simple_get(url)

        # Grab url here just so we know if we should keep looping to grab more.
        url_parsed = parse_html(raw_html)

        # If we have data, keep grabbing more pages of data.
        if url_parsed:
            page = page + 1
            keep_parsing = True
            allUrlParsedList.append(raw_html)
        else:
            keep_parsing = False

    # Data comes back as byte so have to convert it to a string to concat.
    for eachUrl in allUrlParsedList:
        rawHTMLStr = rawHTMLStr + str(eachUrl)

    # parse html and get it in json format.
    rawHTMLParsed = parse_html(rawHTMLStr)
    jsonDumped = json.dumps(rawHTMLParsed)
    
    return HttpResponse(jsonDumped, content_type='application/json')   