import { Container } from "@/components/container"
import { Header } from "@/components/header"

export default function Home (){
  return(
    <Container>
      <Header/>
      <div className="h-[100vh]"></div>
    </Container>
  )
}