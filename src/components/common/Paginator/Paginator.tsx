import React, {useState} from "react";
import s from "./Paginator.module.css"

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize: number
}

const Paginator: React.FC<PaginatorPropsType> = ({
                                                     totalItemsCount, pageSize,
                                                     currentPage, onPageChanged, portionSize,
                                                 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.pagesList}>
        {
            portionNumber > 1 &&
            <button
                className={s.pageBtn}
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
            >
                PREV
            </button>
        }
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {
                        return (
                            <span
                                key={index}
                                className={currentPage === p ? s.selectedPage : ''}
                                onClick={(e) => {
                                    onPageChanged(p)
                                }}
                            >
                                {p}
                            </span>
                        )
                    }
                )
        }
        {
            portionCount > portionNumber &&
            <button
                className={s.pageBtn}
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
            >
                NEXT
            </button>
        }
    </div>
}


export default Paginator;