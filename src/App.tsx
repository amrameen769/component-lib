/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SideBar1 from "./components/SideBar1/SideBar1"
import './App.css'
import SideBar2 from "./components/SideBar2/SideBar2"
import { bank, banks } from "./constants"
import { useEffect, useState } from "react"
import { sortBanks } from "./lib"

const App = () => {

  const [bankList, setBankList] = useState<bank[]>([])
  useEffect(() => {
    const sortedBanks = sortBanks(banks)
    setBankList(sortedBanks)
  }, [])


  return (
    <main className="main">
      <SideBar1 />
      {/* <SideBar2 /> */}
      <div>
        <h1>Main Component</h1>
        {bankList.length > 0 && bankList.map((bank, index) => (
          <div key={index}>{bank.name}</div>
        ))}
      </div>
    </main>
  )
}

export default App