function ageCalculate(){
    //document.getElementById('age').InnerHtml
  // document.getElementById("demo").InnerHtml=4+5;
   //document.write="Hi";
   var birthDate =document.getElementById('birth_date').value;

//if(birthDate==""){
  //  alert("Choose correct birthdate.")
//}else{
  //  alert(birthDate);
  //  alert(Date());
    var d = new Date(birthDate);

   // document.getElementById("age").innerHTML = d;

//}

        var mdate = birthDate.toString();
        var yearThen = parseInt(mdate.substring(0,4), 10);
        var monthThen = parseInt(mdate.substring(5,7), 10);
        var dayThen = parseInt(mdate.substring(8,10), 10);
        
        var today = new Date();
        var birthday = new Date(yearThen, monthThen-1, dayThen);
     //   alert(today.valueOf() + " " + birthday.valueOf());
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
      //  alert(differenceInMilisecond);
        
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }
        
        var month_age = Math.floor(day_age/30);
        
        day_age = day_age % 30;
        
        var tMnt= (month_age + (year_age*12));
        var tDays =(tMnt*30) + day_age;
        
        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
        }
        else {
            document.getElementById("age").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"
            + " <span style='color:#ba2323;font-size:18px'>This is your age </span><br/> </br>" 
            + tMnt + " months " + day_age + " days" 
            + " <span style='color:#ba2323;font-size:18px'>This is month and days from your age </span><br/></br>" 
            +  tDays + " days" 
            + " <span style='color:#ba2323;font-size:18px'>This is Your Age in Days </span><br/></br>" 
            +  tDays*24 + " hours" 
            + " <span style='color:#ba2323;font-size:18px'>This is Your Age in Hours </span><br/></br>" 
            +  tDays*24*3600 + " seconds" 
            + " <span style='color:#ba2323;font-size:18px'>Your Age in Seconds </span><br/></br>" 
            +  tDays*24*3600*1000 + " miliseconds"
            + " <span style='color:#ba2323;font-size:18px'>Your Age in Miliseconds </span><br/></br>"  ;
        }

}