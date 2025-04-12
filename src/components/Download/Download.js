import { useState, useEffect } from "react"
import './download.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Download(props) {
    const { download, opendownload, removeDownload } = props
    return (
        <div className={`${opendownload ? 'download-conteiner show' : 'download-conteiner'}`}>
            {download?.map((files, index) => {
                return (
                    <DownloadContent removeDownload={removeDownload}
                        files={files} key={index} />
                )
            })}
        </div>
    )
}

const DownloadContent = ({ files, removeDownload }) => {
    const [downloadinfo, setdownloadInfo] = useState({
        progress: 0,
        total: 0,
        loaded: 0,
        completed: false,
    })

    useEffect(() => {
        axios.get(`${files.image}`, {
            responseType: "blob",
            onDownloadProgress: (ProgressEvent) => {
                const { loaded, total } = ProgressEvent;
                const progressbar = Math.floor((loaded * 100) / total);
                setdownloadInfo({
                    progress: progressbar,
                    total: total,
                    loaded: loaded,
                    completed: false
                })
            }
        })
            .then((res) => {
                setTimeout(() => {
                    const url = window.URL.createObjectURL(new Blob([res.data], {
                        type: res.data.type
                    }))
                    const a = document.createElement('a');
                    a.href = url;
                    a.setAttribute('download', files.firstName);
                    document.body.appendChild(a);
                    a.click();
                    setdownloadInfo((downloadinfo) => ({
                        ...downloadinfo,
                        completed: true
                    }))
                    setTimeout(() => {
                        removeDownload();
                    }, 2500)
                }, 1800)
            })
            .catch((err) => console.log(`!Error` + err));
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
                    <span>{files.firstName}</span>
                    <span>
                        {downloadinfo.loaded > 0 ?
                            <span style={{ marginTop: '15px', transition: '0.2s all' }}>
                                {FormatBytes(downloadinfo.loaded)} / {FormatBytes(downloadinfo.total)}
                            </span> : <>...Initializing</>}
                    </span>
                </div>
                <div className="completed">
                    <button className="completed-btns">
                        {downloadinfo.completed ? <FontAwesomeIcon className="check" icon={faCheck} /> : <FontAwesomeIcon className="xmark" icon={faXmark} />}
                    </button>
                </div>
            </div>
            <div className="download-progress">
                <div style={{ width: `${downloadinfo.progress}%` }} className="progress"></div>
            </div>
        </div>
    )
}