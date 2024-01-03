import Data from '../data.json';
import girlimg from '../girl.png';
import img from '../ncdas2.jpg';
function About(){
    
    
        return (
            <div class="about"><h2><b>About this course</b></h2>
            {
                        Data.map( unitData => {
                        return (
                            <div>{unitData.course.about.html_content}
                            </div>
                        );
                    })
            }

            <h3><b>What to expect from the course</b></h3>
            {
                        Data.map( unitData => {
                        return (
                            <div>{unitData.course.what_to_expect.html_content}
                            </div>
                        );
                    })
            }

            <h3><b>Key topics covered</b></h3>
            {
                        Data.map( unitData => {
                        return (
                            <div>{unitData.course.key_topics.html_content}
                            </div>
                        );
                    })
            }

            <h2><b>About the instructor</b></h2>
            <span><img class="ncdas2" src={img}></img> <p>
            {
                        Data.map( unitData => {
                        return (
                            <div>{unitData.about_instructor.html_content}
                            </div>
                        );
                    })
            }
                </p></span>


                <div class="card">
 
                <div class="container">
                {
                        Data.map( unitData => {
                        return (
                            <h2><b>{JSON.stringify(unitData.testimonial.text)}</b>
                            </h2>
                        );
                    })
            }
                </div>
                <span><img class="girl" src={girlimg}></img> {
                        Data.map( unitData => {
                        return (
                            <span>{unitData.testimonial.reviewer_name}{unitData.testimonial.reviewer_designation}</span>
                            
                        );
                    })
            }</span>
                </div>

                

           
            </div>
             
        );
}
export default About;
