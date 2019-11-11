  document.write("Hello")
  function isToday(dateParameter) {
        var today = new Date();
        return dateParameter.getDate() == today.getDate() && dateParameter.getMonth() == today.getMonth() ;
}
name = ['Goku','Vegetta','Gohan','Picollo','Trunks'];
contact = [123,456,789,012,643];
var date2= new Date('11-11')
var dates = [new Date( '11-11'),new Date( '11-11'),new Date( '12-11'),new Date( '10-11'),new Date( '11-11')];
for(i=0;i<5;i++){
a = isToday(new Date(dates[0]));
if(a == true)
 {document.writeln(name[i]);
 document.writeln(contact[i]);
}}

