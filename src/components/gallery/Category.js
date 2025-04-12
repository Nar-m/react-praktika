

export default function Category(props) {
    const {setPage, category, activeClass, update, activeIndex, Selection} = props;

    const HandleSelection = (selection) => {
        setPage(1)
        activeClass(selection)
        Selection(selection)
        update()
    }
    const renderCategory = () => {
        return category.map((cat, index) => {
            return <button onClick={() => HandleSelection(cat)}
                className={`${cat === activeIndex ? 'category-btns active' : 'category-btns'}`} key={index}>{cat}</button>
        })
    }
    return (
        <div className="mt-12 flex items-center">
            {renderCategory()}
        </div>
    )
}