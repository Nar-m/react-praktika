import './drowdown.css';
import { faDownload, faShare, faXmark, faCheck, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Share from './share';

export default function DrowDown({ showDrowdown, element }) {
    const [download, setDownload] = useState([]);
    const [open, setOpen] = useState(false);
    const [share, setshare] = useState(false);

    const Download = () => {
        setOpen(true)
        setDownload([...download, { ...element }])
    }
    const ShareConteiner = () => setshare(true);

    return (
        <>
            <div className={`${showDrowdown ? 'drowDown show' : 'drowDown'}`}>
                <div onClick={Download} className='flex items-center cursor-pointer justify-between border-b p-2 hover:bg-black opacity-50'>
                    <div className='names'>
                        <span>Скачать</span>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faDownload} />
                    </div>
                </div>
                <div onClick={ShareConteiner} className='flex items-center cursor-pointer justify-between border-b p-2 hover:bg-black opacity-50'>
                    <div className='names'>
                        <span>подписаться</span>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faShare} />
                    </div>
                </div>
            </div>
            <div className={`${open ? 'download-conteiner show' : 'download-conteiner'}`}>
                {download?.map((element, index) => {
                    return <PageDownload element={element} key={index} />
                })}
            </div>
            {share ? <Share /> : ''}
        </>
    )
}

const PageDownload = ({ element }) => {
    const [information, setinformation] = useState({
        progress: 0,
        loaded: 0,
        total: 0,
        completed: false
    })

    useEffect(() => {
        axios.get(element.avatar, {
            responseType: 'blob',
            onDownloadProgress: (ProgressEvent) => {
                const progress = ((ProgressEvent.loaded * 100) / ProgressEvent.total);
                setinformation({
                    progress: progress,
                    loaded: ProgressEvent.loaded,
                    total: ProgressEvent.total,
                    completed: false
                })
            }
        })
            .then((res) => {
                setTimeout(() => {
                    const url = URL.createObjectURL(new Blob([res.data], {
                        type: res.data.type
                    }))
                    const a = document.createElement("a");
                    a.href = url;
                    a.setAttribute('download', element.first_name);
                    a.click();
                    document.body.appendChild(a);

                    setinformation((information) => ({
                        ...information,
                        completed: true
                    }));
                }, 1000)
            })
            .catch((err) => console.log(err))
    }, [])

    const FormatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return (
        <div className="download-content">
            <div className="download-item">
                <div className="load-name">
                    <span></span>
                    <span>
                        {information.loaded > 0 ?
                            <span style={{ marginTop: '15px', transition: '0.2s all' }}>
                                {FormatBytes(information.loaded)} / {FormatBytes(information.total)}
                            </span> : <>...Initializing</>}
                    </span>
                </div>
                <div className="completed">
                    <button className="completed-btns">
                        {information.completed ? <FontAwesomeIcon className="check" icon={faCheck} /> : <FontAwesomeIcon className="xmark" icon={faXmark} />}
                    </button>
                </div>
            </div>
            <div className="download-progress">
                <div style={{ width: `${information.progress}%` }} className="progress"></div>
            </div>
        </div>
    )
}