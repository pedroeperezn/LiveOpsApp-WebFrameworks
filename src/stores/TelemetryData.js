//Copyright Pedro E Perez 2023

export default class TelemetryData
{
    constructor(){

        this.data = 
        {
            eventTimeStanp:0, //data for game (time)
            userID: "User_1", //String, hash of unique user ID
            sessionID:"abcdeef", //GameSession "instance" of the game c:
            eventName: "playerWins", //What happened in the game
            caseName: "God of War",
            clientVersion: "1.01.1",
            levelName:"Alley",
            levelPosition:"{x: 0.0, y:0.0, z: 0.0}",
            levelTime: 23.56,
            platform: "SteamDeck",
            userCountry: "Mexico"
        }


    }

    populate(cloudData) 
    {

    }

    serialize()
    {
        return JSON.stringify(this.date)
    }
}