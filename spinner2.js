const characters = '|/-\\';

const delayIncrement = 200;
let delay = 0;

for (let i = 0; i < 3; i++) {
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write('\r' + char + '   ');
    }, delay);
    delay += delayIncrement;
  };
};

setTimeout(() => {
  console.log();
}, delay);