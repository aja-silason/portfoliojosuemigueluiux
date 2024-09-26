import { About } from "@/components/cards"
import { Container } from "@/components/container"
import { Header } from "@/components/header"
import { Projects } from "@/components/projectscontainer"
import { TextTransition } from "@/components/transition"

export default function Home (){
  return(
    <Container>
      <Header/>
      <TextTransition/>
      <Projects/>
      <About/>
    </Container>
  )
}