import join from "lodash/join"
import getTime from "./demo"
function component () {
    var ele = document.createElement("div")
    ele.innerHTML = join(['Hello', 'webpack'], ' ');
    // ele.innerHTML = getTime()
    return ele
}
document.body.appendChild(component());