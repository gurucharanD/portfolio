import React from 'react';
import reactImage from '../assets/react.png';
import angular from '../assets/angular.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactImage,
      link: 'https://github.com/gurucharanD/habit-tracker-fe',
      name: 'habit tracker'
    },
    {
      id: 2,
      src: angular,
      link: 'https://github.com/gurucharanD/ng-paginator',
      name: ' paginator component'
    },
    {
      id: 3,
      src: angular,
      link: 'https://github.com/gurucharanD/codearena',
      name: 'code arena'
    },
    {
      id: 4,
      src: angular,
      link: 'https://github.com/gurucharanD/free_mails_messages',
      name: ' free emails and messages'
    },
    {
      id: 5,
      src: angular,
      link: 'https://github.com/gurucharanD/movieshub',
      name: 'movies hub'
    },
    {
      id: 6,
      src: angular,
      link: 'https://github.com/gurucharanD/scry-node',
      name: 'angular web sockets'
    },
    {
      id: 7,
      src: react,
      link: 'https://github.com/gurucharanD/twitter-clone',
      name: 'twitter clone'
    },
  ];
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work here</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8-px-12 sm:px-0'>

          {
            portfolios.map(({ id, link, name }) => {
              return (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <p className='text-center'><b>{name}</b></p>
                  <div className='flex items-center justify-center'>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href={link} target='_blank' rel='noreferrer'>DEMO</a>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href={link} target='_blank' rel='noreferrer'>CODE</a>
                  </div>
                </div>
              )
            })
          }
        </div>


      </div>
    </div>
  )
}

export default Portfolio
