function translator(string) {
  const vowel=["a","e","i","o","u"];
  const word= string.split("");
  for (let index=0; index<vowel.length; index++) {
    if (vowel[index] === word[0]) {
      word.push("way");
      // word.join('');
      
      return word.join('');
    } else {
      return false
    }
  }
  
}


