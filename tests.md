### specs
This function takes in english text and converts it to pig latin.

It follows the rules of pig latin which are:
  * For words beginning with a vowel, add "way" to the end.
  * For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
  * If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
  * For words beginning with "y", treat "y" as a consonant.

The function will then return the new string as pig latin.


### test suite
Describe: translator();


Test: "It recognizes a single vowel."
Code: translator("a");
Expected Output: True

Test: "It recognizes a vowel at the begining of a word."
Code: translator("art")
Expected Output: True

Test: "If a word begins with a vowel it will add way to the end of the word"
Code: translator("art")
Expected Output: "artway"

Test: "It takes an inputed string and creates an array of the words in that string"
code translator("Hi how are you");
output: ["hi", "how", "are", "you"]
