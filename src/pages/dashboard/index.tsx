import { Container } from '@mui/material';
import * as React from 'react';
import Slider from 'react-slick';

// const data = [
//   {
//     id: 1,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
//     price: 20000,
//     discount: 25,
//   },
//   {
//     id: 2,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75',
//     price: 40000,
//     discount: 15,
//   },
//   {
//     id: 3,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75',
//     price: 60000,
//     discount: 18,
//   },
//   {
//     id: 4,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75',
//     price: 80000,
//     discount: 28,
//   },
//   {
//     id: 5,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
//     price: 20000,
//     discount: 25,
//   },
//   {
//     id: 6,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75',
//     price: 40000,
//     discount: 15,
//   },
//   {
//     id: 7,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75',
//     price: 60000,
//     discount: 18,
//   },
//   {
//     id: 8,
//     name: 'Nike Court Zoom Vapor Cage',
//     image:
//       'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75',
//     price: 80000,
//     discount: 28,
//   },
// ];
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};
const Home = () => {
  return (
    <Container>
      <div className='container'>
        <Slider {...settings}>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
        </Slider>
      </div>
    </Container>
  );
};
export default Home;
