import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"

export default function Nav() {

    return(
        <header>
            <nav>
              <div>
                <h1>
                  Gafatoa
                </h1>

                <button className='btn btn-nav'>
                    <Link to='/read' className="btn btn-nav">
                        User Table
                    </Link>
                </button>


              </div>

              <button id='Login' className='btn btn-primary'>
                <Link to="/" className="btn btn-primary">Login</Link>
              </button>
            </nav>
        </header>
    )
}
