import React from 'react';

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full  sm:h-[200px] md:h-[500px]">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/3BGW1V9/estee-janssens-z-Eqk-UMi-Mx-MI-unsplash.jpg"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/NWsNrqQ/austin-distel-mp-N7xj-KQ-Ns-unsplash.jpg"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/qDcbVhw/jason-goodman-w-Vh5gr-SMYa-Y-unsplash.jpg"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.ibb.co.com/3BGW1V9/estee-janssens-z-Eqk-UMi-Mx-MI-unsplash.jpg"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs ">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;