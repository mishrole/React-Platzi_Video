import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    // useState recibe como propiedad elementos para inicializar el estado
    // no necesariamente debe ser inicializar por array

    // Error Cannot read property length of undefined
    // const [videos, setVideos] = useState([]);

    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    // useEffect recibe dos parámetros que escucha si una propiedad cambia
    // para actualizarse, si no la colocamos generamos un loop infinito

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        });
    }, []);

    return videos;

};

export default useInitialState;
