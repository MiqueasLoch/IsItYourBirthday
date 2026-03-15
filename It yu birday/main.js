
function addDate() {
    const day = document.getElementById('day')

    for (let i = 1; i <= 31; i++) {
        const opt = document.createElement('option')
        opt.value = i
        opt.textContent = i

        day.appendChild(opt)
    }

    const month = document.getElementById("month")

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    for (let i = 0; i < months.length; i++) {
        const opt = document.createElement("option")
        opt.value = i + 1
        opt.textContent = months[i]

        month.appendChild(opt)
    }
}

addDate()

function test() {

    const userDay = Number(document.getElementById('day').value)
    const userMonth = Number(document.getElementById('month').value)

    const optDay = document.getElementById('day')
    const optMonth = document.getElementById('month')

    if (userDay === 0) {
        optDay.classList.add('error')
        optDay.onclick = () => optDay.classList.remove('error')
    }

    if (userMonth === 0) {
        optMonth.classList.add('error')
        optMonth.onclick = () => optMonth.classList.remove('error')
    }

    if (userDay === 0 || userMonth === 0) return

    const body = document.getElementById('body')
    body.innerHTML = ''

    const h2 = document.createElement('h2')
    body.appendChild(h2)

    const messages = [
        'Comparing 🔄️ ',
        'Thinking 🧠 ',
        'Analyzing 🤔 ',
        'Searching Similarities 🧑‍🤝‍🧑 ',
        'Calculating 🧮 ',
        'Getting Result 🔎 '
    ]

    let step = 0
    let seconds = 60

    const timer = setInterval(() => {

        if (seconds % 10 === 0 && step < messages.length) {
            h2.textContent = messages[step] + "(Estimated time: " + seconds + "s)"
            h2.classList.add('wait')
            step++
        }

        seconds--

        if (seconds < 0) {
            clearInterval(timer)
            result(userDay, userMonth)
        }

    }, 1000)
}

function result(userDay, userMonth) {
    const body = document.getElementById('body')

    const today = new Date()

    const dayToday = today.getDate()
    const monthToday = today.getMonth() + 1
    const h2 = document.createElement('h2')

    if (dayToday === userDay && monthToday === userMonth) {
        body.innerHTML = ''
        body.classList.add('happy')

        body.innerHTML = `
        <h2>HAPPY BIRTHDAY</h2>
        <section>
            <img src="./more/download-removebg-preview (1).png" alt="globos.png" class="peol">
            <img src="./more/download-removebg-preview (2).png" alt="torta.png" id="mejol">
            <img src="./more/download-removebg-preview (1).png" alt="globos.png" class="peol">
        </section>
        <img src="./more/happy-birthday-happy-birthday-lemon.gif" alt="happy-birthday">
        <audio src="./more/que lo cumpla feli.mpeg" autoplay></audio>
        `
    } else {
        body.innerHTML = ''
        body.classList.add('sad')
        h2.textContent = 'NO'
    }

    body.appendChild(h2)
}