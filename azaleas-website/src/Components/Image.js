import React, { useState, useEffect } from 'react';

const Image = ({startSrc, name, edit}) => {
    const [src, setSrc] = useState('');

    useEffect(() => {
        setSrc(startSrc);
    }, [])

    return (<>
        {!edit ? <img className={name} src={src} /> : 
        <input type='file' onChange={(e) => setSrc(e.target.value)} value={src} />}
        </>
    )
}

export default Image;