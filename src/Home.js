import React, { useState, useEffect } from 'react';


import PepTwo from './imgs/pepsi002.png';
import Input from "./imgs/Input";
import PepThree from './imgs/pepsi003.png';
import Dave from './imgs/davido-the-best.jpeg';
import Buju from './imgs/buju.jpeg';
import Fate from './imgs/fate-ofthe-furious.jpg';
import Abule from './imgs/abule-cover.jpg';
import Alade from './imgs/aladeogo.jpg';
import Justin from './imgs/justin.jpg';
import Migos from './imgs/migos-cover-motorsport.jpg';
import Omah from './imgs/omahlay.jpeg';
import Rae from './imgs/rae-sremmurd.jpg';
import Travis from './imgs/travis-scott-highest-in-the-room.jpg';
import Spinner from './component/Spinner';
import Grid from './component/Grid';
import Hero from './component/Hero';
import Button from './component/Button';
import Thumbnails from './component/Thumbnails';
//import Thumb from './components/Thumb';
//import { useEffect } from 'react/cjs/react.production.min';



const Home = () => {
    const s = 0;
    const arr = [
        {id: s+1, result: Dave, title: 'The Best', artistie: 'Davido Ft Mayorkun'},
        {id: s+2, result: Buju, title: 'Lenu', artistie: 'Buju'},
        {id: s+3, result: Fate, title: 'Fate Of The Furious', artistie: 'Khalani'},
        {id: s+4, result: Abule, title: 'Abule', artistie: 'Pato Ranking'},
        {id: s+5,result: Alade, title: 'Aladeogo', artistie: 'Sammy'},
        {id: s+6, result: Justin, title: 'Intentions', artistie: 'Justin Bieber'},
        {id: s+7, result: Migos, title: 'Motor Sport', artistie: 'Migos'},
        {id: s+8, result: Omah, title: 'Godly', artistie: 'Omah Lay'},
        {id: s+9, result: Rae, title: 'Chanel', artistie: 'Rae Sremmurds'},
        {id: s+10, result: Travis, title: 'Highest In The Room', artistie: 'Travis Scott'},
        {id: s+6, result: Justin, title: 'Intentions', artistie: 'Justin Bieber'},
        {id: s+4, result: Abule, title: 'Abule', artistie: 'Pato Ranking'},
        {id: s+1, result: Dave, title: 'The Best', artistie: 'Davido Ft Mayorkun'},
        {id: s+9, result: Rae, title: 'Chanel', artistie: 'Rae Sremmurds'},
        {id: s+11, result: PepThree, title: 'ADs', artistie: 'Pepsi'},
        {id: s+11, result: PepTwo, title: 'ADs', artistie: 'Pepsi'},
    ];
    const max = arr;//new Array(13).fill(arr);
    const initial = max;
    //const page = 0;
    const [sd, setSd] = useState(arr);
    const [state, setState] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [hero, setHero] = useState(arr[0]);
    const [search, setSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState(false);
    const [change, setChange] = useState(false);
    const [err, setErr] = useState(false);
    const [er, setEr] = useState(false);
    
    
    useEffect(() => { 
        //setEr(false);     
        if(loading) {
            function fetch() {
              setState(prev => [...prev, ...max]); 
                                                      
            }
            fetch();     
            setLoading(false); 
        } else {
            return;
        }
    }, [loading, max, state, s]);
    useEffect(() => {      
        //setEr(false);
        if(search !== '') {           
            for(var i=0;i<sd.length;i++) {
              if(sd[i].artistie === search || sd[i].title === search) {
                  setHero(sd[i]);
                  setSearchTerm(true);               
              }              
            }
            setChange(true);
            if(searchTerm) {
                setEr(false)
            } else {
                setEr(true);
            }
        }
        else if(search === '') {
            setEr(false);
        }

        return () => {
            setSearchTerm(false)           
        };

    }, [search, sd, searchTerm, change]);
    useEffect(() => {
        //setEr(false);
        const timy = setTimeout(function() {
          if(er) {
            setErr(true);
          } else {
            setErr(false);
          }
        }, 365);


        return () => {
            clearTimeout(timy)
            setErr(false);
        }

        
    }, [er]);
    return (
        
        <>
          
          <Hero 
            chart={hero}
          />
          {search !== ' ' && err && <div>Cant Find Song/Artiste</div>}
          <Input setSearch={setSearch}  />
          <Grid stat="Popular Songs">
                {state.map(song=> (
                    <Thumbnails
                       key={Math.random()}
                       image={song.result} 
                       title={song.title}
                       change={() => setHero(song)}
                    />
                    
                ))}
          </Grid>
          
          {loading && <Spinner />}
          {!loading && <Button text='Load More' callback={() => setLoading(true)}></Button>}
        </>
    )
    
}

export default Home;

 /*input
            type='text'
            placeholder='search-song'
            onChange={event => setSearch(event.currentTarget.value)}*/
          