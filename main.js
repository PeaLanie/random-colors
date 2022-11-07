window.addEventListener('load', () => {

    function getHexCode(r, g, b) {
        function getRandomNumber(any) {
            return Math.floor(Math.random() * any)
        }
        let hex_color = '#'
        const hex_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        if (r == '' && g == '' && b == '') {
            for (let i = 0; i < 6; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
        } else if (r == '00' && g == '' && b == '') {
            hex_color = '#' + r
            for (let i = 0; i < 4; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
        } else if (r == '' && g == '00' && b == '') {
            for (let i = 0; i < 2; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
            hex_color += g
            for (let i = 0; i < 2; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
        } else if (r == '' && g == '' && b == '00') {
            for (let i = 0; i < 4; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
            hex_color += b
        } else if (r == '00' && g == '00' && b == '') {
            hex_color += r + g
            for (let i = 0; i < 2; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
        } else if (r == '00' && g == '' && b == '00') {
            hex_color += r
            for (let i = 0; i < 2; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
            hex_color += b
        } else if (r == '' && g == '00' && b == '00') {
            for (let i = 0; i < 2; i++) {
                let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                hex_color += randomNumber
            }
            hex_color += g + b
        }
        return hex_color
    }

    const body = document.querySelector('#body')
    const randomize_all = document.querySelector('#randomize_btn')
    const play_btn_for_all = document.querySelector('#play_btn')
    const randomize_btn_rg = document.querySelector('#randomize_btn_r-g')
    const randomize_btn_rb = document.querySelector('#randomize_btn_r-b')
    const randomize_btn_gb = document.querySelector('#randomize_btn_g-b')
    const play_btn_rg = document.querySelector('#play_btn_r-g')
    const play_btn_rb = document.querySelector('#play_btn_r-b')
    const play_btn_gb = document.querySelector('#play_btn_g-b')

    const randomize_btn_r = document.querySelector('#randomize_btn_r')
    const randomize_btn_g = document.querySelector('#randomize_btn_g')
    const randomize_btn_b = document.querySelector('#randomize_btn_b')
    const play_btn_r = document.querySelector('#play_btn_r')
    const play_btn_g = document.querySelector('#play_btn_g')
    const play_btn_b = document.querySelector('#play_btn_b')

    const pause_btn = document.querySelector('#pause_btn')
    const color_code = document.querySelector('.color_code')
    const hex_code_container = document.querySelector('#hex_code_container')
    const count = document.querySelector('.count')
    const color_count = document.querySelector('#color_count')
    const previous = document.querySelector('#prev')
    let hex_code
    const colors = []
    let click = 0

    let play = setInterval(() => {
        hex_code = getHexCode('', '', '')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
    }, 2000)

    let play_count = 3

    randomize_all.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('', '', '')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })
    randomize_btn_rg.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('', '', '00')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })
    randomize_btn_rb.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('', '00', '')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })
    randomize_btn_gb.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('00', '', '')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })

    randomize_btn_r.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('', '00', '00')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })
    randomize_btn_g.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('00', '', '00')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })
    randomize_btn_b.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        hex_code = getHexCode('00', '00', '')
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
        click = 0
    })






    play_btn_for_all.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('', '', '')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
        console.log(play)
        console.log(play_count)
    })
    play_btn_rg.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('', '', '00')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
        console.log(play)
    })
    play_btn_rb.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('', '00', '')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
    })
    play_btn_gb.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('00', '', '')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
    })

    play_btn_r.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('', '00', '00')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
    })
    play_btn_g.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('00', '', '00')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
    })
    play_btn_b.addEventListener('click', () => {
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            hex_code = getHexCode('00', '00', '')
            colors.push(hex_code)
            body.style.background = hex_code
            color_code.style.outline = '2px dashed' + hex_code
            hex_code_container.textContent = hex_code
            hex_code_container.style.color = hex_code
            count.style.outline = '2px dashed' + hex_code
            color_count.style.color = hex_code
            color_count.textContent = colors.length
        }, 2000)
        play_count++
        click = 0
    })
    
    
    




    pause_btn.addEventListener('click', () => {
        clearInterval(play) 
    })
    previous.addEventListener('click', (e) => {
        clearInterval(play)
        if (play == play_count && click == 0) {
            
            let prev = colors.slice(-2, -1)

            body.style.background = prev
            color_code.style.outline = '2px dashed' + prev
            hex_code_container.textContent = prev
            hex_code_container.style.color = prev
            count.style.outline = '2px dashed' + prev
            
        } else if (click == 1) {

            let prev = colors.slice(-3, -2)

            body.style.background = prev
            color_code.style.outline = '2px dashed' + prev
            hex_code_container.textContent = prev
            hex_code_container.style.color = prev
            count.style.outline = '2px dashed' + prev

        } else if (click == 2) {

            previous.style.background = 'red'
            previous.style.color = '#ffffff'

        } else if (click > 2) {

            let alert_msg = document.querySelector('#no_prev')
            alert_msg.classList.add('open_popup')
            previous.removeAttribute('style')

        }
        click++
    })

    const no_prev_ok = document.querySelector('#no_prev_ok')
    no_prev_ok.addEventListener('click', () => {
        let alert_msg = document.querySelector('#no_prev')
        alert_msg.classList.remove('open_popup')
    })
    hex_code_container.addEventListener('mouseover', (e) => {
        hex_code_container.style.color = '#3f3f3f'
        let coppy = document.querySelector('#coppy')
        coppy.classList.add('coppy_visible')
    })
    hex_code_container.addEventListener('mouseleave', () => {
        hex_code_container.removeAttribute('style')
        coppy.classList.remove('coppy_visible')
    })
    hex_code_container.addEventListener('click', () => {
        let el_text = hex_code_container.textContent
        let input_el = document.createElement('input')
        input_el.setAttribute('value', el_text)
        document.body.appendChild(input_el)
        input_el.select()
        document.execCommand('copy')
        input_el.parentNode.removeChild(input_el)
        coppy.classList.remove('coppy_visible')
    })
    

})