import './App.css'

import Progress from "./pages/Progress";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex flex-row gap-20">
          <Home/>
          <Progress />
      </div>
    </>
  )
}

export default App
