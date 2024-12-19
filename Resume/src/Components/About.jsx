import React from 'react'

function About() {
    return (
        <div className="About">
     
      <section id="about">
      <div className='text-yellow-500 px-0 py-5 text-left text-5xl'><h1>About Me</h1></div>
        <div className="content">
          <div className="description text-white">
           <div className='text-left  text-yellow-500 text-3xl'> <h2>Front end developer</h2></div>
           <div className='text-2xl'>
           <p>A fresher front-end developer is an entry-level professional skilled in creating visually appealing and user-friendly web interfaces. They possess a foundational understanding of HTML, CSS, and JavaScript, and are eager to apply their knowledge to build responsive and interactive website</p>
           </div>
          </div>
          <div className="personal-info">
           <div className='text-yellow-500 text-left text-3xl'><h1>Personal Information</h1></div >
            <div className='text-white text-ellipsis underline underline-offset-auto text-3xl text-left'><p><strong>Name:</strong> ANKIT TIWARI</p>
            <p><strong>Address:</strong> Bengaluru</p>
            <p><strong>Email:</strong> ANKIT TIWARI</p>
            <p><strong>Contact No:</strong> +91 9472140698</p></div>
           </div>
        </div>
      </section>
    </div>
    )
}

export default About
