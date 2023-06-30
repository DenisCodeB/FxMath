import { Lato } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const lato = Lato({
    style: 'normal',
    variable: '--ff-L',
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const montserrat = Montserrat({
    style: 'normal',
    variable: '--ff-M',
    weight: '400',
    subsets: ['latin'],
    display: 'swap'

})

const montserratBold = Montserrat({
    style: 'normal',
    variable: '--ff-M-b',
    weight: '700',
    subsets: ['latin'],
    display: 'swap'

})

export {
    lato,
    montserrat,
    montserratBold,
}