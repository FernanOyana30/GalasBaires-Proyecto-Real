import React from 'react'
import Button from 'react-bootstrap/Button';

function Pagination({productsPerPage, totalProducts, currentPage, setCurrentPage}) {
    const PageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        PageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <div>            
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className={`page-link text-decoration-none ${currentPage === 1 ? 'disabled' : ''}` } onClick={onPreviousPage} >Previous</a></li>
                {
                    PageNumbers.map(noPage => (
                        <li key={noPage}>
                            <a className={`page-link text-decoration-none 
                            ${noPage === currentPage ? 'active' : ''
                            }`}
                            onClick={() => onSpecificPage(noPage)}
                            >
                                {noPage}
                            </a>
                        </li>                        
                    ) )
                }        
                <li className="page-item"><a className={`page-link text-decoration-none ${currentPage >= PageNumbers.length ? 'disabled' : ''}`} onClick={onNextPage}>Next</a></li>
              </ul>
            </nav>
        </div>
    )
}

export default Pagination