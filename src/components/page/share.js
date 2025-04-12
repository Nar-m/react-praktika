import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share'

export default function Share() {
    return (
        <div className="share-conteiner">
            <div className="share-icons">
                <span style={{ color: '#0866FF' }}>
                    <FacebookShareButton url='https://www.facebook.com/?locale=ru_RU'>
                        <FacebookIcon size={40} />
                    </FacebookShareButton>
                </span>
                <span>Facebook</span>
            </div>
            <div className="share-icons">
                <span style={{ color: 'violet' }}>
                    <LinkedinShareButton url='https://www.linkedin.com/feed/'>
                        <LinkedinIcon size={40} />
                    </LinkedinShareButton>
                </span>
                <span>Linkedin</span>
            </div>
            <div style={{ color: 'rgb(96, 96, 232)' }} className="share-icons">
                <span>
                    <WhatsappShareButton url='https://web.whatsapp.com/'>
                        <WhatsappIcon size={40} />
                    </WhatsappShareButton>
                </span>
                <span>Whatsapp</span>
            </div>
            <div style={{ color: 'rgb(96, 96, 232)' }} className="share-icons">
                <span>
                    <TelegramShareButton url='https://web.telegram.org/k/'>
                        <TelegramIcon size={40} />
                    </TelegramShareButton>
                </span>
                <span>Telegram</span>
            </div>
        </div>
    )
}