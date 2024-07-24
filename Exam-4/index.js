let users = [];
let totalFee = 0;
let count = {
    Backend_Dev: { count: 0, totalFees: 0 },
    Frontend_Dev: { count: 0, totalFees: 0 },
    UI_UX: { count: 0, totalFees: 0 },
    Animation: { count: 0, totalFees: 0 }
};

const uimaker = () => {
    document.getElementById('tbody').innerHTML = "";

    document.getElementById('totalFee').innerHTML = `Total Fee: ${totalFee}`;
    document.getElementById('totalStud').innerHTML = `Total Students: ${users.length}`;

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = users[i].name;
        let td2 = document.createElement('td');
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement('td');
        td3.innerHTML = users[i].number;
        let td4 = document.createElement('td');
        td4.innerHTML = users[i].course;
        let td5 = document.createElement('td');
        td5.innerHTML = "$" + users[i].fee;

        let td6 = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Remove";
        deleteButton.addEventListener('click', () => handleDelete(i, users[i].course, users[i].fee));
        td6.appendChild(deleteButton);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.getElementById('tbody').append(tr);
    }


}

const handleDelete = (index, fee) => {
    users.splice(index, 1);
    totalFee -= fee;
    uimaker();
}

const data = (e) => {
    e.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        grid: document.getElementById("grid").value,
        number: document.getElementById("number").value,
        course: document.getElementById("course").value,
        fee: parseInt(document.getElementById("fee").value)
    }


    if (user.name.length <= 2) {
        alert("Name must be 2 characters long")
        return
    }
    if (user.grid.length != 4) {
        alert("Grid must be 4 characters long")
        return
    }
    if (user.number.length != 10) {
        alert("Number must be 10 characters long")
        return
    }

    if (user.course == count) {
        let backDevCount = document.getElementById('backDevCount').innerHTML = count.Backend_Dev.count++
        let backDevFee = document.getElementById('backDevFee').innerHTML = count.Backend_Dev.totalFees += fee
    }
    else if (user.course == count) {
        let frontDevCount = document.getElementById('frontDevCount').innerHTML = count.Frontend_Dev.count++
        let frontDevFee = document.getElementById('frontDevFee').innerHTML = count.Frontend_Dev.totalFees += fee
    }
    else if (user.course == count) {
        let uiUxCount = document.getElementById('uiuxDevCount').innerHTML = count.UI_UX.count++
        let uiUxFee = document.getElementById('uiuxDevFee').innerHTML = count.UI_UX.totalFees += fee
    }
    else if (user.course == count) {
        let animationCount = document.getElementById('animationCount').innerHTML = count.Animation.count++
        let animationFee = document.getElementById('animationFee').innerHTML = count.Animation.totalFees += fee
    }
    totalFee += user.fee;
    users.push(user);
    uimaker();

}

document.getElementById("userData").addEventListener("submit", data);
