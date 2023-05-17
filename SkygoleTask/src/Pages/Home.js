
import { useState } from 'react';
import Signup from './Signup'
import '../App.css'


function Home() {
    const [cli,setCli]=useState(false)

    return(
        <>{
            cli?<Signup/>:
            <div className='App'>
        <h1>Welcome To Your Home Page</h1>
        <h1>This is a simple page</h1>
        <p>This task I have used database for firebase </p>
         <button className='btn' onClick={e=>setCli(true)}>Sign Out</button>
        </div>
        }
        </>
    )
}

export default Home;