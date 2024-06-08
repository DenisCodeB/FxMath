const transformElement = (elem: HTMLImageElement, x: number, y: number) => {
    const multiple = 5
    const box = elem.getBoundingClientRect()
    const calcX = -(y - box.y - box.height / 2) / multiple
    const calcY = (x - box.x - box.width / 2) / multiple

    elem.style.transform =
        'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)'
}

const animateMove = (elem: HTMLImageElement, e: MouseEvent) => {
    window.requestAnimationFrame(() =>
        transformElement(elem, e.clientX, e.clientY),
    )
}

const resetWhenLeave = (elem: HTMLImageElement) => {
    window.requestAnimationFrame(
        () => (elem.style.transform = 'rotateX(0) rotateY(0)'),
    )
}

export const animateMouseMove = (elem: HTMLImageElement) => {
    elem.addEventListener('mousemove', e => {
        animateMove(elem, e)
    })

    elem.addEventListener('mouseleave', () => {
        resetWhenLeave(elem)
    })
}

export const removeListeners = (elem: HTMLImageElement) => {
    elem.removeEventListener('mousemove', e => {
        animateMove(elem, e)
    })

    elem.removeEventListener('mouseleave', () => {
        resetWhenLeave(elem)
    })
}
