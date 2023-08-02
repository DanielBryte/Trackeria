import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='flex text-base md:text-md lg:text-lg gap-6'>
                <a href='#'>API for developers</a>
                <a href='/' target='_blank'>Support</a>
                <a href='https://www.ezediniru.com/contact' target='_blank'>Contact</a>
                <a href=''>Terms & Policy</a>
            </div>
            <p>© 2023 Trackeria. All rights reserved.</p>
        </section>
    )
}

export default Footer