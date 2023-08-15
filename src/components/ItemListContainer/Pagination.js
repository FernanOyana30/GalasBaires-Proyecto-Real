import React from 'react'

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
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button><a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}` } onClick={onPreviousPage} >Previous</a></button>
              <ul className="pagination-list">
                {
                    PageNumbers.map(noPage => (
                        <button key={noPage}>
                            <a className={`pagination-link 
                            ${noPage === currentPage ? 'is-current' : ''
                            }`}
                            onClick={() => onSpecificPage(noPage)}
                            >
                                {noPage}
                            </a>
                        </button>                        
                    ) )
                }                
              </ul>
              <button> <a className={`pagination-next ${currentPage >= PageNumbers.length ? 'is-disabled' : ''}`} 
              onClick={onNextPage} >Next page</a></button>
            </nav>

        </div>
    )
}

export default Pagination