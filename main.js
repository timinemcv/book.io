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
    let numberOfPages = 3;
    let maxPages = numberOfPages + 1;

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

    // Append elements
    introDiv.appendChild(titleParagraph);
    introDiv.appendChild(subTitleHeading);
    introDiv.appendChild(descriptionHeading);
    introDiv.appendChild(authorHeading);

    const frontContent = document.getElementById("frontOne");
    frontContent.appendChild(introDiv);
}

// Call the function to create and append content to the front page
createFrontPageContent();
// Sample data for each page
const pageContent = [
    {
        title: "Building the Foundation with HTML",
        content: "HTML (Hypertext Markup Language) is the backbone of web development. It structures the content of a webpage and forms the foundation for creating dynamic and interactive sites. Let's explore the basics:\n\n- Tags and Elements: Understanding the building blocks.\n- Document Structure: The anatomy of an HTML document.\n- Common HTML Tags: Headings, paragraphs, lists, and more.\n- Attributes: Enhancing elements with additional information.\n\nExercises:\n1. Create a simple webpage with headings and paragraphs.\n2. Build an unordered list showcasing your favorite hobbies.\n\nRemember, HTML is the canvas on which we paint our digital creations. Let's get hands-on!",
        pageNumber: 2
    },
    {
        title: "Crafting Aesthetics with CSS",
        content: "CSS (Cascading Style Sheets) is the artistic touch that transforms a webpage's the world of styling, understanding how to make your websites visually appealing.\n\nTopics covered:\n- Selectors and properties\n- Box model: Understanding the structure of elements\n- Colors and fonts: Adding personality to your design\n- Layouts: Positioning elements on the page\n\nGet ready to bring your websites to life with the magic of CSS!",
        pageNumber: 3
    },
    {
        title: "Harmony in Coding - HTML & CSS Integration",
        content: "Now that we understand HTML and CSS individually, it's time to bring them together. In this chapter, we'll explore how these two languages harmonize to create well-designed and structured web pages.\n\nTopics covered:\n- Linking CSS to HTML\n- Creating a cohesive design system\n- Responsive design: Ensuring your website looks great on all devices\n- Best practices for HTML and CSS integration\n\nBy the end of this chapter, you'll be able to seamlessly integrate HTML and CSS for a polished web experience.",
        pageNumber: 4
    },
    {
        title: "Adapting to Every Screen - Responsive Web Design",
        content: "In the age of smartphones and tablets, it's crucial to create websites that adapt to various screen sizes. In this chapter, we'll delve into the principles of responsive web design.\n\nTopics covered:\n- Media queries: Tailoring styles for different devices\n- Flexbox and Grid: Powerful layout tools\n- Mobile-first design approach\n- Testing and optimizing for responsiveness\n\nEquip yourself with the skills to create websites that look fantastic on any device!",
        pageNumber: 5
    },
    {
        title: "Journey into Advanced Concepts",
        content: "Congratulations on reaching the final chapter! In this section, we'll explore advanced concepts and tools that will take your coding skills to the next level.\n\nTopics covered:\n- CSS preprocessors (Sass, Less)\n- Version control with Git\n- Introduction to JavaScript\n- Tools and frameworks for web development\n\nThis chapter marks the beginning of your journey beyond the basics. Embrace the continuous learning mindset, and remember that coding is an ever-evolving adventure.\n\nThank you for joining us on this exciting exploration of coding with HTML and CSS. Happy coding!",
        pageNumber: 6
    }
];

// Function to create and append content to the specified page
function createPageContent(pageData) {
    const frontContentElement = document.getElementById(`front${pageData.pageNumber}`);
    const backContentElement = document.getElementById(`back${pageData.pageNumber}`);

    // Create elements
    const pageHeading = document.createElement("h3");
    pageHeading.textContent = pageData.title;

    const pageParagraph = document.createElement("p");
    pageParagraph.innerHTML = pageData.content;

    const pageNumber = document.createElement("h6");
    pageNumber.textContent = pageData.pageNumber;

    // Append elements
    const pageContentDiv = document.createElement("div");
    pageContentDiv.classList.add("pageContentOne", `pageCont${pageData.pageNumber}`);
    pageContentDiv.appendChild(pageHeading);
    pageContentDiv.appendChild(pageParagraph);
    pageContentDiv.appendChild(pageNumber);

    if (frontContentElement) {
        frontContentElement.appendChild(pageContentDiv);
    }

    if (backContentElement) {
        backContentElement.innerHTML = ""; // Clear existing content
        backContentElement.appendChild(pageContentDiv);
    }
}

// Call the function for each page
pageContent.forEach(createPageContent);
