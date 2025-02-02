import React, { useState } from 'react';
import './skills.css';
import jsImg from '../../Assets/js.png';
import cSharpImg from '../../Assets/csharp.png';
import javaImg from '../../Assets/java.png';
import angularImg from '../../Assets/angular.png';
import azureImg from '../../Assets/azure.png';
import htmlImg from '../../Assets/html.png';
import cssImg from '../../Assets/css.png';
import mssqlImg from '../../Assets/mssql.png';
import tsImg from '../../Assets/ts.png';
import reactImg from '../../Assets/react.png';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const skillsData = {
    languages: [
      { name: 'JavaScript', img: jsImg },
      { name: 'C#', img: cSharpImg },
      { name: 'Java', img: javaImg },
    ],
    frameworks: [
      { name: 'Angular', img: angularImg },
      { name: 'React', img: reactImg },
      { name: 'Azure', img: azureImg },
    ],
    tools: [
      { name: 'HTML', img: htmlImg },
      { name: 'CSS', img: cssImg },
      { name: 'TypeScript', img: tsImg },
      { name: 'MSSQL', img: mssqlImg },
    ],
  };

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section id='skills'>
      <h2 className='sectionTitle'>What I Do</h2>
      <p className='sectionDesc'>
        I am a passionate software developer with expertise in building scalable solutions. Proficient in technologies such as Angular, Java, React, and more. I focus on delivering intuitive and high-performance software.
      </p>

      {/* Tabs Section */}
      <h2 className='sectionTitle'>Skills</h2>
      <div className='skillsTabs'>
        <div className='tabs'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='tabContent'>
          <div className='skillsGrid'>
            {skillsData[activeTab].map((skill, index) => (
              <div key={index} className='skillCard'>
                <img src={skill.img} alt={skill.name} className='skillIcon' />
                <h4 className='skillName'>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className='workExperience'>
  <h2 className='sectionTitle'>Work Experience</h2>
  <div className='workCards'>
    {/* Tetra Soft Labs */}
    <div className='workCard'>
      <h3 className='workTitle'>Tetra Soft Labs</h3>
      <span className='workDuration'>Sep 2021 - Aug 2024</span>
      <p className='workDescription'>
        - Developed scalable solutions for Diacore, including real-time stock management and database optimization using MSSQL.<br />
        - Managed projects with Azure DevOps and created custom software using Angular, C#, and ASP.NET.
      </p>
    </div>

    {/* Vouch Digital */}
    <div className='workCard'>
      <h3 className='workTitle'>Vouch Digital</h3>
      <span className='workDuration'>Aug 2021 - Sep 2021</span>
      <p className='workDescription'>
        - Enhanced UI/UX by creating reusable React components and collaborating with tools like JIRA and Bitbucket.<br />
        - Worked with Git Bash for version control and deployed responsive web apps.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Skills;
