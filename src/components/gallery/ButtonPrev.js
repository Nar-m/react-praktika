export default function ButtonPrev({display, page, prev}) {
    return (
        <button
            style={{display: display}}
            onClick={prev}
            disabled={page === 1 ? true : false} className={`${page === 1 ? 'prev-pages disabled' : 'prev-pages'}`}>
            <i className="fa-solid fa-angle-left"></i>
        </button>
    )
}