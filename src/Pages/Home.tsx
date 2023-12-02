import Landing from "../Components/Landing"
import Content from '../Components/Content'

export default function Home() {

  // to fix the position inheritance when using useNavigate
  window.scrollTo(0, 0)
  
  return (
    <div className="text-[40px] container">
      <Landing />
      <Content />
    </div>
  )
}
