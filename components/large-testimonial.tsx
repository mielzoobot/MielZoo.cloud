import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d=""
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {" "}
              <em className="italic text-gray-500"></em>
              
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700"></span>{" "}
              <span className="text-gray-400"></span>{" "}
              <a className="text-blue-500" href="#0">
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
