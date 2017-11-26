var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

var avg = (...args) => args.reduce((a, b) => a+b) / args.length

console.log(avg(...args));

//    var rawArgs = process.argv.slice(2);
//     var args = [];
    
//     rawArgs.forEach(val => {
//       let commaSep = val.split(',');
//       commaSep.forEach(val => {
//         if(val !== '') args.push(+val);
//       });
//     });
    
//     function correct_avg(...args){
//       return args.reduce((a, b)=>a+b)/args.length;
//     }
    
//     console.log(avg(...args));