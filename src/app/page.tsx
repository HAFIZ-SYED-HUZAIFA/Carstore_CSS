import React from 'react';
import Image from 'next/image';

const Toyota = () => {
  return (
    <div>
      <h1 className="carheading">Toyota Cars</h1>
      <div className="main">
        <div className="cardbox">
          <Image src="/toyota/toyocorolla.jpg" alt="Corolla" width={350} height={250} />
          <div className="content">
            <span>Toyota</span>
            <h3>Corolla</h3>
            <h2>$23,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/toyota/toyocamry.jpg" alt="Camry" width={350} height={250} />
          <div className="content">
            <span>Toyota</span>
            <h3>Camry</h3>
            <h2>$29,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/toyota/toyoyaris.jpg" alt="Yaris" width={350} height={250} />
          <div className="content">
            <span>Toyota</span>
            <h3>Yaris</h3>
            <h2>$20,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/toyota/toyoland.jpg" alt="Land Cruiser" width={350} height={250} />
          <div className="content">
            <span>Toyota</span>
            <h3>Land Cruiser</h3>
            <h2>$89,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/toyota/toyohilux.jpg" alt="Hilux" width={350} height={250} />
          <div className="content">
            <span>Toyota</span>
            <h3>Hilux</h3>
            <h2>$50,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/toyota/toyoprius.jpg" alt="Prius" width={350} height={250} />
          <div className="content">
            <span>Toyota</span>
            <h3>Prius</h3>
            <h2>$26,000</h2>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toyota;

