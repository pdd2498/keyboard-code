let div = document.querySelector("div");

div.style.textAlign = 'center';



document.addEventListener("keydown" , (e) =>{

    let out = document.querySelector('h2');
    let out2 = document.getElementById('out2');

    out.style.color = 'blur';


    var kn = e.key;
    var kno = e.keyCode;
    console.log(kn , kno);
    out.innerHTML = "Key Name :- "+ kn;
    out2.innerHTML = "Key Code :- " + kno;
});