const messages = [
  "I love dogs",
  "Programming...",
  "Step by step",
  "If it works, don't touch it",
  "Eat - Sleep - Code - Repeat ",
  "Think twice, code once",
  "Errors are our friends",
  "If you can imagine it, you can code it",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[35m${message}\x1b[0m`);
}

module.exports = {
  funnyCommit
};