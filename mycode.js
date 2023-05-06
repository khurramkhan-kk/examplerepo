/*object and properties simple example:

--- english courses:
there are three basic plans: 1. Basic, Intermediate, advance
basic: {fee: 50 $, teachername, course_duration: 2months, coursetype: online/onside, discountedamount}



*/

// function englishcourse(){

//     var fee=50;
//     var teachername= "abc";
//    this.course_duration= "2-months";
// }

// var basic = new englishcourse();

// alert(basic.course_duration);

// var Intermediate = new englishcourse();



// creating object with direct method---
/*
var advancelevel= {

    fee:"100",
    teacher:"kamran",
    course_duration: "3months"
}

var basic= {

fee: "50",
teacher: "ahsan",
course_duration: "2-Months",
coursetype: "onsite",
caldiscount: function(){
var discountedamount;
     no_of_students = parseInt(prompt("How many students join this course in group"));

     if (no_of_students == 4){
discountedamount = this.fee* (40/100);

alert("discountedamount on 4 students==="+discountedamount)

     }
else if( no_of_students >=6){

    discountedamount = this.fee* (60/100);
    alert("discountedamount on 6 or above students==="+discountedamount)
}
    
     }
    // agr, 4 students join in group, then will give 40%
    // agr 6, students join in group, then will give 60%



}



var staffMember = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

var yourfullname= staffMember.fullName();

console.log(yourfullname);
// console.log(staffMember.fullName());

//  basic.caldiscount();

// document.write("Course_type==="+basic.coursetype+" course fee=="+basic.fee);

*/


//============ Objects with constructor =========

// function hostingplans(name,price,space,transfer,pages,discountMonths){
// this.name=name;
// this.price=price;
// this.space=space;
// this.transfer=transfer;
// this.pages=pages;
// this.discountMonths=discountMonths;

// this.calAnnual= function(discount_percentage){
// var bestprice= this.price;
//     var current_date= new Date();
//     var curr_month= current_date.getMonth();

//     for( var i=0; i<this.discountMonths.length; i++){

//         if(this.discountMonths[i]==curr_month){

//                bestprice= this.price * discount_percentage;
//                break;
//         }
//     }

// return bestprice *12;
// }

// }

// // hostingplans.prototype.calAnnual= function(discount_percentage){
// //     var bestprice= this.price;
// //         var current_date= new Date();
// //         var curr_month= current_date.getMonth();
    
// //         for( var i=0; i<this.discountMonths.length; i++){
    
// //             if(this.discountMonths[i]==curr_month){
    
// //                    bestprice= this.price * discount_percentage;
// //                    break;
// //             }
// //         }
    
// //     return bestprice *12;
// //     }

// var basic = new hostingplans("basic",3.99,100,1000,10,[7,3]);

// var result=basic.calAnnual(.8);

// alert("this is discounted amount=="+result);
// // alert(basic.price);

// var professional= new hostingplans("professional",5.99,500,5000,50,[4,6]);

// var result2 =professional.calAnnual(.3);

// document.write("this is another object result==professional=="+result2);


// let's take the example of bank account for object ===

// var bankaccount ={

//     account_no: "123456",
//     balance: 0,
//     account_title: "Hammad",
//     bankname: "HBL",
//     Iban_no: 'HBL123456',
//     Currency: 'PKR'


// }

// var savingaccount = {

    
//     account_no: "123456",
//     balance: 0,
//     account_title: "Hammad",
//     bankname: "HBL",
//     Iban_no: 'HBL123456',
//     Currency: 'PKR',
//     interest_rate: 
// }

// how to reduce your code by using jAVASCRIPT OBJECT WITH CONSTRUCTOR===

/*
function bankaccount(account_no,account_title,Currency,Iban_no,bankname){

    var balance=200;
this.Currency=Currency;
this.Iban_no=Iban_no;
this.account_no=account_no;  
this.bankname= bankname;
this.balance=balance;
this.account_title=account_title;


// method  in constructor object=======
this.desposit=function(amount){

    if(amount<=0){
        alert("please enter valid amount to deposit");
    }

    else{

        balance +=amount;
        alert("your new balance is=="+balance); 
    }

}
this.withdraw=function(amount){

    if(amount<=0 ||amount>balance){
        alert("please enter valid amount to withdraw");
    }

    else{

        balance -=amount;
        alert("your new balance is=="+balance); 
    }

}


}

var savingaccount= new bankaccount('445522','Hammad','PKR','HBL445522',"HBL");

//savingaccount.desposit(parseInt(prompt("enter your desposit ammount")));
// document.write("balance is this==="+savingaccount.balance);

var currentaccount = new bankaccount('884422','Uzair','PKR','UBL884422',"UBL",'500');
savingaccount.withdraw(20);

*/


//============browser control methods ==============


function savebrowserhistory(){

    var arr_url234= [];
    var browserurl= location.hostname;
var anotherurl = window.location.hostname;
    arr_url.push(browserurl);

  for (var i=0; i<arr_url.length; i++){

    if (arr_url234[i]==anotherurl){

    alert("your are browsing un secure websites");
    }

    else{

        window.open("https://www.google.com");
    }
  }

}

savebrowserhistory();