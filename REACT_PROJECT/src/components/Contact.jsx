import React from "react";
import '../asserts/Contact.css';

function Contact() {
    const handleSubmit = () => {

        alert('QUERIES HAS BEEN SUBMITTED');
        window.location.href = '/Home';
    };

    return (
        <div>
            <h1 className="conus"><center><b>CONTACT US</b></center></h1>
            <p></p>

            <div className="containerc">
                <div className="rowc">
                    <div className="columnc">
                        <form className="con" action="/action_page.php">
                            <label><p style={{ color: 'rgb(255, 9, 91)' }}><b>NAME</b></p></label>
                            <input className="incont" type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label><p style={{ color: 'rgb(255, 9, 91)' }}><b>QUERIES IN</b></p></label>
                            <select id="country" name="country">
                                <option value="accounting">Accounting</option>
                                <option value="website">Website</option>
                                <option value="others">Others</option>
                            </select>

                            <label><p style={{ color: 'rgb(255, 9, 91)' }}><b>COUNTRY</b></p></label>
                            <select id="country" name="country">
                                <option value="india">India</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="australia">Australia</option>
                                <option value="north-korea">North Korea</option>
                                <option value="japan">Japan</option>
                                <option value="vietnam">Vietnam</option>
                            </select>

                            <label><p style={{ color: 'rgb(255, 9, 91)' }}><b>FEEDBACK</b></p></label>
                            <textarea id="subject" name="subject" placeholder="Feedback about us ...." style={{ height: '170px' }}></textarea>

                            <button className="but" type="button" onClick={handleSubmit}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

