import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import DrowDown from './Drowdown';
import { useState } from 'react';

export default function ModalPage(props) {
    const { close, setActiveindex, activeIndex, data, element } = props;
    const [showDrowdown, setDrowdown] = useState(false);

    const Sliders = (type) => {
        if (type === 'prev') {
            setActiveindex((activeindex) => activeindex === 0 ? data.length - 1 : activeindex - 1)
        }
        else if (type === 'next') {
            setActiveindex((activeindex) => activeindex === data.length - 1 ? 0 : activeindex + 1)
        }
    }

    return (
        createPortal(
            <div onClick={(e) => {
                if (e.target.className === 'modal-conteiner') {
                    close();
                }
            }} className={`modal-conteiner`}>
                <span onClick={close} className='modal-close'>&times;</span>
                <DrowDown element={element} showDrowdown={showDrowdown} />
                <button onClick={() => Sliders('prev')} className='modal-btns left'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className='modal-content pages'>
                    <div onClick={() => setDrowdown(!showDrowdown)} className='vertical-icon' style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                    <div className='image'>
                        {data.map((__, index) => {
                            if (activeIndex === index) {
                                return <img className={`${activeIndex === index ? 'active' : ''} `} key={index} src={data[activeIndex].avatar} alt='' />
                            }
                        })}
                    </div>
                </div>
                <button onClick={() => Sliders('next')} className='modal-btns right'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>, document.getElementById('modal-pages')
        )
    )
}