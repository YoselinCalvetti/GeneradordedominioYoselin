let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < adj.length; h++) {
      for (let t = 0; t < adj.length; t++) {
        console.log(pronoun[i] + " " + adj[j] + " " + noun[h] + " " + ext[t]);
      }
    }
  }
}
