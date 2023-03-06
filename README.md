### Code quality maintainability:
<a href="https://codeclimate.com/github/nikivavlt/brain-games/maintainability"><img src="https://api.codeclimate.com/v1/badges/ff80a8b88e8794aae287/maintainability" /></a>
### GitHub Actions:
![GitHub Actions](https://github.com/nikivavlt/brain-games/actions/workflows/main.yml/badge.svg)
___

### Description
Brain Games - is a console application written using JavaScript (Node.js), consisting of 5 built-in games:
1. Brain-even - player must answer is the number even or no.
2. Brain-calc - player must calculate the result of the expression.
3. Brain-gcd - player must find the greatest common divisor of given numbers.
4. Brain-progression - player must find the number, which is missing in the progression.
5. Brain-prime - player must answer is the number prime or no.

The player should answer 3 questions correctly. Otherwise, he or she will lose.
___
### Usage example:
> [![asciicast](https://asciinema.org/a/gjGSlgSVEnodyrDXuYhGA5njv.svg)](https://asciinema.org/a/gjGSlgSVEnodyrDXuYhGA5njv)
___
### Project structure
Application can be started using short command (Use: brain-games). This command run file from the "bin" (bin/brain-games.js) directory. Executed file calls index.js file that contains menu with games selection from the "games" directory. Each game contains unique variable (game rules) and game round generating function. The general logic of all games is placed in "src" directory (src/main-logic.js).
