import React from 'react';

function B({increment}) {
    return (
        <div>
            <button onClick={increment}>Click B</button>
        </div>
    );
}

export default B;