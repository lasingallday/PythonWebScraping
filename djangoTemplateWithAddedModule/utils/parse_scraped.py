from bs4 import BeautifulSoup

def parse_html(raw_html):
    html = BeautifulSoup(raw_html, 'html.parser')
    pet_info_list = []

    # Grab each individual element.
    petName = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalName'})
    petImage = html.find_all('img', {'class': 'rgtkSearchPetPicImg'})
    petGender = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalSex'})
    petAge = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalGeneralAge'})
    adoptionFee = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalAdoptionFee'})
    breed = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalBreed'})
    coat = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalCoatLength'})
    lastUpdated = html.find_all('div', {'id': 'rgtkSearchPetInfoAnimalUpdatedDate'})

    last_pet_name = len(petName)

    # Loop through each item and append to list as a dict using current counter.
    for counter in range(0, last_pet_name):
        pet_info_list.append({
            "Name": (str(petName[counter].text).split('Name: ')[1]).split('*')[0].strip(),
            "original": str(petImage[counter]['src']), 
            "gender:": str(petGender[counter].text).split('Gender: ')[1].strip(),
            "age:": str(petAge[counter].text).split('General Age:')[1].strip(),
            "fee:": str(adoptionFee[counter].text).split('Adoption fee:')[1].strip(),
            "breed:": str(breed[counter].text).split('Breed:')[1].strip(),
            "coat:": str(coat[counter].text).split('Coat Length:')[1].strip(),
            "lastUpdated:": str(lastUpdated[counter].text).split('Last updated:')[1].strip()
        })

    return pet_info_list