import './App.css'
import { MdiFire } from './components/svg/home/HomeIcons'
import DefaultPhone from './pages/DefaultPhone'

function App() {
  return (
    <DefaultPhone pageName={'home'} title={'Welcome'} comp={<MdiFire/>} content={
      <>
        <span> Basta Tucu</span>
      </>
    } />
  )
}

export default App
