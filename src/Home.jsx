import React, { useState } from 'react';
import Navbar from './Navbar';
import "./styles.css";
import minHour from './contents/Vector (2).png';
import live from './contents/live.png';
import ads from './contents/ADS.png';
import rect from './contents/Rectangle 2713.png';
import cylinder from './contents/Vector (3).png';
import tie from './contents/Vector (4).png';
import leftroll from './contents/Vector (5).png';
import rightroll from './contents/Vector (6).png';
import check from './contents/Vector (7).png';
import notcheck from './contents/Vector (8).png';


import { plane12, plane6, plane3, today, offerTime, disSubscriptionFee, subscriptionFee } from './constants.js';

export default function Home() {
    const [select, setselect] = useState('');
    const [totalFee, setTotalFee] = useState(0);

    const handleClick = (text) => {
        setselect(text);

        let planFee = 0;
        switch (text) {
            case 'plan12':
                planFee = plane12;
                break;
            case 'plan6':
                planFee = plane6;
                break;
            case 'plan3':
                planFee = plane3;
                break;
            default:
                break;
        }
        const discount = today <= offerTime ? subscriptionFee - disSubscriptionFee : subscriptionFee;
        const totalAmount = planFee + discount;
        setTotalFee(totalAmount);
    }
    return (
        <div className='container-fluid'>
            <Navbar></Navbar>
            <div className=' row BGcolor'>
                <div className=' col-6'>
                    <div>
                        <p className='access mt-4'>Access curated courses worth</p>
                        <p className='oneEight'>₹ 18,500 <span className='cutLine'>_______</span> at just <span className='ninenine'>₹ 99</span> per year!</p>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-4'>
                            <path d="M57.936 5.01614C57.232 5.01614 56.4641 5.07998 55.6958 5.07998H55.6319V2.32821C55.6319 1.36839 54.8641 0.600098 53.9038 0.600098C45.648 0.600098 37.5838 2.2001 29.9678 5.33621C22.3517 2.2001 14.2878 0.600098 6.03181 0.600098C5.07199 0.600098 4.3037 1.30412 4.3037 2.32821V5.14433H4.23986C3.472 5.08004 2.70409 5.0162 1.93586 5.0162C0.976041 5.0162 0.271973 5.78406 0.271973 6.74432V40.7923C0.271973 41.7521 0.975995 42.4562 1.93586 42.4562C7.37609 42.4562 12.752 43.0964 17.9359 44.3763C17.4881 45.7201 17.168 47.1281 17.168 48.6C17.168 55.6402 22.9278 61.4 29.968 61.4C37.0082 61.4 42.768 55.6402 42.768 48.6C42.768 47.1281 42.4479 45.7201 42.0001 44.3759C47.2484 43.096 52.5599 42.4557 58.0001 42.4557C58.96 42.4557 59.7283 41.7517 59.7283 40.7919L59.7278 6.74386C59.664 5.7836 58.8961 5.01574 57.9358 5.01574L57.936 5.01614ZM7.69599 3.99204C14.7362 4.18401 21.648 5.65593 28.304 8.34381V35.9918C26 36.3119 23.9522 37.2079 22.2241 38.5516C17.488 37.2717 12.6241 36.5034 7.76011 36.3757L7.75966 3.9917L7.69599 3.99204ZM29.968 58.3921C24.5921 58.3921 20.2399 54.0403 20.2399 48.6639C20.2399 43.2881 24.5921 38.8719 29.968 38.8719C35.3439 38.8719 39.6961 43.2237 39.6961 48.6C39.6961 53.9759 35.3439 58.3921 29.968 58.3921ZM52.24 36.376C47.3761 36.5042 42.5119 37.272 37.776 38.5519C36.0479 37.2077 33.9358 36.3117 31.6961 35.9922V8.34416C38.2881 5.65581 45.2001 4.18393 52.2401 3.99193L52.24 36.376Z" fill="white" />
                        </svg>
                        <span className='job_rev mx-4 mt-2'><span className='bluetext'>100+</span>Job relevant courses </span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-4'>
                            <path d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z" fill="white" />
                        </svg>
                        <img src={minHour} className='minHour'></img>
                        <span className='job_rev mx-4 mt-2'><span className='bluetext'>20,000+</span> Hours of content</span>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-4'>
                            <path d="M18.5518 1.43163C18.0491 0.945471 17.3754 0.676717 16.6763 0.682968C15.9772 0.689218 15.308 0.969574 14.8138 1.46377C14.3192 1.95841 14.0388 2.6272 14.033 3.32628C14.0268 4.02539 14.2955 4.69908 14.7812 5.20217L23.5625 13.9834H8.6665C6.54513 13.9834 4.51028 14.8263 3.00982 16.3267C1.50936 17.8267 0.666504 19.8616 0.666504 21.9834V51.3171C0.666504 53.439 1.50936 55.4734 3.00982 56.9738C4.51028 58.4738 6.54513 59.3171 8.6665 59.3171H51.3339C53.4553 59.3171 55.4902 58.4738 56.9906 56.9738C58.4906 55.4734 59.3339 53.439 59.3339 51.3171V21.9834C59.3339 19.8616 58.4906 17.8267 56.9906 16.3267C55.4902 14.8263 53.4553 13.9834 51.3339 13.9834H36.4379L45.2192 5.20217C45.7049 4.69905 45.9737 4.02537 45.9679 3.32628C45.9616 2.62717 45.6808 1.9584 45.1866 1.46377C44.692 0.969574 44.0232 0.689219 43.3241 0.682968C42.625 0.676718 41.9513 0.945471 41.4487 1.43163L30.0007 12.8796L18.5518 1.43163ZM5.99977 21.9836C5.99977 21.2765 6.28057 20.5979 6.78102 20.0979C7.28102 19.5979 7.95919 19.3171 8.66628 19.3171H51.3337C52.0408 19.3171 52.719 19.5979 53.219 20.0979C53.719 20.5979 54.0002 21.2764 54.0002 21.9836V51.3173C54.0002 52.0245 53.719 52.7026 53.219 53.2026C52.719 53.703 52.0408 53.9838 51.3337 53.9838H8.66628C7.95913 53.9838 7.28102 53.703 6.78102 53.2026C6.28057 52.7026 5.99977 52.0244 5.99977 51.3173V21.9836Z" fill="white" />
                        </svg>
                        <img src={live} className='live'></img>
                        <span className='job_rev mx-4 mt-4'><span className='bluetext'>Exclusive</span> webinar access</span>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <svg width="62" height="27" viewBox="0 0 62 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-4'>
                            <path d="M61.9742 8.95209C61.9742 10.0061 61.2778 10.8628 60.252 11.0887L57.052 11.7851V22.1757C58.4828 22.7217 59.5086 24.5003 59.518 26.665L59.2921 26.4391C58.7649 25.9685 58.097 25.7052 57.4001 25.7052C57.2684 25.7052 57.1367 25.7145 57.0238 25.7333L52.713 26.298C52.8353 24.3029 53.8237 22.6837 55.1693 22.1757V12.1895L31.9875 17.2061C31.6674 17.2816 31.3286 17.3097 30.9992 17.3097C30.6603 17.3097 30.3308 17.2816 30.0201 17.2061L1.73785 11.0883C0.712396 10.8628 0.0253906 10.0061 0.0253906 8.95218C0.0253906 7.90754 0.712442 7.05081 1.7383 6.82498L30.0206 0.697776C30.6509 0.566085 31.3384 0.556702 31.9876 0.697776L60.2504 6.82498C61.2768 7.05132 61.9732 7.90757 61.9732 8.95218L61.9742 8.95209Z" fill="white" />
                        </svg>
                        <img src={cylinder} className='cylinder'></img>
                        <img src={tie} className='tie'></img>
                        <img src={leftroll} className='leftroll'></img>
                        <img src={rightroll} className='rightroll'></img>
                        <span className='job_rev mx-4'>Scholarship worth <span className='bluetext'>₹94,500</span> </span>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-4'>
                            <path d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z" fill="white" />
                        </svg>
                        <img src={ads} className='ads'></img>
                        <img src={rect} className='rect'></img>
                        <span className='job_rev mx-3 mt-3'><span className='bluetext'>Ad Free</span> learning experience </span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------------------- */}
                <div className='col-5 mt-2 pb-3'>
                    <div className=' bg-light'>
                        <div className=' mx-5 d-flex justify-content-around'>
                            <div>
                                <div className='bluecircle pt-2 mx-4 mt-4'>1</div><span>Sign Up</span>
                            </div>
                            <div>
                                <div className='bluecircle pt-2 mx-4 mt-4'>2</div><div>Subscribe</div>
                            </div>
                        </div>
                        <div className='subplan mt-3 mb-2'>
                            Select your subcription plan
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='row border1 col-8'>
                                <div className='col-6 text-start'>
                                    <svg width="20" height="20" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.63541 18.3037L2.63559 18.3041C3.28716 19.815 4.16685 21.1194 5.27378 22.2263C6.3807 23.3332 7.68505 24.2129 9.19599 24.8645L9.19641 24.8647C10.688 25.5087 12.2858 25.8334 14 25.8334C15.7142 25.8334 17.312 25.5087 18.8036 24.8647L18.804 24.8645C20.315 24.2129 21.6193 23.3332 22.7262 22.2263C23.8332 21.1194 24.7128 19.815 25.3644 18.3041L25.3646 18.3037C26.0086 16.8121 26.3333 15.2143 26.3333 13.5001C26.3333 11.7859 26.0086 10.1881 25.3646 8.69649L25.3644 8.69607C24.7128 7.18513 23.8332 5.88078 22.7262 4.77386C21.6193 3.66694 20.315 2.78679 18.804 2.13434L2.63541 18.3037ZM2.63541 18.3037C1.99138 16.8121 1.66667 15.2143 1.66667 13.5001C1.66667 11.7859 1.99138 10.1881 2.63541 8.69649L2.63559 8.69606M2.63541 18.3037L2.63559 8.69606M2.63559 8.69606C3.28716 7.18513 4.16685 5.88078 5.27378 4.77386M2.63559 8.69606L5.27378 4.77386M5.27378 4.77386C6.3808 3.66684 7.68529 2.78663 9.19641 2.13416M5.27378 4.77386L9.19641 2.13416M9.19641 2.13416C10.688 1.49102 12.2858 1.16675 14 1.16675M9.19641 2.13416L14 1.16675M14 1.16675C15.7142 1.16675 17.312 1.49102 18.8036 2.13416L14 1.16675Z" stroke="#BEBEBE" stroke-width="2" />
                                    </svg>
                                    <span className='sub'>
                                        12 Months Subscription
                                    </span>
                                </div>
                                <div className='col-6 text-end '>
                                    <span className='total'>Total <span className='num'>₹99</span></span><br></br>
                                    <span className='beloTotal'>₹8 <span className='mo'>/mo</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-2' >
                            <div className='row border1 col-8 sub2' onClick={() => handleClick("plan12")} style={select === 'plan12' ? { backgroundColor: '#47BA68' } : { backgroundColor: 'white' }}>
                                <div className='col-8 text-start '>
                                    <img src={select === 'plan12' ? check : notcheck} className='check'></img>
                                    <span className='mx-4'>12 Months Subscription</span>
                                </div>
                                <div className='col-4 text-end '>
                                    <span className='total'>Total <span className='num'>₹179</span></span><br></br>
                                    <span className='beloTotal'>₹15 <span className='mo'>/mo</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='row border1 col-8 sub2' onClick={() => handleClick("plan6")} style={select === 'plan6' ? { backgroundColor: '#47BA68' } : { backgroundColor: 'white' }}>
                                <div className='col-8 text-start'>
                                    <img src={select === 'plan6' ? check : notcheck} className='check'></img>
                                    <span className='mx-4'> 6 Months Subscription</span>
                                </div>
                                <div className='col-4 text-end '>
                                    <span className='total'>Total <span className='num'>₹149</span></span><br></br>
                                    <span className='beloTotal'>₹25 <span className='mo'>/mo</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='row border1 col-8 sub2' onClick={() => handleClick("plan3")} style={select === 'plan3' ? { backgroundColor: '#47BA68' } : { backgroundColor: 'white' }}>
                                <div className='col-8 text-start '>
                                    <img src={select === 'plan3' ? check : notcheck} className='check'></img>
                                    <span className='mx-4'>3 Months Subscription</span>
                                </div>
                                <div className='col-4 text-end '>
                                    <span className='total'>Total <span className='num'>₹99</span></span><br></br>
                                    <span className='beloTotal'>₹33 <span className='mo'>/mo</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='line mt-4 mb-2'></div>
                        <div className='d-flex justify-content-around'><span>Subscription Fee</span><span className='num'>₹18,500</span></div>
                        <div className='offer  col-8 mt-3 '>
                            <div className='d-flex justify-content-between Limited'><span>Limited time offer</span><span className='num'>- ₹18,401</span></div>
                            <div className='d-flex mt-2'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99998 5V11L14.2 14.1L15 12.9L10.5 10.2V5H8.99998ZM18 10V16H20V10H18ZM18 18V20H20V18H18ZM16 18C14.3 19.3 12.3 20 9.99998 20C4.49998 20 -1.52588e-05 15.5 -1.52588e-05 10C-1.52588e-05 4.5 4.49998 0 9.99998 0C14.8 0 18.9 3.4 19.8 8H17.7C16.8 4.6 13.7 2 9.99998 2C5.59998 2 1.99998 5.6 1.99998 10C1.99998 14.4 5.59998 18 9.99998 18C12.4 18 14.5 16.9 16 15.3V18Z" fill="#DE4313" />
                                </svg>
                                <span className='mx-2 valid'>Offer valid till 25th March 2023 </span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3 sub2'><span>Total (Incl. of 18% GST)</span><span className='onefournine'>₹{totalFee}</span></div>

                        <div className='mt-3 pb-3'>
                            <button className='cancle mx-2'>CANCLE</button>
                            <button className='proceed'>PROCEED TO PAY</button>
                        </div>

                        <div className='text-start mx-5 px-4 pb-3'>
                            <svg width="120" height="43" viewBox="0 0 120 43" fill="none" className='mx-5'>
                                <rect width="120" height="42.6879" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_1_1101" transform="matrix(0.00833333 0 0 0.0234259 0 -0.003656)" />
                                    </pattern>
                                    <image id="image0_1_1101" width="120" height="43" href="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
