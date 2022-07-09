import React from "react";
import {NavLink} from "react-router-dom";
export default function Nevbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
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