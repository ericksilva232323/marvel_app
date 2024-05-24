import React, { useState, useEffect } from 'react';
import { Card } from './card';
import axios = require('axios');

// //Your public key
// 42d1e678ff9614e8659f9d255c92f61c

// Your private key
// f864bf8cd3d9967eb79c5ec3cf0895e34fa3805b

const BASE_URL = "https://gateway.marvel.com/v1/public/characters";
const API_KEY = "42d1e678ff9614e8659f9d255c92f61c";
const HASH = "f864bf8cd3d9967eb79c5ec3cf0895e34fa3805b";

export const main = () => {
    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    const fechtCharacters = async () => {
        try {
            const res = await axios.get(url);
            setItem(res.data.data.results);
        } catch (erro) {
            console.error("Erro ao buscar dados", error);
        }
    };

    useEffect(() => {
        const ts = Date.now();
        const initialUrl = `${BASE_URL}?ts=${ts}&apikey${API_KEY}&hash=${HASH}`;
        fechtCharacters(initialUrl);
    }, []);

    const searchMarvel = (e) => {
        if (e.key === "Enter") {
            const ts = Date.now();
            const searchUrl = `${BASE_URL}?nameStarWith=${search}&ts=${ts}&apikey=${API_KEY}&hash=${HASHS}`;
            fechtCharacters(searchUrl);
        }
    };

    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/bg.gif" alt='logo'></img>
                </div>
                <br></br>
                <div className='search-bar'>
                    <img className='logo' src='./Images/logo.png'></img>
                    <p></p>
                    <input
                        type='search'
                        placeholder='Procurar Heroi'
                        className='search'
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={searchMarvel}
                    ></input>

                </div>
            </div>
            <div className='content'>
                {!item.lenght ? <p>Not Found Search</p> : <Card data={item}></Card>}
            </div>
        </>
    );
}

