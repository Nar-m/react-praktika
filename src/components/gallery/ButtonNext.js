export default function ButtonNext({ display, totalPages, page, next }) {
    return (
        <button style={{display: display}} onClick={next} disabled={page === totalPages ? true : false}
            className={`${page === totalPages ? 'next-pages disabled' : 'next-pages'}`}>
            <i className="fa-solid fa-angle-right"></i>
        </button>
    )
}