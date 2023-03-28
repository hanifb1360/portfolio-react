import React from 'react';
import './Home.scss';
import myImage from '../../assets/images/me.jpg';
import SocialMediaButtons from '../../components/socialMediaButtons/SocialMediaButtons';
import recommendations from '../../data/recommendations';
import useScrollPosition from '../../hooks/useScrollPosition';

const Home = () => {
  const scrollPosition = useScrollPosition();

  const backgroundColor =
    scrollPosition > 0 ? 'rgb(20, 27, 32)' : 'rgb(40, 66, 85)';
  return (
    <div
      className="home"
      style={{
        backgroundColor,
        transition: 'background-color 0.6s ease-out',
      }}
    >
      <img
        style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}
        id="my-photo"
        className="my-photo"
        src={myImage}
        alt="this is the face of hanif Bahari the author of this website"
      />

      <h2 style={{ transform: `translateY(${scrollPosition * -0.3}px)` }}>
        Front-End Developer
      </h2>
      <h4 style={{ transform: `translateY(${scrollPosition * -0.5}px)` }}>
        With a background in Design
      </h4>

      <div className="aboutTextBox">
        <p className="aboutText">
          Hi, I'm Hanif Bahari! I'm a friendly and approachable frontend
          developer with a design background. I enjoy using technologies such as
          React JS, Next JS, and Gatsby JS, and I'm comfortable with styling
          frameworks like Sass, Chakra UI, Bootstrap, Tailwind CSS, and Styled
          Components. I'm passionate about staying up-to-date with the latest
          trends and technologies and enjoy attending courses, tutorials, and
          conferences. In my free time, I like to draw and create art. My design
          background gives me a unique perspective on frontend development and
          helps me create better user experiences. Let's connect and make
          meaningful connections in the industry!
        </p>
      </div>

      <div className="recommendationsContainer">
        <h4>Recommendations</h4>

        {recommendations.map(
          ({ recommenderName, recommenderTitle, recommendationText }) => (
            <div key={recommenderName} className="recommendation">
              <div className="recommenderNameTitle">
                <p className="recommender">{recommenderName}</p>
                <span>{recommenderTitle}</span>
              </div>
              <p className="recommendationText">{recommendationText}</p>
            </div>
          )
        )}
      </div>

      <SocialMediaButtons />
    </div>
  );
};

export default Home;
