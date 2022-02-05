const nextButton = document.querySelector('.button-next');
const previousButton = document.querySelector('.button-previous');
const image = document.querySelector('.slider__image-container');
const content = document.querySelector('.slider__container-content');

const users = [
  {
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    feedback:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    image: '/images/image-tanya.jpg',
  },
  {
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    feedback:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    image: '/images/image-john.jpg',
  },
];

let slide = 0;

const navigation = () => {
  if (slide > users.length - 1) {
    slide = 0;
  }
  image.innerHTML = `
    <img class="slider__image" src="${users[slide].image}"/>
  `;

  content.innerHTML = `
    <blockquote>
        <p class="slider__content">
        ${users[slide].feedback}</p>
    </blockquote>
    <figcaption class="slider__name-role">
        <span class="slider__name">${users[slide].name}</span>
        <cite class="slider__role">${users[slide].role}</cite>
    </figcaption>
    `;
  slide++;
};
navigation();

previousButton.addEventListener('click', navigation);
nextButton.addEventListener('click', navigation);
