// import _ from "lodash"
function component () {
    var ele = document.createElement("div")
    // ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    ele.innerHTML = "asdasdsd"
    return ele
}
document.body.appendChild(component());