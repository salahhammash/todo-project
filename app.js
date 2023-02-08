`use strict`


 let Name = prompt("Whats Your Name ")
 
 if(Name == null || Name == ""){
    txt = "Enter Your Name"
    prompt("Whats Your Name ")

}else {
    // txt = "welcom" +" "+ Name
    txt = ""
} 
// alert (txt)



let Gender = prompt ("Enter Your Gender (male ,female)")
// while ( Gender !== male || Gender !== female ){

//     prompt ("Enter Your Gender (male ,female)")
//     } 
    
    
if (Gender == "male" ){
    
text1 = "welcome Mr " + Name
}

else if (Gender == "female"){
    text1 = "welcome Mrs "+ Name
}

else{
    text1 = prompt ("Enter Your Gender again (male ,female )")
    // "welcom + you should add your gender"
}
alert (text1)



let Age = prompt("Enter Your age ")
 if (Age <= 0 || Age == null){
text2 = "Your age must be more than zero"
 } 
 else{
    text2 =" you can git in"
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











 let arr =[] ;

let q1 = prompt ("Do you like our page ? \n yes or no")

let q2 = prompt ("Do you like swimming  ? \n yes or no")

let q3 = prompt ("Do you like running 3 ?\n yes or no")


const firstAnswer = (y) =>{

    if (y == "yes" || y == "no"){
        arr.push(y);
    }else{
       arr.push("invalid");
    }

}


firstAnswer(q1);
firstAnswer(q2);
firstAnswer(q3);


const loops = () =>{
for (let i= 0 ; i < arr.length ; i++){

    console.log( arr[i]);
}

}
loops();
 










