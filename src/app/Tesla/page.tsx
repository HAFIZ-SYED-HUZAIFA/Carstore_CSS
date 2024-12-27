import React from 'react';
import Image from 'next/image';

const Tesla = () => {
  return (
    <div>
      <h1 className="carheading">Tesla Cars</h1>
      <div className="main">
        <div className="cardbox">
          <Image src="/tesla/teslamodel s.jpg" alt="Model S" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Tesla</span>
            <h3>Model S</h3>
            <h2>$94,990</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/tesla/tesla roadster.jpg" alt="Roadster" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Tesla</span>
            <h3>Roadster</h3>
            <h2>$200,000</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/tesla/tesla moel y.jpg" alt="Model Y" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Tesla</span>
            <h3>Model Y</h3>
            <h2>$49,990</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/tesla/tesla model x.jpg" alt="Model X" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Tesla</span>
            <h3>Model X</h3>
            <h2>$109,990</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/tesla/tesla model 3.jpg" alt="Model 3" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Tesla</span>
            <h3>Model 3</h3>
            <h2>$39,990</h2>
            <button>Read More</button>
          </div>
        </div>

        <div className="cardbox">
          <Image src="/tesla/tesla cyber truck.jpg" alt="Cybertruck" width={350} height={250} className="card-image" />
          <div className="content">
            <span>Tesla</span>
            <h3>Cybertruck</h3>
            <h2>$59,990</h2>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tesla;

