
// Handles all the functionality of choosing another word that
// the user typed in
// api for testing 
// https://random-word-api.herokuapp.com/word

export function sagefy(word, index, setSagePhrase, sagePhrase, apiKey, tempArr) {

    let wordList = [];
    let shadowSage = tempArr;


    let url = "https://api.api-ninjas.com/v1/thesaurus?word=" + word;
    const requestOptions = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey
        }
    }
    async function getData() {
        try {
            let response = await fetch(url, requestOptions)
            let data = await response.json();
            // console.log(data);
            // console.log(data.synonyms)
            wordList = data.synonyms.slice(1, 20);
            chooseWord();
        } catch (error) {
            console.log(error)
        }
    }

    function chooseWord() {
        if (wordList.length === 0 || word.length < 3) {
            word = word
        } else {
            let randNum = Math.floor(Math.random() * wordList.length)
            word = wordList[randNum];
        }
        if (word.slice(-1) === "e" || word.slice(-1) === "E"){// check if the word ends in 'e' to add th
            if (word.toLowerCase() === "the") {
                word = word
            }else {
                word = word + "th";
            }
        }
        shadowSage.splice(index, 1, word)
        // if (index === 0) {
        //     shadowSage.unshift(word)
        // } else {
        //     shadowSage.splice(index, 1, word)
        // }

        setSagePhrase([...shadowSage]);
        console.log(sagePhrase)
        //setSagePhrase(sagePhrase => [...sagePhrase, word])
    }

    getData();
}