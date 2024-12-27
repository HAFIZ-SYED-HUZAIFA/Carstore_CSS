import React from 'react';
import Image from 'next/image';

const Honda = () => {
  return (
    <div>
      <h1 className="carheading">Honda Cars</h1>
      <div className="main">
        <div className="cardbox">
          <Image src="/honda/hondacivic.jpg" alt="Civic" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Honda</span>
            <h3>Civic</h3>
            <h2>$23,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/honda/accordhonda.jpg" alt="Accord" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Honda</span>
            <h3>Accord</h3>
            <h2>$28,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/honda/city.jpg" alt="City" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Honda</span>
            <h3>City</h3>
            <h2>$15,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/honda/hondahrv.jpg" alt="HR-V" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Honda</span>
            <h3>HR-V</h3>
            <h2>$25,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/honda/hondacrv.png" alt="CR-V" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Honda</span>
            <h3>CR-V</h3>
            <h2>$31,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/honda/hondafit.jpg" alt="Fit" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Honda</span>
            <h3>Fit</h3>
            <h2>$16,000</h2>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honda;

