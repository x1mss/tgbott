let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")

let name = ""
let phone = ""
let mail = ""
let usercard = document.querySelector("#usercard")
let username = document.querySelector("#user-name")
let usermail = document.querySelector("#user-mail")
let phonenumber = document.querySelector("#phone-number")

let buy = document.querySelector("#sumbit")

let price = 0

buy.onclick = () => {
    tg.MainButton.setText("Нажмите для оформления заказа.")
    tg.MainButton.show()
}

username.onchange = () => {
    name = username.value
}
usermail.onchange = () => {
    mail = usermail.value
}
phonenumber.onchange = () => {
    phone = phonenumber.value
}


let items = {
    phone: 0,
    tv: 0,
    monitor: 0,
    headphones: 0,
    tablet: 0,
    keyboard:  0
}

function update_orders() {
    usercard.innerHTML = "Корзина:"
    if (name != "") {
        let userinfo = document.createElement("li")
        userinfo.innerHTML = "Имя - " + name
        usercard.appendChild(userinfo)
    }
    if (mail != "") {
        let userinfo = document.createElement("li")
        userinfo.innerHTML = "Почта - " + mail
        usercard.appendChild(userinfo)
    }
    if (phone != "") {
        let userinfo = document.createElement("li")
        userinfo.innerHTML = "Телефон - " + phone
        usercard.appendChild(userinfo)
    }
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li")
            li.innerHTML = item + ": " + items[item]
            usercard.appendChild(li)
        }
    }
}

btn1.onclick = () => {
        items["phone"] += 1
        price += 700
        update_orders()
}

btn2.onclick = () => {
        items["tv"] += 1
        price += 600
        update_orders()
}

btn3.onclick = () => {
        items["monitor"] += 1
        price += 200
        update_orders()
}

btn4.onclick = () => {
        items["headphones"] += 1
        price += 250
        update_orders()
}

btn5.onclick = () => {
        items["tablet"] += 1
        price += 500
        update_orders()
}

btn6.onclick = () => {
        items["keyboard"] += 1
        price += 150
        update_orders()
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    result = ""
    if (name!= "") {
        result += "Ваше имя: " + name + "\n"
    }
    if (mail!= "") {
        result += "Ваша почта: " + mail + "\n"
    }
    if (phone!= "") {
        result += "Ваш телефон: " + phone + "\n"
    }
    result += "Ваш заказ: " + "\n"
    for (let item in items) {
        if (items[item] != 0) {
        result += item + ": " + items[item] + "\n"
        }
    }
    result += "\n\nС вас " + price + "$"
    tg.sendData(result)
})