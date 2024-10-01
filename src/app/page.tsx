import { About } from "@/components/about"
import { Services } from "@/components/cards"
import { Container } from "@/components/container"
import { Header } from "@/components/header"
import { Projects } from "@/components/projectscontainer"
import { TrajectoryDetails } from "@/components/trajectory"
import { TextTransition } from "@/components/transition"

export default function Home (){
  return(
    <Container>
      <Header/>
      <TextTransition/>
      <Projects/>
      <About/>
      <TrajectoryDetails/>
      <Services/>
    </Container>
  )
}