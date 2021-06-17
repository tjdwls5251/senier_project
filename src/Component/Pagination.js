import React from 'react';

function Pagination() {
    return(
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link" href="#" ariaLabel="Previous">
                    <span ariaHidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">...</a></li>
            <li className="page-item">
                <a className="page-link" href="#" ariaLabel="Next">
                    <span ariaHidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    )
}

export default Pagination;
