import React from "react";
import {NavLink} from "react-router-dom";
export default function Nevbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
<<<<<<< HEAD
                    <NavLink to="/"><a class="navbar-brand" href="#">Navbar</a></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                        {/* <Link href="#"><a>Home</a></Link> */}
                        </li>
                        <li class="nav-item">
                            <NavLink to="dance"><a class="nav-link">dance</a></NavLink>
                        </li>
                        <li class="nav-item">
=======
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Dance">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
>>>>>>> adabb8914d4fc791c9c1f5a7e71461fbb9e7d672
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}