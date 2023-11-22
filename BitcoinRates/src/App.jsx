// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import BitcoinRates from './Components/BitcoinRates'
// import VideoPlayer from './Components/VideoPlayer'
// import Title from './Components/Title'
// import ChangeTitle from './Components/ChangeTitle'
// import { EmojiProvider } from './Context/EmojiContext'
import AppRoutes from './Routes/AppRoutes'
import MyThemeProvider from './Context/MyThemeContext'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DrawerAppBar from './Components/DrawerAppBar';

function App() {
  // const [myTitle, setMyTitle] = useState('Bitcoin Rates')
  return (
    <>
      <MyThemeProvider>
        <DrawerAppBar />
        <AppRoutes />
       {/* <EmojiProvider>
          <Title theTitle={myTitle} />
          <ChangeTitle setMyTitle={setMyTitle} />
          <BitcoinRates />
        </EmojiProvider> */}


      </MyThemeProvider>

    </>
  )
}

export default App
