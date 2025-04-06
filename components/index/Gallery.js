import React from "react";
import Image from "next/image";
import Link from "next/link";

function Gallery() {
  const galleryItems = [
    {
      src: "/image/3.png",
      link: "https://www.youtube.com/watch?v=2FcORaGlI4o&t",
    },
    {
      src: "/image/4.png",
      link: "https://www.youtube.com/watch?v=XCoBKVWsl_4",
    },
    {
      src: "/image/5.png",
      link: "https://www.youtube.com/watch?v=XhAFw-ronFk",
    },
    {
      src: "/image/6.png",
      link: "https://www.youtube.com/watch?v=XhAFw-ronFk&t=111s",
    },
    {
      src: "/image/Lamalia.png",
      link: "https://www.youtube.com/watch?v=SVuWIAzEcrU&t=20s",
    },
    {
      src: "/image/Rinthong.png",
      link: "https://www.youtube.com/watch?v=TSteJEnAHZ0&t=128s",
    },
  ];

  return (
    <section className="py-10 text-center  text-white p-6">
      {/* Gallery Section */}
      <div>
        <h3 className="text-4xl font-semibold text-center">
          Gallery ผลงาน
        </h3>
        <p className="text-lg mb-8">
        ผลงานและความสำเร็จที่เราได้สร้างขึ้นเพื่อลูกค้าของเรา

        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {galleryItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={`Project ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xl font-semibold">View Project</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
