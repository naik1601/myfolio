import React from 'react';
import './intro.css';
import bg from '../../Assets/Myprofile12.png';
import { Link } from 'react-scroll';
import btnimg from '../../Assets/hireme.png';
import downloadimg from '../../Assets/downloadimage.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
      <span className="hello animate-slideInLeft">Hi there,</span>
<span className="introText animate-fadeIn">
  I'm <span className="introname">Shreyesh</span>,
  <br />
  a Passionate Software Developer <span className="wave">🚀</span>
</span>
<p className="intropara animate-slideUp">
  I craft scalable, user-friendly solutions with a blend of creativity and code. Let's build something amazing together!
</p>

<a href="/Shreyesh_Naik_Resume.pdf" download="Shreyesh_Naik_Resume.pdf">
      <button className="desktopintromenubtn">
        {/* <img src={downloadimg} alt="download" className="desktopmenuimg" /> */}
        Resume
      </button>
      </a>
      </div>
      <div className="profile-container">
        <img src={bg} alt="profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
