for (let i=0; i<=10;i++) {
    //console.log(i)
}

let i = 0;
while(i<=10) {
    //console.log(i++)
}

let j = 0;
do {
   // console.log(j++)
} while (j<=10)

//---------------------------//

let str = 'abcdefg'
for (let i=0;i<str.length;i++) {
    //console.log(str[i])
}
//----------------------------//

let arrFunc = (str) => {
    for (let i=0;i<str.length;i++) console.log('arrFunc', str[i])
}

function expFunc(str) {
    for (let i=0;i<str.length;i++) console.log('expFunc', str[i])
}

const decFunc = function(str) {
    for (let i=0;i<str.length;i++) console.log('decFunc', str[i])
}
