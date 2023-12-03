import React from 'react'
import './style.css'

function Pagination({productsPerPage, totalProducts, currentPage, setCurrentPage}) {
    const PageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        PageNumbers.push(i)
    }
    

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo(0, 0) 
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
        window.scrollTo(0, 0) 
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
        window.scrollTo(0, 0) 
    }

    return (
        <div className='estiloPaginacion'>            
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className={`page-link text-decoration-none paginationStyle ${currentPage === 1 ? 'disabled' : ''}` } onClick={onPreviousPage} >Anterior</a></li>
                {
                    PageNumbers.map(noPage => (
                        <li key={noPage}>
                            <a className={`page-link text-decoration-none paginationStyle
                            ${noPage === currentPage ? 'paginationStyleActive' : ''
                            }`}
                            onClick={() => onSpecificPage(noPage)}
                            >
                                {noPage}
                            </a>
                        </li>                        
                    ) )
                }        
                <li className="page-item"><a className={`page-link text-decoration-none paginationStyle ${currentPage >= PageNumbers.length ? 'disabled' : ''}`} onClick={onNextPage}>Siguiente</a></li>
              </ul>
            </nav>
        </div>
    )
}

export default Pagination