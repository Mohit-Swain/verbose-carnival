import React from 'react';

function PostMemesView(){
    const styleImgBorder = {
        backgroundColor: '#E9D5FF',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    };
    return (
        <section className="md:flex-divide h-1/3 md:h-full w-full bg-green-100 overflow-auto">
            <div className=" md:h-full p-2 md:p-8 ">
            <article className="overflow-hidden flex md:flex-col rounded-lg shadow-lg">
                <div style={styleImgBorder} className="flex-initial flex items-center justify-center w-2/3 md:w-full">
                    <a href="#">
                        <img alt="Meme not found" className=" object-contain" src="https://via.placeholder.com/150" />
                    </a>
                </div>
                
                <div className="flex-initial w-1/3 md:w-full h-1/3 divide-y divide-purple-400">
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4 truncate overflow-ellipsis">
                        <h1 className="text-lg">
                                Article Title of some long heading which is very very long and will continue
                        </h1>
                    </header>
                    <span className="flex items-start max-h-32 md:max-h-full leading-tight p-0 md:p-4 overflow-ellipsis overflow-auto md:text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu sagittis tellus. Donec vel maximus eros, ut gravida eros. Proin efficitur laoreet urna vitae euismod. Vestibulum eu sodales mi. Duis quis orci sollicitudin, varius nibh a, porta diam. Phasellus aliquam arcu enim, nec pharetra arcu mattis vitae. Aliquam maximus libero nulla, at dignissim dui dapibus quis. Sed arcu tortor, ornare aliquam imperdiet sit amet, posuere ut nisi. Mauris at lectus et ligula aliquam bibendum in rutrum elit. Vestibulum tempus imperdiet lorem, semper tincidunt mauris faucibus nec. Donec ut consectetur ipsum, et venenatis nulla. Etiam commodo, magna vitae commodo convallis, nisl.
                    </span>
                    <span className="flex items-center justify-end leading-none pt-2 md:p-4">
                            <p className="ml-2 text-sm">
                                -Author Name
                            </p>
                    </span>

                </div>
                
                </article>
                
            </div>
        </section>
    )
}

export default PostMemesView;