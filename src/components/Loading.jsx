import React from 'react';
import '@styles/Loading.scss';

import loadingIcon from '@icons/loading.gif';

const Loading = () => {
    return (
        <div className='loading-img' >
            <img src={loadingIcon}/>
        </div>
    );
};

export default Loading;