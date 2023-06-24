import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    With expertise and proficiency in frameworks like React and Angular, I create engaging and dynamic user interfaces. I'm well-versed in responsive design principles, ensuring seamless experiences across devices. Leveraging my knowledge of web technologies, I combine creativity with technical skills to deliver visually appealing and intuitive user experiences.                </p>
                <br />
                <p className='text-xl'>
                    with expertise in JavaScript and Java. With a strong command over various web technologies, I excel in back-end development using NodeJS, ExpressJS, and NestJS, along with REST and GraphQL APIs. I'm well-versed in working with databases such as MySQL, PostgreSQL, and Elasticsearch. Utilizing CI-CD tools like Docker, Kubernetes, and Git, I ensure smooth deployment and version control. My AWS certification adds proficiency in services like SQS, S3, EKS, ECR, SNS, and Lambda. Additionally, I have experience in DSA, Kafka, Microservices, Micro frontends, Redis, Kong, Nginx, and implementing unit testing using Jasmine and Karma. I'm dedicated to crafting efficient and scalable solutions.
                </p>
            </div>
        </div>
    )
}

export default About
