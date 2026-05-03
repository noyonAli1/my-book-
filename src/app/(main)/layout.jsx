import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

const layout = ({children}) => {
    return (
        <div className='m-0'>
            <Navbar></Navbar>   
            {children}
           
            <Footer></Footer>
        </div>
    );
};

export default layout;