import { Link } from "react-router-dom";
import './style.css'

function Filter() {
  return (
    <div>    
      <Link to='/productos' className='text-decoration-none text-dark'> 
        <p className="mb-2 subrayado">Todos</p>                      
      </Link> 
      <Link to='/category/Velas' className='text-decoration-none text-dark'> 
        <p className="mb-2 subrayado">Velas</p>                                     
      </Link> 
      <Link to='/category/Difusores' className='text-decoration-none text-dark'> 
        <p className="mb-2 subrayado">Difusores</p>        
      </Link>
      <Link to='/category/Perfuminas' className='text-decoration-none text-dark'> 
        <p className="mb-2 subrayado">Perfuminas</p>        
      </Link>
      <Link to='/category/Hornitos' className='text-decoration-none text-dark'> 
        <p className="mb-2 subrayado">Hornitos</p>        
      </Link> 
    </div>    
  )
}

export default Filter