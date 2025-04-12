import { useState, useEffect } from "react"
import './page.css';
import ModalPage from "./ModalPage";

export default function Pages() {
    const [data, setData] = useState([]);
    const [page, setPages] = useState(1);
    const [activeIndex, setActiveindex] = useState(-1);
    const [element, seteElement] = useState('');

    const getData = async () => {
        const resposeve = await fetch('https://reqres.in/api/users?page=' + page);
        const data = await resposeve.json();
        setData(data);
    };
    
    const OpenModal = (element, index) => {
        setActiveindex(index)
        seteElement(element)
    };

    const renderModalPage = () => {
        if (activeIndex !== -1) {
            return <ModalPage
                close={() => setActiveindex(-1)}
                setActiveindex={setActiveindex}
                activeIndex={activeIndex}
                element={element}
                data={data?.data} />
        }
    };

    useEffect(() => {
        getData();
    }, [page])

    return (
        <div>
            <div className="flex items-center p-2">
                {data.data?.map((element, index) => {
                    return (
                        <div  key={index} className="wrapp wrapp-page">
                            <div onClick={() => OpenModal(element, index)} className="image">
                                <img src={element.avatar} alt="" />
                            </div>
                            <div className="email">
                                <span>{element.email}</span>
                            </div>
                            <div className="first_name">
                                <span>{element.first_name}</span>
                            </div>
                            <div className="last_name">
                                <span>{element.last_name}</span>
                            </div>
                            <div>{data.support.text}</div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center">
                <button className={`${page === 1 ? 'page-btns active' : 'page-btns'}`} onClick={() => {
                    if (page === 1) return;
                    setPages(1)
                    getData()
                }}>Page1</button>
                <button className={`${page === 2 ? 'page-btns active' : 'page-btns'}`} onClick={() => {
                    if (page === 2) return;
                    setPages(2)
                    getData()
                }}>Page2</button>
            </div>
            {renderModalPage()}
        </div>
    )
}