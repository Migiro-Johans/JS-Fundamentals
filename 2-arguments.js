const Argument = process.argv.slice(2);
if (Argument.length === 0){
	console.log("No Argument")
}else if (Argument.length ===1){
	console.log("Argument found")
}else{
	console.log("Arguments found")
}

