import { useEffect, useState } from "react"
import './getdata.css';
import DataContent from "./dataContent";
import Loading from "./Loading";
import Pagination from "../Pagination/Pagination";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Download from "../Download/Download";

export default function GetData() {
    const [data, setData] = useState([]);
    const [activeindex, setActiveindex] = useState(-1);
    const [loading, setloading] = useState(false);
    const [curentpages, setcurentpages] = useState(1);
    const [download, setdownload] = useState([]);
    const [opendownload, setopendownload] = useState(false);
    const pages = 4;
    const firstcurenpages = curentpages * pages; //1 * 4 = 4//
    const lastcaretnpages = firstcurenpages - pages; //4 - 4 = 0//

    function OpenModal(index) {
        setActiveindex(index);
    }

    function DownloadFile(element) {
        setopendownload(true);
        setdownload([...download, { ...element }]);
    }

    function removeDownload() {
        if (download.length > 4) {
            setopendownload(false);
        }
    }

    useEffect(() => {
        setloading(true)
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => setData(res))
            .then(() => {
                setloading(false)
            })
            .catch((err) => console.log(`!Error` + err))
    }, [])
    
    const renderData = () => {
        return data.users?.slice(lastcaretnpages, firstcurenpages).map((element, index) => {
            return (
                <div key={index} className={`${curentpages + 1 ? 'wrapp anim' : 'wrapp'}`}>
                    <button onClick={() => DownloadFile(element)} title="download" className="download-image">
                        <FontAwesomeIcon icon={faDownload} />
                    </button>
                    <div onClick={() => OpenModal(index)} className="image">
                        <img src={element.image} alt="" />
                    </div>
                    <DataContent element={element} />
                </div>
            )
        })
    }

    return (
        <>
            {loading ? <Loading /> : <div className="flex justify-center items-center flex-col h-full">
                <div className="data-conteiner">
                    {renderData()}
                </div>
                <Pagination
                    showPages={Math.ceil(data.users?.length / pages)}
                    curentpages={curentpages}
                    data={data.users?.length}
                    setcurentpages={setcurentpages} />
            </div>}
            {activeindex !== -1 && <Modal data={data?.users}
                close={() => setActiveindex(-1)}
                setActiveindex={setActiveindex}
                activeindex={activeindex} />}
            <Download
                download={download}
                setopendownload={setopendownload}
                removeDownload={removeDownload}
                opendownload={opendownload} />
        </>
    )
}