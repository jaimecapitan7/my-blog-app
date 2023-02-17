
import { Link } from 'react-router-dom';
import '../css/homepage.css';

function Body() {
    return (
        <>
            <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center">
                        <div>
                            <h1><span className="text-warning">Steam</span></h1>
                            <p className="lead my-4">Steam is a video game digital distribution service and storefront by Valve. It was launched as a software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to distributing and offering third-party game publishers' titles in late 2005. Steam offers various features, like digital rights management (DRM), game server matchmaking, anti-cheat measures, social networking and game streaming services. It provides the user with automatic game updating, saved game cloud synchronization, and community features such as friends messaging, in-game chat and a community market.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>User Interface and Functions</h2>
                            <p className="lead">
                            Since November 2013, Steam has allowed for users to review their purchased games and organize them into categories set by the user and add to favorite lists for quick access. Players can add non-Steam games to their libraries, allowing the game to be easily accessed from the Steam client and providing support where possible for Steam Overlay features. The Steam interface allows for user-defined shortcuts to be added. In this way, third-party modifications and games not purchased through the Steam Store can use Steam features. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row text-center g-2">
                        <div className="col-md">
                            <div className="card bg-secondary text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-filetype-html"></i>
                                    </div>
                                    <h3 className="card-title mb-3">
                                        DOTA 2
                                    </h3>
                                    <p className="card-text">
                                    Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve. The game is a sequel to Defense of the Ancients (DotA), a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. 
                                    </p>
                                    <Link to='/dota2' className="btn btn-dark">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-secondary text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-filetype-css"></i>
                                    </div>
                                    <h3 className="card-title mb-3">
                                        CSGO
                                    </h3>
                                    <p className="card-text">
                                    Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. 
                                    </p>
                                    <Link to='/csgo' className="btn btn-dark">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-secondary text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-filetype-js"></i>
                                    </div>
                                    <h3 className="card-title mb-3">
                                        FreeStyle 2
                                    </h3>
                                    <p className="card-text">
                                    Freestyle 2: Street Basketball is a fast paced online arcade basketball game. Create your own unique player and compete in the online street league! Use variety of b-ball moves and customize your player!
                                    </p>
                                    <Link to='/freestyle2' className="btn btn-dark">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body;