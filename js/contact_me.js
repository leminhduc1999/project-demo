function confirm(){
  var obj1 = document.getElementById("name");
  var obj2 = document.getElementById("email");
  var obj3 = document.getElementById("phone");
  var obj4 = document.getElementById("message");

  if(obj1.value == "" || obj2.value == "" || obj3.value == "" || obj4.value == "" ){
   alert("Chưa điền đầy đủ thông tin");
 
  }
  
}