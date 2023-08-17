
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  const navigate = useNavigate()
  return (
    <>
      
      <div className='background'> 
        <div className='colored'>
          
          <img className='logo' src='./logo.png' height={250}></img>
          <p className='header'>Books Are A Uniquely Portable Magic</p>
          <div className="buttons">
            <button className='library' onClick={()=> navigate("/dashboard")} >Enter Library</button>
            
          </div>
          
      
        </div>

      </div>
      
      


    </>
  )
}

