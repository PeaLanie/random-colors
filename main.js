window.addEventListener('load', () => {

    function getHexCode() {
        function getRandomNumber(any) {
            return Math.floor(Math.random() * any)
        }

        const hex_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        
        let hex_color = '#'

        for (let i = 0; i < 6; i++) {
            let randomNumber = hex_array[getRandomNumber(hex_array.length)]
            hex_color += randomNumber
            
        }
        
        return hex_color
    }

    const body = document.querySelector('#body')
    const randomize = document.querySelector('#randomize_btn')
    const play_btn = document.querySelector('#play_btn')
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
        
        hex_code = getHexCode()
        colors.push(hex_code)
        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length
    }, 2000)

    let play_count = 1

    randomize.addEventListener('click', () => {
        
        if (play === play_count) {
            clearInterval(play)
        }

        hex_code = getHexCode()

        colors.push(hex_code)
        console.log(colors)

        body.style.background = hex_code
        color_code.style.outline = '2px dashed' + hex_code
        hex_code_container.textContent = hex_code
        hex_code_container.style.color = hex_code
        count.style.outline = '2px dashed' + hex_code
        color_count.style.color = hex_code
        color_count.textContent = colors.length

        click = 0
    })

    play_btn.addEventListener('click', () => {
        
        if (play === play_count) {
            clearInterval(play)
        }
        play = setInterval(() => {
            function getHexCode() {
                function getRandomNumber(any) {
                    return Math.floor(Math.random() * any)
                }
        
                const hex_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
                
                let hex_color = '#'
        
                for (let i = 0; i < 6; i++) {
                    let randomNumber = hex_array[getRandomNumber(hex_array.length)]
                    hex_color += randomNumber
                    
                }
                
                return hex_color
            }
            hex_code = getHexCode()

            colors.push(hex_code)
            console.log(colors)
    
    
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