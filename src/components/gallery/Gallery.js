import { useState, useEffect } from "react";
import './gallery.css';
import axios from "axios";
import ReactPaginate from "react-paginate";
import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Category from "./Category";

export default function Gallery() {
    const [loading, setloading] = useState(false);
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const category = ['All', 'Nature', 'Birds', 'Cats', 'Shoes']
    const [activeIndex, setActiveindex] = useState(category[0]);
    const [searchquery, setSearchquaery] = useState('');
    const [totalPages, setTotalpages] = useState(0);
    const apiurl = 'https://api.unsplash.com/search/photos';
    const ACCESS_KEY = 'bdIJTnMNniM2ohIFQIEkhEIsZcYuXo7ybeHj87wNvxM';
    const perpeage = 6;

    const searchGallery = async (bollean, query) => {
        setloading(bollean);
        try {
            const { data } = await axios.get(`${apiurl}?page=${page}&query=${query}&client_id=${ACCESS_KEY}&per_page=${perpeage}`);
            setGallery(data.results);
            setTotalpages(data.total_pages);
        }
        catch (error) {
            console.error('Error fetching data from Unsplash API:', error);
        }
        finally {
            setloading(false);
        }
    }
    const HandleSearch = (event) => {
        setSearchquaery(event.target.value);
    }
    const search = (ev) => {
        ev.preventDefault();
        setPage(1);
        searchGallery(true, searchquery);
    }
    const handlePageClick = (event) => {
        const offset = event.selected + 1;
        searchGallery(true, searchquery);
        setPage(offset);
    }
    const Sliders = (diretion) => {
        if (diretion === 'next') {
            setPage(page + 1)
            searchGallery(false, searchquery)
        }
        else if (diretion === 'prev') {
            setPage(page - 1)
            searchGallery(false, searchquery)
        }
    }
    return (
        <div className="flex justify-center items-center p-2 flex-col">
            <div className="search-conteiner">
                <form onSubmit={search} id="search">
                    <div className="search-content">
                        <span className="search-icons">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input onChange={HandleSearch} id="search-input" type="text" placeholder="search gallery..." />
                    </div>
                </form>
            </div>
            <Category
                setPage={setPage}
                category={category}
                update={() => {
                    searchGallery(true, searchquery)
                }}
                Selection={(selection) => setSearchquaery(selection)}
                activeIndex={activeIndex}
                activeClass={(selection) => setActiveindex(selection)}
            />
            <>
                {loading ? <div className="flex justify-center items-center" style={{ minHeight: '50vw' }}>
                    <div class="loader"></div>
                </div> : gallery.length !== 0 ? <div className="flex justify-center items-center p-2 flex-col">
                    <div className="flex items-center">
                        <button prevSlider={() => Sliders('prev')} className="mr-3">
                            <FontAwesomeIcon size="2xl" icon={faChevronLeft} />
                        </button>
                        <div className="images-conteiner">
                            <div className="gallery-conteiner">
                                {gallery.map((galler, index) => {
                                    return (
                                        <div className="gallery-item" key={index}>
                                            <img src={galler.urls.thumb} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <button onClick={() => Sliders('next')} className="ml-3">
                            <FontAwesomeIcon size="2xl" icon={faChevronRight} />
                        </button>
                    </div>
                </div> : ''}
                {totalPages > 1 && (
                    <ul className="pagination">
                        <ReactPaginate
                            className={`pages-number`}
                            activeClassName={`pages-number active`}
                            breakLabel="..."
                            nextLabel={<ButtonNext display={page === totalPages ? 'none' : 'block'} totalPages={totalPages} page={page} />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={totalPages}
                            previousLabel={<ButtonPrev display={page === 1 ? 'none' : 'block'} page={page} />}
                            renderOnZeroPageCount={null}
                        />
                    </ul>
                )}
            </>
        </div>
    )
}