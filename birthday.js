console.log("hello");
function isToday(dateParameter) {
        var today = new Date();
        return dateParameter.getDate() == today.getDate() && dateParameter.getMonth() == today.getMonth() ;
}
name = ['Goku','Vegetta','Gohan','Picollo','Trunks'];
contact = [123,456,789,012,643];
var dates = [new Date( '11-11'), new Date( 11, 24), new Date( 11, 25)];

console.log("Is today ? ", isToday(new Date())); // true
console.log("Is today ? ", isToday(new Date('10-11'))); // false
console.log("Is today ? ", isToday(new Date('11-11')));//true
console.log("Is today ? ", isToday(new Date(dates[0])));//false
var a = isToday(new Date(dates[0]));
if(a == true)
 console.log("yes");
         date1 = new Date();

if(dates[0]== date1)
   console.log("yo");

/*
function print(k)
{
    for(i=0 ; i < 5; i ++)  
    {
     if(i==k)
         { 
            console.log(name[i]);  
            console.log(contact[i]);
         }
    }
}

*/

