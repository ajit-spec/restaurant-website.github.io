let a = document.querySelector('.desktop-header');
let b = document.querySelector('.mobile-header');
let moveuparrow = document.querySelector('.moveuparrow');
let sidebar = document.querySelector('.sidebar');

function stickyheader() {
  if (window.scrollY >= 54) {
    a.style.position = 'fixed';
    a.firstElementChild.style.opacity = 0.85;
    b.style.position = 'fixed';
    b.firstElementChild.style.opacity = 0.85;
  } else {
    a.style.position = 'relative';
    a.firstElementChild.style.opacity = 0.6;
    b.style.position = 'relative';
    b.firstElementChild.style.opacity = 0.6;
  }
}

stickyheader();

document.addEventListener('scroll', ev => {

  stickyheader();

  if (window.pageYOffset > 100) {
    moveuparrow.style.opacity = 1;
  } else {
    moveuparrow.style.opacity = 0;
  }

});

let c = document.querySelector('body');
c.addEventListener('click', ev => {
  if (ev.target.classList.contains('fa-bars')) {
    sidebar.style.width = '100%';
    document.querySelector('body').style.overflow = 'hidden';
  } else if (ev.target.classList.contains('fa-times')) {
    sidebar.style.width = 0;
    document.querySelector('body').style.overflow = 'auto';
  }
});

moveuparrow.addEventListener('click', evt => {
  window.scrollTo(0, 0);
});

let d = document.querySelector('.sidebar').
    querySelector('.nav-links');
d.addEventListener('click', evt => {
  if (evt.target.tagName === 'A') {
    sidebar.style.width = 0;
    document.querySelector('body').style.overflow = 'auto';
  }
});

let specials = [
  {
    name: 'burger',
    title: 'Architecto ut aperiam autem id',
    quote: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    content: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
    image: 'image1',
  },
  {
    name: 'samosa',
    title: 'Et blanditiis nemo veritatis excepturi',
    quote: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
    content: 'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
    image: 'image2',
  },
  {
    name: 'pizza',
    title: 'Impedit facilis occaecati odio neque aperiam sit',
    quote: 'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut',
    content: 'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
    image: 'image3',
  },
  {
    name: 'pani puri',
    title: 'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
    quote: 'Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus',
    content: 'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore',
    image: 'image4',
  },
  {
    name: 'chaat',
    title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
    quote: 'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.',
    content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
    image: 'image5',
  },
];

function renderspecials(data) {

  let snippet = `
                
                <div class="info-wrapper">

                    <h3>${data.title}</h3>
                    <div class="quote">
                        <p>${data.quote}</p>
                    </div>
                    <p>${data.content}</p>

                </div>

                <div class="image-wrapper" style="background-image: url(assets/images/special-images/${data.image}.png)"></div>
                
                
                `;

  document.getElementById('a5').
      querySelector('.bottom-section').
      querySelector('.right-section').innerHTML = snippet;

}

let e = document.getElementById('a5').
    querySelector('.bottom-section').
    querySelector('.left-section');

e.addEventListener('click', evt => {
  if (evt.target.tagName === 'P') {

    Array.from(e.children).forEach(value => {
      if (value.classList.contains('active')) {
        value.classList.remove('active');
      }
    });

    evt.target.classList.add('active');

    let data = specials.find((value, index) => value.name.toLowerCase() ===
        evt.target.textContent.toLowerCase());

    renderspecials(data);
  }
});

let restaurantphotos = [
  'image1',
  'image2',
  'image3',
  'image4',
  'image5',
  'image6',
  'image7',
  'image8',
];
restaurantphotos.forEach(value => {

  let snippet = `
                
                <div class="box">
                    <div class="image-wrapper" style="background-image: url(assets/images/restaurant-images/${value}.jpg)"></div>
                </div>
                
                `;

  document.getElementById('a9').
      querySelector('.bottom-section').innerHTML += snippet;

});

let chefs = [
  {
    name: 'walter white',
    role: 'master chef',
    image: 'image1',
  },
  {
    name: 'sarah johnson',
    role: 'cook',
    image: 'image2',
  },
  {
    name: 'william anderson',
    role: 'assistant',
    image: 'image3',
  },
];
chefs.forEach((value, index) => {

  let snippet = `
                
                <div class="box">
                <div class="image-wrapper" style="background-image: url(assets/images/chefs-images/${value.image}.jpg)"></div>
                <div class="info-wrapper">

                    <h3>${value.name}</h3>
                    <p>${value.role}</p>
                    <div class="icon-wrapper">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>

                </div>
            </div>
                
                
                `;

  document.getElementById('a10').
      querySelector('.bottom-section').innerHTML += snippet;

});

let eventIndex = 0;

function showevents() {

  let slides = Array.from(document.getElementById('a6').
      querySelector('.bottom-section').
      querySelector('.wrapper').
      querySelectorAll('.container > .box'));

  let dots = Array.from(document.getElementById('a6').
      querySelector('.bottom-section').
      querySelector('.dotted-wrapper').
      querySelectorAll('.dot-circle'));

  slides.forEach((value, index) => {
    value.style.display = 'none';
  });

  // check for boundary
  if (eventIndex > slides.length - 1) {
    eventIndex = 0;
  }

  dots.forEach((value, index) => {
    value.classList.remove('active');
  });

  if (window.innerWidth >= 2560) {
    if (eventIndex > slides.length - 2) {
      slides[eventIndex].style.display = 'flex';
      slides[0].style.display = 'flex';
    } else {
      slides[eventIndex].style.display = 'flex';
      slides[eventIndex + 1].style.display = 'flex';
    }
  } else {
    slides[eventIndex].style.display = 'flex';
  }

  dots[eventIndex].classList.add('active');

  eventIndex++;

  setTimeout(showevents, 4000);

}

showevents();

let testimonialindex = 0;

function showtestimonials() {

  let slides = Array.from(document.getElementById('a8').
      querySelector('.wrapper').querySelectorAll('.bottom-section > .box'));

  let dots = Array.from(document.getElementById('a8').
      querySelector('.wrapper').querySelector('.dotted-wrapper').
      querySelectorAll('.dot-circle'));

  slides.forEach((value, index) => {
    value.style.display = 'none';
  });

  dots.forEach((value, index) => {
    value.classList.remove('active');
  });

  // check for boundary
  if (testimonialindex > slides.length - 1) {
    testimonialindex = 0;
  }

  if (window.innerWidth >= 1024) {
    if (testimonialindex > slides.length - 3) {

      if (testimonialindex > slides.length - 2) {
        slides[testimonialindex].style.display = 'flex';
        slides[0].style.display = 'flex';
        slides[1].style.display = 'flex';
      } else {
        slides[testimonialindex].style.display = 'flex';
        slides[testimonialindex + 1].style.display = 'flex';
        slides[0].style.display = 'flex';
      }

    } else {
      slides[testimonialindex].style.display = 'flex';
      slides[testimonialindex + 1].style.display = 'flex';
      slides[testimonialindex + 2].style.display = 'flex';
    }
  } else if (window.innerWidth >= 768) {
    if (testimonialindex > slides.length - 2) {
      slides[testimonialindex].style.display = 'flex';
      slides[0].style.display = 'flex';
    } else {
      slides[testimonialindex].style.display = 'flex';
      slides[testimonialindex + 1].style.display = 'flex';
    }
  } else {
    slides[testimonialindex].style.display = 'flex';
  }

  dots[testimonialindex].classList.add('active');

  testimonialindex++;

  setTimeout(showtestimonials, 4000);

}

showtestimonials();

let menu = [
  {
    category: 'starters',
    name: 'Lobster Bisque',
    info: 'Lorem, deren, trataro, filede, nerada',
    price: 5.95,
    image: 'image1',
  },
  {
    category: 'starters',
    name: 'crab cake',
    info: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce',
    price: 13.5,
    image: 'image3',
  },
  {
    category: 'starters',
    name: 'mozarella stick',
    info: 'Lorem, deren, trataro, filede, nerada',
    price: 12.22,
    image: 'image6',
  },
  {
    category: 'salad',
    name: 'Caesar Selections',
    info: 'Lorem, deren, trataro, filede, nerada',
    price: 8.95,
    image: 'image4',
  },
  {
    category: 'salad',
    name: 'Greek Salad',
    info: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives',
    price: 4.3,
    image: 'image7',
  },
  {
    category: 'salad',
    name: 'Spinach Salad',
    info: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
    price: 7.1,
    image: 'image8',
  },
  {
    category: 'specialty',
    name: 'Bread Barrel',
    info: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
    price: 4.88,
    image: 'image2',
  },
  {
    category: 'specialty',
    name: 'Tuscan Grilled',
    info: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
    price: 17.2,
    image: 'image5',
  },
  {
    category: 'specialty',
    name: 'Lobster Roll',
    info: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
    price: 15.4,
    image: 'image9',
  },

];

menu.forEach((value, index) => {
  let snippet = `
                
                <div class="box">

                <div class="image-wrapper" style="background-image: url(assets/images/menu-images/${value.image}.jpg)"></div>

                <div class="info-wrapper">

                    <div class="title">

                        <h3>${value.name}</h3>
                        <div class="dotted-line"></div>
                        <p>&#36;${value.price}</p>

                    </div>

                    <div class="content">
                        <p>${value.info}</p>
                    </div>

                </div>

            </div>
                
                `;

  document.getElementById('a4').
      querySelector('.bottom-section').innerHTML += snippet;
});

let f = document.getElementById('a4').querySelector('.category-wrapper');
f.addEventListener('click', evt => {

  if (evt.target.tagName === 'P') {

    Array.from(f.children).forEach(value => {
      value.classList.remove('active');
    });
    evt.target.classList.add('active');

    let data = menu.filter((value, index) => value.category.toLowerCase() ===
        evt.target.textContent.toLowerCase());
    if (evt.target.textContent.toLowerCase() === 'all') {
      data = menu;
    }
    rendermenu(data);

  }

});

function rendermenu(data) {

  let parent = document.getElementById('a4').querySelector('.bottom-section');
  parent.innerHTML = '';
  data.forEach(value => {

    let snippet = `
                
                <div class="box">

                <div class="image-wrapper" style="background-image: url(assets/images/menu-images/${value.image}.jpg)"></div>

                <div class="info-wrapper">

                    <div class="title">

                        <h3>${value.name}</h3>
                        <div class="dotted-line"></div>
                        <p>&#36;${value.price}</p>

                    </div>

                    <div class="content">
                        <p>${value.info}</p>
                    </div>

                </div>

            </div>
                
                `;

    parent.innerHTML += snippet;

  });

}



