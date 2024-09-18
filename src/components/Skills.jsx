    import react from '/public/react.svg'
    import bootstrap from '/public/bootstrap.svg'
    import html  from '/public/html.svg'
    import css from '/public/css.svg'
    import javascript from '/public/javascript.svg'
    import security from '/public/security.svg'

    
    function Skills() {
        return (
            <>
              <section className="p-5 bg-dark text-light text-center" id="skills">
                <div className="container">
                  <h2 className="text-warning">My Skills</h2>
                  <p className="fst-italic">Click on the text to Reveal the Details of each Technology</p>

                  <div className="the-skills">

                  <div className="accordion accordion-flush bg-dark" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header bg-dark">
                    <p className=''><img src={react} alt="react" className="img-fluid"/></p>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        React
                        <span>
                        </span>
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> With 70% knowledge of React, I have been able to build a variety of applications from simple to complex. I am proficient in using React to create dynamic and interactive user interfaces, and I am well-versed in the various components and libraries available to enhance the functionality of these applications. Whether you are building a single-page application, a mobile app, or a web application, I am confident that I can help you achieve your goals with React. </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header  bg-dark">

                    <p><img src={bootstrap} alt="bootstrap" className="img-fluid"/></p>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                         Bootstrap
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">With 80% knowledge of Bootstrap, I have been able to build a variety of applications from simple to complex. I am proficient in using Bootstrap to create responsive and mobile-first user interfaces, and I am well-versed in the various components and libraries available to enhance the functionality of these applications. Whether you are building a single-page application, a mobile app, or a web application, I am confident that I can help you achieve your goals with Bootstrap. </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header bg-dark">

                    <p>
                       <img src={html} alt="html" className="img-fluid"/>
                       <img src={css} alt="css" className="img-fluid"/>
                    </p>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        HTML & CSS
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> With 90% knowledge of HTML and CSS, I have been able to build a variety of applications from simple to complex. I am proficient in using HTML and CSS to create responsive and mobile-first user interfaces, and I am well-versed in the various components and libraries available to enhance the functionality of these applications. Whether you are building a single-page application, a mobile app, or a web application, I am confident that I can help you achieve your goals with HTML and CSS. </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                  <h2 className="accordion-header bg-dark">

                  <p><img src={javascript} alt="javascript" className="img-fluid"/></p>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
                      Javascript
                    </button>
                  </h2>
                  <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">with 70% knowledge of Javascript, I have been able to build a variety of applications from simple to complex. I am proficient in using Javascript to create responsive and mobile-first user interfaces, and I am well-versed in the various components and libraries available to enhance the functionality of these applications. Whether you are building a single-page application, a mobile app, or a web application, I am confident that I can help you achieve your goals with Javascript. </div>
                  </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header bg-dark">
                <p><img src={security} alt="react" className="img-fluid"/></p>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapseThree">
                    Cyber Security
                  </button>
                </h2>
                <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">I am presently pursuing a certification in Cyber Security. I have a strong understanding of the latest technologies and tools used in the field, and I am well-equipped to help organizations stay ahead of the curve in terms of cybersecurity. Whether you are looking to enhance your cybersecurity posture, or need assistance in identifying potential threats, I am confident that I can help you achieve your goals with my expertise in Cyber Security. </div>
                </div>
              </div>

                </div>
                
                  </div>

                </div>
              </section>
            </>
        )   
    }



    export default Skills