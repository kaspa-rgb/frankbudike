import React from 'react';

const ErrorPage = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
            <h1 className="text-8xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-3xl p-5">Oops! This page seems to have vanished into the void of creativity.</p>
            <p className="mt-4">What to do next?</p>
            <div className="mt-2 p-5 text-xl">
                <a href="/#gallery" className="text-blue-600 hover:underline mx-2">Return to the Gallery</a>
                <span>|</span>
                <a href="https://www.instagram.com/frank_stud.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-blue-600 hover:underline mx-2">Explore our Blog</a>
                <span>|</span>
                <a href="https://x.com/franksudios?s=11" className="text-blue-600 hover:underline mx-2">Join our Community</a>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage
