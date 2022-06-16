import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <img
                className='header--image'
                src='https://toppng.com/uploads/thumbnail/troll-face-vector-download-free-115741753031c8udcdgkw.png'
                alt='face'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    );
}
