import { HeadingTypes } from '@/types/types'

interface IHeading {
    id?: string
    className: string
    children: React.ReactNode
    role: HeadingTypes
}

const Heading = ({ id, className, children, role }: IHeading) => {
    return (
        <h1 role={role} id={id} className={className}>
            {children}
        </h1>
    )
}

export default Heading
