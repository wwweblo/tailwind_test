import React from 'react';
import logo from './assets/react.svg'
import vite from '../public/vite.svg'

import { Card, CardHeader, CardText } from "./components/Card";
import Header from "./components/Header"

function App() {
  return (
    <div className='h-min-fit  bg-blue-200 dark:bg-neutral-900 p-5 transition-[0.25s]'>

      <Header />

      <div className='flex flex-col gap-5 md:flex-row'>
        <Card img={logo}>
          <CardHeader>Hello World</CardHeader>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque hic porro ipsam quia dolor necessitatibus ipsa non, cumque tenetur quas, voluptatum saepe at quisquam harum sit nemo unde voluptates.</CardText>
        </Card>

        <Card img={vite}>
          <CardHeader>Hello World</CardHeader>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque hic porro ipsam quia dolor necessitatibus ipsa non, cumque tenetur quas, voluptatum saepe at quisquam harum sit nemo unde voluptates.</CardText>
        </Card>
      </div>
    </div>
  );
}

export default App;
