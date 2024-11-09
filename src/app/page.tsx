import { About } from "@/components/about"
import { Services } from "@/components/cards"
import { Container } from "@/components/container"
import { Especiality } from "@/components/especiality"
import { Header } from "@/components/header"
import { MyWork } from "@/components/mywork"
import { Projects } from "@/components/projectscontainer"
import { StartNowSection } from "@/components/section"
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
      <Especiality/>
      <MyWork/>
      <StartNowSection/>
    </Container>
  )
}