
The purpose of this API is to extract information from the data.json file
from the web. 

The assumptions which were made:

1. The formatting of the JSON file will not change. 
2. There will probably be more data added on later. 
3. There will be no duplicates of artists, for examples
   an artist can only represent one genre. 
4. You will not have 2 different strings whereby the only
   difference is the actual case of the letters, so all upper/lower
   case strings are accepted as inputs. 

Instructions: 

To filter a request of artists based on genre, we have to do the following.

1. http://localhost:8084//GetArtistsInGenre/:id

Now note that :id can be replaced by any GENRE, so for example:

http://localhost:8084/GetArtistsInGenre/other

here :id = other

Now, the output we end up getting is:


{
	"genre": "other",
	"artists": [
		"?",
		"SRKP",
		"Yann Tiersen",
		"YOka",
		"Sayvinyl",
		"Ululation",
		"707 Team",
		"Division Of Laura Lee",
		"Ennio Morricone",
		"Orchestra Di Rockford Kabine",
		"The Amazing Phillips Sisters",
		"456 Productions",
		"Deela",
		"Storytellers",
		"Alyasha",
		"Boac",
		"Bully",
		"Colin Potter",
		"Combine",
		"Craig Fox",
		"Deadxbeat",
		"Early Man",
		"EKP",
		"El Stew",
		"Elliot",
		"Fluf",
		"Gas Huffer",
		"Gloritone",
		"Goat",
		"GOD",
		"Growing",
		"Happy Go Licky",
		"Hive",
		"Le Mix Tape Delux",
		"Liam the Younger",
		"Living Keys Music",
		"Phillip Drummond",
		"Puffball",
		"Renee Renee",
		"Sebastien Daurel",
		"Styles Of Beyond",
		"Tanner",
		"The Four Tops",
		"The Goat & The Occasional Others",
		"X",
		"Zigitros",
		"Zoeangel"
	]
}

So in short we have 

{
    genre: given_string, 
    artists: [list of artists, who are apart of this genre]

}

2. I will demonstrate this with the use of Insomnia. (An Api testing tool, which is nice to use.)