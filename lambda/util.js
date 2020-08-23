const characters = ['batman', 'superman', 'iron man', 'captain america'];

module.exports.getCharacter = function getCharacter(hero) {

    if (!hero) return 'characterNotFound';
    return characters[characters.indexOf(hero.toLowerCase())];
}