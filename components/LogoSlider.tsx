import React from "react";
import Image from "next/image";


const row1: string[] = [
  "/assest/logoslider/p1.png",
  "/assest/logoslider/p2.png",
  "/assest/logoslider/p3.png",
  "/assest/logoslider/p4.png",
  "/assest/logoslider/p5.png",
  "/assest/logoslider/p13.png",
];

const row2: string[] = [
  "/assest/logoslider/p7.png",
  "/assest/logoslider/p8.png",
  "/assest/logoslider/p9.png",
  "/assest/logoslider/p10.png",
  "/assest/logoslider/p11.png",
  "/assest/logoslider/p12.png",
];


export default function LogoSlider() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center customfont">
      <div className="w-full max-w-screen-xl">
        <div className="text-center text-3xl font-semibold mb-4 text-custom">
          With Great Sponsors
        </div>
        <div className="text-center mb-8 text-black">
          Our customers have gotten offers from awesome companies
        </div>
        {/* Row 1 */}
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {row1.map((el, index) => (
              <div key={index} className="inline-block mx-4">
                <Image
                  src={el}
                  alt={`Logo ${index}`}
                  width={176}
                  height={96}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 */}
        <div className="overflow-hidden mt-6">
          <div className="animate-marquee-reverse">
            {row2.map((el, index) => (
              <div key={index} className="inline-block mx-4">
                <Image
                  src={el}
                  alt={`Logo ${index}`}
                  width={176}
                  height={96}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
