function translator(string) {
  const vol=["a","e","i","o","u"];
  for (let i=0; i<vol.length; i++) {
    if (vol[i] === string) {
      return true;
    };
  }
  console.log("checked")
}

