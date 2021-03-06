import React from "react"
import styled from "styled-components"
import Note from "@components/Note"




const NotesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const notesInfo = [
  {
    name: "JavaScript",
    color: 0,
    url: "https://www.notion.so/escuelajs/JavaScript-Tools-17d76e4e429a4a9e961f6b46cd7ea2c7",
    description: "0 to 100 concepts of JavaScript."
  },
  {
    name: "Python",
    color: 1,
    url: "https://www.notion.so/escuelajs/JavaScript-Tools-17d76e4e429a4a9e961f6b46cd7ea2c7",
    description: "0 to 100 concepts of JavaScript."
  },
  {
    name: "Node",
    color: 2,
    url: "https://www.notion.so/escuelajs/JavaScript-Tools-17d76e4e429a4a9e961f6b46cd7ea2c7",
    description: "0 to 100 concepts of JavaScript."
  },
  {
    name: "PHP",
    color: 3,
    url: "https://www.notion.so/escuelajs/JavaScript-Tools-17d76e4e429a4a9e961f6b46cd7ea2c7",
    description: "0 to 100 concepts of JavaScript."
  }
]

function NotesContainer() {
  return (
    <NotesContainerStyled>
      {notesInfo && (notesInfo.map(notes => <Note key={notes.name} data="olo" />))
      }
    </NotesContainerStyled>
  )
}

export default NotesContainer


