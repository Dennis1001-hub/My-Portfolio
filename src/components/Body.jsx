
const Body = () => {
   
  const primaryImages = {
    primaryImage: '/src/img/Portpic.jpg',
    seconaryImage: 'https://via.placeholder.com/300x200'
  }

  return (
    <> 
     
        <section className="body bg-dark text-light p-5 p-lg-0">
          <div className="container c1"> 
           <div className="row align-items-center justify-content-between">
           <div className="col-md">
           <img src="/src/img/Portpic.jpg" 
           onError={(e) => {
             e.target.src = primaryImages.seconaryImage
           }}
         className="primaryImage mb-5" alt="Portrait"/>
           </div>
              <div className=" col-md mb-5 intro-text">
                <h1 className="">1 year Experience <br/> <span className="text-warning">Web Developer and Tech expert</span></h1>
                <p className="lead">
                   Hello there <i></i>, <br/>
                   My name is Dennis Okelekwe, a highly skilled and dedicated professional with a passion for delivering exceptional results. 
                   With a strong foundation in Web developing, 
                   I possess a unique blend of creativity, technical expertise, and attention to detail that sets me apart from the rest.
                </p>
              </div>
            </div>
           </div>
        </section>

    </>
  )
}

export default Body
