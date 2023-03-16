import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import {Link} from "react-router-dom";
// require('dotenv').config();

export default function Home() {

    const [foodCat, setFoodCat] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [search,setSearch]=useState("");
    const loadData = async () => {
        let response = await fetch(`https://go-food-one.vercel.app/api/foodData`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        response = await response.json();
        setFoodCat(response[1]);
        setFoodData(response[0]);
        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='h-50'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <form className="d-flex ">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/1000x1000/?biryani" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/1000x1000/?pizza" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/1000x1000/?burger" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='m-3'>
                {
                    foodCat !== [] ?
                        foodCat.map((catData) => {
                            return (
                                <div className='row mb-3'>
                                    <div className='fs-3 m-3' key={catData._id}>
                                        {catData.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        foodData !== [] ?
                                            foodData.filter((foodItem) => (foodItem.CategoryName === catData.CategoryName) && foodItem.name.toLowerCase().includes(search.toLowerCase()))
                                                .map((item) => {
                                                    return (
                                                        <div key={item._id} className='col-12 col-md-6 col-lg-3'>
                                                            <Card item={item} />
                                                        </div>
                                                    )
                                                })
                                            : <div>No Such Data</div>
                                    }
                                </div>
                            )
                        }) : ""
                }

            </div>
            <Footer />
        </div>
    )
}
