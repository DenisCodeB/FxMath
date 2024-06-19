const transformElement = (e: MouseEvent, item: HTMLImageElement) => {
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX)
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY)

    let halfWidth = item.getBoundingClientRect().width / 2
    let halfHeight = item.getBoundingClientRect().height / 2

    let calcAngleX = (x - halfWidth) / 3
    let calcAngleY = (y - halfHeight) / 5

    item.style.perspective = `${halfWidth * 10}px`

    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`
}

const animateMove = (elem: HTMLImageElement, e: MouseEvent) => {
    window.requestAnimationFrame(() => transformElement(e, elem))
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
