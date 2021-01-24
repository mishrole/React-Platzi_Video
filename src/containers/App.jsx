import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {

    // useState recibe como propiedad elementos para inicializar el estado
    // no necesariamente debe ser inicializar por array
    const [videos, setVideos] = useState([]);

    // useEffect recibe dos parámetros que escucha si una propiedad cambia
    // para actualizarse, si no la colocamos generamos un loop infinito
    useEffect(() => {
        fetch('http://localhost:3000/initialState')
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        });
    }, []);

    console.log(videos);

    return (
        <div className="App">
        <Header />
        <Search />

        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
           </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
           </Carousel>
        </Categories>

        <Categories title="Originales de Platzi Video">
            <Carousel>
                <CarouselItem />
           </Carousel>
        </Categories>

        <Footer />
    </div>
    );
};

export default App;