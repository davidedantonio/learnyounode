var args = process.argv.slice(2, process.argv.lenght);

var sum = 0;
for (var i = 0; i < args.length; i++) {
  if (isNaN(Number(args[i])))
    continue;
  sum += Number(args[i]);
}

console.log(sum);