import ItemList from "../ItemList/ItemList";

export default function ItemListContainer (){
    return (
      <div> 
        <h1>Nuestro catálogo</h1>    
        <div>
          <h3>Descubrí tu fragancia</h3>
          <p>¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
          <button>Hacer cuestionario</button>
        </div>       
        <div>
          <h3>Filtrar por</h3>
          <ul>
            <li>Velas aromáticas</li>
            <li>Difusores</li>
            <li>Perfuminas</li>
            <li>Refill</li>
            <li>Hornitos</li>
          </ul>
        </div>
        {
          <ItemList/>
        }
      </div>   
    );
  }
  
  

  