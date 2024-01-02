
// Handles all the functionality of choosing another word that
// the user typed in
// api for testing 
// https://random-word-api.herokuapp.com/word
import { useState } from "react";

export function sagefy(word, setSagePhrase, sagePhrase, newWord, setNewWord) {

    const apiKey = import.meta.env.Vite_Key;
    let url = "https://api.api-ninjas.com/v1/thesaurus?word=" + word;
    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': apiKey
        }
    }
    async function getData() {
        try {
            let response = await fetch("https://random-word-api.herokuapp.com/word")
            let data = await response.json();
            console.log(data);
            word = data[0];
            chooseWord();
        } catch (error) {
            console.log(error);
        }
    }

    function chooseWord() {
        if (word.slice(-1) === "e" || word.slice(-1) === "E"){// check if the word ends in 'e' to add th
            if (word.toLowerCase() === "the") {
                word = word
            }else {
                word = word + "th";
            }
        }
        setSagePhrase(sagePhrase => [...sagePhrase, word])
    }

    getData();
}