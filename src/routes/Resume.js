import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Resume() {
  return(
    <main className="resume">
      <Header />
      <section className='resume--body'>
        <h1>Resume</h1>
      </section>
      <Footer />
    </main>
  );
}