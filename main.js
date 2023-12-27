document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const mybook = document.querySelector("#mybook");

    const pageOne = document.querySelector("#pageOne");
    const pageTwo = document.querySelector("#pageTwo");
    const pageThree = document.querySelector("#pageThree");

    // Add Eventlistener
    prevBtn.addEventListener("click", prevPage);
    nextBtn.addEventListener("click", nextPage);

    let currentPage = 1;
    let numberOfPages = 6;
    let maxPages = numberOfPages;

    function updatePageCounter() {
        const pageCounter = document.querySelectorAll(".pageCounter");
        pageCounter.forEach((counter) => {
            counter.textContent = currentPage;
        });
        updatePageNumbers();
    }
    function updatePageNumbers() {
        const pageNumbers = document.querySelectorAll(".pageNumber");
        pageNumbers.forEach((number, index) => {
            number.textContent = index + 1;
        });
    }
    function openBook() {
        mybook.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }

    function closeBook(atBeginning) {
        if (atBeginning) {
            mybook.style.transform = "translateX(0%)";
        } else {
            mybook.style.transform = "translateX(100%)";
        }
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function nextPage() {
        if (currentPage < maxPages) {
            switch (currentPage) {
                case 1:
                    openBook();
                    pageOne.classList.add("flipped");
                    pageOne.style.zIndex = 1;
                    break;
                case 2:
                    pageTwo.classList.add("flipped");
                    pageTwo.style.zIndex = 2;
                    break;
                case 3:
                    pageThree.classList.add("flipped");
                    pageThree.style.zIndex = 3;
                    closeBook(false);
                    break;
                default:
                    throw new Error("unknown state");
            }
            currentPage++;
            updatePageCounter();
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            switch (currentPage) {
                case 2:
                    closeBook(true);
                    pageOne.classList.remove("flipped");
                    pageOne.style.zIndex = 3;
                    break;
                case 3:
                    pageTwo.classList.remove("flipped");
                    pageTwo.style.zIndex = 2;
                    break;
                case 4:
                    openBook();
                    pageThree.classList.remove("flipped");
                    pageThree.style.zIndex = 1;
                    break;
                default:
                    throw new Error("unknown state");
            }
            currentPage--;
            updatePageCounter();
        }
    }
});

const bookContent = {
    title: "Learn to code",
    subTitle: "HTML & CSS",
    description: "Develop & Style Website",
    author: "Timileyin A.",
};

// Function to create and append content to the front page
function createFrontPageContent() {
    // Create elements
    const introDiv = document.createElement("div");
    introDiv.classList.add("intro");

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = bookContent.title;

    const subTitleHeading = document.createElement("h1");
    subTitleHeading.textContent = bookContent.subTitle;

    const descriptionHeading = document.createElement("h6");
    descriptionHeading.textContent = bookContent.description;

    const authorHeading = document.createElement("h3");
    authorHeading.textContent = bookContent.author;
    const counter = document.createElement("h6");
    counter.classList.add("pageCounter");
    counter.setAttribute("id", "pageCounterOne");

    // Append elements
    introDiv.appendChild(titleParagraph);
    introDiv.appendChild(subTitleHeading);
    introDiv.appendChild(descriptionHeading);
    introDiv.appendChild(authorHeading);
    introDiv.appendChild(counter);

    const frontContent = document.getElementById("frontOne");
    frontContent.appendChild(introDiv);
}

createFrontPageContent();

const firstPageContent = {
    topHeader: "Building the Foundation with HTML",
    paraGraph: `HTML (Hypertext Markup Language) is the backbone of web
    development. It structures the content of a webpage and
    forms the foundation for creating dynamic and interactive
    sites. Let's explore the basics:
    
    - Tags and Elements: Understanding the building blocks.
    - Document Structure: The anatomy of an HTML document.
    - Common HTML Tags: Headings, paragraphs, lists, and more.
    - Attributes: Enhancing elements with additional information.
    
    Exercises:
    1. Create a simple webpage with headings and paragraphs.
    2. Build an unordered list showcasing your favorite hobbies.
    
    Remember, HTML is the canvas on which we paint our digital creations. Let's get hands-on!`,
};

function createFirstPageContent() {
    const pageContent = document.createElement("div");
    pageContent.classList.add("pageContentOne");

    const titlePageOne = document.createElement("h3");
    titlePageOne.textContent = firstPageContent.topHeader;

    const mainContent = document.createElement("p");
    mainContent.textContent = firstPageContent.paraGraph;

    const counter = document.createElement("h6");
    counter.classList.add("pageCounter");
    counter.setAttribute("id", "pageCounterTwo");

    pageContent.appendChild(titlePageOne);
    pageContent.appendChild(mainContent);
    pageContent.appendChild(counter);

    const backContent = document.getElementById("backOne");
    backContent.appendChild(pageContent);
}
createFirstPageContent();

const secondPageContent = {
    topHeaderTwo: "Crafting Aesthetics with CSSL",
    pageContentTwo: `CSS (Cascading Style Sheets) is the artistic
    touch that transforms a webpage's
    the world of styling, understanding how to make your websites visually appealing.
    
    Topics covered:
    - Selectors and properties
    - Box model: Understanding the structure of elements
    - Colors and fonts: Adding personality to your design
    - Layouts: Positioning elements on the page
    
    Get ready to bring your websites to life with the magic of CSS!`,
};

function createSecondContent() {
    const pageContentTwo = document.createElement("div");
    pageContentTwo.classList.add("pageContentOne");

    const pageContentHeader = document.createElement("h3");
    pageContentHeader.textContent = secondPageContent.topHeaderTwo;

    const mainContentTwo = document.createElement("p");
    mainContentTwo.textContent = secondPageContent.pageContentTwo;

    const counter = document.createElement("h6");
    counter.classList.add("pageCounter");
    counter.setAttribute("id", "pageCounterThree");

    pageContentTwo.appendChild(pageContentHeader);
    pageContentTwo.appendChild(mainContentTwo);
    pageContentTwo.appendChild(counter);

    const frontTwo = document.getElementById("frontTwo");
    frontTwo.appendChild(pageContentTwo);
}
createSecondContent();

const thirdPageContent = {
    topHeaderThree: "Harmony in Coding - HTML & CSS Integration",
    pageContentThree: `Now that we understand HTML and CSS individually, it's
    time to bring them together. In this chapter,
    we'll explore how these two languages harmonize to create
    well-designed and structured web pages.
    
    Topics covered:
    - Linking CSS to HTML
    - Creating a cohesive design system
    - Responsive design: Ensuring your website looks great on
    all devices
    - Best practices for HTML and CSS integration
    
    By the end of this chapter, you'll be able to seamlessly
    integrate HTML and CSS for a polished web experience.`,
};

function createThirdContent() {
    const pageContentThree = document.createElement("div");
    pageContentThree.classList.add("pageContentOne");

    const pageContentHeader = document.createElement("h3");
    pageContentHeader.textContent = thirdPageContent.topHeaderThree;

    const mainContentThree = document.createElement("p");
    mainContentThree.textContent = thirdPageContent.pageContentThree;

    const counter = document.createElement("h6");
    counter.classList.add("pageCounter");
    counter.setAttribute("id", "pageCounterFour");

    pageContentThree.appendChild(pageContentHeader);
    pageContentThree.appendChild(mainContentThree);
    pageContentThree.appendChild(counter);

    const backThree = document.getElementById("backTwo");
    backThree.appendChild(pageContentThree);
}
createThirdContent();

const fourthpageContent = {
    topHeaderFour: "Adapting to Every Screen - Responsive Web Design",
    pageContentFour: `In the age of smartphones and tablets, it's crucial to
    create websites that adapt to various screen sizes. In
    this chapter, we'll delve into the principles of
    responsive web design.
    
    Topics covered:
    - Media queries: Tailoring styles for different devices
    - Flexbox and Grid: Powerful layout tools
    - Mobile-first design approach
    - Testing and optimizing for responsiveness
    
    Equip yourself with the skills to create websites that
    look fantastic on any device!
    `,
};

function createFourthPage() {
    const pageContentFour = document.createElement("div");
    pageContentFour.classList.add("pageContentOne");

    const pageContentHeader = document.createElement("h3");
    pageContentHeader.textContent = fourthpageContent.topHeaderFour;

    const mainContentFour = document.createElement("p");
    mainContentFour.textContent = fourthpageContent.pageContentFour;

    const counter = document.createElement("h6");
    counter.classList.add("pageCounter");
    counter.setAttribute("id", "pageCounterFive");

    pageContentFour.appendChild(pageContentHeader);
    pageContentFour.appendChild(mainContentFour);
    pageContentFour.appendChild(counter);

    const frontThree = document.getElementById("frontThree");
    frontThree.appendChild(pageContentFour);
}
createFourthPage();

const lastPageContent = {
    lastPageHeader: "Journey into Advanced Concepts",
    pageContentLast: `Congratulations on reaching the final chapter! In this
    section, we'll explore advanced
    concepts and tools that will take your coding skills
    to the next level.
    
    Topics covered:
    - CSS preprocessors (Sass, Less)
    - Version control with Git - Introduction to JavaScript
    - Tools and frameworks for web development
    
    This chapter marks the beginning of your
    journey beyond the basics. Embrace the
    continuous learning mindset, and
    remember that coding is an ever-evolving adventure.
    
    Thank you for joining us on this exciting exploration of
    coding with HTML and CSS. Happy coding!`,
};

function createLastPage() {
    const pageContentLast = document.createElement("div");
    pageContentLast.classList.add("pageContentOne");

    const pageContentHeader = document.createElement("h3");
    pageContentHeader.textContent = lastPageContent.lastPageHeader;

    const mainContentFour = document.createElement("p");
    mainContentFour.textContent = lastPageContent.pageContentLast;

    const counter = document.createElement("h6");
    counter.classList.add("pageCounter");
    counter.setAttribute("id", "pageCounterSix");

    pageContentLast.appendChild(pageContentHeader);
    pageContentLast.appendChild(mainContentFour);
    pageContentLast.appendChild(counter);

    const lastPage = document.getElementById("backThree");
    lastPage.appendChild(pageContentLast);
}
createLastPage();