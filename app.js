 let Name = prompt("Whats Your Name ")
 if(Name == null || Name == ""){
    txt = "Enter Your Name"
 }else {
    txt ="welcom" +" "+ Name
} 
// alert (txt)



let Gender = prompt ("Enter Your Gender (male ,female)")
if (Gender == "male" ){
text1 = "welcome Mr " + Name
}else if (Gender == "female"){
    text1 = "welcome Mrs "+ Name
}
else{
    text1 = "welcom "
}
alert (text1)







 let Age = prompt("Enter Your age ")
 if (Age <= 0 || Age == null){
text2 = "Your age must be more than zero"
 } else{
    // text2 ="welcome 2"
 }
alert (text2)



let conf = confirm ("Do you want to skip the welcoming message ?")


// if (conf == true){
//   conf1 = ("welcom ") ;
// }
// else {
//     conf1=("hello ");
// }
// alert(conf1 + text1)