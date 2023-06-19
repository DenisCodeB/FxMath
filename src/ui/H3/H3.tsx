import style from './H3.module.scss'

interface IH3 {
    children: string
}

const H3 = ({ children }: IH3) => {
    return <h3 className={style['h3-heading']}>{children}</h3>
}

export default H3
