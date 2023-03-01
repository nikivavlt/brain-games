### Description
Brain Games - is a console application written using JavaScript (Node.js), consisting of 5 built-in games (Click on the name of the game to see how it works):
1. [Brain-even](https://asciinema.org/a/bL3ZjIsq6V3V0Qt6SdQlPnr7a) - player must answer is the number even or no.
2. [Brain-calc](https://asciinema.org/a/TeG4JQbP3Pq56cT4kDL3It0FG) - player must calculate the result of the expression.
3. [Brain-gcd](https://asciinema.org/a/rtIhOR6yc6N4njLENRYivRhOW) - player must find the greatest common divisor of given numbers.
4. [Brain-progression](https://asciinema.org/a/SRv5IfmGCKLKyOs7psbocav5E) - player must answer the number, which is missing in the progression.
5. [Brain-prime](https://asciinema.org/a/wWEML67DswvxNs1Kh6B6bA9Mn) - player must answer is the number prime or no.

The player should answer 3 questions correctly. Otherwise, he or she will lose.


### Project structure
Games can be started using short commands, which consists "package.json". These commands run files from the "bin" (bin/brain-games.js) directory. The file of each game calls the file from the "games" directory, which contains unique variable (game rules) and game related functions. The general logic of all games is placed in "src" directory (src/index.js).

### Linter status:
<a href="https://codeclimate.com/github/nikivavlt/brain-games/maintainability"><img src="https://api.codeclimate.com/v1/badges/ff80a8b88e8794aae287/maintainability" /></a>
