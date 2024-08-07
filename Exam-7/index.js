let data = [];

const deleteBtn = (index) => {
    data.splice(index, 1);
    uimaker();
}

const uimaker = () => {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = data[i].name;

        let td2 = document.createElement('td');
        td2.innerHTML = data[i].price;

        let td3 = document.createElement('td');
        td3.innerHTML = data[i].color;

        let td4 = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => deleteBtn(i));
        td4.appendChild(deleteButton);

        tr.append(td1, td2, td3, td4);
        tbody.append(tr);
    }
}

const handleData = (event) => {
    event.preventDefault(); 
    let ProductData = {
        name: document.getElementById("name").value,
        price: Number(document.getElementById("price").value),
        color: document.getElementById("color").value
    }
    data.push(ProductData);
    uimaker();
}

document.getElementById("productData").addEventListener("submit", handleData);
