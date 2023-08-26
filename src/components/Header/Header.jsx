import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'> "Isn't it odd how much fatter a book gets when you've read it several times? As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells... and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like pressed flower... both strange and familiar."  </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header