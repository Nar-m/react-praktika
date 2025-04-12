import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Modal(props) {
    const { setActiveindex, activeindex, close, data } = props;
    
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
                    close()
                }
            }} className={`modal-conteiner`}>
                <span onClick={close} className='modal-close'>&times;</span>
                <button onClick={() => Sliders('prev')} className='modal-btns left'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className='modal-content'>
                    <div className='image'>
                        {data.map((__, index) => {
                            if (activeindex === index) {
                                return <img className={`${activeindex === index ? 'active' : ''} `} key={index} src={data[activeindex].image} alt='' />
                            }
                        })}
                    </div>
                </div>
                <button onClick={() => Sliders('next')} className='modal-btns right'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>, document.getElementById('modal')
        )
    )
}