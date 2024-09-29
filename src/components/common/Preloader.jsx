import React, { useEffect, useState } from 'react'

function Loader() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => setIsLoading(false), 500);
        });

        return () => {
            window.removeEventListener('load', () => setIsLoading(false));
        };
    }, []);

    if (!isLoading) return null;

    return (
        <>
            <div id="mini-loader">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                        <div className="object"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader