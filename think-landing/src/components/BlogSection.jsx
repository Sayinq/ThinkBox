import React from 'react'
import blenderScene from '../assets/cubic_grassy_scene.png';

const blogData = [
  {
    titleLeft: 'Habits,',
    titleRight: 'Program 1',
    blogDate: 'February 2',
    contentLocation: '100 Ventura Straße Building 8, Room 10 New Berlin, CA 90026',
    contentDescription:
      'To describe is to attempt — unless you are defining description itself as an end. Through the use of general creative writing techniques Program 2, Description will break down the limits of the descriptive faculties into clear categories. Attendees are expected to have a firm grasp of Lem’s Prognolinguistics as well as an active fiction writing practice.',
    imageUrl: blenderScene,
  },
  {
    titleLeft: 'Description,',
    titleRight: 'Program 2',
    blogDate: 'February 3',
    contentLocation: '100 Ventura Straße Building 8, Room 10 New Berlin, CA 90026',
    contentDescription:
      'Self-reflection can’t trace origins. Motive is always in the process of being overgrown. It is taken for granted that the reasons for our generally repetitive behavior are self-evident — of course they are not. Using both Diachronic Causation Simulation (D.C.S.) as well as Synchronic Causation Simulation (S.C.S.) Program 1, Habits will explore psychological pattern formation both by a singular event as well as its development over time.',
    imageUrl: blenderScene,
  },
  {
    titleLeft: 'Schema,',
    titleRight: 'Program 3',
    blogDate: 'February 4',
    contentLocation: '100 Ventura Straße Building 8, Room 10 New Berlin, CA 90026',
    contentDescription:
      'A schematic is a shield against the violence of the variable. This is true and obvious for the dogmatic schema of religions, but it is also true for machines and mechanical productions (whether capitalist or socialist). Theologies when contrasted to general mechanization have much more in common than the throngs of yelping townsfolk would have you believe -- mainly the attempt at automating behavior to secure a future.',
    imageUrl: blenderScene,
  },
];

const BlogSection = () => {
  return (
    <div>
      {blogData.map((blogItem, index) => (
        <section key={index} id="blog" className="w-full h-auto bg-white">
          <div className="flex justify-center items-center w-full h-fit">
            <div id="page-divider" className="flex items-center justify-center w-[90%] h-[1px] bg-zinc-500 px-8" />
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
