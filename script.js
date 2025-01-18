window.side1 = document.getElementById("coin-head-container")
window.side2 = document.getElementById("coin-tail-container")

function flipCoin() {
    [window.side1, window.side2].forEach((side) => {
        if (side.classList.contains("init-coin-side")) {
            side.classList.remove("init-coin-side")
        }
        if (side.classList.contains("coin-side-1")) {
            side.classList.remove("coin-side-1")
            side.classList.add("coin-side-2")
        }
        else if (side.classList.contains("coin-side-2")) {
            side.classList.remove("coin-side-2")
            side.classList.add("coin-side-1")
        }
    })
    document.body.classList.add("coin-flip")
    document.body.onanimationend = () => {
        document.body.classList.remove("coin-flip")
    }
}

window.flipDisabled = false
document.getElementById("coin-parent").addEventListener("click", () => {
    if (window.flipDisabled) return
    if (!document.body.classList.contains("coin-flipped")) {
        document.body.classList.add("coin-flipped")
    }
    if (document.body.classList.contains("coin-flip-ended")) {
        document.body.classList.remove("coin-flip-ended")
    }
    const n = Math.floor(Math.round(Math.random()*10)) + 5
    for (let i = 0; i < n; i++) {
        setTimeout(() => {
            flipCoin()
        }, i * 1000)
    }
    window.flipDisabled = true
    setTimeout(() => {
        window.flipDisabled = false
        document.body.classList.add("coin-flip-ended")
    }, n * 1000)
})