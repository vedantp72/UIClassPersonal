import '../Netflix-header/netflix-header.css';
export function NetflixHeader() {
    return (
        <div className="header">
            <div>
                <div className="brand-title ">NETFLIX</div>
            </div>
            <div className='lan'>
                <div className='input-group mt-3 '>
                <span className='bi bi-translate input-group-text'></span>
                <select className="lang form-select form-select-sm" id="">
                    {/* <option value="">Language</option> */}
                    <option value="">English</option>
                    <option value="">हिन्दी</option>
                </select>
                <div className='ms-4'>
                    <button className='btn btn-danger btn-sm'>Sign In</button>
                </div>
                </div>
            </div>
        </div>
    )
}