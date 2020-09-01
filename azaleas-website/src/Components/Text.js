import React, { useState, useEffect } from 'react';

const Text = ({startText, name, edit}) => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(startText);
    }, [])

    return (<>
        {!edit ? <div className={name}>{text}</div> : 
        <input onChange={(e) => setText(e.target.value)} value={text} />}
        </>
    )
}

export default Text;