import React, { useEffect, useState } from "react";
import "./Home.scss";
import myImage from "../../assets/images/me.jpg";
import SocialMediaButtons from "../../components/socialMediaButtons/SocialMediaButtons";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='home'>
      <img
        style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}
        id='my-photo'
        className='my-photo'
        src={myImage}
        alt='this is the face of hanif Bahari the author of this website'
      />

      <h2 style={{ transform: `translateY(${scrollPosition * -0.3}px)` }}>
        Front-End Developer
      </h2>

      <div className='aboutTextBox'>
        <p className='aboutText'>
          Hi there! My name is Hanif Bahari, and I'm excited to tell you a bit
          about myself. First and foremost, I'm a very friendly and approachable
          person, so feel free to say hello anytime! I believe that making
          connections with others is one of the most important things we can do
          in life.
        </p>
        <p className='aboutTextInside'>
          Professionally, I'm a frontend developer with a background in design.
          I absolutely love creating beautiful, user-friendly interfaces that
          make people's lives easier. I've worked with a variety of
          technologies, including React JS, Next JS, and Gatsby JS, as well as
          GraphQL and REST API. I'm also very comfortable with styling
          frameworks like Sass, Chakra UI, Bootstrap, Tailwind CSS, and Styled
          Components.
        </p>
        <p className='aboutTextInside'>
          I'm passionate about learning and staying up-to-date with the latest
          trends and technologies. In fact, I'm always seeking out new courses,
          tutorials, and conferences to attend so I can keep growing as a
          developer. I believe that the more we learn, the more we can
          contribute to the world around us.
        </p>
        <p className='aboutTextInside'>
          When I'm not coding, you can often find me drawing and creating art.
          Illustration and cartooning are a big part of my life, and I find that
          they help me stay creative and inspired. In fact, I believe that my
          background in design has given me a unique perspective on frontend
          development and has helped me create even better user experiences.
        </p>
        <p className='aboutTextInside'>
          Overall, I'm someone who loves to connect with others, create
          beautiful and user-friendly interfaces, and learn as much as I can.
          I'm excited about what the future holds, and I look forward to making
          meaningful connections with others in the industry.
        </p>
      </div>

      <SocialMediaButtons />
    </div>
  );
};

export default Home;
