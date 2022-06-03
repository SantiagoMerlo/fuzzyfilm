import React from "react"
import { Link } from "react-router-dom"
import Input from "./Input"


export default function Header() {

    return <header className="relative bg-white shadow-md">
        <div className="max-w-5xl px-4 w-full">
            <div className="flex justify-start items-center border-b-2 border-gray-100 py-6  md:space-x-8">
                <div className="flex justify-start">
                    <Link to="/">
                        <span className="sr-only">Workflow</span>
                        <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-10">
                    <div className="relative font-bold">
                    <span>Films Fuzzy Fish</span>
                    </div>
                </nav>
            </div>
        </div>
    </header>
}