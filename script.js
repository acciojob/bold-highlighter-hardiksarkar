let boldText = Array.from(document.getElementsByTagName("strong"));
function highlight() {
    //Write your code here
	boldText.forEach((elem)=>{
        elem.style.color="green";
    })

}


function return_normal() {
    //Write your code here
boldText.forEach((elem)=>{
        elem.style.color="black";
    })
    
}
