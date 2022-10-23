var cname = document.getElementById("cname");
var num = document.getElementById("cnum");
var mm = document.getElementById("month");
var yy = document.getElementById("year");
var cvc = document.getElementById("cvc");
var noterr = [
    { elm: cname, h6: "ername" },
    { elm: num, h6: "ernum" },
    { elm: mm, h6: "erdate" },
    { elm: yy, h6: "erdate" },
    { elm: cvc, h6: "ercvc" }
]
var err = [];
const getval = () => {
    err = []
    let nameval = cname.value;
    let numval = num.value;
    let mmval = mm.value;
    let yyval = yy.value;
    let cvcval = cvc.value;
    if (
        checkname(nameval) &&
        checknum(numval) &&
        checkmm(mmval) &&
        checkyy(yyval) &&
        checkcvc(cvcval)
    ) {
        displaythank();
        creatcard(nameval, numval, mmval, yyval, cvcval)
    }
    else {
        // console.table(err)
        err.forEach(elem => {
            noterr.forEach(elemnot => {
                elemnot.elm.style.border = ""
                document.getElementById(elemnot.h6).innerHTML = ""
            })
            if (noterr.includes(elem.elm)) {
                document.getElementById(elem.to).innerHTML = ""
                elem.elm.style.border = ''
                console.log(elem.elm)
            }
            document.getElementById(elem.to).innerHTML = elem.nameerr
            elem.elm.style.border = '1px solid hsl(0, 100%, 66%)'
        })
    }

}
const checkname = (vcname) => {
    if (vcname.length == 0) {
        err.push({ nameerr: "Can't be blank", elm: cname, to: "ername" })
    }
    else {
        return true;
    }
}
const checknum = (vcnum) => {
    if (vcnum.length > 16 || vcnum.length < 16) {
        err.push({ nameerr: "Can't less or over than 16 number", elm: num, to: "ernum" })
    }
    else if (vcnum.length == 0) {
        err.push({ nameerr: "Can't be blank", elm: num, to: "ernum" })
    }
    else {
        return true;
    }
}
const checkmm = (vmm) => {
    if (vmm.length > 2 || vmm.length == 0) {
        err.push({ nameerr: "Can't be blank", elm: mm, to: "erdate" })
    }
    else if (vmm > 12) {
        err.push({ nameerr: "Can't be over than 12", elm: mm, to: "erdate" })
    }
    else {
        return true;
    }
}
const checkyy = (vyy) => {
    if (vyy.length > 2 || vyy.length == 0) {
        err.push({ nameerr: "Can't be blank", elm: yy, to: "erdate" })
    }
    else {
        return true;
    }
}
const checkcvc = (vcvc) => {
    if (vcvc.length == 0) {
        err.push({ nameerr: "Can't be blank", elm: cvc, to: "ercvc" })
    }
    else {
        cvc.style.border = ""
        return true;
    }
}
const creatcard = (na, num, mm, yy, cvc) => {

    let creaname = document.getElementById("creaname");
    let creanum = document.getElementById("creanum");
    let creamm = document.getElementById("creamm");
    let creayy = document.getElementById("creayy");
    let creacvc = document.getElementById("creacvc");
    creaname.innerHTML = na
    creanum.innerHTML = ""
    let i = 1
    for (let elem of num) {
        if (i == 4 || i == 8 || i == 12) {
            creanum.innerHTML += `${elem}<div id='separ'>${" "}</div>`;
        }
        else {
            creanum.innerHTML += elem
        }
        i++
    }
    creamm.innerHTML = forma(mm)
    creayy.innerHTML = forma(yy)
    creacvc.innerHTML = cvc
}
const displaythank = () => {
    document.getElementById("thank").style.display = "flex";
    document.getElementById("mainfooter").style.display = "none";
}
const forma = (x) => {
    if (x.length == 1) {
        return `0${x}`
    }
    else {
        return x
    }
}
