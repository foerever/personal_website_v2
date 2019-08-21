import icesat from '../images/icesat.jpg'
import parkit from '../images/parkit.png'
import sensorfield from '../images/sensorfield.png'
import united from '../images/united_airlines.jpg'
import meraki from '../images/cisco_meraki.jpg'

const showcaseData = [
  {
    title: "Cisco Meraki",
    image: meraki,
    description: 'Worked on performance bottlenecks in Meraki’s cloud networking platform, decreased page load time on one of the most frequented pages for largest customers by 54% amongst other improvements. Designed and built a high performance, non-blocking client side caching system optimized for large payloads. Added new API features such as a RESTful endpoint for top down deletion of organizations, response code logging for api requests, and filtering api requests by specified parameters (Ruby | Ruby on Rails). Authored roadmap of mid and long term solutions for page performance issues with extensive documentation and analysis, presented to senior leadership and used in quarterly planning.',
    link: "https://meraki.cisco.com/",
    video: true,
    media: "https://www.youtube.com/embed/AWbdaByhZo0"
  },
  {
    title: 'United Airlines',
    image: united,
    description: 'Developed a general messaging feature and in-flight message parser that automatically logs requests such as food orders made through messaging the flight crew in the United Android App. Designed and created an Android library to accept and process payments in the United Android App. Implemented a data tracking model for booking flights in the United Android App that sends user actions, booking selections, and error logs to a database for business and technical analysis.',
    link: 'https://www.united.com/',
    video: true,
    media: "https://www.youtube.com/embed/_swpzNFjH04"
  },
  {
    title: 'Sensorfield',
    image: sensorfield,
    description: 'Developed the front and back-end for graphical display, analysis, and manipulation of data from Sensorfield’s wireless sensor systems to allow users to live monitor their oil wells as well as to predict potential issues. Built React/Redux based live updating sensor modules, user data based navigation menu, home page, main menu, and login (Javascript/ES6, mySQL | Node.js, ReactJS, Bootstrap, Express).',
    link: 'http://sensorfield.com/',
    video: true,
    media: "https://www.youtube.com/embed/cE1F2T3RKR4?ecver=2"
  },
  {
    title: 'ParkIT',
    image: parkit,
    description: 'Designed and implemented an iterative improvement algorithm to increase accuracy of neural network architecture for unique data sets by optimizing parameters, such as the adam learning rate. Tested various approaches with convolutional neural net architecture for ParkIT computer vision technology.',
    link: 'https://parkit.io/#/',
    video: false,
  },
  {
    title: 'CSR (NASA Grant)',
    image: icesat,
    description: 'Internship at the UT Center for Space Research in conjunction with NASA Grant. Determined the orbital maneuvers that led to major equipment damage and errors through computational analysis of 2 trillion points of high-rate airborne laser altimetry data from NASA’s ICESat 1 Satellite. Designed and wrote code for graphical analysis of speculative reflection and satellite calibration.',
    link: 'https://www.csr.utexas.edu/',
    video: true,
    media: "https://www.youtube.com/embed/WLuKhVef9gA?ecver=2"
  }
]
export default showcaseData