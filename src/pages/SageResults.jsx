
function SageResults({ setShowResult, phrase }) {
    return (
        <div>
            <button onClick={() => setShowResult(false)}>Return to Smartical</button>
            <h1>This is the page for the Sage results</h1>
            <h2>{phrase.join(" ")}</h2>
        </div>
    );
}

export default SageResults;