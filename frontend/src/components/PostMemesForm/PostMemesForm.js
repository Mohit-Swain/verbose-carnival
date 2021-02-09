import React from 'react';

function PostMemesForm(){

    return (
        <section className="md:flex-divide h-2/3 md:h-full w-full bg-blue-100 overflow-auto">
            <div className="md:my-4 mx-16 md:px-16 py-2 md:py-6 md:border-2 md:border-purple-400 
                         rounded-md md:border-dashed">

                <form action="">
                <h2 className="text-lg md:text-2xl my-2 md:my-5 font-bold font-sans text-center leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Add Memes...
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your Name:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Text input" autoComplete="off"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Meme URL:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="ex. https://i.imgur.com/1GVIKve.png" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                Meme Description:
                <textarea className="shadow resize-none form-textarea mt-1 block w-full h-3/4 md:h-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" placeholder="Give a Caption for the meme..."></textarea>
                </label>
                </div>
                <div className="mb-4 float-right">
                    <label className="block">
                    <input className="mr-2 leading-tight" type="checkbox"/>
                    <span className="text-sm">
                        Remember Me
                    </span>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>

                </form>
            </div>
        </section>
    )
}

export default PostMemesForm;