import React from "react"
import { Link } from "gatsby"

import Layout from "../components/gatsby/layout"
import SEO from "../components/gatsby/seo"

import Drawer from "../components/gatsby/Drawer"

import "../styles/css/about.css"

import ovride from "../images/ovride.mp4"

import { Header, Button } from "../components/common"

class About extends React.Component {
  state = { drawerActive: false }

  drawerSwitch = () => {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  render() {
    return (
      <div className="about-wrapper">
        <Header drawerSwitch={this.drawerSwitch} />
        <h1
          style={{
            position: "fixed",
            color: "white",
            left: "0",
            top: "0",
            zIndex: "120",
            fontSize: "13px",
            fontFamily: "GTMono",
          }}
        >
          alpha 1.1 💁
        </h1>

        <Drawer
          active={this.state.drawerActive}
          drawerSwitch={this.drawerSwitch}
        />

        <div className="backdrop" />

        <video
          className="video-container"
          autoPlay="autoplay"
          loop={true}
          muted={true}
          data-reactid=".0.1.0.0"
          playsInline
        >
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src={ovride} />
        </video>

        <div className="aboutContent">
          <h1>Hello there,</h1>
          <h2>
            Looking for a more classic
            <br />
            resume experience?
            <a href="https://drive.google.com/file/d/1h9l4nFRn-GU-zuGxEAKPvx2tby6UYaIm/view?usp=sharing">
              Go here.
            </a>
            <br />
            Otherwise, if you'd like to hear a good story, keep reading.
          </h2>

          <h1 style={{ marginTop: "50px" }}>Who am I</h1>
          <h2>
            My name is Alexandru Acea and I'm a 21 year old software developer
            from Romania.
          </h2>

          <h1 style={{ marginTop: "50px" }}>How can I help you</h1>
          <h2>
            I'm a JavaScript developer focused on FrontEnd experiences. I make
            modern, extremely fast and responsive websites, ecommerce stores,
            blogs and more.
            <br />
            <br />
            I'm looking to get hired or work as a contractor.
          </h2>

          <h1 style={{ marginTop: "50px" }}>Skills / Tools</h1>
          <h2>
            My framework of choice is ReactJS
            <br />
            I'm experienced with JavaScript ES6, Webpack, HTML5, CSS3 and all
            it's new additions like CSS Grid and Flexbox (I use SASS 💁). I also
            worked with REST APIs (using and making them), GraphQL and git.
            <br />
            Also I worked with static page generators such as GatsbyJS for
            increased speed and SEO.
            <br />
            <br />I center all my work around good design and principles of
            UX/UI. I also have experience working with designers and design
            tools such as Zeplin and Figma.
          </h2>

          <h1 style={{ marginTop: "50px" }}>Other skills</h1>
          <h2>
            Aside from web development I worked for 2 years or more with Android
            and Java development. I'm still a big fan of mobile development and
            I've made many apps, one of them reaching 30k downloads and another
            being featured by LifeHacker.
            <br />
            <br />
            I'm highly proefficient in English and Romanian and I can also
            understand German.
            <br />
            <br />
            I'm also a good communicator and team player, having collaborated
            with huge and small (but cool) brands.
          </h2>

          <h1 style={{ marginTop: "50px" }}>Hobbies</h1>
          <h2>
            I'd like to say that everything I do is more or less a hobby but
            some of my favorites are taking photos and videos and sharing them
            on my Instagram where I have over 45k followers.
          </h2>

          <h1 style={{ marginTop: "50px" }}>Experience</h1>
          <h2>
            Started programming at 16 developing my first Android apps
            <br />
            Developed around 30 apps for fun and experimenting, but I'm only
            proud of 3 of them. BreakList, which was featured by LifeHacker.
            AceWalls which I've made to share my photos and got over 30k
            downloads. And TextValet which is the most ambitious app I've done.
            <br />
            <br />
            At that point I was learning Web Development on and off but didn't
            really like it until I was around 19 and started making web apps.
            I've got a local restaurant to be my first client and I made a full
            online order system for them. Meanwhile I've made more projects for
            fun and to learn better.
            <br />
            <br />
            Then I started learning React and I've done more freelancer (such as
            an ecommerce store) and personal work, like this website! Which is
            fully made with ReactJS.
            <br />
            <br />
            I've recently worked on a team project with Nokia and I had to
            create a full fledged online voting system, where I've built the
            backend and API with NodeJS and Express and deployed it to a Linux
            server. Then I also created an online platform with React and a
            mobile app with ReactNative. It was a really extensive project and
            I've learned a lot from it.
            <br />
            Especially the backend side.
          </h2>

          <h1 style={{ marginTop: "50px" }}>The why</h1>
          <h2>
            I've always been passionate about creating and finding new ways to
            express my inner creativity, and so far coding has helped me achieve
            that the most. It lets me merge all of my hobbies and passions such
            as photography, video editing and design. I view it as logic based
            creativity.
            <br />
            Also I love exploring new technologies and tinker with them to see
            how they work and how they could help me create
          </h2>

          <h1 style={{ marginTop: "50px" }}>Education</h1>
          <h2>
            I'm one of those people that says that school isn't important while
            also pursuing a CS degree at The West University of Timisoara.
            <br />
            But for me school isn't importand, education on the other hand is.
            I've always learned on my own in order to understand more complex
            subjects and gain new skills. I've completed numerous courses and
            tutorials, while making a lot of personal projects on the side.
          </h2>

          <h1 style={{ marginTop: "50px" }}>
            Sounds like what
            <br />
            you're looking for?
          </h1>
          <Button
            style={{
              position: "relative",
              marginTop: "50px",
              marginBottom: "100px",
            }}
          >
            Hire me
          </Button>
        </div>
      </div>
    )
  }
}

export default About
