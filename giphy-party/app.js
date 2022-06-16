// import { GiphyFetch } from '@giphy/js-fetch-api'



//Global Constants 
const apiKey = "putT1O5To601pBSgqOFfAGFMJsmmbbQ2"
const limit = 9;
const rating = 'G';
const gifContainer = document.querySelector (".gif-container")

const getResults =  async () => {
    let response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=puppy`);

    console.log(response)


    try{

    let responseData = await response.json()
    //console.log(responseData.data[0].images.original.url)
  
    //return responseData

    console.log (responseData)

    displayResults(responseData)

    }catch(e){
        console.log(e)
    }

    }
    
//let temp = getResults()


//getResults().then(responseData=> let temp = responseData)
//console.log('this', temp)
function displayResults (res){



    res.data.forEach(element => {
        gifContainer.innerHTML += `<img src = ${element.images.original.url}>`

        
    })
}




window.onload = function () {



    getResults()


    //displayResults()
}
