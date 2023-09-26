

function About() {
  return (
<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I&apos;m Bamidele Oluwasegun, nice to meet you. Please take a look around.</p>
            </div>
            <div>
			<p>I am a passionate frontend developer who is eager to take on my first full-time engineering role.

			<p>I am skilled in HTML, CSS, Javascript and VueJs. I also enjoy learning new technologies and open to picking new skills.</p>

			In addition to my technical skills of building high-quality, responsive, and accessible websites, I am an excellent communicator and collaborator who values teamwork.</p>

			<p>I am detail-oriented developer who understands the importance of creating user-friendly and visually appealing interfaces for product users.

			I am excited to apply my skills and knowledge to foster the growth of any dynamic and innovative-oriented company.</p> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default About