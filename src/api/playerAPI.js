const PlayerAPI = {
	players: [
		{ number: 1, name: 'Ben', position: 'G' },
		{ number: 2, name: 'Dave', position: 'D' },
		{ number: 3, name: 'Sam', position: 'D' },
		{ number: 4, name: 'Matt', position: 'M' },
		{ number: 5, name: 'William', position: 'M' },
		{ number: 6, name: 'Fillipe', position: 'F' }
	],
	all: function() {
		return this.players;
	},
	get: function(id) {
		const isPlayer = p => p.number === id;
		return this.players.find(isPlayer);
	}
}

export default PlayerAPI;