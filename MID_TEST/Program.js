function show_hide() {
    var x = document.getElementById("daftar");
    if (x.style.display === "none"){
        x.style.display = "block";

    } else{
        x.style.display = "none";
    }
  }


    const form  = document.querySelector('daftar');

    


    form.addEventListener('submit', insertDaftar), function insertDaftar(event){
        
        event.preventDefault();

        const daftarnim = document.querySelector('student-nim');
        const daftarname = document.querySelector('student-name');
        const gander = document.querySelector('gander');
        const faculty = document.querySelector('faculty');
        const programstudy = document.querySelector('programstudy');

        const li = document.createElement('li');
        li.className = 'list-item';
        li.appendChild(document.createTextNode(`${daftarnim.value} ${daftarname.value} ${gender.value} ${faculty.value} ${programstudy.value}` ));

       const ul = document.querySelector('#liststudent');
    
        ul.appendchild(li);

        console.log(li);

    }

    /*
    console.log('${daftarnim.value}');
    console.log('${daftarname.value}');
    console.log('${gender.value}');
    console.log('${faculty.value}');
    console.log('${programstudy.value}');
    */


 