
function getRandomValue(min:number,max:number) {
    return Math.floor(Math.random()* (max-min +1))+min;
}

export const destinationItems = [
    {
        id:"1",
        image:"/images/maldives.jpg",
        title:"Maldives",
        rating:getRandomValue(1,5),
        period:"2 Days 1 Night",
        price:getRandomValue(50,1000),

    },
    {
        id:"2",
        image:"/images/huwaii.jpeg",
        title:"Hawaii",
        rating:getRandomValue(1,5),
        period:"4 Days 3 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"3",
        image:"/images/swizerland.jpg",
        title:"Switzerland",
        rating:getRandomValue(1,5),
        period:"3 Days 2 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"4",
        image:"/images/newyork.jpg",
        title:"New York",
        rating:getRandomValue(1,5),
        period:"5 Days 4 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"5",
        image:"/images/bora.jpg",
        title:"Bora Bora",
        rating:getRandomValue(1,5),
        period:"6 Days 5 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"6",
        image:"/images/dubai.jpg",
        title:"Dubai",
        rating:getRandomValue(1,5),
        period:"3 Days 2 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"7",
        image:"/images/amazon.png",
        title:"Amazon Rainforest",
        rating:getRandomValue(1,5),
        period:"7 Days 6 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"8",
        image:"/images/tuscany.jpg",
        title:"Tuscany",
        rating:getRandomValue(1,5),
        period:"4 Days 3 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"9",
        image:"/images/alaska.jpg",
        title:"Alaska",
        rating:getRandomValue(1,5),
        period:"5 Days 4 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"10",
        image:"/images/rome.jpg",
        title:"Rome",
        rating:getRandomValue(1,5),
        period:"5 Days 4 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"11",
        image:"/images/phuket.jpg",
        title:"Phuket",
        rating:getRandomValue(1,5),
        period:"4 Days 3 Nights",
        price:getRandomValue(50,1000),

    },
    {
        id:"12",
        image:"/images/lakethoe.jpg",
        title:"Lake Tahoe",
        rating:getRandomValue(1,5),
        period:"3 Days 2 Nights",
        price:getRandomValue(50,1000),

    },
]

const adjectives = ["Enchanting","Modern","Quaint","Cozy"];
const nouns = ["Lodge","Haven","Sanctuary","Retreat"];

function generateRandomTitle() {
    const randomAdjective = 
    adjectives[Math.floor(Math.random()*adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random()*nouns.length)]
    return `${randomAdjective} ${randomNoun}`;
}

export const hotels = [
    {
        id:"1",
        image:"/images/1h.jpg",
        title:generateRandomTitle(),
        beds:"King Beds",
        capacity:getRandomValue(1,10),
        rating:getRandomValue(1,5),
        price:getRandomValue(50,1000)
    },  {
        id:"2",
        image:"/images/2h.jpg",
        title:generateRandomTitle(),
        beds:"King Beds",
        capacity:getRandomValue(1,10),
        rating:getRandomValue(1,5),
        price:getRandomValue(50,1000)
    },
    
    {
        id:"3",
        image:"/images/3h.jpg",
        title:generateRandomTitle(),
        beds:"Kings Beds",
        capacity:getRandomValue(1,10),
        rating:getRandomValue(1,5),
        price:getRandomValue(50,1000)
    },  

    {
        id:"4",
        image:"/images/5h.jpg",
        title:generateRandomTitle(),
        beds:"Kings Beds",
        capacity:getRandomValue(1,10),
        rating:getRandomValue(1,5),
        price:getRandomValue(50,1000)
    },  
    {
        id:"5",
        image:"/images/4h.jpg",
        title:generateRandomTitle(),
        beds:"Kings Beds",
        capacity:getRandomValue(1,10),
        rating:getRandomValue(1,5),
        price:getRandomValue(50,1000)
    },  

]
export const testmonials = [
    {
        name:"John Andezson",
        rating:5,
        description:"Exceptional servical the team want above and beyond to meet my expectations.I'm impressed with the attention to detail and prompt communication highly recomend.",
        country:"United States",
        image:"/images/c1.png",
    },
    {
        name:"Emir Jhonia",
        rating:4,
        description:"Great experience overall.The product quality is good.and the delivery was on time.A minor riccup in communication.but the team quickly resolve it .will consider for future purchases.",
        country:"Canada",
        image:"/images/c3.jpg",
    },
    {
        name:"Albert Ramirez",
        rating:5,
        description:"Outstanding customer service! The team was incredibly helpful and responsive.YThey addressed all my concern making the entire process smooth  very setisfied with the outcome.",
        country:"Australia",
        image:"/images/c2.png",
    }
]