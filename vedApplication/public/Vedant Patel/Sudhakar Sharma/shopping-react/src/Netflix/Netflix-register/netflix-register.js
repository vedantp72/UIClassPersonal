import '../Netflix-register/netflix-register.css';
export function NetflixRegister()
{
    return(
        <div>
            <div className='mt-4 '>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='input-group input-group-lg input'>
                <input type="email" className='form-control bg-transparent rounded' placeholder='Email address'/>
                <button className='btn btn-danger ms-2 rounded'>
                    Get Started
                    <span className='bi bi-chevron-right'></span>
                </button>
            </div>
        </div>
        </div>
    )
}