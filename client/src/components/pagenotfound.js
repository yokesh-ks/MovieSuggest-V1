import React from 'react'

function PageNotFound() {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center h-full gap-9">
                <h1 className="text-7xl text-blue-600 font-bold">404</h1>
                <p className="text-2xl">Oops… You just found an error page</p>
                <p className="text-2xl">We are sorry but the page you are looking for was not found</p>
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white">Take me Home</button>
            </div>
        </div>
    )
}

export default PageNotFound
