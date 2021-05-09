var names = ["Emma" , "john", "Tim" , "Celine", "James"]
function findGreeting (name){
	strNm=name;
	Array.from(name);
	for ( var i = 0 ; i< 1; i++){
		if((i==0 && name[i]=="J")||(i==0 && name[i]=="j")){
			console.log("Goodbye " + strNm);
			}
		else {
			console.log("Hello " + strNm);
		}
	}
}
for (i in names){
	findGreeting(names[i]);
}