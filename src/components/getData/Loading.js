export default function Loading() {
    return (
        <div style={{height: '50vw'}} className="flex items-center justify-center">
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}