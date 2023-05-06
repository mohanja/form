let div=document.createElement("div")
div.setAttribute("class","form")

let h1=document.createElement("h4")
h1.innerHTML="your deteles sumbits"

let form=document.createElement("form")
form.setAttribute("id","FORM1")
form.setAttribute("name","myForm")

let label=document.createElement("label")
label.setAttribute("for","name")
label.innerHTML="Fist Name:"
let br=document.createElement("br")
let input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","fistName")

function AddData(event){
    event.preventDefault();
 
var name= document.getElementById("fistName").value;
var namel= document.getElementById("lastName").value;
var address= document.getElementById("address").value;
var address1= document.getElementById("addressLine").value;
var pin= document.getElementById("pin").value;
var state= document.getElementById("state").value;
var country= document.getElementById("country").value;
var items=document.getElementsByName("food")
var selectedItems=""
for(var i=0;i<items.length;i++){
    if (items[i].type == "checkbox" && items[i].checked == true)selectedItems += items[i].value +"\n"
}

let td6=document.createElement("td")
    td6.setAttribute("scope","row")
    td6.innerHTML="\n"+selectedItems

var gender=document.getElementById("male").value;
let td5=document.createElement("td")
 td5.setAttribute("scope","row")
 td5.innerHTML=gender

let tr1 =document.createElement("tr")

let td=document.createElement("td")
td.setAttribute("scope","row")
td.innerHTML=name


 let td1=document.createElement("td")
 td1.setAttribute("scope","row")
 td1.innerHTML=namel

 let td2=document.createElement("td")
 td2.setAttribute("scope","row")
 td2.innerHTML=address
 
 let td3=document.createElement("td")
 td3.setAttribute("scope","row")
 td3.innerHTML=address1

 let td4=document.createElement("td")
 td4.setAttribute("scope","row")
 td4.innerHTML=pin

 let td7=document.createElement("td")
 td7.setAttribute("scope","row")
 td7.innerHTML=state

 let td8=document.createElement("td")
 td8.setAttribute("scope","row")
 td8.innerHTML=country


 tr1.append(td,td1,td2,td3,td4,td5,td6,td7,td8)
 tbody.append(tr1)

}


let br5=document.createElement("br")

let label2=document.createElement("label")
label2.setAttribute("for","name")
label2.innerHTML="Address Line1:"
let br2=document.createElement("br")
let input2=document.createElement("input")
input2.setAttribute("type","text")
input2.setAttribute("id","address")

let br6=document.createElement("br")

let label1=document.createElement("label")
label1.setAttribute("for","name")
label1.innerHTML="Lats Name:"
let br1=document.createElement("br")
let input1=document.createElement("input")
input1.setAttribute("type","text")
input1.setAttribute("id","lastName")


let br7=document.createElement("br")

let label3=document.createElement("label")
label3.setAttribute("for","name")
label3.innerHTML="Address Line2:"
let br3=document.createElement("br")
let input3=document.createElement("input")
input3.setAttribute("type","text")
input3.setAttribute("id","addressLine")

let br8=document.createElement("br")

let label4=document.createElement("label")
label4.setAttribute("for","name")
label4.innerHTML="Pin:"
let br4=document.createElement("br")
let input4=document.createElement("input")
input4.setAttribute("type","text")
input4.setAttribute("id","pin")

let div1=document.createElement("div")
div1.innerHTML="Choose your gender:"

let br9=document.createElement("br")
let label5=document.createElement("label")
label5.setAttribute("for","male")
label5.innerHTML="Male"
let input5=document.createElement("input")
input5.setAttribute("type","radio")
input5.setAttribute("name","gender")
input5.setAttribute("id","male")
input5.setAttribute("value","Male")
 
let br0=document.createElement("br")
let label6=document.createElement("label")
label6.setAttribute("for","male")
label6.innerHTML="Female"
let input6=document.createElement("input")
input6.setAttribute("type","radio")
input6.setAttribute("id","female")
input6.setAttribute("name","gender")
input6.setAttribute("value","female")


let div2=document.createElement("div")
div2.innerHTML="Choose your food itmes:"
let br01=document.createElement("br")
let label7=document.createElement("label")
label7.setAttribute("for","vehicle1")
label7.innerHTML="Chekan briyani"
let input7=document.createElement("input")
input7.setAttribute("type","checkbox")
input7.setAttribute("name","food")
input7.setAttribute("value","Chekan briyani")

let br02=document.createElement("br")
let label8=document.createElement("label")
label8.setAttribute("for","vehicle1")
label8.innerHTML="Matton grevi"
let input8=document.createElement("input")
input8.setAttribute("type","checkbox")
input8.setAttribute("name","food")
input8.setAttribute("value","matton grevi")

let br03=document.createElement("br")
let label9=document.createElement("label")
label9.setAttribute("for","vehicle1")
label9.innerHTML="Chekan rice"
let input9=document.createElement("input")
input9.setAttribute("type","checkbox")
input9.setAttribute("name","food")
input9.setAttribute("value","checan rice")

let br04=document.createElement("br")
let label01=document.createElement("label")
label01.setAttribute("for","vehicle1")
label01.innerHTML="Egg masala"
let input01=document.createElement("input")
input01.setAttribute("type","checkbox")
input01.setAttribute("name","food")
input01.setAttribute("value","Egg masala")


let br05=document.createElement("br")
let label02=document.createElement("label")
label02.setAttribute("for","vehicle1")
label02.innerHTML="vegatch rice"
let input02=document.createElement("input")
input02.setAttribute("type","checkbox")
input02.setAttribute("name","food")
input02.setAttribute("value","vegatch rice")

let br06=document.createElement("br")

let label03=document.createElement("label")
label03.setAttribute("for","name")
label03.innerHTML="State:"
let br07=document.createElement("br")
let input03=document.createElement("input")
input03.setAttribute("type","text")
input03.setAttribute("id","state")
let br08=document.createElement("br")

let label04=document.createElement("label")
label04.setAttribute("for","name")
label04.innerHTML="Country:"
let br09=document.createElement("br")
let input04=document.createElement("input")
input04.setAttribute("type","text")
input04.setAttribute("id","country")

let div3=document.createElement("div")


let button= document.createElement("button")
button.setAttribute("type","sumbit")
button.setAttribute("onclick","AddData(event)")
button.innerHTML="sumbit"




let table=document.createElement("table")
table.setAttribute("class","table")

let thead=document.createElement("thead")
thead.setAttribute("class","thead-dark")

let tr =document.createElement("tr")

let th=document.createElement("th")
th.setAttribute("scope","col")
th.innerHTML="First Name"

let th2=document.createElement("th")
th2.setAttribute("scope","col")
th2.innerHTML="Last Name"

let th3=document.createElement("th")
th3.setAttribute("scope","col")
th3.innerHTML="Address Line1"

let th4=document.createElement("th")
th4.setAttribute("scope","col")
th4.innerHTML="Address Line2"

let th5=document.createElement("th")
th5.setAttribute("scope","col")
th5.innerHTML="Pin"

let th6=document.createElement("th")
th6.setAttribute("scope","col")
th6.innerHTML="Gender"

let th7=document.createElement("th")
th7.setAttribute("scope","col")
th7.innerHTML="Your Food"

let th8=document.createElement("th")
th8.setAttribute("scope","col")
th8.innerHTML="State"

let th9=document.createElement("th")
th9.setAttribute("scope","col")
th9.innerHTML="Country"


let thead1=document.createElement("thead")

let tbody=document.createElement("tbody")

let tr1 =document.createElement("tr")
let tr2 =document.createElement("tr")

let div4=document.createElement("div")
div4.setAttribute("class","mass")

let div5=document.createElement("div")
div5.setAttribute("class","mass1")

let h2=document.createElement("h4")
h2.innerHTML="Table Submison"

table.append(thead)
thead.append(tr)
tr.append(th,th2,th3,th4,th5,th6,th7,th8,th9)
table.append(tbody)
 

div3.append(button)

form.append(label,br,input,br5,label1,br1,input1,br6,label2,br2,input2,br7,label3,br3,input3,br8,label4,br4,input4,div1,br0,label5,input5,label6,input6)
form.append(div2,br01,input7,label7,br02,input8,label8,br03,input9,label9,br04,input01,label01,br05,input02,label02)
form.append(br06,label03,br07,input03,br08,label04,br09,input04,div3)
div4.append(h1,form)
div5.append(h2,table)
div.append(div4,div5)
document.body.append(div)
