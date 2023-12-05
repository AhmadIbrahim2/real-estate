import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { IoIosVideocam } from "react-icons/io";

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="flexCenter innerWidth paddings c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>
                    We always ready to help by providijng the best services for you. We beleive a good blace to live can
                    make your life better
                </span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+970 594 650 868</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+970 594 650 868</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>

                    </div>

                    <div className="flexStart row">

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <IoIosVideocam size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+970 594 650 868</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Video Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+970 594 650 868</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="flexEnd c-right">
                <div className="image-container">
                    <img src="/assets/images/contact.jpg" alt="contact" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact