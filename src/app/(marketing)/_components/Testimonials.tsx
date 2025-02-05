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
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
          What Families Are Saying
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true }}
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
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 m-4 h-full flex flex-col">
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
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
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
          color: #be123c; /* Match your rose-700 color */
        }

        .swiper-pagination-bullet-active {
          background-color: #be123c !important;
        }
      `}</style>
    </section>
  );
}
export default Testimonials;
