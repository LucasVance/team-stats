const team  = {
    _players: [
        {firstName: 'Jonah', lastName: 'Small', age: 13},
        {firstName: 'Declan', lastName: 'Taylor', age:12},
        {firstName: 'Harrison', lastName: 'Bays', age: 12}
    ],
    get players() {
        return this._players;
    },

    _games: [
        {opponent: 'Paso Robles', teamPoints: 78, opponentPoints: 66},
        {opponent: 'San Luis Obispo', teamPoints: 89, opponentPoints: 113},
        {opponent: 'Templeton', teamPoints: 75, opponentPoints: 54}
    ],
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(newPlayer)
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let newGame = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };

        this.games.push(newGame)
    }
}

team.addPlayer('Steph', 'Curry', 33);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Nipomo', 96, 60);
team.addGame('Santa Maria', 89, 93);
team.addGame('Morro Bay', 112, 81);

console.log(team.players);
console.log(team.games);