import SpinFC from "antd/lib/spin";
import { createContext, useEffect, useState } from "react";


const DEFAULT_VALUE = {
    isLoading: false,
}

const LoadingContext = createContext(DEFAULT_VALUE);

const LoadingProvider = (props) => {
    const [state, setState] = useState(DEFAULT_VALUE)

    const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '1',
        background: '#dfdfdf',
    }

    useEffect(() => {
        if (state.isLoading) {
            document.querySelector("body").style.overflow = 'hidden';
        } else {
            document.querySelector("body").style.overflow = 'auto'
        }
    }, [state.isLoading])

    return (
        <LoadingContext.Provider value={[state, setState]}>
            {state.isLoading && (
                <div style={style}>
                    <SpinFC />
                </div>
            )}
            {props.children}
        </LoadingContext.Provider>
    )
}

export {
    LoadingContext,
    LoadingProvider
}