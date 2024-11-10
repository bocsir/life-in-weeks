import { useState } from 'react';
import './App.css'
import BirthDateForm from './components/BirthdateForm'
import Grid from './components/Grid'

function App() {

  const [weeksEndured, setWeeksEndured] = useState<number>(0);

  return (
    <div className="m-10">
      <BirthDateForm setWeeksEndured={setWeeksEndured}/>
      <Grid weeksEndured={weeksEndured}/>
    </div>
  )
}

export default App

