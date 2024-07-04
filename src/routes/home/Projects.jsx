import { useState } from "react";
import products from "../../../data/projects.json";
import Modal from "../../components/Modal";

export function Projects({ projectRef }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemDetails, setItemDetails] = useState({});

  const handleClick = (item) => {
    setItemDetails(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal itemDetails={itemDetails} closeModal={closeModal} />
      )}
      <section className="py-16" ref={projectRef}>
        <div className="container px-8 mx-auto">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-3xl xl:ml-6">
            Projects
          </h2>
          <p className="text-gray-400 xl:ml-6">
            Check out my latest personal projects.
          </p>
          <div className="flex flex-wrap justify-between mt-3 lg:gap-4 xl:gap-0">
            {products.map((item, index) => {
              return (
                index < 6 && (
                  <div
                    key={index}
                    className="w-4/5 max-w-[300px] lg:max-w-[320px] mx-auto mt-1 mb-6 border border-p-purple rounded-3xl p-4"
                  >
                    <img
                      loading="lazy"
                      src={item.urlImg}
                      alt={item.alt}
                      className="rounded-3xl"
                      width={300}
                      height={300}
                    />
                    <h3 className="my-2 text-2xl font-bold">{item.title}</h3>
                    <p className="mb-2 text-gray-400">{item.subtitle}</p>
                    <button
                      title="Project's details"
                      onClick={() => {
                        handleClick(item);
                      }}
                      className="font-bold rounded-3xl py-3 px-5 bg-gradient-to-r from-p-purple via-35% via-darkBlue to-p-blue hover:shadow-md hover:shadow-p-purple transition duration-200 ease-in"
                    >
                      Details
                    </button>
                    <a
                      title="Project's preview"
                      target="_blank"
                      href={item.url}
                      rel="noopener noreferrer"
                      className="px-5 py-3 ml-4 font-bold transition duration-200 ease-in border border-white rounded-3xl hover:shadow-md hover:shadow-p-purple"
                    >
                      Preview
                    </a>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
