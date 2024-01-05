 
 
 export function CheckSelection({ chosen, setChosen, thisWord }) {
    if (chosen >= 3) {
        return
    }
    setChosen(chosen + 1)
        console.log(thisWord)
 }