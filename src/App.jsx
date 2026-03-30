import { useState } from "react"
import Banner from "./components/Banner"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Models from "./components/Models"
import NavBar from "./components/NavBar"

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()
function App() {
  const [activeTab,setActiveTab]=useState("Products")
  const [carts, setCarts]=useState([])
  console.log(carts)


  return (
    <>
      <NavBar carts={carts} />
      <Banner />
      
      <div className="tabs  justify-center bg-white my-4 border-none">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 checked:bg-purple-500 checked:text-white" aria-label="Products"  defaultChecked onClick={()=>setActiveTab("Products")} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 checked:bg-purple-500 checked:text-white" aria-label={`Cart (${carts.length})`} onClick={()=>setActiveTab("Cart")}  />
        
      </div>
      {activeTab==="Products" && <Models modelPromise={modelPromise}  carts={carts} setCarts={setCarts}/>}
      {activeTab==="Cart" &&  <Cart  carts={carts}  setCarts={setCarts}/>}
      <Footer />
    </>
  )
}

export default App
