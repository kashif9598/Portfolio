import './intro.scss'

function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/kashif.png' alt="man" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Kashif Sheikh</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='downArrow'/>
        </a>
      </div>
    </div>
  )
}

export default Intro