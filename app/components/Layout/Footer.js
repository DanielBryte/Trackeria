import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='grid text-center grid-cols-1 lg:grid-cols-4 lg:flex-row text-base md:text-md lg:text-lg gap-4'>
                <a href='#'>API for developers</a>
                <a href='https://www.buymeacoffee.com/danielbryte' target='_blank'>Support</a>
                <a href='https://www.ezediniru.com/contact' target='_blank'>Contact</a>
                <a href='#'>Terms & Policy</a>
            </div>
            <p>© 2023 Trackeria. All rights reserved.</p>
        </section>
    )
}

export default Footer