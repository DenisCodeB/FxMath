import style from './H1.module.scss'

interface IH1 {
    children: string
}

const H1 = ({ children }: IH1) => {
    return <h1 className={style['h1-heading']}>{children}</h1>
}

export default H1
