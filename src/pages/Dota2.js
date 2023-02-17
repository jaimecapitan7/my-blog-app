import '../css/homepage.css';


function Dota2() {
    return(
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-md pt-5">
                            <h1 className="text-primary">DOTA 2</h1>
                            <p className="lead">
                            Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character known as a "hero" that all have unique abilities and differing styles of play.
                            </p>
                            <p className="lead">
                            During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base.
                            </p> 
                        </div>
                    </div>
                    <div className="col-md py-xl-5">
                        <p className='lead'>
                        Development of Dota 2 began in 2009 when IceFrog, lead designer of Defense of the Ancients, was hired by Valve to design a modernized remake for them in the Source game engine. It was released for Windows, OS X, and Linux via the digital distribution platform Steam in July 2013, following a Windows-only open beta phase that began two years prior.
                        </p>
                    </div>
                    <div className="col-md">
                        <p className='lead'>
                        The game is fully free-to-play with no heroes or any other gameplay element needing to be bought or otherwise unlocked. To maintain it, Valve supports the game as a service, selling loot boxes and a battle pass subscription system called Dota Plus that offer non-gameplay altering virtual goods in return, such as hero cosmetics and audio replacement packs. The game was ported to the Source 2 engine in 2015, making it the first game to use it.
                        </p>
                    </div>
                    <div className="col-md">
                        <p className='lead'>
                        Dota 2 has a large esports scene, with teams from around the world playing in various professional leagues and tournaments. Valve manages an event format known as the Dota Pro Circuit, a series of tournaments that award qualification points for earning direct invitations to The International, the game's premier tournament held annually. Internationals feature a crowdfunded prize money system that has seen amounts in upwards of US$40 million, making Dota 2 the most lucrative esport.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dota2;