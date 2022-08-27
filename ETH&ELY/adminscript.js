
 function changecolor (color){
  console.log('Hi');
    if (color== 'halloween')
      {
        document.getElementById("sidebarColor").style.backgroundColor = '#f08a64';
        document.getElementById("sidebarColor").style.color = '#000000';
        document.getElementById("linkscolor").style.color = '#000000';    //NOT WORKING !!!
        document.getElementById("navcolor").style.backgroundColor = '#000000';
        document.getElementById("navcolor").style.color = '#f08a64';
        document.getElementById("bodyColor").style.backgroundColor = '#000000';
        document.getElementById("bodyColor").style.color = '#f08a64';
          //how to put a shadow????
          alert('Do you want to change the website theme to the Halloween theme? x_x');
      }
    else if (color=='valentine')
      {
        document.getElementById("sidebarColor").style.backgroundColor = "#000000";
        document.getElementById("sidebarColor").style.color = '#c15f5f';
        document.getElementById("linkscolor").style.color = '#c15f5f';    //NOT WORKING !!!
        document.getElementById("navcolor").style.backgroundColor = '#c15f5f';
        document.getElementById("navcolor").style.color = '#000000';
        document.getElementById("bodyColor").style.backgroundColor = '#c15f5f';
        document.getElementById("bodyColor").style.color = '#000000';
        alert('Do you want to change the website theme to the Valentine theme? <3');

      }
    else if (color=='Default')
      {
        document.getElementById("sidebarColor").style.backgroundColor = "#000000";
        document.getElementById("sidebarColor").style.color = '#ffffff';
        document.getElementById("linkscolor").style.color = '#ffffff';    //NOT ACTUALLY WORKING but i put it in case the other would !!!
        document.getElementById("navcolor").style.backgroundColor = '#ffffff';
        document.getElementById("navcolor").style.color = '#000000';
        document.getElementById("bodyColor").style.backgroundColor = '#ffffff';
        document.getElementById("bodyColor").style.color = '#000000';
        alert('Do you want to change the website theme to the Default theme? :)');
      }
}

// var stringprice= document.getElementById('saleprice').innerHTML;
// let defaulPrice=parseInt(stringprice);
// function calcsales (sale)
// {
//   if(sale=='twenty')
//   {
//     document.getElementById("saleprice").innerHTML = defaulPrice*0.2;
//     alert('Do you want to put a 20% sale on the products? 0_0)');
//   }
//   else if (sale=='fifty')
//   {
//     document.getElementById("saleprice").innerHTML = defaulPrice*0.5;
//     alert('Do you want to put a 50% sale on the products? X_X');
//   }
//   else if (sale=='nosale')
//   {
//     document.getElementById("saleprice").innerHTML = defaulPrice;
//     alert('Do you want to put a 0% sale on the products? :| ');
//   }
// }

var p1= document.getElementById('p1').innerHTML;
let price1=parseInt(p1);
var p1= document.getElementById('p2').innerHTML;
let price2=parseInt(p2);
var p3= document.getElementById('p3').innerHTML;
let price3=parseInt(p3);
var p4= document.getElementById('p4').innerHTML;
let price4=parseInt(p4);
function calcsales (sale)
{
  if(sale=='twenty')
  {
    document.getElementById("p1").innerHTML = price1*0.2;
    document.getElementById("p2").innerHTML = price2*0.2;
    document.getElementById("p3").innerHTML = price3*0.2;
    document.getElementById("p4").innerHTML = price4*0.2;

    alert('Do you want to put a 20% sale on the products? 0_0)');
  }
  else if (sale=='fifty')
  {
    document.getElementById("p1").innerHTML = price1*0.5;
    document.getElementById("p2").innerHTML = price2*0.5;
    document.getElementById("p3").innerHTML = price3*0.5;
    document.getElementById("p4").innerHTML = price4*0.5;
        alert('Do you want to put a 50% sale on the products? X_X');
  }
  else if (sale=='nosale')
  {
    document.getElementById("p1").innerHTML = price1;
    document.getElementById("p2").innerHTML = price2;
    document.getElementById("p3").innerHTML = price3;
    document.getElementById("p4").innerHTML = price4;
        alert('Do you want to put a 0% sale on the products? :| ');
  }
}
