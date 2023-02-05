 let Name = prompt("Whats Your Name ")
 
 if(Name == null || Name == ""){
    txt = "Enter Your Name"

}else {
    // txt = "welcom" +" "+ Name
} 
alert (txt)



let Gender = prompt ("Enter Your Gender (male ,female)")
if (Gender == "male" ){
    
text1 = "welcome Mr " + Name
}

else if (Gender == "female"){
    text1 = "welcome Mrs "+ Name
}

else{
    text1 = "welcom + you should add your gender"
}
alert (text1)



let Age = prompt("Enter Your age ")
 if (Age <= 0 || Age == null){
text2 = "Your age must be more than zero"
 } else{
    // alert (conf)
 }
alert (text2)   



let conf = confirm ("Do you want to skip the welcoming message ?")


if (conf == true){
  conf1 = "hiiii";
}
else {
    conf1=("close the page");
}
alert(conf1)




 



// alert(conf1)