import React from 'react'




function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center text-yellow-400">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm ANKIT TIWARI</h1>
      <h2 className="text-3xl mb-8">Full Stack Developer</h2>
      <a href="https://drive.google.com/file/d/1rH5B0mgJixOJOtjFedX_ekmzFVNiKwAj/view?usp=sharing" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">Download resume</a>
      <a href="https://www.linkedin.com/in/ankit-tiwari-9482a320a/" className="mt-4">
        <img src="path-to-linkedin-icon" alt="LinkedIn" className="w-8 h-8" />
      </a>
    </div>
    )
}

export default Home
