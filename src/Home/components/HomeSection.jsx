import { Link } from 'react-router-dom'

function HomeSection({ link, title, description }) {
    return (

            <Link to={link} className='rounded-lg p-10 bg-zinc-700 align-middle text-center'>

                <h2 className='text-xl text-white pb-5'>{title}</h2>
                <p className='text-base  text-white'>{description}</p>

            </Link>
        

    )

}

export default HomeSection
