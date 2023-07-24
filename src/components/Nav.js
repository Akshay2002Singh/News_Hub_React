import React, { useState } from 'react'

function Nav(props) {

    const [name, setName] = useState("");
    // Take user query 
    function submit_form() {
        let q = document.getElementById("search_text").value;
        q = q.trim();
        if (q.length == 0) return
        let url = `https://newsapi.org/v2/everything?q=${q}&language=en&sortBy=publishedAt&apiKey=c897f5fb6033410aa1144ceb23d6b24e`
        props.set_heading(q.toUpperCase())
        props.fetch_news(url)
    }
    
    return (
        <nav class="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">News App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#home" onClick={() => props.change_cat()} >Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("General")} > GENERAL </a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("sport")} > SPORTS </a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("technology")} > TECHNOLOGY </a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("business")} > BUISNESS </a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("entertainment")} > ENTERTAINEMENT </a>
                                </li>
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("health")} > HEALTH </a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => props.change_cat("science")} >SCIENCE </a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            id="search_text" value={name} onChange={(e) => setName(e.target.value)} />
                        <button class="btn btn-outline-success" type="submit" onClick={submit_form}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav