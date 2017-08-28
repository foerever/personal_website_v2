import icesat from '../images/icesat.jpg'
import parkit from '../images/parkit.png'
import sensorfield from '../images/sensorfield.png'

const showcaseData = [{
    title: 'CSR/NASA',
    image: icesat,
    description: 'Internship at the UT Center for Space Research in conjunction with a NASA grant to create code for graphical analysis of speculative reflection and satellite calibration. Did computational analysis of 2 trillion points of high-rate airborne laser altimetry data from ICESat 1 Satellite',
    link: 'https://www.csr.utexas.edu/',
    video: true,
    media: "https://www.youtube.com/embed/WLuKhVef9gA?ecver=2"
  },
{
    title: 'ParkIT',
    image: parkit,
    description: 'Research and development for ParkIT computer vision, neural net, and machine learning technology. More specifically, tested various approaches to the machine learning architecture for unique data sets and designed code for more versatile use case.',
    link: 'https://parkit.io/#/',
    video: false,
  },
{
    title: 'Sensorfield',
    image: sensorfield,
    description: 'Full-stack web development to process and display data on Sensorfield website for wireless sensor systems used in the oil industry.',
    link: 'http://sensorfield.com/',
    video: true,
    media: "https://www.youtube.com/embed/cE1F2T3RKR4?ecver=2"
  }
]
export default showcaseData