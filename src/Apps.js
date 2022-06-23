import React, { useEffect } from 'react'

const Apps = () => {
    const [count, setCount] = React.useState(0)

    const handelClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('useEffect')
        // setCount(count + 1)
    }, [count])

    return (
        <div className='flex flex-col items-center justify-center gap-4 m-10'>
            <p>Count : {count}</p>
            <button className='px-4 py-2 text-white bg-blue-500 rounded-md' onClick={handelClick}>Click</button>
        </div>
    )
}

export default Apps