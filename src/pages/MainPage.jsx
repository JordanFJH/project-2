import { useState } from "react";


function MainPage() {
    let [desc, setDesc] = useState(false);
    let [sageChoice, setSageChoice] = useState(false);

    function sageDescription() {
        return (
            <>
                <h4 class="text-2xl p-4">This is a page that will help you generate content for picture social media like Instagram.
                    You put in a normal sentence, and with some API magic it generates another sentence that sounds much more in depth.
                    Once you have a quote or sentence you're happy with, you can even pair it with a random image to make it look better.  Give it a try.
                </h4>
            </>
        )
    }

    function synDescription() {
        return (
            <h4 class="text-2xl p-4">
                This is a game that both quick wit and reflexes.  A random word will be provided to you and you'll have to find a certain amount of
                either antonyms and/or synonyms to win.  The amount will be random every round!  And did I mention you only have 30 seconds to find them?
                You can do it though!!
            </h4>
        )
    }

    return (
        <div className="main-page">
            <div className="intro">
                <h2>Click one to get more info:</h2>
                <div>
                    <div onClick={() => { setDesc(true); setSageChoice(true) }} className="main-page-choice"><h1>InstaInstagram</h1></div>
                    <div onClick={() => { setDesc(true); setSageChoice(false) }} className="main-page-choice"><h1>SynAntMatch</h1></div>
                </div>
            </div>
            {desc && <section className="descriptions">
                {sageChoice ? sageDescription() : synDescription()}
            </section>
            }

        </div>
    );
}

export default MainPage;