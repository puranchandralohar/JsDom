let searchBox = document.getElementById('search_box');
let SearchBtn = document.getElementById('search_btn');


let newData;
    let url = "db.json";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        newData = data;
    })  

SearchBtn.addEventListener('click',()=>{
    let main = document.querySelector("#data");
    main.innerHTML = "";   
    newData.forEach(element => {

        const { firstname,lastname,location,Profession } =element;

        let html = `
        <tr>
                        <td>${firstname}</td>
                        <td>${lastname}</td>
                        <td>${location}</td>
                        <td>${Profession}</td>
        </tr>`
        main.innerHTML += html;
    });
})