import { Container, Content } from "./styles";

export function AboutMe() {
  return (
    <Container id="about">
      <Content>
        <div>
          <div>
            <div>
              <h2>About me</h2>
              <p>I have a bachelor's degree in graphic design and 2+ years of
              work experience in the tech industry, part
              as a designer, and, most recently, as a junior frontend developer. <br />
              While I am interested in the entire process of modern software
              development, my current focus is on getting deeper into front-end
              frameworks. I am especially excited about React.js, combined with
               TypeScript and/or Next.js. <br />
              I am currently open to job
              opportunities in frontend development.</p>
            </div>
          </div>
          <div>
            <div>
              <h2>Contact</h2>

            </div>
            <div>
              <h2>More</h2>
              <div>
                <a href="https://www.linkedin.com/in/felipepcovatti" data-shorthref="linkedin.com/in/felipepcovatti" target="_blank">
                  <span>linkedin.com/in/felipepcovatti</span>
                </a>
              </div>
              <div>
                <a href="https://github.com/felipepcovatti" data-shorthref="github.com/felipepcovatti" target="_blank">
                  <span>github.com/felipepcovatti</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}