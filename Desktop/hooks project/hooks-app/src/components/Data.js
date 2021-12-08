import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import Iframe from 'react-iframe'
const data = {
    cardData:[
        {
            id:Math.random(),
            img: img1,
            title: 'Batman Begins',
            desc: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
            link:<Iframe width="560" height="315" src="https://www.youtube.com/embed/neY2xVmOfUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>,
            rate: '7.4'
        },
        {
            id:Math.random(),
            img:img2,
            title: 'Batman and Robin',
            desc: ' Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.',
            link:<Iframe width="560" height="315" src="https://www.youtube.com/embed/4RBXypX4qWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>,
            rate: '8'
        },
        {
            id:Math.random(),
            img:img3,
            title: 'Inception',
            desc: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            link:<Iframe width="560" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>,
            rate: '9'
        },
        {
            id:Math.random(),
            img:img4,
            title: 'Fury',
            desc: ' A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.',
            link:<Iframe width="560" height="315" src="https://www.youtube.com/embed/ungyhJRXIzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>,
            rate: '8.2'
        }
    ]

}
export default data;