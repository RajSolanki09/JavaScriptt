let users=[]
let totalSalary=Number(0);

const idMaker =()=>{
    document.getElementById('tbody').innerHTML=""

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = users[i].username
        let td2 = document.createElement("td")
        td2.innerHTML = users[i].number
        let td3 = document.createElement("td")
        td3.innerHTML = users[i].email
        let td4 = document.createElement("td")
        td4.innerHTML = users[i].salary

        tr.append(td1, td2, td3, td4)
        document.getElementById('tbody').append(tr)
        
       
    }
}

const handleData=(e)=>{

    e.preventDefault();
    let username=document.getElementById('username').value;
    let number=document.getElementById('number').value;
    let email=document.getElementById('email').value;
    let salary=document.getElementById('salary').value;

    let user={
        username:username,
        email:email,
        number:number,
        salary:salary
    }

    users.push(user);
    idMaker()
 
    totalSalary+=Number(salary);
    console.log(totalSalary);
   
    document.getElementById('totalSalary').innerHTML=`totalSalary: ${totalSalary}`;
}
document.getElementById("userData").addEventListener("submit",handleData);