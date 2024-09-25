import { Container } from "@/components/container"
import { Header } from "@/components/header"
import { TextTransition } from "@/components/transition"

export default function Home (){
  return(
    <Container>
      <Header/>
      <TextTransition/>
    </Container>
  )
}