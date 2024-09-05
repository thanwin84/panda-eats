import React from "react";
import {
    Header,
    Hero,
    Footer
} from "../components"

type Props = {
    children: React.ReactNode
}

export default function Layout({
    children
}:Props){
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto flex-1 py-10" >
                {children}
            </div>
            <Footer/>
        </div>
    )
}