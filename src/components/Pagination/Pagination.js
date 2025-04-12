import { useEffect, useState } from "react";

export default function Pagination({ showPages, setcurentpages, data, curentpages }) {
    const [curentbutton, setcurentbutton] = useState([]);
    const numberOfpages = [];

    const PrevPages = () => {
        setcurentpages((curentpages) => curentpages - 1)
        window.scrollTo({ top: '0', behavior: 'instant' })
    };
    const NextPages = () => {
        setcurentpages((curentpages) => curentpages + 1)
        window.scrollTo({ top: '0', behavior: 'instant' })
    };
    for (let i = 1; i <= showPages; i++) {
        numberOfpages.push(i)
    }
    useEffect(() => {
        let numberpage = [...numberOfpages];
        let dostInitial = '...';
        let dostleft = '...';
        let dostright = '...';

        if (curentpages >= 1 && curentpages <= 3) {
            numberpage = [1, 2, 3, 4, dostInitial, data]
        }
        else if (curentpages === 4) {
            const slices = numberOfpages.slice(0, 5);
            numberpage = [...slices, dostInitial, data];
        }
        else if (curentpages > 4 && curentpages < numberOfpages.length - 2) {
            const slices1 = numberOfpages.slice(curentpages - 2, curentpages);
            const slices2 = numberOfpages.slice(curentpages, curentpages + 1);
            numberpage = ([1, dostleft, ...slices1, ...slices2, dostright, data]);
        }
        else if (curentpages > numberOfpages.length - 3) {
            const slic = numberOfpages.slice(numberOfpages.length - 4);
            numberpage = [1, dostleft, ...slic, data];
        }
        else if (curentpages === dostInitial) {
            setcurentpages(curentbutton[curentbutton.length - 3] + 1)
        }
        else if (curentpages === dostright) {
            setcurentpages(curentbutton[3] + 2)
        }
        else if (curentpages === dostleft) {
            setcurentpages(curentbutton[3] - 2)
        }
        setcurentbutton(numberpage)
    }, [curentpages])

    return (
        <ul className="pagination">
            <button onClick={PrevPages}
                disabled={curentpages === 1 ? true : false} className={`${curentpages === 1 ? 'prev-pages disabled' : 'prev-pages'}`}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            {curentbutton.map((page, index) => {
                return (
                    <li onClick={() => {
                        setcurentpages(page)
                        window.scrollTo({ top: '0', behavior: 'instant' })
                    }} className={`${curentpages === page ? 'pages-number active' : 'pages-number'}`} key={index}>
                        <button className="pages-btns">{page}</button>
                    </li>
                )
            })}
            <button disabled={curentpages === data ? true : false} onClick={NextPages}
                className={`${curentpages === data ? 'next-pages disabled' : 'next-pages'}`}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </ul>
    )
}