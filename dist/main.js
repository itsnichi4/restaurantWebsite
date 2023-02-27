function pageLoadHome() {
  // create elements
  const container = document.createElement("div");
  const smallerContainer = document.createElement("div");
  const threeContainers = document.createElement("div");
  const titleContainer = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const titleText = document.createElement("p");
  const container1 = document.createElement("div");
  const container2 = document.createElement("div");
  const container3 = document.createElement("div");
  const textContainer1 = document.createElement("div");
  const textContent1 = document.createElement("p");
  const textAuthorContainer1 = document.createElement("div");
  const textTitleContainer2 = document.createElement("div");
  const restaurantHours = document.createElement("div");
  const hoursTitleContainer = document.createElement("div");

  const hoursTitle = document.createElement("p");
  const daysOfWeek = document.createElement("ul");
  const monday = document.createElement("li");
  const tuesday = document.createElement("li");
  const wednesday = document.createElement("li");
  const thursday = document.createElement("li");
  const friday = document.createElement("li");
  const saturday = document.createElement("li");
  const sunday = document.createElement("li");
  const container3Adress = document.createElement("div");
  const container3Location = document.createElement("div");
  const container3P = document.createElement("div");
  const container3LocationText = document.createElement("p");
  const container3PText = document.createElement("p");

  img1.src = "salad.png";
  img2.src = "vegetable.png";

  titleText.textContent = "Webpack Ristorante";
  monday.textContent = "Monday: 08:00 - 22:00";
  tuesday.textContent = "Tuesday: 08:00 - 22:00";
  wednesday.textContent = "Wednesday: 08:00 - 22:00";
  thursday.textContent = "Thursday: 08:00 - 22:00";
  friday.textContent = "Friday: 08:00 - 22:00";
  saturday.textContent = "Saturday: 08:00 - 00:00";
  sunday.textContent = "Sunday: Closed";
  hoursTitle.textContent = "Hours:";
  textContent1.textContent =
    "Welcome to our vegetarian restaurant, where we pride ourselves on serving delicious, healthy and sustainable plant-based cuisine. Our menu is carefully crafted to offer a variety of dishes that cater to all tastes and dietary preferences. From colorful salads and hearty soups, to savory entrees and satisfying desserts, our chefs use the freshest ingredients to create flavors that will excite and inspire. Whether you're a lifelong vegetarian or just exploring plant-based eating, we believe that our food has something for everyone. Our dishes are not only tasty, but also packed with nutrients, providing the perfect fuel for your body and mind.";

  container3LocationText.textContent = "Location:";
  container3PText.textContent = "123 Forest Drive, Forestville, Maine";
  // add classes to elements
  container.classList.add("container");
  container.setAttribute("id", "container");
  smallerContainer.classList.add("smallerContainer");
  threeContainers.classList.add("threeContainers");
  titleContainer.classList.add("titleContainer");
  titleText.classList.add("titleText");
  container1.classList.add("container1");
  container2.classList.add("container2");
  container3.classList.add("container3");
  textContainer1.classList.add("textContainer1");
  textContent1.classList.add("textContent1");
  textAuthorContainer1.classList.add("textAuthorContainer1");
  textTitleContainer2.classList.add("textTitleContainer2");
  restaurantHours.classList.add("restaurantHours");

  hoursTitleContainer.classList.add("hoursTitleContainer");
  hoursTitle.classList.add("hoursTitle");
  monday.classList.add("day-of-week");
  tuesday.classList.add("day-of-week");
  wednesday.classList.add("day-of-week");
  thursday.classList.add("day-of-week");
  friday.classList.add("day-of-week");
  saturday.classList.add("day-of-week");
  sunday.classList.add("day-of-week");
  container3Location.classList.add("container3Address");
  container3LocationText.classList.add("location-text");
  container3Adress.classList.add("container3Location");
  container3P.classList.add("container3P");
  container3PText.classList.add("container-3-text");
  daysOfWeek.classList.add("daysOfWeek");

  // add ids to elements

  monday.setAttribute("id", "monday");
  tuesday.setAttribute("id", "tuesday");
  wednesday.setAttribute("id", "wednesday");
  thursday.setAttribute("id", "thursday");
  friday.setAttribute("id", "friday");
  saturday.setAttribute("id", "saturday");
  sunday.setAttribute("id", "sunday");

  // append elements to DOM

  content.appendChild(container);
  container.appendChild(smallerContainer);
  container.appendChild(threeContainers);
  smallerContainer.appendChild(titleContainer);
  titleContainer.appendChild(img1);
  titleContainer.appendChild(titleText);
  titleContainer.appendChild(img2);
  threeContainers.appendChild(container1);
  threeContainers.appendChild(container2);
  threeContainers.appendChild(container3);
  container1.appendChild(textContainer1);
  textContainer1.appendChild(textAuthorContainer1);
  textContainer1.appendChild(textContent1);
  container2.appendChild(textTitleContainer2);
  container2.appendChild(hoursTitle);
  textTitleContainer2.appendChild(restaurantHours);
  restaurantHours.appendChild(daysOfWeek);
  container2.appendChild(hoursTitleContainer);
  hoursTitleContainer.appendChild(hoursTitle);

  daysOfWeek.appendChild(monday);
  daysOfWeek.appendChild(tuesday);
  daysOfWeek.appendChild(wednesday);
  daysOfWeek.appendChild(thursday);
  daysOfWeek.appendChild(friday);
  daysOfWeek.appendChild(saturday);
  daysOfWeek.appendChild(sunday);
  container3.appendChild(container3Location);
  container3Location.appendChild(container3Adress);
  container3Adress.appendChild(container3LocationText);
  container3Location.appendChild(container3P);
  container3P.appendChild(container3PText);
}

function loadNavBar() {
  const content = document.getElementById("content");

  // create the navbar element and its child elements
  const navbar = document.createElement("ul");
  const homeNavItem = document.createElement("li");
  const menuNavItem = document.createElement("li");
  const contactNavItem = document.createElement("li");

  // create the anchor elements for each list item
  const homeNavLink = document.createElement("button");
  const menuNavLink = document.createElement("button");
  const contactNavLink = document.createElement("button");

  // set the text content for each anchor element
  homeNavLink.textContent = "Home";
  menuNavLink.textContent = "Menu";
  contactNavLink.textContent = "Contact";

  // set class for each navbar item
  navbar.classList.add("navbar");
  homeNavItem.classList.add("navbarList");
  menuNavItem.classList.add("navbarList");
  contactNavItem.classList.add("navbarList");

  // add the anchor elements to the list items
  homeNavItem.appendChild(homeNavLink);
  menuNavItem.appendChild(menuNavLink);
  contactNavItem.appendChild(contactNavLink);

  // add the list items to the navbar element
  navbar.appendChild(homeNavItem);
  navbar.appendChild(menuNavItem);
  navbar.appendChild(contactNavItem);

  // add the navbar element to the content element
  content.appendChild(navbar);
  pageLoadHome();
  homeNavLink.classList.add("clicked");



  homeNavLink.addEventListener("click", function () {
    homeNavLink.classList.add("clicked");
    menuNavLink.classList.remove("clicked");
    contactNavLink.classList.remove("clicked");
    let content = document.getElementById("content");

    if (content.lastChild.id === "container") {
      content.removeChild(content.lastChild);
      homeNavLink.classList.remove("clicked");
      menuNavLink.classList.remove("clicked");
      contactNavLink.classList.remove("clicked");
    } else {
      pageLoadHome();
      return;
    }

//  FUNCTION FOR BORDER MADE OUT OF SPAWNED VEGETABLES

    // function spawnVegetable() {
    //   if (homeClicked === true) {
    //     let vegetable = document.createElement("img");
    //     vegetable.src = "vegetable.png";
    //     vegetable.classList.add("fall-vegetable");

    //     navbar.appendChild(vegetable);

    //     setTimeout(function () {
    //       vegetable.remove();
    //     }, 30000);
    //   } else
    //     document.querySelectorAll(".fall-vegetable").forEach((e) => e.remove());
    //   return;
    // }

    // // spawn a vegetable every 0.05 seconds
    // setInterval(spawnVegetable, 50);
  });

  menuNavLink.addEventListener("click", function () {
    homeNavLink.classList.remove("clicked");
    menuNavLink.classList.add("clicked");
    contactNavLink.classList.remove("clicked");
    let content = document.getElementById("content");
    if (content.lastChild.id === "container") {
      content.removeChild(content.lastChild);
      homeNavLink.classList.remove("clicked");
      menuNavLink.classList.remove("clicked");
      contactNavLink.classList.remove("clicked");
    } else {
      pageLoadMenu();
      return;
    }
  });

  contactNavLink.addEventListener("click", function () {
    homeNavLink.classList.remove("clicked");
    menuNavLink.classList.remove("clicked");
    contactNavLink.classList.add("clicked");
    let content = document.getElementById("content");
    if (content.lastChild.id === "container") {
      content.removeChild(content.lastChild);
      homeNavLink.classList.remove("clicked");
      menuNavLink.classList.remove("clicked");
      contactNavLink.classList.remove("clicked");
    } else {
      pageLoadContact();
      return;
    }
  });
}

window.addEventListener("load", loadNavBar);

function pageLoadContact() {
  const container = document.createElement("div");
  const contactUsSubContainer = document.createElement("div");
  const contactUsTitleText = document.createElement("h1");
  contactUsTitleText.textContent = "Contact Us";

  const contact1Container = document.createElement("div");
  const contact1SubContainer = document.createElement("div");
  const contact1TitleText = document.createElement("h2");
  contact1TitleText.textContent = "Contact 1";
  const contact1Description = document.createElement("p");
  contact1Description.textContent = "Description of Contact 1";
  const contact1PhoneNumber = document.createElement("p");
  contact1PhoneNumber.textContent = "PhoneNumber of Contact 1";
  const contact1Picture = document.createElement("img");
  contact1Picture.src = "path/to/contact1/picture";

  const contact2Container = document.createElement("div");
  const contact2SubContainer = document.createElement("div");
  const contact2TitleText = document.createElement("h2");
  contact2TitleText.textContent = "Contact 2";
  const contact2Description = document.createElement("p");
  contact2Description.textContent = "Description of Contact 2";
  const contact2PhoneNumber = document.createElement("p");
  contact2PhoneNumber.textContent = "PhoneNumber of Contact 2";
  const contact2Picture = document.createElement("img");
  contact2Picture.src = "path/to/contact2/picture";

  const contact3Container = document.createElement("div");
  const contact3SubContainer = document.createElement("div");
  const contact3TitleText = document.createElement("h2");
  contact3TitleText.textContent = "Contact 3";
  const contact3Description = document.createElement("p");
  contact3Description.textContent = "Description of Contact 3";
  const contact3PhoneNumber = document.createElement("p");
  contact3PhoneNumber.textContent = "PhoneNumber of Contact 3";
  const contact3Picture = document.createElement("img");
  contact3Picture.src = "path/to/contact3/picture";

  container.classList.add("contactUsContainer");
  contactUsSubContainer.classList.add("contactUsSubContainer");
  contactUsTitleText.classList.add("contactUsTitle");
  container.setAttribute("id", "container");

  contact1Container.classList.add("contact1Container");
  contact1SubContainer.classList.add("contact1SubContainer");
  contact1TitleText.classList.add("contact1Title");
  contact1Description.classList.add("contact1Description");
  contact1PhoneNumber.classList.add("contact1PhoneNumber");
  contact1Picture.classList.add("contact1Picture");

  contact2Container.classList.add("contact2Container");
  contact2SubContainer.classList.add("contact2SubContainer");
  contact2TitleText.classList.add("contact2Title");
  contact2Description.classList.add("contact2Description");
  contact2PhoneNumber.classList.add("contact2PhoneNumber");
  contact2Picture.classList.add("contact2Picture");

  contact3Container.classList.add("contact3Container");
  contact3SubContainer.classList.add("contact3SubContainer");
  contact3TitleText.classList.add("contact3Title");
  contact3Description.classList.add("contact3Description");
  contact3PhoneNumber.classList.add("contact3PhoneNumber");
  contact3Picture.classList.add("contact3Picture");

  content.appendChild(container);
  contactUsSubContainer.appendChild(contactUsTitleText);
  container.appendChild(contactUsSubContainer);

  contact1SubContainer.appendChild(contact1TitleText);
  contact1SubContainer.appendChild(contact1Description);
  contact1SubContainer.appendChild(contact1PhoneNumber);
  contact1SubContainer.appendChild(contact1Picture);
  contact1Container.appendChild(contact1SubContainer);

  contact2SubContainer.appendChild(contact2TitleText);
  contact2SubContainer.appendChild(contact2Description);
  contact2SubContainer.appendChild(contact2PhoneNumber);
  contact2SubContainer.appendChild(contact2Picture);
  contact2Container.appendChild(contact2SubContainer);

  contact3SubContainer.appendChild(contact3TitleText);
  contact3SubContainer.appendChild(contact3Description);
  contact3SubContainer.appendChild(contact3PhoneNumber);
  contact3SubContainer.appendChild(contact3Picture);
  contact3Container.appendChild(contact3SubContainer);

  container.appendChild(contact1Container);
  container.appendChild(contact2Container);
  container.appendChild(contact3Container);
}

function pageLoadMenu() {

  // create elements

  const container = document.createElement("div")
  const menuTitleContainer = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const menuTitleText = document.createElement("h1");

  const beveragesTitleContainer = document.createElement("div");
  const beveragesTitleText = document.createElement("h2");
  const img3 = document.createElement("img");

  const beverage1SubContainer = document.createElement("div");
  const beverage1TitleText = document.createElement("h3");
  const beverage1Description = document.createElement("p");
  const beverage1Price = document.createElement("p");
  const beverage1Picture = document.createElement("img");

  const beverage2SubContainer = document.createElement("div");
  const beverage2TitleText = document.createElement("h3");
  const beverage2Description = document.createElement("p");
  const beverage2Price = document.createElement("p");
  const beverage2Picture = document.createElement("img");

  const sidesTitleContainer = document.createElement("div");
  const sidesTitleText = document.createElement("h2");
  const img4 = document.createElement("img");

  const sides1SubContainer = document.createElement("div");
  const sides1TitleText = document.createElement("h3");
  const sides1Description = document.createElement("p");
  const sides1Price = document.createElement("p");
  const sides1Picture = document.createElement("img");

  const sides2SubContainer = document.createElement("div");
  const sides2TitleText = document.createElement("h3");
  const sides2Description = document.createElement("p");
  const sides2Price = document.createElement("p");
  const sides2Picture = document.createElement("img");

  const dessertsTitleContainer = document.createElement("div");

  const dessertSubContainer = document.createElement("div")
  const dessertTitleText = document.createElement("h3");
  const dessertDescription = document.createElement("p");
  const dessertPrice = document.createElement("p");
  const dessertPicture = document.createElement("img");

  const mainDishesTitleContainer = document.createElement("div");
  const mainDishesTitleText = document.createElement("h2")
  const img6 = document.createElement("img")

  const mainDishes1SubContainer = document.createElement("div");
  const mainDishes1TitleText = document.createElement("h3");
  const mainDishes1Description = document.createElement("p");
  const mainDishes1Price = document.createElement("p");
  const mainDishes1Picture = document.createElement("img");

  const mainDishes2SubContainer = document.createElement("div");
  const mainDishes2TitleText = document.createElement("h3");
  const mainDishes2Description = document.createElement("p");
  const mainDishes2Price = document.createElement("p");
  const mainDishes2Picture = document.createElement("img");

  const mainDishes3SubContainer = document.createElement("div");
  const mainDishes3TitleText = document.createElement("h3");
  const mainDishes3Description = document.createElement("p");
  const mainDishes3Price = document.createElement("p");
  const mainDishes3Picture = document.createElement("img");

  const mainDishes4SubContainer = document.createElement("div");
  const mainDishes4TitleText = document.createElement("h3");
  const mainDishes4Description = document.createElement("p");
  const mainDishes4Price = document.createElement("p");
  const mainDishes4Picture = document.createElement("img");

  const mainDishes5SubContainer = document.createElement("div");
  const mainDishes5TitleText = document.createElement("h3");
  const mainDishes5Description = document.createElement("p");
  const mainDishes5Price = document.createElement("p");
  const mainDishes5Picture = document.createElement("img");

  const mainDishes6SubContainer = document.createElement("div");
  const mainDishes6TitleText = document.createElement("h3");
  const mainDishes6Description = document.createElement("p");
  const mainDishes6Price = document.createElement("p");
  const mainDishes6Picture = document.createElement("img");

//  add classes to elements

  container.classList.add("menuContainer")
  container.setAttribute("id", "container");
  menuTitleContainer.classList.add("menuTitleContainer");
  img1.classList.add("img1");
  img2.classList.add("img2");
  menuTitleText.classList.add("menuTitleText");

  beveragesTitleContainer.classList.add("beveragesTitleContainer");
  beveragesTitleText.classList.add("beveragesTitleText");
  img3.classList.add("img3");


  beverage1SubContainer.classList.add("beverageSubContainer");
  beverage1TitleText.classList.add("beverage1TitleText");
  beverage1Description.classList.add("beverage1Description");
  beverage1Price.classList.add("beverage1Price");
  beverage1Picture.classList.add("beverage1Picture");


  beverage2SubContainer.classList.add("beverageSubContainer");
  beverage2TitleText.classList.add("beverage2TitleText");
  beverage2Description.classList.add("beverage2Description");
  beverage2Price.classList.add("beverage2Price");
  beverage2Picture.classList.add("beverage2Picture");

  sidesTitleContainer.classList.add("sidesTitleContainer");
  sidesTitleText.classList.add("sidesTitleText");
  img4.classList.add("img4");


  sides1SubContainer.classList.add("sidesSubContainer");
  sides1TitleText.classList.add("sides1TitleText");
  sides1Description.classList.add("sides1Description");
  sides1Price.classList.add("sides1Price");
  sides1Picture.classList.add("sides1Picture");


  sides2SubContainer.classList.add("sidesSubcontainer");
  sides2TitleText.classList.add("sides2TitleText");
  sides2Description.classList.add("sides2Description");
  sides2Price.classList.add("sides2Price");
  sides2Picture.classList.add("sides2Picture");

  dessertsTitleContainer.classList.add("dessertsTitleContainer");

  dessertSubContainer.classList.add("dessertSubContainer")
  dessertTitleText.classList.add("dessertTitleText")
  dessertDescription.classList.add("dessertDescription")
  dessertPicture.classList.add("dessertPicture")

  mainDishesTitleContainer.classList.add("mainDishesTitleContainer");
  mainDishesTitleText.classList.add("mainDishesTitleText")
  img6.classList.add("img6")

  mainDishes1SubContainer.classList.add("mainDishesSubContainer");
  mainDishes1TitleText.classList.add("mainDishes1TitleText");
  mainDishes1Description.classList.add("mainDishes1Description");
  mainDishes1Price.classList.add("mainDishes1Price");
  mainDishes1Picture.classList.add("mainDishes1Picture");

  mainDishes2SubContainer.classList.add("mainDishesSubContainer");
  mainDishes2TitleText.classList.add("mainDishes2TitleText");
  mainDishes2Description.classList.add("mainDishes2Description");
  mainDishes2Price.classList.add("mainDishes2Price");
  mainDishes2Picture.classList.add("mainDishes2Picture");

  mainDishes3SubContainer.classList.add("mainDishesSubContainer");
  mainDishes3TitleText.classList.add("mainDishes3TitleText");
  mainDishes3Description.classList.add("mainDishes3Description");
  mainDishes3Price.classList.add("mainDishes3Price");
  mainDishes3Picture.classList.add("mainDishes3Picture");

  mainDishes4SubContainer.classList.add("mainDishesSubContainer");
  mainDishes4TitleText.classList.add("mainDishes4TitleText");
  mainDishes4Description.classList.add("mainDishes4Description");
  mainDishes4Price.classList.add("mainDishes4Price");
  mainDishes4Picture.classList.add("mainDishes4Picture");

  mainDishes5SubContainer.classList.add("mainDishesSubContainer");
  mainDishes5TitleText.classList.add("mainDishes5TitleText");
  mainDishes5Description.classList.add("mainDishes5Description");
  mainDishes5Price.classList.add("mainDishes5Price");
  mainDishes5Picture.classList.add("mainDishes5Picture");

  mainDishes6SubContainer.classList.add("mainDishesSubContainer");
  mainDishes6TitleText.classList.add("mainDishes6TitleText");
  mainDishes6Description.classList.add("mainDishes6Description");
  mainDishes6Price.classList.add("mainDishes6Price");
  mainDishes6Picture.classList.add("mainDishes6Picture");

  // add id's to elements

  mainDishes1SubContainer.setAttribute("id", "1");
  mainDishes2SubContainer.setAttribute("id", "2");
  mainDishes3SubContainer.setAttribute("id", "3");
  mainDishes4SubContainer.setAttribute("id", "4");
  mainDishes5SubContainer.setAttribute("id", "5");
  mainDishes6SubContainer.setAttribute("id", "6");
  sides1SubContainer.setAttribute("id", "1");
  sides2SubContainer.setAttribute("id", "2");
  beverage1SubContainer.setAttribute("id", "1");
  beverage2SubContainer.setAttribute("id", "2");


// Append title container and elements to menu container
content.appendChild(container);

// Append title container and elements to menu container
container.appendChild(menuTitleContainer);
menuTitleContainer.appendChild(img1);
menuTitleContainer.appendChild(menuTitleText);
menuTitleContainer.appendChild(img2);

// Append beverages section to menu container
container.appendChild(beveragesTitleContainer);
beveragesTitleContainer.appendChild(img3);
beveragesTitleContainer.appendChild(beveragesTitleText);
container.appendChild(beverage1SubContainer);
beverage1SubContainer.appendChild(beverage1TitleText);
beverage1SubContainer.appendChild(beverage1Description);
beverage1SubContainer.appendChild(beverage1Price);
beverage1SubContainer.appendChild(beverage1Picture);
container.appendChild(beverage2SubContainer);
beverage2SubContainer.appendChild(beverage2TitleText);
beverage2SubContainer.appendChild(beverage2Description);
beverage2SubContainer.appendChild(beverage2Price);
beverage2SubContainer.appendChild(beverage2Picture);

// Append sides section to container
container.appendChild(sidesTitleContainer);
sidesTitleContainer.appendChild(img4);
sidesTitleContainer.appendChild(sidesTitleText);
container.appendChild(sides1SubContainer);
sides1SubContainer.appendChild(sides1TitleText);
sides1SubContainer.appendChild(sides1Description);
sides1SubContainer.appendChild(sides1Price);
sides1SubContainer.appendChild(sides1Picture);
container.appendChild(sides2SubContainer);
sides2SubContainer.appendChild(sides2TitleText);
sides2SubContainer.appendChild(sides2Description);
sides2SubContainer.appendChild(sides2Price);
sides2SubContainer.appendChild(sides2Picture);

// Append sides section to container

container.appendChild(dessertsTitleContainer);

container.appendChild(dessertSubContainer)
dessertSubContainer.appendChild(dessertTitleText)
dessertSubContainer.appendChild(dessertDescription)
dessertSubContainer.appendChild(dessertPrice)
dessertSubContainer.appendChild(dessertPicture)

// Append sides section to container

container.appendChild(mainDishesTitleContainer);
mainDishesTitleContainer.appendChild(mainDishesTitleText);
mainDishesTitleContainer.appendChild(img6);

container.appendChild(mainDishes1SubContainer);
mainDishes1SubContainer.appendChild(mainDishes1TitleText);
mainDishes1SubContainer.appendChild(mainDishes1Description);
mainDishes1SubContainer.appendChild(mainDishes1Price);
mainDishes1SubContainer.appendChild(mainDishes1Picture);

container.appendChild(mainDishes2SubContainer);
mainDishes2SubContainer.appendChild(mainDishes2TitleText);
mainDishes2SubContainer.appendChild(mainDishes2Description);
mainDishes2SubContainer.appendChild(mainDishes2Price);
mainDishes2SubContainer.appendChild(mainDishes2Picture);

container.appendChild(mainDishes3SubContainer);
mainDishes3SubContainer.appendChild(mainDishes3TitleText);
mainDishes3SubContainer.appendChild(mainDishes3Description);
mainDishes3SubContainer.appendChild(mainDishes3Price);
mainDishes3SubContainer.appendChild(mainDishes3Picture);

container.appendChild(mainDishes4SubContainer);
mainDishes4SubContainer.appendChild(mainDishes4TitleText);
mainDishes4SubContainer.appendChild(mainDishes4Description);
mainDishes4SubContainer.appendChild(mainDishes4Price);
mainDishes4SubContainer.appendChild(mainDishes4Picture);

container.appendChild(mainDishes5SubContainer);
mainDishes5SubContainer.appendChild(mainDishes5TitleText);
mainDishes5SubContainer.appendChild(mainDishes5Description);
mainDishes5SubContainer.appendChild(mainDishes5Price);
mainDishes5SubContainer.appendChild(mainDishes5Picture);

container.appendChild(mainDishes6SubContainer);
mainDishes6SubContainer.appendChild(mainDishes6TitleText);
mainDishes6SubContainer.appendChild(mainDishes6Description);
mainDishes6SubContainer.appendChild(mainDishes6Price);
mainDishes6SubContainer.appendChild(mainDishes6Picture);

//  Add dummy text

menuTitleText.textContent = "Our Menu";

beveragesTitleText.textContent = "Beverages";

beverage1TitleText.textContent = "Beverage 1";
beverage1Description.textContent = "This is the description for beverage 1";
beverage1Price.textContent = "$5.99";

beverage2TitleText.textContent = "Beverage 2";
beverage2Description.textContent = "This is the description for beverage 2";
beverage2Price.textContent = "$6.99";

sidesTitleText.textContent = "Sides";

sides1TitleText.textContent = "Side 1";
sides1Description.textContent = "This is the description for side 1";
sides1Price.textContent = "$3.99";

sides2TitleText.textContent = "Side 2";
sides2Description.textContent = "This is the description for side 2";
sides2Price.textContent = "$4.99";

dessertTitleText.textContent = "Desserts";
dessertDescription.textContent = "This is the description for dessert 1"
dessertPrice.textContent = "$10.99";

mainDishesTitleText.textContent = "Main Dishes";

mainDishes1TitleText.textContent = "Main Dish 1";
mainDishes1Description.textContent = "This is the description for main dish 1";
mainDishes1Price.textContent = "$12.99";

mainDishes2TitleText.textContent = "Main Dish 2";
mainDishes2Description.textContent = "This is the description for main dish 2";
mainDishes2Price.textContent = "$14.99";

mainDishes3TitleText.textContent = "Main Dish 3";
mainDishes3Description.textContent = "This is the description for main dish 3";
mainDishes3Price.textContent = "$15.99";

mainDishes4TitleText.textContent = "Main Dish 4";
mainDishes4Description.textContent = "This is the description for main dish 4";
mainDishes4Price.textContent = "$16.99";

mainDishes5TitleText.textContent = "Main Dish 5";
mainDishes5Description.textContent = "This is the description for main dish 5";
mainDishes5Price.textContent = "$17.99";

mainDishes6TitleText.textContent = "Main Dish 6";
mainDishes6Description.textContent = "This is the description for main dish 6";
mainDishes6Price.textContent = "$18.99";

}

