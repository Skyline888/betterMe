import React from 'react';

export const Error = React.memo(({ history }) => {
    const onBackClick = React.useCallback( () => {
      history.push('/')
    }, [history]);

    return (
        <div style={{textAlign: "center"}}>
            <button onClick={onBackClick}>GO TO MAIN PAGE</button>
        </div>
    );
});

export default Error;
