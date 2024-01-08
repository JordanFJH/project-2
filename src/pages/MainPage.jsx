import { useState } from "react";


function MainPage() {
    let [desc, setDesc] = useState(false);
    let [sageChoice, setSageChoice] = useState(false);

    function sageDescription() {
        return (
            <>
                <h4 class="text-2xl">This is a page that will help you generate content for picture social media like Instagram.
                    You put in a normal sentence, and with some API magic it generates another sentence that sounds much more in depth.
                    Once you have a quote or sentence you're happy with, you can even pair it with a random image to make it look better.  Give it a try.
                </h4>
            </>
        )
    }

    function synDescription() {
        return (
            <h4>
                
            </h4>
        )
    }

    return (
        <div className="main-page">
            <div className="intro">
                <h2>Select one of the two components for more info:</h2>
                <div className="main-page-choices">
                    <div onClick={() => { setDesc(true); setSageChoice(true) }}><h1>Sage Wisdom</h1></div>
                    <div onClick={() => { setDesc(true); setSageChoice(false) }}><h1>SynAntMatch</h1></div>
                </div>
            </div>
            <section className="descriptions">
                {desc && <div>
                    {sageChoice ? sageDescription() : synDescription()}
                </div>}
            </section>
        </div>
    );
}

export default MainPage;