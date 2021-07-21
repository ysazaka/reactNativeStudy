import React from 'react'

import Son from './Son'

/*
* The "Father" class has direct access to the "Son" class
* That's a representation of the direct communication,
* so it can pass directly the parameters
*/

export default props => {
    let x = 7
    let y = 100

    return (
        <>
            <Son a={x} b={y} />
            <Son a={x + 100} b={y + 200} />
        </>
    )
}