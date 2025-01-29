import React from 'react';
import profilePic from '../../assets/rahul.jpg';
import './aboutme.css';

const AboutMe = () => {
	return (
		<section
			id="about-me"
			className="about-me"
		>
			<h2 className="section-title">About Me</h2>
			<div className="about-content">
				<p>
					Hello! I'm <strong>Rahul Parmar</strong>, a passionate and
					detail-oriented MERN stack developer with a love for creating scalable,
					user-friendly applications. With a background in Computer Engineering,
					I’ve developed a solid foundation in both front-end and back-end
					technologies, which allows me to build complete web solutions.
					<br />
					<br />I specialize in{' '}
					<strong>MongoDB, Express.js, React.js, and Node.js</strong> and have
					experience developing everything from responsive, interactive user
					interfaces to powerful, efficient back-end systems. I’m always eager to
					tackle new challenges and innovate in every project I take on.
				</p>
				<div className="profile-pic-container">
					<img
						className="profile-pic"
						src={profilePic}
						alt="Rahul Parmar"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
