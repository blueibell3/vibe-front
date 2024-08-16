'use client'
import { RecoilRoot } from "recoil"
import { Children, ReactNode } from "react"


const RecoilWrapper = (props:{children:ReactNode}) => {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}

export default RecoilWrapper