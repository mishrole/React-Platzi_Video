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

    // Error Cannot read property length of undefined
    // const [videos, setVideos] = useState([]);

    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    // useEffect recibe dos parámetros que escucha si una propiedad cambia
    // para actualizarse, si no la colocamos generamos un loop infinito
    useEffect(() => {
        fetch('http://localhost:3000/initialState')
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        });
    }, []);

    return (
        <div className="App">
        <Header />
        <Search />

        // Optional Chaining
        {videos.mylist?.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories> 
        }

        <Categories title="Tendencias">
            <Carousel>
                {
                    videos.trends.map(item => <CarouselItem key={item.id} {...item} />)
                }

           </Carousel>
        </Categories>

        <Categories title="Originales de Platzi Video">
            <Carousel>
                {
                    videos.originals.map(item => <CarouselItem key={item.id} {...item} />)
                }
           </Carousel>
        </Categories>

        <Footer />
    </div>
    );
};

export default App;