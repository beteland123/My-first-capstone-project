const hamburgerMenu = document.querySelector('.menu-icon');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const mobileClose = document.querySelector('.mobile-menu-close');

hamburgerMenu.addEventListener('click', () => {
  // show the mobile menu
  document.querySelector('.mobile-menu').style.display = 'flex';
});

mobileClose.addEventListener('click', () => {
  // show the mobile menu
  document.querySelector('.mobile-menu').style.display = 'none';
});

// close menu on click mobile-nav-item
mobileNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});

  
  

  
const speakerObj=[
  {
    image:'img/timnit.jpeg',
    name:'Timnit Gebru',
    title:'computer scientist',
    background:' Timnit Gebru is an American computer scientist who works on algorithmic bias and data mining. She is an advocate for diversity in technology and co-founder of Black in AI, a community of Black researchers working in artificial intelligence' 

  },
  {
    image: 'img/bethelhem.webp',
    name: 'Betelhem Dessie',
    title: 'Software Developer and entrepreneur ',
    background: " Betelhem is a young technology education entrepreneur from Ethiopia. She is the founder and CEO of Anyone Can Code, which is in partnership with iCOG Labs, an Ethiopian research and development company with a focus on Artificial Intelligence. Through extracurricular programs, Betelhem and her colleagues teach students the basics of coding and robotics. "
  },
  {
    image: 'img/selam.jpeg',
    name: 'Selam Getachew',
    title: 'Software Engineering Manager',
    background: "Selam is responsible for leading the company's software development team and ensuring that the company's products are of the highest quality. With over a decade of experience in software engineering",
  },
  {
    image: 'img/redi.webp',
    name: 'Rediet Abebe',
    title: 'computer scientist',
    background: " Rediet Abebe is an Ethiopian computer scientist working in algorithms and artificial intelligence. She and Timnit Gebru founded the renowned global community Black in AI. Now Abebe continues research around data and social inequality, among other topics, at UC Berkeley.",
  },
  {
    image: 'img/speaker3.jpeg',
    name: 'Kurt Krumme',
    title: 'Software analyst',
    background: " Kurt Krumme is an award winning designer living and working in Toronto. He's spent most of the last two decades making things for clients ranging from small not-for-profits like Peace One Day to to Fortune 500 companies including Sony and FedEx. Lately he's focused on consulting for start-ups, helping them build cross-functional teams and translate their business strategies into effective products.",
  },
  {

    image: 'img/ryan.jpeg',
    name: 'Ryan Merkley',
    title: 'Full stack developer',
    background: "Ryan is a developer  who can build both the front end and the back end of a website.Having worked in multiple software development projects at Adobe and written a book about JavaScript programming. He has also developed his own online course material that explains JavaScript and related technologies in an easy to understand fashion. Ryahn is also the founder and engineering manager at Parallel Drive. ",
  },
  
]
const speaker_div=document.querySelector('.speaker')
for(let i=0;i<speakerObj.length;i++){
  const card = speakerObj[i];

  // Create the card container element
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  // Create the card image element
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");

  const img = document.createElement("img");
  img.src = card.image;
  img.alt = "image description";

  cardImage.appendChild(img);

  // Create the card text element
  const cardText = document.createElement("div");
  cardText.classList.add("card-about");

  // Create the card name element
  const cardName = document.createElement("div");
  cardName.classList.add("card-name");

  const name = document.createElement("h2");
  name.textContent = card.name;

  cardName.appendChild(name);

  // Create the card title element
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");

  const title = document.createElement("h3");
  title.textContent = card.title;

  cardTitle.appendChild(title);

  // Create the card description element
  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-description");

  const description = document.createElement("p");
  description.textContent = card.background;

  cardDescription.appendChild(description);

  // Append the elements to the card text element
  cardText.appendChild(cardName);
  cardText.appendChild(cardTitle);
  cardText.appendChild(cardDescription);

  // Append the card image and text elements to the card container element
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardText);

  // Append the card container element to the parent element
  speaker_div.appendChild(cardContainer);
}