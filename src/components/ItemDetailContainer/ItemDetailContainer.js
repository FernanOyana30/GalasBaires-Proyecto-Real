function ItemDetailContainer({ greeting }) {
    return (
      <>
        <div>
          <h2>{greeting}</h2>
          <ul>
            <li>    
              <h4>Nombre</h4>
              <small>Categoría</small>
              <p>Descripción</p>
              <p>$</p>                          
            </li>
          </ul>
        </div>
      </>
    );
  }