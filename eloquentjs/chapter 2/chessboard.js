//answer from author
let size = 8;
let output = "";
for (let i = 0; i < size; i++){
	
	for(let j = 0; j < size; j++){
		if ((i+j)%2==0) output += " ";
		else output += "#";
		
	}
	output = output + "\n";
}

console.log(output);
//my answer
let size = 8;
for (let i = 0; i < size; i++){
	let output = "";
	for(let j = 0; j < size; j++){
		if (i%2==0&&j%2==0) output += " ";
		else if(i%2==0)output += "#";
		else if(i%2==1 && j%2==0) output +="#";
		else output += " ";	
	}
	console.log(output + "\n");
}