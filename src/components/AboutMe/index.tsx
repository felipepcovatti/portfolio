import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiNextDotJs, SiReact, SiTypescript } from 'react-icons/si'
import { Contact, Container, Content, InformationContainer, Interests, MainText, More } from "./styles";

export function AboutMe() {
  return (
    <Container id="about">
      <Content>
        <h2>About me</h2>
        <MainText>
          <p>I have a bachelor's degree in graphic design and 2+ years of
          work experience in the tech industry, initially
          as a designer and then, as a junior frontend developer.
          </p>
          <p>While I am interested in the entire process of modern software
          development, my current focus is on getting deeper into front-end
          frameworks.
          </p>
          <p>I am currently based in Brazil and I am open to job
          opportunities in frontend development.
          </p>
        </MainText>
        <InformationContainer>
          <Interests>
            <h3>Main interests:</h3>
            <div>
              <span><SiJavascript /> JavaScrit</span>
              <span><SiReact /> React</span>
              <span><SiTypescript /> TypeScript</span>
              <span><SiNextDotJs /> Next.js</span>
            </div>
          </Interests>
          <More>
            <h3>More</h3>
            <div>
              <a href="https://www.linkedin.com/in/felipepcovatti" target="_blank">
                <FaLinkedin />
                <span>linkedin.com/in/felipepcovatti</span>
              </a>
            </div>
            <div>
              <a href="https://github.com/felipepcovatti" target="_blank">
                <FaGithub />
                <span>github.com/felipepcovatti</span>
              </a>
            </div>
            <div>
              <a href="https://behance.net/felipepcovatti" target="_blank">
                <FaBehance />
                <span>behance.net/felipepcovatti</span>
              </a>
            </div>
          </More>
          <Contact>
            <h3>Contact</h3>
            <p>Feel free to contact me at:
              <span className="sr-only">The email is displayed in SVG elements, for security
              reasons. If you would like to know the email and do not have access to it, you can easily form the email
              by adding "_p_covatti@g_mail.com" to the end of the word "felipe", removing the quotation marks and
              the underline characteres.
              </span>
              <span className="email-address">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.7 27.4">
                  <path d="M8.5 8H4.8v12.8H2.6V8H0V7l2.6-.8v-.8Q2.6 0 7.3 0q1.1 0 2.7.5l-.6 1.7q-1.2-.4-2.1-.4-1.3 0-1.9.9-.6.8-.6 2.6v1h3.7zM17.4 21q-3.3 0-5.2-1.9-1.8-2-1.8-5.4Q10.4 10 12 8 14 6 16.8 6q2.7 0 4.3 1.8 1.6 1.8 1.6 4.7V14h-10q0 2.6 1.3 4 1.2 1.3 3.4 1.3 2.4 0 4.7-1v2l-2.2.7q-1 .2-2.5.2zm-.6-13.2Q15 7.8 14 9 13 10 12.7 12h7.6q0-2-.9-3.1-1-1.2-2.6-1.2zM28.7 20.8h-2.2V.1h2.2zM35.6 20.8h-2.2V6.3h2.2zM33.2 2.3q0-.7.3-1 .4-.4 1-.4.5 0 .9.3.4.4.4 1.1 0 .8-.4 1.1-.4.4-1 .4-.5 0-.9-.4-.3-.3-.3-1zM47 21q-1.4 0-2.6-.4-1.1-.6-2-1.7v8.5h-2.1V6.3H42l.3 2q1-1.2 2-1.8Q45.7 6 47 6q3 0 4.5 2 1.6 2 1.6 5.5 0 3.6-1.6 5.6-1.6 2-4.5 2zM46.7 8q-2.2 0-3.2 1.2t-1 4v.4q0 3 1 4.4 1 1.3 3.3 1.3 1.9 0 3-1.5 1-1.5 1-4.2t-1-4.2Q48.6 8 46.7 8zM63.1 21q-3.2 0-5-1.9-2-2-2-5.4Q56.1 10 58 8 59.6 6 62.5 6q2.8 0 4.4 1.8 1.6 1.8 1.6 4.7V14h-10q0 2.6 1.2 4 1.3 1.3 3.5 1.3 2.3 0 4.6-1v2l-2.2.7q-1 .2-2.5.2zm-.6-13.2q-1.7 0-2.8 1.2-1 1.1-1.2 3.1H66q0-2-1-3.1-.9-1.2-2.6-1.2zM79 21q-1.4 0-2.6-.4-1.2-.6-2-1.7h-.1l.1 2.5v6h-2.2V6.3H74l.3 2h.1q.9-1.2 2-1.8Q77.5 6 79 6q2.9 0 4.4 2 1.6 2 1.6 5.5 0 3.6-1.6 5.6-1.6 2-4.4 2zM78.7 8q-2.3 0-3.3 1.2t-1 4v.4q0 3 1 4.4 1 1.3 3.3 1.3 2 0 3-1.5t1-4.2q0-2.7-1-4.2-1-1.4-3-1.4zM94.7 21q-3.1 0-4.9-1.9-1.7-2-1.7-5.5Q88 10 89.8 8q1.8-2 5-2l2.2.2q1 .2 1.6.5l-.7 2q-.7-.4-1.6-.6L94.8 8q-4.4 0-4.4 5.7 0 2.7 1 4.1 1.1 1.5 3.3 1.5 1.8 0 3.7-.8v2q-1.5.7-3.7.7zM114.4 13.5q0 3.6-1.8 5.6-1.8 2-5 2-1.9 0-3.4-1-1.5-.8-2.3-2.6-.8-1.7-.8-4 0-3.5 1.7-5.5 1.8-2 5-2 3 0 4.8 2 1.8 2 1.8 5.5zm-11 0q0 2.8 1 4.3 1.2 1.4 3.3 1.4 2.2 0 3.3-1.4 1.1-1.5 1.1-4.3t-1-4.2Q109.8 8 107.6 8t-3.3 1.4q-1 1.4-1 4.2zM121.5 20.8l-5.6-14.5h2.4l3.1 8.6q1.1 3 1.3 4h.1q.1-.8 1-3l3.4-9.6h2.4L124 20.8zM140.9 20.8l-.4-2h-.1q-1.1 1.3-2.2 1.8t-2.7.5q-2.2 0-3.4-1.1-1.2-1.1-1.2-3.2 0-4.4 7-4.6l2.5-.1v-1q0-1.6-.8-2.4-.7-.9-2.3-.9-1.8 0-4.1 1.2l-.7-1.7q1-.6 2.3-1 1.3-.3 2.6-.3 2.6 0 3.9 1.2 1.2 1.1 1.2 3.7v10zm-5-1.5q2 0 3.2-1.2 1.2-1 1.2-3.1v-1.3h-2.2q-2.6.1-3.8.9-1.1.7-1.1 2.2 0 1.2.7 1.8.7.7 2 .7zM151.8 19.3l1.1-.1.9-.2v1.7l-1 .3h-1.3q-4.3 0-4.3-4.4V8h-2V7l2-1 1-3.1h1.3v3.4h4.2V8h-4.2v8.5q0 1.4.6 2 .6.8 1.7.8zM161.4 19.3l1.1-.1.9-.2v1.7l-1 .3H161q-4.2 0-4.2-4.4V8h-2.1V7l2-1 1-3.1h1.3v3.4h4.2V8h-4.2v8.5q0 1.4.6 2 .6.8 1.7.8zM168.5 20.8h-2.2V6.3h2.2zm-2.4-18.5q0-.7.4-1 .4-.4 1-.4.5 0 .9.3.3.4.3 1.1 0 .8-.3 1.1-.4.4-1 .4-.5 0-.9-.4-.4-.3-.4-1z"></path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.8 27.4">
                  <path d="M21.2 11.1q0 2-.5 3.5Q20 16.2 19 17q-1 .9-2.4.9-1.2 0-2-.7-.7-.7-.9-1.8h-.1q-.5 1.2-1.5 1.8-1 .7-2.4.7-2 0-3-1.4-1.2-1.3-1.2-3.7 0-2.7 1.6-4.4 1.5-1.7 4-1.7l2.1.2 2 .4-.2 6.3v.3q0 2.3 1.7 2.3 1.2 0 2-1.4t.8-3.7q0-2.4-1-4.2-1-1.8-2.8-2.8-1.8-1-4.2-1-3 0-5.1 1.3Q4.2 5.6 3 7.9 1.8 10.2 1.8 13q0 4 2.2 6.3 2.1 2.1 6.2 2.1 2.7 0 5.7-1v1.7q-2.5 1-5.7 1-4.9 0-7.5-2.6Q0 18 0 13.2q0-3.4 1.4-6.1 1.4-2.7 4-4.2 2.7-1.5 6.1-1.5 2.9 0 5 1.2Q18.9 3.8 20 6q1.2 2.3 1.2 5.1zM7.5 13q0 3.3 2.6 3.3 2.7 0 3-4.1l.2-3.5q-1-.2-2.1-.2-1.7 0-2.7 1.2-1 1.1-1 3.3zM37 6.3v1.4l-2.6.3q.4.4.7 1.2.3.7.3 1.7 0 2.1-1.5 3.4-1.5 1.3-4 1.3l-1.2-.1q-1.5.7-1.5 1.8 0 .6.5 1 .5.2 1.7.2H32q2.4 0 3.6 1 1.3 1 1.3 2.9 0 2.4-2 3.7-1.9 1.3-5.6 1.3-2.8 0-4.4-1.1-1.5-1-1.5-3 0-1.3.8-2.3.9-1 2.4-1.3-.6-.3-1-.8-.3-.5-.3-1.2 0-.8.4-1.4.4-.6 1.4-1.2-1.2-.5-1.9-1.6-.7-1-.7-2.5 0-2.4 1.4-3.7Q27.4 6 30 6q1.1 0 2 .3zm-11.5 17q0 1.1 1 1.8 1 .6 2.8.6 2.8 0 4.1-.9 1.4-.8 1.4-2.2 0-1.2-.7-1.7-.8-.4-2.8-.4h-2.6q-1.5 0-2.4.7-.8.7-.8 2zm1.2-12.4q0 1.5.8 2.3 1 .8 2.4.8 3.3 0 3.3-3.1 0-3.3-3.3-3.3-1.5 0-2.4.8-.8.9-.8 2.5zM58.7 20.8v-9.5q0-1.7-.8-2.6-.7-.8-2.3-.8-2 0-3 1.1-1 1.2-1 3.7v8.1h-2.2v-9.5q0-1.7-.8-2.6Q48 8 46.3 8q-2 0-3 1.2t-1 4v7.7h-2.2V6.3H42l.4 2q.7-1.1 1.8-1.7 1.2-.6 2.6-.6Q50 6 51 8.5h.1q.7-1.2 2-1.8 1.2-.7 2.7-.7 2.5 0 3.7 1.3 1.3 1.2 1.3 4v9.5zM74.4 20.8l-.5-2q-1.2 1.3-2.3 1.8-1 .5-2.7.5-2.1 0-3.4-1.1-1.2-1.1-1.2-3.2 0-4.4 7-4.6l2.5-.1v-1q0-1.6-.7-2.4-.7-.9-2.4-.9-1.8 0-4 1.2L66 7.3q1-.6 2.3-1 1.3-.3 2.6-.3 2.6 0 3.8 1.2Q76 8.3 76 10.9v10zm-5-1.5q2 0 3.2-1.2 1.2-1 1.2-3.1v-1.3h-2.2q-2.6.1-3.8.9-1.2.7-1.2 2.2 0 1.2.7 1.8.8.7 2 .7zM82.8 20.8h-2.2V6.3h2.2zM80.4 2.3q0-.7.3-1 .4-.4 1-.4.5 0 .9.3.4.4.4 1.1 0 .8-.4 1.1-.4.4-1 .4-.5 0-.9-.4-.3-.3-.3-1zM89.7 20.8h-2.2V.1h2.2zM94 19.4q0-.9.5-1.3.4-.5 1.1-.5.8 0 1.2.5.5.4.5 1.3t-.5 1.3q-.4.5-1.2.5-.7 0-1.1-.4-.4-.4-.4-1.4zM107.4 21q-3.1 0-4.9-1.9-1.7-2-1.7-5.5 0-3.6 1.7-5.6 1.8-2 5-2l2.2.2q1 .2 1.6.5l-.7 2q-.7-.4-1.6-.6l-1.5-.2q-4.4 0-4.4 5.7 0 2.7 1 4.1 1.1 1.5 3.3 1.5 1.8 0 3.7-.8v2q-1.5.7-3.7.7zM127.1 13.5q0 3.6-1.8 5.6-1.8 2-5 2-1.9 0-3.4-1-1.5-.8-2.3-2.6-.8-1.7-.8-4 0-3.5 1.7-5.5 1.8-2 5-2 3 0 4.8 2 1.8 2 1.8 5.5zm-11 0q0 2.8 1 4.3 1.2 1.4 3.3 1.4 2.2 0 3.3-1.4 1.1-1.5 1.1-4.3t-1-4.2Q122.5 8 120.3 8t-3.3 1.4q-1 1.4-1 4.2zM149.5 20.8v-9.5q0-1.7-.7-2.6-.7-.8-2.3-.8-2 0-3 1.1-1 1.2-1 3.7v8.1h-2.2v-9.5q0-1.7-.8-2.6-.7-.8-2.3-.8-2 0-3 1.2t-1 4v7.7H131V6.3h1.8l.3 2h.1q.7-1.1 1.8-1.7 1.1-.6 2.5-.6 3.5 0 4.5 2.5h.1q.7-1.2 2-1.8 1.1-.7 2.7-.7 2.5 0 3.7 1.3 1.3 1.2 1.3 4v9.5z"></path>
                </svg>
              </span>
            </p>
          </Contact>
        </InformationContainer>
      </Content>
    </Container>
  )
}