import Slider from "react-slick";

export default function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
  };

  const clients = [
    {
      id: 1,
      name: "Guheshwori Merchant Banking and Finance Limited",
      image: "/gmbf.jpg",
      site: "https://www.gmbf.com.np/",
    },
    {
      id: 2,
      name: "Reliance Finance Limited",
      image: "/rfl.png",
      site: "https://www.reliancenepal.com.np/",
    },
    {
      id: 3,
      name: "Progressive Finance Limited",
      image: "/pfl.jpg",
      site: "https://www.pfltd.com.np/",
    },
    {
      id: 4,
      name: "Goodwill Finance Limited",
      image: "/goodwill.jpg",
      site: "https://goodwillfinance.com.np/",
    },
    {
      id: 5,
      name: "Shree Investment and Finance Company Limited",
      image: "/shree.png",
      site: "https://www.shreefinance.com.np/",
    },
    {
      id: 6,
      name: "Ganapati Laghubitta Bittiya Sanstha Limited",
      image: "/ganapati.png",
      site: "https://ganapatimicro.com.np/",
    },
     {
      id: 7,
      name: "Durdristi Multipurpose Co-operative Ltd",
      image: "/durdristi.png",
      site: "https://ddmpcl.com.np/",
    },
     {
      id: 8,
      name: "Gurkha Finance Limited",
      image: "/gurkha.png",
      site: "https://www.gurkhasfinance.com.np/",
    },
  ];

  return (
    <Slider {...settings}>
      {clients?.map((item) => (
        <div className="px-1 outline-none" key={item?.id}>
          <a href={item?.site} target="_blank" rel="noreferrer">
            <img
              src={item?.image}
              alt="1"
              className="h-14 w-full object-contain"
            />
            <span className="block text-center mt-4 text-gray-900">
              {item?.name}
            </span>
          </a>
        </div>
      ))}
    </Slider>
  );
}
