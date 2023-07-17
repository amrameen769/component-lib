import SideBar1 from "./components/SideBar1/SideBar1"
import './App.css'
import SideBar2 from "./components/SideBar2/SideBar2"

const App = () => {
  return (
    <main className="main">
      <SideBar1 />
      {/* <SideBar2 /> */}
      <div>
        <h1>Main Component</h1>
      </div>
    </main>
  )
}

export default App