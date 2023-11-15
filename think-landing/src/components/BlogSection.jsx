import React from 'react'
import blenderScene from '../assets/cubic_grassy_scene.png';

const blogData = [
  {
    titleLeft: 'Quantum,',
    titleRight: 'Program 1',
    blogDate: 'February 2',
    contentLocation: '123 Quantum Street, TechCity, CA 90210',
    contentDescription:
      'In the ever-evolving landscape of technology, QuantumRealm emerges as a groundbreaking project in quantum computing. This case study delves into the journey of QuantumRealm, exploring its innovative approach to harnessing the power of quantum bits. With the promise of unprecedented computational capabilities, QuantumRealm has the potential to reshape industries ranging from cryptography to artificial intelligence.',
    imageUrl: blenderScene,
  },
  {
    titleLeft: 'Virtual,',
    titleRight: 'Program 2',
    blogDate: 'February 3',
    contentLocation: '456 Virtual Avenue, GameVille, NY 10001',
    contentDescription:
      'VirtuVerse introduces a new era in video game development by pushing the boundaries of immersive virtual reality (VR) gaming. This case study uncovers the technology behind VirtuVerse, examining its cutting-edge graphics, realistic simulations, and interactive storytelling. Dive into the world of VirtuVerse, where players are not just spectators but active participants in a digital universe.',
    imageUrl: blenderScene,
  },
  {
    titleLeft: 'CodeCrafters,',
    titleRight: 'Program 3',
    blogDate: 'February 4',
    contentLocation: '101 Code Lane, DevVillage, WA 98101',
    contentDescription:
      'CodeCrafters redefines the landscape of web development with its innovative approach to collaborative coding. This case study investigates the platforms ability to streamline teamwork, enhance code review processes, and foster a dynamic environment for developers. Dive into the world of CodeCrafters and witness the evolution of web development collaboration.',
    imageUrl: blenderScene,
  },
];

const BlogSection = () => {
  return (
    <div>
      {blogData.map((blogItem, index) => (
        <section key={index} id="blog" className="w-full h-auto bg-white">
          <div className="flex justify-center items-center w-full h-fit">
            <div id="page-divider" className="flex items-center justify-center xl:w-[97%] w-[90%] h-[1px] bg-zinc-500 px-8" />
          </div>

          <div id="blog-header" className="flex flex-col gap-y-8 p-4">
            <div id="title" className="flex flex-row">
              <span id="title-left" className="font-semibold text-zinc-500 pr-2">
                {blogItem.titleLeft}
              </span>
              <span id="title-right" className="bg-yellow-300">
                {blogItem.titleRight}
              </span>
            </div>
            <h1 id="blog-date" className="text-5xl font-bold">
              {blogItem.blogDate}
            </h1>

            <div id="text-content" className="flex flex-col gap-y-8 text-[#595959]">
              <p id="content-location">{blogItem.contentLocation}</p>
              <p id="content-description" className="text-sm">
                {blogItem.contentDescription}
              </p>
            </div>

            <div id="image-content" className="flex flex-col gap-y-8">
              <p className="text-sm text-[#595959]">Images</p>
              <img src={blogItem.imageUrl} alt="Blog Image" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BlogSection;
