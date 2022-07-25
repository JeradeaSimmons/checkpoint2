const boxers = {
    Razor: {
        health: 100,
        Image: 'Fighter.png'
    }



}
const moneys = {
    cash: {
        value: 0
    }
}

let hits = 0

console.log(boxers);

function drawBoxer() {
    template = ''
    for (let key in boxers) {
        let boxer = boxers[key]
        template += `
        <div class="row justify-content-center align-content-center">
                        <div class="col-8">
                            <img class="img-fluid fighter" onclick="punching(), makeMoney()"
                                src="${boxer.Image}"
                                alt="">
                        </div>
                        <div class="row">
                            <col-8 class= "text-center"><p><b>${key} - POWER ${boxer.health}</b></p></col-8>
                        </div>
                    </div>
`
        let boxerElm = document.getElementById('boxer')
        boxerElm.innerHTML = template


    }


}

function drawMoney() {
    template = ''
    for (let key in moneys) {
        let money = moneys[key]
        template += `
        <div class="col-4 offset-8 text-light"><p><b>$ ${money.value}</b></p></div>
        
        
        `
        let moneyElm = document.getElementById('cash')
        moneyElm.innerHTML = template
    }

}



function punching() {
    let boxer = boxers
    if (boxer.Razor.health <= 0) {
        boxer.Razor.health = 100
    } drawBoxer()
    for (let key in boxers) {
        let boxer = boxers[key]
        boxer.health -= 2
    }



}
function makeMoney() {

    for (let key in moneys) {
        let money = moneys[key]
        money.value += 5
    }
    drawMoney()
}


let knucklePurchase = document.getElementById('knuckleButton');
let brassKnucklesClicks = 0

function brassKnuckles() {
    if (moneys.cash.value < 20) {
        return

    }
    moneys.cash.value -= 20
    drawMoney()


    boxers.Razor.health -= 3 * 1;
    brassKnucklesClicks = brassKnucklesClicks + 1;
    knucklePurchase.innerText = brassKnucklesClicks;
}

function drawKnucklePurchase() {



    {




    }


}
function razorBlades() {
    if (moneys.cash.value < 40) {
        return

    }

    moneys.cash.value -= 40
    drawMoney()

    boxers.Razor.health -= 5 * 2
}

function crowdHype() {
    if (boxers.Razor.health > 25) {
        return
    }
    moneys.cash.value += 100


    drawMoney()

}
function crowdHypeMoney() {
    if (true) {
        moneys.cash.value += 50
    }



}


function adrenaline() {
    if (moneys.cash.value < 200) {
        return
    }
    moneys.cash.value -= 200
    drawMoney()

    boxers.Razor.health -= 10 * 3

}













setInterval(crowdHype, 3000)












drawMoney()
drawBoxer()
