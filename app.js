// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

// About Section



const DOMReady = (callback = () => {}, element = document, listener = 'addEventListener') => {
  return element[listener] ? element[listener]('DOMContentLoaded', callback) : window.attachEvent('onload', callback);
};

const ProjectAPI = (() => {
  const hasClass = (el, className) => {
    if (el === null) {
      return;
    }

    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  };

  const addClass = (el, className) => {
    if (el === null) {
      return;
    }

    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className;
    }
  };

  const removeClass = (el, className) => {
    if (el === null) {
      return;
    }

    if (el.classList) {
      el.classList.remove(className);
    } else if (hasClass(el, className)) {
      const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  };

  return {
    hasClass,
    addClass,
    removeClass
  };
})();

const readyFunction = () => {
  const KEY_UP = 38;
  const KEY_DOWN = 40;

  const scrollingClass = 'js-scrolling';
  const scrollingActiveClass = `${scrollingClass}--active`;
  const scrollingInactiveClass = `${scrollingClass}--inactive`;
  const scrollingTime = 1350;
  let scrollingIsActive = false;
  let currentPage = 1;
  const countOfPages = document.querySelectorAll(`.${scrollingClass}__page`).length;
  const prefixPage = `.${scrollingClass}__page-`;

  const switchPages = () => {
    const getPageDomEl = (page = currentPage) => {
      return document.querySelector(prefixPage + page);
    };

    scrollingIsActive = true;

    ProjectAPI.removeClass(getPageDomEl(), scrollingInactiveClass);
    ProjectAPI.addClass(getPageDomEl(), scrollingActiveClass);
    ProjectAPI.addClass(getPageDomEl(currentPage - 1), scrollingInactiveClass);
    ProjectAPI.removeClass(getPageDomEl(currentPage + 1), scrollingActiveClass);

    setTimeout(() => scrollingIsActive = false, scrollingTime);
  };

  const scrollingUp = () => {
    if (currentPage === 1) {
      return;
    }

    currentPage--;
    switchPages();
  };

  const scrollingDown = () => {
    if (currentPage === countOfPages) {
      return;
    }

    currentPage++;
    switchPages();
  };

  const mouseWheelEvent = (e) => {
    if (scrollingIsActive) {
      return;
    }

    if (e.wheelDelta > 0 || e.detail < 0) {
      scrollingUp();
    } else if (e.wheelDelta < 0 || e.detail > 0) {
      scrollingDown();
    }
  };

  const keyDownEvent = (e) => {
    if (scrollingIsActive) {
      return;
    }

    const keyCode = e.keyCode || e.which;

    if (keyCode === KEY_UP) {
      scrollingUp();
    } else if (keyCode === KEY_DOWN) {
      scrollingDown();
    }
  };

  const init = (() => {
    document.addEventListener('mousewheel', mouseWheelEvent, false);
    document.addEventListener('DOMMouseScroll', mouseWheelEvent

, false);
    document.addEventListener('keydown', keyDownEvent, false);
  })();
};

DOMReady(readyFunction);



// menu section

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')

//   load items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
 displayMenuButtons();
});




function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
      // console.log(item)

      return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <div>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </div>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
const categories = menu.reduce(function(values,item){
  if(!values.includes(item.category)){
    values.push(item.category);
  }
  return values
},['all']);
const categoryBtns = categories.map(function(category){
  return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
})
.join('')
container.innerHTML = categoryBtns
const filterBtns = container.querySelectorAll('.filter-btn');

// filter items
filterBtns.forEach(function(btn){
btn.addEventListener('click',function(e){
  const category = e.currentTarget.dataset.id;
  const menuCategory = menu.filter(function(menuItem){
      // console.log(menuItem.category)
      if(menuItem.category === category){
      return menuItem
      }
  });
  // console.log(menuCategory)
  if(category === 'all'){
      displayMenuItems(menu)
  } else {
      displayMenuItems(menuCategory)
  }
});
});
}
