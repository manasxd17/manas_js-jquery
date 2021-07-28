
const par = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
const arr = par.match(/[^\.!\?]+[\.!\?]+/g);

let flag = 1;
for(let x of arr){
    if(x.split('').length > 3){
        var a = `${flag}. ${x.replace(/[0-9]\d{9}/g, "XXXXXXXXXX")}`;
        console.log(a);
        flag++
    }
}


//ques2

const qTeam = {
	aaiec : 400,
	aaiwc : 60,
    qai: 200, 
	poc: 100,
	gtm: 50,
	hr: 10
	};


var arr = [];
for( var key in qTeam ){
	arr.push([key,qTeam[key]])
}

arr.sort((a,b) => b[1]-a[1])

var objAgain = {}
arr.forEach((element) => objAgain[element[0]] = element[1])
console.log(objAgain)

