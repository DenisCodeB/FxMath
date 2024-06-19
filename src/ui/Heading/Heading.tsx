import React from 'react'
import { HTMLProps } from 'react'
import { HeadingTypes } from '@/types/types'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    role: HeadingTypes
}

const Heading = ({ id, className, children, role = 'p' }: HeadingProps) => {
    const Head = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
        React.createElement(role, props, children)

    return (
        <Head id={id} className={className}>
            {children}
        </Head>
    )
}

export default Heading
