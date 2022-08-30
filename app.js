var plan1 = {
    plan1Name: "Basic",
    plan1Price: "$3.99",
    plan1Space: "100 GB",
    plan1Data: "1000 GB/Mo",
    plan1Pages: 10
};
// console.log(plan1)

var plan2 = {
    plan2Name: "Professional",
    plan2Price: "$5.99",
    plan2Space: "500 GB",
    plan2Data: "5000 GB/Mo",
    plan2Pages: 50,
    
};


var plan3 = {
    plan3Name: "Ultimate",
    plan3Price: "$9.99",
    plan3Space: "2000 GB",
    plan3Data: "2000 GB/Mo",
    plan3Pages: 500
};


var mainDiv = document.getElementById("mainContainer");
var mainChild1 = document.createElement("div");
mainChild1.setAttribute("class","left-div")
var mainChild1P1 = document.createElement("p");
mainChild1P1.setAttribute("class", "left");
var mainChild1P1Txt = document.createTextNode("Monthly");

var mainChild1P2 = document.createElement("p");
mainChild1P2.setAttribute("class", "left2")
var mainChild1P2Txt = document.createTextNode("Disk Space");

var mainChild1P3 = document.createElement("p");
mainChild1P3.setAttribute("class", "left3")
var mainChild1P3Txt = document.createTextNode("Data Transfer");

var mainChild1P4 = document.createElement("p");
mainChild1P4.setAttribute("class", "left4")
var mainChild1P4Txt = document.createTextNode("Site Pages");

var mainChild2 = document.createElement("div");
var mainChild2Table = document.createElement("table");
var tr1 = document.createElement("tr");
var tr1Td1 = document.createElement("td");
tr1Td1.setAttribute("class", "head1");
var tr1Td1Txt = document.createTextNode(plan1.plan1Name)

var tr1Td2 = document.createElement("td");
tr1Td2.setAttribute("class", "head2");
var tr1Td2Txt = document.createTextNode(plan2.plan2Name)

var tr1Td3 = document.createElement("td");
tr1Td3.setAttribute("class", "head3");
var tr1Td3Txt = document.createTextNode(plan3.plan3Name)

var tr2 = document.createElement("tr");
tr2.setAttribute("class", "tr2")
var tr2Td1 = document.createElement("td");
var tr2Td1Txt = document.createTextNode(plan1.plan1Price)

var tr2Td2 = document.createElement("td");
var tr2Td2Txt = document.createTextNode(plan2.plan2Price);


var tr2Td3 = document.createElement("td");
var tr2Td3Txt = document.createTextNode(plan3.plan3Price)

var tr3 = document.createElement("tr");
tr3.setAttribute("class", "tr3")

var tr3Td1 = document.createElement("td");
var tr3Td1Txt = document.createTextNode(plan1.plan1Space)

var tr3Td2 = document.createElement("td");
var tr3Td2Txt = document.createTextNode(plan2.plan2Space)

var tr3Td3 = document.createElement("td");
var tr3Td3Txt = document.createTextNode(plan3.plan3Space)


var tr4 = document.createElement("tr");
tr4.setAttribute("class", "tr4")

var tr4Td1 = document.createElement("td");
var tr4Td1Txt = document.createTextNode(plan1.plan1Data)

var tr4Td2 = document.createElement("td");
var tr4Td2Txt = document.createTextNode(plan2.plan2Data)

var tr4Td3 = document.createElement("td");
var tr4Td3Txt = document.createTextNode(plan3.plan3Data)


var tr5 = document.createElement("tr");
tr5.setAttribute("class", "tr5")

var tr5Td1 = document.createElement("td");
var tr5Td1Txt = document.createTextNode(plan1.plan1Pages)

var tr5Td2 = document.createElement("td");
var tr5Td2Txt = document.createTextNode(plan2.plan2Pages)

var tr5Td3 = document.createElement("td");
var tr5Td3Txt = document.createTextNode(plan3.plan3Pages)


















mainDiv.appendChild(mainChild1);
mainChild1.appendChild(mainChild1P1);
mainChild1P1.appendChild(mainChild1P1Txt);

mainChild1.appendChild(mainChild1P2);
mainChild1P2.appendChild(mainChild1P2Txt);

mainChild1.appendChild(mainChild1P3);
mainChild1P3.appendChild(mainChild1P3Txt);

mainChild1.appendChild(mainChild1P4);
mainChild1P4.appendChild(mainChild1P4Txt);

mainDiv.appendChild(mainChild2);
mainChild2.appendChild(mainChild2Table);
mainChild2Table.appendChild(tr1)
tr1.appendChild(tr1Td1);
tr1Td1.appendChild(tr1Td1Txt);

tr1.appendChild(tr1Td2);
tr1Td2.appendChild(tr1Td2Txt);

tr1.appendChild(tr1Td3);
tr1Td3.appendChild(tr1Td3Txt);

mainChild2Table.appendChild(tr2);
tr2.appendChild(tr2Td1);
tr2Td1.appendChild(tr2Td1Txt);

tr2.appendChild(tr2Td2);
tr2Td2.appendChild(tr2Td2Txt);

tr2.appendChild(tr2Td3);
tr2Td3.appendChild(tr2Td3Txt);


mainChild2Table.appendChild(tr3);
tr3.appendChild(tr3Td1);
tr3Td1.appendChild(tr3Td1Txt);

tr3.appendChild(tr3Td2);
tr3Td2.appendChild(tr3Td2Txt);

tr3.appendChild(tr3Td3);
tr3Td3.appendChild(tr3Td3Txt);


mainChild2Table.appendChild(tr4);
tr4.appendChild(tr4Td1);
tr4Td1.appendChild(tr4Td1Txt);

tr4.appendChild(tr4Td2);
tr4Td2.appendChild(tr4Td2Txt);

tr4.appendChild(tr4Td3);
tr4Td3.appendChild(tr4Td3Txt);


mainChild2Table.appendChild(tr5);
tr5.appendChild(tr5Td1);
tr5Td1.appendChild(tr5Td1Txt);

tr5.appendChild(tr5Td2);
tr5Td2.appendChild(tr5Td2Txt);

tr5.appendChild(tr5Td3);
tr5Td3.appendChild(tr5Td3Txt);













