import Footer from '@components/footer'
import Header from '@components/header'

import style from './App.module.scss'

function App() {
  return (
    <div className="App">
      <div className={style.appBackground}>
        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default App
