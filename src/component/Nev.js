import React from "react";
import {NavLink,Link} from "react-router-dom";
export default function Nevbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link to="/">
                        <a class="navbar-brand">
                            <img src="/logo192.png" alt="" width="30" height="24"/>
                        </a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link active">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="dance"><a class="nav-link active">Dance</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link disabled">Model</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link disabled">Acting</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link disabled">Voice</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}