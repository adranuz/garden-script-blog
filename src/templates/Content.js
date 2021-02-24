import React  from "react"
import styled from "styled-components"
import Section from "../components/sections/Section"

import ProfilePhoto from "../components/media/Profile"
import SocialMediaContainer from "../components/media/SocialContainer"
import NotesContainer from "../components/media/NotesContainer"

const ContentStyled = styled.div`
  margin: auto;
  /* filter: blur(4px); */
  b {
    margin-bottom: 0;
  }
`

function Content() {
  
  return (
    <ContentStyled>
      <Section>
        <p><b>Hello, my name is</b></p>
        <h2>Adrian Garcia</h2>
        <h3>I Develop on the Internet <br/> with JavaScript</h3>
        <p>I’m Mechatronics Engineer by my university, but I found in the web a way to make amazing things with just a computer and a good coffee.</p>
        <button>Contact me</button>
      </Section>
      
      <Section title="About">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        <div className="align-center">
          <ProfilePhoto />
        </div>
      </Section>
      
      <Section title="Docs & retakes">
        <p>I ussually use the same code in different projects because I spent time searching how to do a thing, and when I found how to do it I save it in my favorite notes app <b>Notion.so</b>. Let's check some of them to use them.</p>
        <NotesContainer />

      </Section>
      
      <Section title="Projects">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      </Section>
      
      <Section title="Experience">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      </Section>
      
      
      <Section title="Get in Touch" titlecenter="true">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        <SocialMediaContainer />
      </Section>
    </ContentStyled>
  )
}

export default Content