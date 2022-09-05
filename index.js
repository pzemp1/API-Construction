const express = require('express');
const app = express()

//Middleware, so if I do have a req.body, MIDDLEWARE already does the JSON parsing
app.use(express.json())
const PORT = 8084;

/*
Use Hash Maps
Response time will be quicker, quicker checks too and therefore
easier implementations. However, it can be space ineffecient. 
*/

const fs = require('fs');
var RawData = fs.readFileSync('data.json')
var ArtistData = JSON.parse(RawData)

var ArtistToGenre = new Map(); 
var GenreToArtists = new Map(); 
for (let i = 0; i < ArtistData.length; ++i) {
    let x = ArtistData[i]
    ArtistToGenre.set(x['name'].toLowerCase(), x['genre'].toLowerCase())
    if (!GenreToArtists.has(x['genre'].toLowerCase())) {
        GenreToArtists.set(x['genre'].toLowerCase(), [x['name']])
    } else {
        GenreToArtists.get(x['genre'].toLowerCase()).push(x['name'])
    }
}

app.listen(
    PORT, 
    () => {
        console.log(`It's alive on http://localhost:${PORT}`)   
    }
)


/*
    Feedback
    When it comes to writing API softwares, we need to consider
    user experiences based on the person calling the APIs. 

    Firstly, we should provide a schema which gives a visual 
    representation that is easy and quick to understand for 
    users, using this API. 

    Secondly, the parameters that I have need to be 
    intuitive to the user, it should be somewhat indicative
    of what the user might think, so for example I should change
    /GetArtistsInGenre/:id
    to
    /GetArtistsInGenre/:genre

    Thirdly, when designing code we should look at Object Oriented
    Principles, so we can design easy to understand and flexible 
    solutions as API code bases may undergo a lot of different
    changes. 

    For every new function that I have written, TDD is an important
    aspect of developing code, it helps the developer think of 
    different cases and scenarios as well as providing and ensuring
    the robustness of the API. 

*/


/*
    I've only been using respone codes 200 and 400,
    as they best fit our current possible scenarios. 
    Eg, catching exceptions. 
*/

app.get('/GetArtistsInGenre/:id', (req, res) => {
    const { id } = req.params //query parameter
    //Check if ID exists or not. 
    if (GenreToArtists.has(id.toLowerCase())) {
        res.status(200).send({
            genre: id, 
            artists : GenreToArtists.get(id.toLowerCase())
        })
    } else {     
        res.status(400).send()
    }
})




// Additional Requests which were made for fun.
app.get('/GetArtists/:id', (req, res) => {
    const { id } = req.params
    if (ArtistToGenre.has(id.toLowerCase())) {
        res.status(200).send({
            artist : id, 
            genre: ArtistToGenre.get(id.toLowerCase())
        })
    } else {
        res.status(400).send()
    }
})

app.get('/GetAllArtists', (req, res) => {
    res.status(200).send({ 
        artists : [... ArtistToGenre.keys()]
    })
})

app.get('/GetAllGenres', (req, res) => {
    res.status(200).send({ 
        genres : [... GenreToArtists.keys()]
    })
})