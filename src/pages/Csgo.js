import '../css/homepage.css';


function Csgo() {
    return(
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-md pt-5">
                            <h1 className="text-primary">Counter Strike Global Offensive</h1>
                            <p className="lead">
                            The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.
                            </p>
                            <p className="lead">
                            There are nine official game modes, all of which have distinct characteristics specific to that mode. The game also has matchmaking support that allows players to play on dedicated Valve servers, in addition to community-hosted servers with custom maps and game modes.
                            </p> 
                        </div>
                    </div>
                    <div className="col-md py-xl-5">
                        <p className='lead'>
                        Global Offensive received positive reviews from critics on release, who praised the game for its gameplay and faithfulness to the Counter-Strike series, though it was criticized for some early features and the differences between the console and PC versions. Since its release, it has drawn in an estimated 11 million players per month and remains one of the most played games on Valve's Steam platform. In December 2018, Valve transitioned the game to a free-to-play model, focusing on revenue from cosmetic items.
                        </p>
                    </div>
                    <div className="col-md">
                        <p className='lead'>
                        Global Offensive, like prior games in the Counter-Strike series, is an objective-based, multiplayer first-person shooter. Two opposing teams, the Terrorists and the Counter-Terrorists, compete in game modes to repeatedly complete objectives, such as securing a location to plant or defuse a bomb and rescuing or capturing hostages.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Csgo;