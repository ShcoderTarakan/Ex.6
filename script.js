function multiplication()
{
    let num1,num2,rezult;
    num1 = document.getElementById('a').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('b').value;
    num2 = parseInt(num2);
    let reg = /[A-Za-zА-Яа-яЁё]/g;
    const reg1=/^[1-9][0-9]*$/;
    if(reg1.test(num1)||reg1.test(num2))
    {
        alert('Вводить можно только положительные числа!');
    }
    if(num1===0||num2===0)
    {
        alert('Введите значения!');
    }
    rezult = num1*num2;
    if(!reg.test(num1)||!reg.test(num2))
    {
        alert('Ошибка! Вводите только положительные числа , которые больше 0!');
        let str = "Ошибка!";
        document.getElementById('out').innerHTML = str;
    }
    else
    {
        document.getElementById('out').innerHTML = rezult;
    }
}
window.addEventListener('DOMContentLoaded', function(multiplication) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result-btn");
    b.addEventListener("click",multiplication);
});
function calcu() {
    const proverka = /^\d+$|\d+$/;
    let x = document.getElementById("prodPrice").innerHTML;
    const re = /[1-9/.]+/;
    let first = x.match(re);
    console.log();
    let b = document.getElementsByName("number");
    if (proverka.test(first) == false || proverka.test(b[0].value) == false) {
        alert("Вы сделали что-то не так!");
    }
    else {
        let c = document.getElementById("result");
        first[0] = Number.parseInt(first[0]);
        b[0] = Number.parseInt(b[0]);
        var res = first * b[0].value;
        if(res<=0){
            alert('Ошибка! Вводите только положительные числа , которые больше 0!');
        }
        else {
            c.innerHTML = "Итого: " + res;
            return false;
        }
    }
}
function getPrices() {
    return {
        prodTypes: [899, 0, 0],
        prodOptions: {
            option1: 100,
            option2: 200,
            option3: 300,
        },
        prodProperties: {
            prop1: 400,
            prop2: 500,
            prop3: 600,
        }
    };
}
function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value);
    price = prices.prodTypes[priceIndex];
    let radioDiv = document.getElementById("radios");
    if (select.value == "1") {
        radioDiv.style.display = "block";
    }
    else
        radioDiv.style.display = "none";
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            price += propPrice;
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    if (select.value == "2") {
        checkDiv.style.display = "block";
    }
    else
        checkDiv.style.display = "none";
    let prodPrice = document.getElementById("prodPrice");
    if (select.value == "0") {
        price = 899;
    }
    prodPrice.innerHTML = price + " рублей";
}
window.addEventListener('DOMContentLoaded', function (event) {
    let button = document.getElementById("butt");
    button.addEventListener("Click", calcu);
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function (event) {
        let target = event.target;
        updatePrice();
    });
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            let c = event.target;
            updatePrice();
        });
    });
    updatePrice();
});
