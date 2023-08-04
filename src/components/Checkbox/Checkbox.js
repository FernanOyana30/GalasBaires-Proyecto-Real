import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Checkbox() {
  return (
    <div>               
      <Form>  
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">            
            <Link to='/productos' className='text-decoration-none text-dark'> 
              <Form.Check 
                type={type}
                id={`default-${type}`}   
                label={`Todos`}                     
                />                        
            </Link>            
          </div>
        ))}
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
            <Link to='/category/Velas' className='text-decoration-none text-dark'> 
              <Form.Check 
                type={type}
                id={`default-${type}`}   
                label={`Velas`}                     
              />                        
            </Link>            
          </div>
        ))}
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
            <Link to='/category/Difusores' className='text-decoration-none text-dark'> 
              <Form.Check 
                type={type}
                id={`default-${type}`}  
                label={`Difusores `}                      
              />
            </Link>  
          </div>
        ))}
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
            <Link to='/category/Perfuminas' className='text-decoration-none text-dark'> 
              <Form.Check 
                type={type}
                id={`default-${type}`}   
                label={`Perfuminas `}                      
              />
            </Link>       
          </div>
        ))}
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight">
            <Link to='/category/Refill' className='text-decoration-none text-dark'> 
              <Form.Check 
                type={type}
                id={`default-${type}`}  
                label={`Refill`}                       
              />
            </Link>        
          </div>
        ))}
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
            <Link to='/category/Hornitos' className='text-decoration-none text-dark'> 
              <Form.Check 
                type={type}
                id={`default-${type}`} 
                label={`Hornitos`}                        
              />
            </Link>      
          </div>
        ))}
      </Form>
    </div>    
  )
}

export default Checkbox