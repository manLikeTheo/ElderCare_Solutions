"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adebayo Adekunle",
    role: "Son in Canada",
    text: "WellAged Care has been a lifesaver for my aging parents in Lagos. The caregiver network is reliable and the digital companion keeps me updated daily.",
    image: "/testimonials/user1.jpg",
  },
  {
    id: 2,
    name: "Chioma Nwosu",
    role: "Daughter in UK",
    text: "The Care Kits are incredibly convenient. No more worrying about sourcing quality products for my grandmother. Delivery is always prompt!",
    image: "/testimonials/user2.jpg",
  },
  {
    id: 3,
    name: "Emeka Okoro",
    role: "Family Caregiver",
    text: "The training and support from WellAged Care has helped me provide better care for my clients. The platform makes coordination with families abroad seamless.",
    image: "/testimonials/user3.jpg",
  },
  {
    id: 4,
    name: "Adekunle Adekoya",
    role: "Grandson in Nigeria",
    text: "WellAged Care has been a lifesaver for my aging parents in Lagos. The caregiver network is reliable and the digital companion keeps me updated daily.",
    image: "/testimonials/user4.jpg",
  },
];

// function Testimonials() {
//   return (
//     <section className="py-16 bg-slate-50">
//       <div className="cintainer mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
//           What Families Are Saying
//         </h2>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

function Testimonials() {
  return (
    <section className="py-10 bg-blue-100/75">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
          What Families Are Saying
        </h2>

        <Swiper
          spaceBetween={32}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true, progressbarOpposite: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12 m-4 "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto ">
              <div className="bg-white rounded-xl shadow-lg p-8 m-4 h-full flex flex-col">
                <div className="mb-4">
                  <p className="text-slate-600 italic">"{testimonial.text}"</p>
                </div>

                <div className="mt-auto flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-slate-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-800 font-medium tracking-wide text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: darkblue;
          opacity: 0.6 !important;
          width: 36px !important;
          height: 36px !important;
          border-radius: 50% !important;
        }
        .swiper-pagination {
          position: absolute;
          bottom: -6px !important;
        }

        .swiper-pagination-bullet {
          background-color: darkblue !important;
          opacity: 0.6 !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          margin: 0 7px !important;
        }

        .swiper-pagination-bullet-active {
          background-color: darkblue !important;
          opacity: 1 !important;
          width: 15px !important;
          height: 15px !important;
          border-radius: 50% !important;
          margin: 0 5px !important;
        }
        .swiper-pagination-progressbar-fill {
          background-color: #be123c !important;
          opacity: 1 !important;
        }

        // Add hover effect to buttons
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: blue; /* Change background on hover */
          color: white;
        }

        /* Adjust button positioning */
        .swiper-button-next {
          right: 10px; /* Adjust right margin */
        }

        .swiper-button-prev {
          left: 10px; /* Adjust left margin */
        }

        /* Optional: Hide on small screens */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
export default Testimonials;
