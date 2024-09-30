import React from 'react';

function B({increment, incrementTwo}) {
    console.log(increment);
    return (
        <div className='buttons_B'>
            <button onClick={increment}>Click B</button>
            <button onClick={incrementTwo}>Click B increase with A</button> 
        </div>
    );
}

export default B;