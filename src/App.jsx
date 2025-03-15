import Aos from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';
import Loader from './components/loader';
import AppRoutes from './routes/routes';


Aos.init({
  offset: 120,
  delay: 0,
  duration: 300,
  easing: 'ease-in',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode='popLayout'>
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <AppRoutes />
      )}
    </AnimatePresence>
  )
}

export default App