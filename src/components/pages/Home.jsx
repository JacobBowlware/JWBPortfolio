import React, { useEffect, useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { firestore } from '../Firebase/config.js';
import postedOn from '../common/PostedOn';

// Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated } from 'react-spring';

// Page Components
import SkillsCard from '../common/SkillsCard';
import RotateCard from '../common/RotateCard';

// Images
import klauTech from '../images/klauTech.png';
import forbes400 from '../images/forbes400.png';
import weatherFetcher from '../images/weatherFetcher.png';
import selfOptimal from '../images/selfOptimal.png';

// Toast/Email Notifications 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from '@formspree/react';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [fromX, setFromX] = useState(0);
    const [leaveX, setLeaveX] = useState(0);

    // useEmail will send email to me with data related to the contact form.
    const [email, handleEmail] = useForm("mbjejggr")

    useEffect(() => {
        AOS.init();
    });


    const handleRotate = (direction, location) => {
        // Location is truthy, user is clicking the hero cards.
        if (location) {
            // Direction === 0 --> User pressed 'arrow left'
            // Rotate list of items to left.
            if (direction === 0) {
                setFromX(-1000);
                setLeaveX(1000);
                setItemVisible(v => !v);
                setTimeout(() => {
                    if (listIndex === 0) setListIndex(itemList.length - 1);
                    else setListIndex(listIndex - 1);
                    setItemVisible(v => !v);
                }, 750);
            }
            // Rotate list of items to right.
            else {
                setFromX(1000);
                setLeaveX(-1000);
                setItemVisible(v => !v);
                setTimeout(() => {
                    if (listIndex === itemList.length - 1) setListIndex(0);
                    else setListIndex(listIndex + 1);
                    setItemVisible(v => !v);
                }, 750);
            }
        }
        // Location is falsey, user is clicking the project cards.
        else {
            // Direction === 0 --> User pressed 'arrow left'
            // Rotate list of items to left.
            if (direction === 0) {
                setFromX(-1000);
                setLeaveX(1000);
                setProjectVisible(v => !v);
                setTimeout(() => {
                    if (projectListIndex === 0) setProjectListIndex(projectItemList.length - 1);
                    else setProjectListIndex(projectListIndex - 1);
                    setProjectVisible(v => !v);
                }, 750);
            }
            // Rotate list of items to right.
            else {
                setFromX(1000);
                setLeaveX(-1000);
                setProjectVisible(v => !v);
                setTimeout(() => {
                    if (projectListIndex === projectItemList.length - 1) setProjectListIndex(0);
                    else setProjectListIndex(projectListIndex + 1);
                    setProjectVisible(v => !v);
                }, 750);
            }
        }
    }

    const showToastMessage = (success) => {
        if (success) {
            toast.success('Message Succesfully Sent!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.error('An Error Occured... Please Try again later.', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    // ----------List of 'Items' for Hero Area---------------
    const nameCard = <RotateCard
        title="Jacob Bowlware"
        body={<ul className="hero__card-list">
            <li className="hero__card-list__item">
                <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-school" /> Univerity of Oklahoma, Computer Science
                <span className="span-small">- 2026</span>
            </li>
            <li className="hero__card-list__item">
                <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-laptop-code" /> Front-End Web Developer
            </li>
            <li className="hero__card-list__item">
                <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-keyboard" /> Aspiring Software Engineer
            </li>
            <li className="hero__card-list__item">
                <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-briefcase" /> Business Oriented
            </li>
        </ul>}
        cName="hero__card"
        handleRotate={handleRotate}
        location="1"
    />

    const schoolCard =
        <RotateCard
            title={<>University of Oklahoma <span className="span-small">- 2026</span></>}
            body={<ul className="hero__card-list">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-book" /> Major - Computer Science
                    <span className="span-small">- Bachelors</span>
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> GPA - 3.88
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-calendar" /> Class - Freshman
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-user" /> Favorite Campus Activites -
                    Attending Lectures covering Comp-Sci or Finance, Reading, and Playing Basketball.
                </li>
            </ul>}
            cName="school__card"
            handleRotate={handleRotate}
            location="1"
        />


    const webDevCard =
        <RotateCard
            title={<>Front-End Web Developer</>}
            body={<ul className="hero__card-list">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-calendar" /> Primary Language - Javascript
                    <span className="span-small">- Markup Languages/Libraries - HTML, CSS, React-Js</span>
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> My Work -
                    <a href="https://klautechnology.com/" target="_blank" rel="noreferrer">KlauTechnology.com</a>
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-user" /> Self Taught
                    <span className="span-small">- Through online courses/documentation.</span>
                </li>
            </ul>}
            cName="dev__card"
            handleRotate={handleRotate}
            location="1"
        />

    const engineerCard =
        <RotateCard
            title={<>Aspiring Software Engineer</>}
            body={<ul className="hero__card-list">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> Strong Knowledge In -
                    Python, Java, Javascript, HTML, CSS, ReactJS, Bootstrap.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-clipboard" /> Familiarity In -
                    Django, MySQL, Firebase.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-user" /> Passion For -
                    Web Development, AI/ML, General Programming.
                </li>
            </ul>}
            cName="engineer__card"
            handleRotate={handleRotate}
            location="1"
        />

    // ----------List of items for 'Projects' Area------------- 
    const klauTechCard =
        <RotateCard
            title={<>Klau Technology</>}
            body={<ul className="hero__card-list list-sm">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> Website is writtin with ReactJS,
                    JavaScript, HTML, and CSS.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-database" /> Utilizes Firebase as its backend to
                    allow users to create accounts, login, submit forms, and subscribe to plans.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-cart-shopping" /> Uses Stripe as its payment
                    processor for an easier, safer, and better-optimized user check-out experience.
                </li>
                <li className="hero__card-list__item">
                    <a href="/#klautech">More Info</a>
                </li>
            </ul>}
            cName="project__card"
            handleRotate={handleRotate}
            location=""
        />

    const selfOptimalCard =
        <RotateCard
            title={<>selfOptimal</>}
            body={<ul className="hero__card-list list-sm">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> Website is writtin with ReactJS,
                    JavaScript, HTML, and CSS.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-database" /> Utilizes the same Firebase implemtation as my 'Klau-Technology' project; However,
                    this required much more database querying and sorting as users have the ability to: Log Workouts, View Graphs of Their Workout Data, Create Custom Routines, and Much More.
                </li>
                <li className="hero__card-list__item">
                    <a href="/#selfOptimal">More Info</a>
                </li>
            </ul>}
            cName="project__card"
            handleRotate={handleRotate}
            location=""
        />

    const forbesCard =
        <RotateCard
            title={<>Forbes400 Discord Bot</>}
            body={<ul className="hero__card-list list-sm">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> Application written with Python and
                    is used to give Discord servers access to real-time Forbes400 data.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-person" /> Implemented a Forbes400 API to ensure the
                    data is always up to date and accurate.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-file" /> Implemented sliding window techniques
                    along with search features to allow users to grab any range of data desired.
                </li>
                <li className="hero__card-list__item">
                    <a href="/#forbes">More Info</a>
                </li>
            </ul>}
            cName="project__card"
            handleRotate={handleRotate}
            location=""
        />

    const weatherCard =
        <RotateCard
            title={<>Weather Fetcher</>}
            body={<ul className="hero__card-list list-sm">
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-cloud" /> A simple weather application used to
                    determine the general weather info of the users desired city.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-chart-simple" /> Application written in Python
                    with the Pygame library.
                </li>
                <li className="hero__card-list__item">
                    <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-map-location-dot " /> Implemented the
                    OpenWeatherMap API to grab real time weather data from over 200,000 cities.
                </li>
                <li className="hero__card-list__item">
                    <a href="/#weatherfetcher">More Info</a>
                </li>
            </ul>}
            cName="project__card"
            handleRotate={handleRotate}
            location=""
        />
    // -------------------End of Card Lists--------------------------

    // Hero Item List
    const itemList = [nameCard, schoolCard, webDevCard, engineerCard];
    const [listIndex, setListIndex] = useState(0);
    const [itemVisible, setItemVisible] = useState(true);
    const transition = useTransition(itemVisible, {
        from: { x: fromX, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: leaveX, y: 0, opacity: 0 }
    });

    // Project Item List
    const projectItemList = [klauTechCard, forbesCard, selfOptimalCard, weatherCard];
    const [projectListIndex, setProjectListIndex] = useState(0);
    const [projectVisible, setProjectVisible] = useState(true);
    const projectTransition = useTransition(projectVisible, {
        from: { x: fromX, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: leaveX, y: 0, opacity: 0 }
    });

    // Functions/Variables to deal with form change/submit events.
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const dateTime = postedOn();

        // Send user data to Firebase DB.
        const ref = collection(firestore, "contact_form");
        try {
            addDoc(ref, { user_name: userName, email: userEmail, user_phone: userPhone, user_message: userMessage, postedOn: dateTime });
        }
        catch (e) {
            console.log(e);
            showToastMessage(false);
            return;
        }

        showToastMessage(true);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }

    return (
        <div className="web-wrapper">
            <div className="web-sizer home">
                <ToastContainer />
                <div className="hero" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                    {transition((style, item) =>
                        item ? <animated.div style={style} className="revolving-card ">
                            {itemList[listIndex]}
                        </animated.div> : <animated.div className="revolving-card"> </animated.div>
                    )}
                </div>
                <div className="about-me" id="about">
                    <h2 className="about-me__header"><FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-user" /> About Myself</h2>
                    <p>I'm currently a Freshman Computer Science student at the University of Oklahoma, with an expected graduation date of
                        May, 2026. My interests include: Software Design/Development, Web Development, Artificial Intellegance, and Machine
                        Learning.
                    </p>
                    <p>
                        Along with my programming interests, I also have large interests in Finance and Business. My current business - Klau Technology -
                        is focused on providing service-based businesses with their own websites. My goal with the business is to learn as much as I can
                        about Programming, Finance, and Quality Business Practice.
                    </p>
                </div>
                <div className="my-skills" id="skills" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <h3 className="skills__header">My Skill Set</h3>
                    <div className="skills-card-container">
                        <SkillsCard
                            skillName="Python"
                            skillBody={<div>
                                I have over a year of software development experience with Python; This experience consists of creating games,
                                solving problems, and various other applications - Such as my
                                <a href="/#forbes"> Forbes400 Discord Bot</a> and <a href="/#weatherfetcher">Weather Fetcher</a>.
                            </div>}
                            icon={<FontAwesomeIcon className="hero-card__icon" icon="fa-brands fa-python" />}
                        />
                        <SkillsCard
                            skillName="JavaScript/HTML/CSS"
                            skillBody={<div>
                                I am constantly building new Web Applications, all of which consist of JavaScript/HTML/CSS. I started learning about
                                these languages in August of 2022; Since then I have constantly been trying to further my understanding in all realms
                                of Web Development. This lead to me creating <a href="/#klautech">Klau Technology</a> and many other
                                websites alike.
                            </div>}
                            icon={<FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-code" />}
                        />
                        <SkillsCard
                            skillName="Java"
                            skillBody={<div>
                                Majority of my experience learning Java has been at the University of Oklahoma. I have built numerous programs and learned key
                                concepts such as Inheritance, Encapsulation, Polymorphism, and Object-Oriented-Programming - all within Java.
                            </div>}
                            icon={<FontAwesomeIcon className="hero-card__icon" icon="fa-brands fa-java" />}
                        />
                        <SkillsCard
                            skillName="ReactJS/Bootstrap"
                            skillBody={<div>
                                When I am building a Web Application, the main JavaScript libraries that I use are ReactJS and Bootstrap. I use ReactJS to
                                deal with the functionality of my website and updating the DOM, while I use Bootstrap to add in
                                HTML/CSS components which are unnecessary to remake.
                            </div>}
                            icon={<FontAwesomeIcon className="hero-card__icon" icon="fa-brands fa-react" />}
                        />
                        <SkillsCard
                            skillName="Firebase"
                            skillBody={<div>
                                I use Firebase as a back-end service to allow myself to fully focus on whats at hand with the front-end of web development.
                                While using Firebase I have learned about: HTTPS Protocol, Get/Put/Post Requests, Status Code Errors, and much more.
                            </div>}
                            icon={<FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-database" />}
                        />
                        <SkillsCard
                            skillName="General Programming "
                            skillBody={<div>
                                After learning the skills previously listed, I have come to find that not only have I learned the skills, but I have learned
                                more about programming in general. No matter what language, library, or API I may be learning at the time: There will always
                                be a degree of familiarty as I continue to expand my general programming knowledge.
                            </div>}
                            icon={<FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-computer" />}
                        />
                    </div>
                </div>
                <h4 className="projects__header">Some of My Projects <FontAwesomeIcon className="hero-card__icon" icon="fa-solid fa-arrow-right" /></h4>
                <div className="projects" id="projects">
                    <div className="hero " data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                        {projectTransition((style, item) =>
                            item ? <animated.div style={style} className="revolving-card ">
                                {projectItemList[projectListIndex]}
                            </animated.div> : <animated.div className="revolving-card"> </animated.div>
                        )}
                    </div>
                </div>
                <div className="projects-container" id="klautech">
                    <img className="project__img projects__item" src={klauTech} alt="My business website, Klau Technology." />
                    <div className="project projects__item border-btm">
                        <h1 className="project__header">Klau Technology</h1>
                        <p className="project__body">Founded in October of 2022, Klau Technology strives to provide every service-based business with Simple,
                            Clean, Concise, and Reliable websites - at minimal cost. This business has given me ample opportunity to: Expand my programming
                            skills in multiple languages, Gain more financial knowledge, Increase my overall outlook on the troubleshooting process for programming
                            problems or issues, and much more. To visit the site and test out its features, go <a href="https://klautechnology.com/" target="_blank" rel="noreferrer">Here</a>.</p>
                    </div>
                    <div className="project projects__item border-btm" id="selfOptimal">
                        <h1 className="project__header">selfOptimal</h1>
                        <p className="project__body">selfOptimal has one main purpose, to provide everyone in the fitness community with an easier way to:
                            Log their Workouts, View their Progress, and Research Scientific Data related to their needs. While this website is currently still in production, I
                            have big goals for it. After deploying the completed website I plan to: Test it within various types of fitness groups, Gather user data, Fix bugs and Implement new
                            features, and eventually -if all goes well- create an app for selfOptimal on IOS & Android. To view the websites current state in production, go <a href="https://self-optimal.web.app/" target="_blank" rel="noreferrer"> Here</a>.</p>
                    </div>
                    <img className="project__img projects__item" src={selfOptimal} alt="My business website, Klau Technology." />
                    <img className="project__img projects__item border-btm" id="forbes" src={forbes400} alt="Forbes 400 discord bot in action." />
                    <div className="project projects__item">
                        <h1 className="project__header">Forbes400 Discord Bot</h1>
                        <p className="project__body"> Created in August of 2022, the Forbes400 Discord Bot provides all users in a discord server with access
                            to real time Forbes 400 data. This application uses a pre-existing Forbes 400 API that gives me access to a JSON file which contains
                            data related to all Forbes 400 members; Such as their: Name, Net-Worth, Business, etc. When requested, the bot will send an API
                            request for updated data, parse through the data for your desired info, and then send the data in message format to your discord
                            server text channel. To see the applications source code, go
                            <a href="https://github.com/JacobBowlware/Forbes-Discord-Bot/tree/main" target="_blank" rel="noreferrer"> Here</a>.</p>
                    </div>
                    <div className="project projects__item">
                        <h1 className="project__header">Weather Fetcher</h1>
                        <p className="project__body">Created in July of 2022, Weather Fetcher provides the application user with real time weather data to over
                            200,000 cities. Simply launch the program, type in your desired City, and then nearly instantly you get all the general weather data
                            related to your search. This application uses the OpenWeatherMap API to recieve data via GET requests. The data is returned from the
                            API via a JSON file which will be parsed for all relavant weather data; This data is then displayed to the user. To see the applications
                            source code, go <a href="https://github.com/JacobBowlware/Weather-Fetcher" target="_blank" rel="noreferrer">Here</a></p>
                    </div>
                    <img className="project__img projects__item" id="weatherfetcher" src={weatherFetcher} alt="Weather Fetcher." />
                </div>
                <div className="contact" id="contact" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <form
                        className="contact__form"
                        onSubmit={(e) => { handleSubmit(e); handleEmail(e) }}
                        action="https://formspree.io/f/mbjejggr"
                        method="POST">
                        <h4 className="contact__header">Contact Me</h4>
                        <div className="contact__form-1x2">
                            <input
                                className="contact__form-input"
                                type="text"
                                name="name"
                                placeholder='Your Name'
                                required
                                onChange={event => { setUserName(event.target.value) }} />
                            <input
                                className="contact__form-input"
                                type="text"
                                name="phone"
                                placeholder='Your Phone'
                                required
                                onChange={event => { setUserPhone(event.target.value) }} />
                        </div>
                        <div className="contact__form-1x1">
                            <input
                                className="contact__form-input input-1x1"
                                type="email"
                                name="email"
                                placeholder='Your Email'
                                required
                                onChange={event => { setUserEmail(event.target.value) }} />
                        </div>
                        <div className="contact__form-1x1 contact__form-message">
                            <textarea
                                className="contact__form-input form-message"
                                rows="4"
                                type="text"
                                name="message"
                                placeholder='Your Message'
                                required
                                onChange={event => { setUserMessage(event.target.value) }} />
                        </div>
                        <div className="contact__form-1x1">
                            <button
                                className="btn contact__form-btn"
                                type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;