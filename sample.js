var a = new Date('2013-11-05');
var b = new Date('2013-11-05');
var c = new Date('2013-11-05');
var d = new Date('2013-11-05');

if(a.getTime() == b.getTime()) {
	console.info("a equals b");
} 
else {
	console.log("a NOT equals b");
}
date1 = new Date();
         date1.setHours(0,0,0,0);
         date2 = new Date( "Nov 11, 2019" );
         if (date1.getTime() === date2.getTime())
            console.log("true");
Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}
 
function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        var day = currentDate.getDate()
        var month = currentDate.getMonth()+1
        var year = currentDate.getFullYear()
        dateArray.push(day+"/"+month+"/"+year )
        currentDate = currentDate.addDays(7);
    }
    return dateArray;
}
 
var dateArray = getDates((new Date()).addDays(2), (new Date()).addDays(90));
 
console.log(dateArray);
