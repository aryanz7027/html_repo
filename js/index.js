arr=[
    [86,145,10,7240,254, 53.62,12552,57.68,27,22,811,22,82,0],
    [251,242,39,12040,183,59.31,12912,93.24,43,60,1130,124,129,0],
    [85,79,21,2928,94,50.48,2115,138.43,0,25,265,81,42,0],
    [118,193,17,9489,254,53.91,16455,57.66,34,30,1124,37,113,0],
    [285,275,42,13482,183,57.86,14448,93.31,47,68,1294,148,147,0],
    [299,284,54,9500,113,41.3,7092,133.95,5,68,838,302,132,0]
]

function table_add(){
   var Tbody= document.getElementById("tble_body");
    for(i=0;i<6;i++){
        let Tr =document.createElement("tr");
        for(j=0;j<14;j++){
            let Td = Tr.appendChild(document.createElement("td"));
            Td.innerHTML=arr[i][j];
            Tbody.appendChild(Tr);
        }
    }
}
table_add();

//***************** ----- Form Validator and presentor ----- ********/
function Validator(){
    var name = document.signup_form.names.value;
    var email = document.signup_form.email.value;
    var city= document.signup_form.city.value;
    var contact=document.signup_form.contact.value;
    var gender = document.signup_form.gender.value;
    ar=[name,email,city,contact,gender];
    let c= document.getElementById("ch");

    ar.forEach((e)=>{
        let p = document.createElement('p');
        p.innerHTML=e;
        c.appendChild(p);
    })
    document.getElementById('ch').style.display='block';
    document.getElementById('ch').childNodes[1].style.color ="black";
    document.getElementById('ch').onclick=foo;
    console.log();
}

function foo(){
    document.getElementById('ch').style.backgroundColor='pink';
    document.getElementById('ch').style.cursor='default';
}
