**10/13/26**

I used AI to identify an issue with duplicate IDs because my cards with the same programming were appearing differently.
    **Prompt:** "why is the coffeeshop concerts card showing up differently than the others"

I prompted Copilot to fix my width and gap issues between example images, as the percentage of browser function was shrinking my images too small. 
    **Prompt:** "how do i use a percentage to have dynamic widths of my images? I want each image to be 30% of the width of the page iwth 5% of the width of the page as the gaps"
I accepted its flexbox suggestion:
    .gallery {
    display: flex;
    gap: 5%;
    width: 100%;
    }

    .gallery img {
    width: 30%;
    height: auto;
    display: block;
    object-fit: cover;
    }

I then used Copilot to move the captions below the images. I accepted its solutions, but modified them to match my own vision and thought process. 
    **Prompt:** "i want the captions to show up right below their corresponding example image, how do i do this using the flexbox?"
It's response is below:
    <div class="gallery">
    <figure class="photo-card">
        <img src="image1.jpg" alt="Image 1">
        <figcaption>Caption 1</figcaption>
    </figure>

    <figure class="photo-card">
        <img src="image2.jpg" alt="Image 2">
        <figcaption>Caption 2</figcaption>
    </figure>

    <figure class="photo-card">
        <img src="image3.jpg" alt="Image 3">
        <figcaption>Caption 3</figcaption>
    </figure>
    </div>
    
    .gallery {
    display: flex;
    gap: 5%;
    width: 100%;
    }

    .photo-card {
    width: 30%;
    display: flex;
    flex-direction: column;
    }

    .photo-card img {
    width: 100%;
    height: auto;
    display: block;
    }

    .photo-card figcaption {
    margin-top: 8px;
    font-size: 16px;
    text-align: center;
    }

For the "Pick one section of your site and write a detailed AI prompt that targets only your CSS file. Include the prompt in your CSS file as a comment above the section that was authored by the AI. Do not let the AI agent modify your HTML file(s)." portion of the lab, I chose to use Copilot to streamline my text alignment and padding of sections. These changes were made directly to the text file, and I have attached my iterative prompts below.
    **Prompt #1:** I would like the text within the about, projects (except for the photo-card captions), affiliations, and contact sections left aligned. Please add padding between the background of these sections by 15px to my CSS and bring the text in another 10px from the edge of the backgrounds. All text should be within the same line, with the exception of the photo-card captions, regardless of if it has a background or not. Streamline the natural view of the page so it is all aligned with itself.
    **Prompt #2:** Please remove the vertical padding you added, that was not part of the request.
    **Prompt #3:** Please also restore the padding between each section
    **Prompt #4:** Restore margin-top above the About section, between the Affiliations section and its text, and between Affiliations and Contact.
    **Prompt #5:** Why did you not restore the space between the header and About? Why did you not restore the space between affiliations and study abroad? Why did you not restore the space between Contact and Affiliations?
    **Prompt #6:** There is still not a gap between the affiliations and study abroad sections, and there is no gap between the Contact and affiliations sections.
    **Prompt #7:** Please restore the original vertical padding. Keep the modified horizontal padding, but remove the new vertical padding. Then, adjust the backgrounds of the section H2s and project cards so they do not reach all the way to the edge of the brower. I would like 15 px padding.
Copilot did not understand my request to keep the original vertical padding, so I had to go back in and fix it manually. It also did not uniformly apply everything I requested, especially when dealing with the Affiliations and Contact sections, so I used its responses to replicate the formatting.

I noticed my editing shifted my headshot in further on the header than intended, so I used Copilot to modify my CSS:
    **Prompt:** Please return the headshot to the edge of the Header border. It should fit right inside the border-radius, and not have padding because it is not text.

    It changed "padding: 0 25px;" to "padding: 0;"

**10/14/26**

When beginning to implement different browser size accessibility, I noticed that the readings' instructions warped my images horizontally if the browser was too small.
    **Prompt:** Right now, the img rule in css and viewport metadata makes it so my images are overly condensed when the browser width is decreased, like a laptop not in full screen or a mobile device. Please make it so the header shrinks instead of the images being horizontally warped. Also, make the images in the photo-cards show as one column instead of 3 on mobile using media queries.
    **Response:** Updated the responsive layout:
    The header wraps instead of squeezing its headshot; the headshot keeps its proportions, and header text scales down with the viewport.
    Photo cards switch to a single column at widths up to 700px.
    The page retains a single viewport declaration.
    The changed files pass git diff --check. A repository-wide check still reports an existing whitespace issue in AI-Use.md, which I left untouched.
    **Follow up prompt:** Instead of wrapping the header, make it as wide as the browser plus the original padding. Shrink everything in the header proportionally to match the width of the browser.
    Follow up response: The header now stays on one line and scales its headshot, text, navigation, spacing, and logo with the viewport. It keeps its existing margins and padding; the photo cards still stack into one column on mobile. CSS whitespace validation passed for style.css.
    **Follow up prompt:** Please modify my media queries to use min-width for mobile-first priority viewing. The web browser interface should stay the same, but min-width needs to be used so that it works well on mobile.
    **Follow up response:** Made style.css mobile-first: galleries stack by default, switch to rows at min-width: 701px, and the existing full-size header styling returns at min-width: 1601px. The header’s proportional sizing is now in the base styles. No max-width media queries remain. The whitespace check still flags trailing spaces on an existing .gallery2 img border declaration; I left it unchanged.
    **Follow up prompt:** Implement two more breakpoints to accomodate for min-width of 333px and 666px on mobile
    **Follow up response:** Added the mobile breakpoints at min-width: 333px and min-width: 666px in style.css. They progressively scale the header elements while keeping the galleries stacked until the existing 701px breakpoint. There are now four min-width breakpoints total: 333px, 666px, 701px, and 1601px. git diff --check still flags trailing whitespace on an existing .gallery2 img declaration; I left that line unchanged.
    **Follow up prompt:** Please restore the responsive header sizing that shrinks the header to browser width plus padding instead of wrapping and horizontally distorting images
    **Follow up response:** Restored the responsive header sizing in style.css. The header stays on one line within its available width, and its flex items can shrink; the headshot now scales inside its anchor while keeping a square shape and using object-fit: cover to prevent distortion. The existing min-width breakpoints remain in place, and git diff --check passes.

While applying a grid to my affiliations, I was bothered by inconsistent spacing and centering.
    **Prompt:** Please remove the extra space below affiliations and add 5px of padding between the text and the edge of the background for each li. Also, please vertically center each li within its background. Keep the grid formatting, do not use flexbox
    **Response:** Updated style.css: the Affiliations layout now has two grid rows instead of five, removing the unused space below it. Each affiliation item has 5px padding and centers its text vertically using CSS Grid. No flexbox was added.

When testing the preview on mobile, the smaller header was difficult to see. I had Copilot move the columns as the browser gets smaller in the same way as the photo cards.
    **Prompt:** Instead of shrinking the view on mobile, make it so the header switches from 4 columns to 1. order (top to bottom): headshot, name, welcome, nav, logo. match current formatting to keep nice aesthetics and rounded corners
    **Resoponse:** The header currently stays in a single flex row, so its four sections compress on narrow screens. I’ll add a mobile-only one-column grid and flatten the title wrapper there so the name and welcome message can occupy separate rows in the requested order.

**10/15/26**

While formatting, I ran into an issue, so I used Copilot to troubleshoot.
    **Prompt:** Why is my Affiliations ul indented to the left? My code looks consistent for left and right alignment but visually there's more of a left margin
    **Response:**The extra inset comes from the browser’s default padding on <ul>, not from a left/right mismatch in your CSS. In style.css, you set margin-left and margin-right to 50px, but don’t reset the list’s padding. Browsers typically add about 40px of left padding to a <ul>, so the grid starts roughly 40px farther in from the left than from the right. Keep the margins and remove that default padding:
        #Affiliations ul {    
            margin-left: 50px;    
            margin-right: 50px;    
            padding-inline: 0;    
            display: grid;    
            /* ... */
        }
    list-style-type: none on the <li>s removes the bullets, but it doesn’t remove the <ul>’s padding            
**11/3/26** 

I noticed the images in my format2 cards were cut off when decreasing browser width, and used copilot to correct the issue.
    **Prompt:** between different breakpoints, the images in the format2 style article cards are cut off when decreasing browser width. Instead of changing the image ratio, fix my media queries so the images maintain the ratio and stack like the images from format1 cards.
    **Response**: Updated the media queries in style.css: format2 galleries now keep the image stacked below the description until the viewport reaches 1000px, then switch to a side-by-side layout. The existing 4:3 image ratio is unchanged. The stylesheet diff check passes, and your navigation margin change is preserved.
    **Follow-up Prompt:** They should stack as soon as there is not enough space for the proper ratio. Do not let the ratio be modified at all when changing browser width.
    **Follow-up Response:** Replaced format2’s fixed viewport breakpoint with an auto-fitting grid in style.css. The description and image now stack when the card cannot fit two 350px columns; otherwise, they sit side by side. The existing 4:3 image ratio is unchanged and the images are vertically centered beside the description. The stylesheet diff check passes.

**11/11/26**

For the JavaScript lab, I prompted Copilot to add a JavaScript function without affecting the HTML or CSS. 
    **Prompt:** Without editing my HTML or CSS, help me write a JavaScript function to change these colors:
        --myRed: #DF2201;
        --myYellow: #FFF7B6;
        --myBlue:#0073BA;
        --myLightBlue:#D5E3E9;
    to these colors:
        --myDarkModeRed: #FF6B54;
        --myDarkModeYellow: #332F18;
        --myDarkModeBlue: #4DB8FF;
        --myDarkModeLightBlue:#1B2D36;
    **Response:** Use JavaScript to override the existing CSS variables at runtime—no HTML or CSS edits needed:
        function applyDarkModeColors() {  
            const root = document.documentElement;  root.style.setProperty('--myRed', '#FF6B54');  root.style.setProperty('--myYellow', '#332F18');  root.style.setProperty('--myBlue', '#4DB8FF');  root.style.setProperty('--myLightBlue', '#1B2D36';}    
        applyDarkModeColors();
    This works for styles that use var(--myRed), var(--myYellow), and the other original variable names.   
    **Follow-up Prompt:** How can I call this in the navList in the new li a I added for a dark mode toggle?
    **Follow-up Response:**  navList is a CSS class, not a function. Your applyDarkModeColors() function is in utilities.js, but that file isn’t currently included in index.html. Also, the call at the bottom of utilities.js applies dark mode as soon as the page loads.
        For a click-to-toggle, give the link an ID:
            li><a class="navList" href="#" id="darkModeToggle">Dark Mode</a></li>
        Then load the script near the end of <body> in index.html:
            <script src="utilities.js"></script>
        In utilities.js, remove the automatic applyDarkModeColors(); call and add a toggle handler. You’ll also need a light-mode function to restore the original colors:
            function applyLightModeColors() {  
                const root = document.documentElement;  
                root.style.setProperty('--myRed', '#DF2201');  
                root.style.setProperty('--myYellow', '#FFF7B6');  
                root.style.setProperty('--myBlue', '#0073BA');  
                root.style.setProperty('--myLightBlue', '#D5E3E9');
                }
            let isDarkMode = false;
            document.getElementById('darkModeToggle').addEventListener('click', (event) => {  
                event.preventDefault();  
                isDarkMode = !isDarkMode;  
                if (isDarkMode) {    
                    applyDarkModeColors();  
                } else {    
                    applyLightModeColors();  
                    }
                });
        That way, the page starts in light mode and each click switches between the two themes.
    **Follow-up Prompt:** The colors don't change when I press the Dark Mode toggle, how can I troubleshoot this?
    **Follow-up Response:** I found the cause: the click handler calls applyDarkModeColors(), but that function is missing from utilities.js. The click will raise a ReferenceError, so the theme never changes. I’ll add the missing function and make light-mode reset to the stylesheet defaults.
    **Note:** I decided to change from the dark mode colors to an inverted and more muted palette different from what's listed above

**11/12/26**

I decided I wanted to change my Dark Mode Toggle function from a hyperlink to a button within my navigation. However, the text color wasn't changing as I updated my CSS to include a button property.
    **Prompt:** 
        button{
            color: var(--myLightBlue);
            background-color: var(--myBlue);
            font-size: 1.5625vw;
            border-radius: 0.625vw;
            font-family: var(--bodyFont);
        }
    why doesn't the color show up as light blue?
    **Response:**Your button has class="navList" in index.html. The .navList rule in style.css sets its color to var(--myBlue), and a class selector is more specific than the button selector—so it overrides button { color: var(--myLightBlue); }.

    To make the button text light blue, add a more specific rule:
        button.navList {    
            color: var(--myLightBlue);
        }
    Or remove the color from .navList if it’s only meant to style links.
    **Follow-up Prompt:** Please center the text inside of my navigation in CSS and increase the font size of the button text so it matches the font size of the other navigation options. Then, update my media queries the new button is included in the mobile-first styling. Do not change my HTML or JavaScript, and do not change CSS outside of the specifically requested properties.
    **Follow-up Response:** Updated style.css to center the navigation by removing the left offsets, and matched the button text size to the other options at each responsive breakpoint, including mobile. No HTML or JavaScript was changed. git diff --check passes.
    **Follow-up Prompt:** Now, decrease the padding between each li element and the button so that the headshot image is the exact same height as the full header, lines up with the outline, and the navigation doesn't expand the header any taller than the headshot.
    **Follow-up Response:** Reduced the navigation’s vertical gap at desktop breakpoints and removed its extra top/bottom margins in style.css. This gives the navigation more room to fit within the headshot’s height, so it shouldn’t make the desktop header taller. At widths up to 700px, the existing layout stacks the navigation below the headshot, so the header will still be taller than the image there. git diff --check passes.

I wanted my button to read "Light Mode" when the browser is in Dark Mode, and used Copilot to update my utilities.js file to do so.
    **Prompt:** How do I make my darkModeToggle button change to read "Light Mode" when the browser is already in dark mode?
    **Response:** The button now switches its label with the theme: it reads “Light Mode” when dark mode is active, and “Dark Mode” when light mode is active. I removed the inline click handler so it won’t conflict with the toggle listener. Updated utilities.js and index.html. I couldn’t run the JavaScript syntax check because the tool call was denied.
I did not request it to update HTML and was concerned about it, so I followed up on the edits. I had already removed that change, however, when reviewing whether to keep or undo the new changes.
    **Follow-up Prompt:** where did you update index.html?
    **Follow-up Response:** I had updated index.html:33, removing the onclick="applyDarkModeColors()" attribute from the button. You’ve undone that change, so the inline handler is back.

I decided I wanted to use "Typed" by Matt Boldt as a 3rd party JavaScript library to display my about section. However, I imported the CDN in the wrong spot and had to troubleshoot with Copilot.
    **Prompt:** I've begun to implement Typed by Matt Boldt. Why isn't it working on my about section, and how do I fix it?
    **Response:** Typed.js wasn’t working because utilities.js initializes new Typed(...) before the Typed.js library had loaded. I reordered the scripts in index.html so Typed.js loads first. The diff check flagged trailing whitespace on the existing </main> line; I left that unrelated line unchanged.
    **Follow-up Prompt:** Now it's cutting off my text after "Business Management", how do I fix it?
    **Follow-up Response:** Your Typed.js string is plain text, but Typed.js defaults to HTML parsing. The ampersand in “Business Management & Information Science” can interfere with that parsing; setting contentType: 'text' is the focused fix.
I ended up removing the change so that I could still include page breaks as HTML in the text. I changed the ampersand to "and".

I also wanted to add "Slick" by Ken Wheeler to my projects section as a carousel, and used Copilot to create a guide to do so.
    **Prompt:** https://kenwheeler.github.io/slick/ I want to add slick to my "Projects" and make each card a carousel. Without changing anything in any of my files, would this work? If so, walk me through implementing it.
    **Response:** Yes—Slick can turn your project cards into a carousel, but it won’t work without adding its dependencies and initialization to your files. Slick is a jQuery plugin, and your project currently has six <article> cards in the Projects section at index.html:44.

    If you mean one carousel that cycles through those project cards, here’s the general setup:

    Load Slick’s CSS in the <head>, before your own style.css, so your styles can override it if needed. Slick’s documentation provides slick.css and the optional slick-theme.css.
    Wrap the project articles in a <div class="projects-carousel">, keeping the Projects heading outside the wrapper. Each article becomes one slide.
    Load the scripts in order near the end of the page: jQuery, Slick, then utilities.js. Your Slick initialization must run after both libraries are loaded.
    Initialize the wrapper in utilities.js:

    $('.projects-carousel').slick({  slidesToShow: 1,  slidesToScroll: 1,  dots: true,  arrows: true,  infinite: false,  adaptiveHeight: true});
    One card per slide is a sensible starting point since each card has substantial text and images. I’d leave autoplay off so visitors control the pace.
    You may also want a small CSS adjustment: your current style.css gives consecutive project articles a top margin. Once the articles are carousel slides, check the spacing and remove that margin for slides if it looks off.

    If instead you mean a separate image carousel inside each project card, that’s a different setup: your .gallery containers already group multiple images, but the .gallery2 containers also include descriptions and currently have just one image (index.html:49, index.html:84). Slick would need to target image-only containers, and a one-image container won’t provide much to slide through.

    I haven’t changed any files. The Slick documentation has its installation instructions and options.
    **Follow-up Prompt:** Write me a new CSS file with the Slick CSS in it, and make sure the HTML calls to it also.
    **Follow-up Response:** Created slick-vendor.css to import Slick’s official CSS and theme, and linked it in index.html before your style.css, so your own styles can override Slick’s.

    The file loads Slick’s CSS from jsDelivr, so it requires an internet connection. This adds the styles only; Slick still needs its JavaScript, jQuery, and initialization code to create a working carousel. git diff --check flagged existing trailing whitespace on the </main> line; I left it unchanged.
    **Follow-up Prompt:** Give me a block of HTML I can copy and paste into index.html to load the scripts you mentioned.
    **Follow-up Response:** At the bottom of index.html, replace the existing utilities.js script tag with this block, so the libraries load before your code:
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script src="utilities.js"></script>
    Typed.js and ScrollReveal are already loaded in your <head>. Also, your Slick initialization in utilities.js targets .slickClass, so the element you want to make into a carousel must have that class.
    **Follow-up Prompt:** That didn't work and now none of my javaScript works.
    **Follow-up Response:** I found the cause: the three script tags at the bottom use a non-breaking space before src, so the browser doesn’t recognize their src attributes and none of those scripts load. I also see the Slick class is on the whole Projects section, which would make the heading a slide; I’ll fix both so the carousel targets only the project cards.
    **Follow-up Prompt:** Can I move the Slick arrows to the bottom or make them bigger and overlaid on the cards?
    **Follow-up Response:** Yes. Your Slick setup has arrows enabled, and you can style them in style.css—no HTML changes needed. Add one of these options after your existing rules.

        Larger arrows overlaid on the cards:
            .slickClass .slick-prev,.slickClass .slick-next {    z-index: 2;    width: 44px;    height: 44px;    background: rgba(0, 0, 0, 0.65);    border-radius: 50%;}.slickClass .slick-prev {    left: 12px;}.slickClass .slick-next {    right: 12px;}.slickClass .slick-prev::before,.slickClass .slick-next::before {    color: white;    font-size: 30px;    opacity: 1;}
        Arrows below the card, with dots centered between them:
            .slickClass {    margin-bottom: 50px;}.slickClass .slick-prev,.slickClass .slick-next {    top: auto;    bottom: -35px;    transform: none;}.slickClass .slick-prev {    left: 20px;}.slickClass .slick-next {    right: 20px;}.slickClass .slick-dots {    bottom: -35px;    left: 50%;    width: auto;    transform: translateX(-50%);}
    The second option places the controls in a row below the cards; the margin reserves space for them.
    **Follow-up Prompt:** The second one did not work
    **Follow-up Response:** The previous rules relied on Slick’s stylesheet to position the arrows. I updated slick-vendor.css to explicitly position the arrows and dots, and reserve space below the cards for them. Try a hard refresh to reload the CSS. The arrows should now sit below the card, with dots centered between them.
    **Follow-up Prompt:** Make them larger, #DF2201 in light mode, and #FFF7B6 in dark mode. Move them to bookend the dots, with only 5px between the dots and the arrows on each side.
    **Follow-up Response:** Updated slick-vendor.css: the arrows are larger and use var(--myRed), which resolves to #DF2201 in light mode and #FFF7B6 in dark mode. They now bookend the centered dots with a 5px gap.

    The placement is calculated for your current six project slides; if you add or remove slides, the arrow offsets may need adjusting.
    **Follow-up Prompt:** Only updating style.css, align the gallery2 images so that there is only 15px right padding from the edge of the card.
    **Follow-up Response:** Updated only style.css: .gallery2 now fills the card’s content width, and its images align to the right with a -5px margin. Since the card has 20px padding, that leaves 15px between each image and the card’s right edge. git diff --check passes.
    **Follow-up Prompt:** Now, reduce the space between the descriptions and the images to 20px.
    **Follow-up Response:** Updated only style.css. The images now fill their grid cells, reducing the extra visual space; the 15px column gap plus the existing 5px rightward offset gives 20px between the grid columns while preserving the 15px inset from the card’s right edge. Vertical spacing between stacked descriptions and images is also 20px. git diff --check passes.
    **Follow-up Prompt:** Do that without increasing the image width to 100%. I want to keep it at 60-70%.
    **Follow-up Response:** Changed only style.css. The images remain at 70% width; I reduced the descriptions’ right padding to 5px. Combined with the 15px column gap, that gives 20px of spacing. git diff --check passes.
    **Follow-up Prompt:** That still doesn't work -- I want the edge of the text 20px away from the border of the image.
    **Follow-up Response:** Updated only style.css. The gallery now uses a 20px flex gap, with images at 65% width and still 15px from the card’s right edge. Below 900px, descriptions and images stack vertically with the same 20px gap. git diff --check passes.
I still did not like the formatting, so I ended up adjusting it myself.

I wanted to ensure my media queries were up-to-date with all of the new changes I made, so I switched to Claude due to the Microsoft outage and asked it to update anything not yet reflected.
    **Prompt:** I ignored that change, and decided to leave as is. I will attach the current state of my files. Please update all media queries (matching the current style) to reflect changes to the base css that are not reflected in the media queries yet. 
    **Response:** I’ve updated every media query. It’s a drop-in replacement for the five @media blocks in style.css, and nothing in your base rules or HTML/JS changes. Delete your current @media blocks (everything from @media (min-width: 333px) through the end of @media (max-width: 700px)) and paste this in. Keep your .footer rule below it.
        What I added, using the same max() and clamp() pattern as your existing header values:
            Dark Mode button: border-radius and padding now scale at 333px and 666px. They get fixed values at 1601px (10px radius) and in the mobile stacked layout (10px radius, matching the nav box).
            Headshot corners: the 0.5vw radius from the base rule now scales at 333px and 666px, so it stays proportional until it reaches the fixed 8px you already had at 1601px.
            Name and welcome left margin: the 1.875vw base margin now scales at 333px and 666px. It already had a fixed 30px at 1601px, and the mobile layout still zeroes it out.
        Not changed:
            Your --myBlue overrides at 333px and 666px, and the .gallery2 styles, which your auto-fit grid already handles without a media query.
            Everything below the header: section headings, cards, Affiliations, Contact, and the Slick arrows. Those use fixed pixel sizes and margins (like the 50px side margins), so on a phone they take up a lot of the screen. The arrows are also positioned with a hardcoded calc(50% - 131px). I left these out because you asked only for existing media queries to catch up. I can add mobile scaling for them if you’d like.
    **Follow-up Prompt:** Override the alignment on the format2 cards so that the image is centered when it is below the text. Update the mobile scaling that you didn't change yet.
    **Follow-up Response:** Two changes, both in style.css.
        1. Center the format2 image when it stacks
        Your grid stacks on its own (auto-fit), so no media query can detect it. A container query on the grid can. Two columns fit once the grid is at least 715px wide (2 × 350px minimum column + 15px gap).
        First, add one line to your existing .gallery2 rule:
        css
        .gallery2{
            container-type: inline-size;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
            column-gap: 15px;
            row-gap: 20px;
            align-items: center;
            width: 100%;
        }
        Then add this right after your #borderexception rule, before the media queries:
        css
        @container (width < 715px) {
            .gallery2 img {
                justify-self: center;
                margin-right: 0;
            }
        }
        Side by side, the image stays right-aligned with its 15px inset. Stacked, it is centered at the same 70% width.
        2. Mobile scaling for the rest of the page
        Replace your current @media (max-width: 700px) block with this. The first part is your existing block, with only the header margin added. Everything from .section down is new.
        css
        @media (max-width: 700px) {
            :root {
                --mobileMargin: clamp(10px, 4vw, 28px);
                --mobilePad: clamp(12px, 3.5vw, 20px);
            }
            header {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
                gap: 12px;
                padding: 12px;
                margin: 15px var(--mobileMargin);
            }
            header > a {
                grid-row: 1;
                justify-self: center;
                width: min(100%, 220px);
            }
            .titles {
                display: contents;
            }
            #name {
                grid-row: 2;
                margin: 0;
                text-align: center;
                font-size: clamp(28px, 8vw, 40px);
            }
            #welcome {
                grid-row: 3;
                margin: 0;
                text-align: center;
                font-size: clamp(16px, 4vw, 22px);
            }
            nav {
                grid-row: 4;
                justify-self: stretch;
                margin: 0;
            }
            nav ul {
                width: fit-content;
                margin: 0 auto;
                gap: 10px;
                padding: 12px 20px;
                border-radius: 10px;
            }
            .navList {
                font-size: 18px;
            }
            button {
                border-radius: 10px;
                padding: 5px 10px;
            }
            nav button {
                font-size: 18px;
            }
            nav li {
                font-size: 16px;
                margin-left: 0;
            }
            .headshot {
                border-radius: 8px;
            }
            .personalLogo {
                grid-row: 5;
                justify-self: center;
                margin: 0;
                font-size: clamp(36px, 10vw, 56px);
            }

            /* Section headings and About */
            .section {
                font-size: clamp(24px, 6vw, 40px);
                margin: 15px var(--mobileMargin);
                padding: 0 var(--mobilePad);
            }
            #about {
                font-size: clamp(18px, 4.5vw, 30px);
                margin: 15px var(--mobileMargin);
                padding: 0 var(--mobilePad);
            }

            /* Text */
            p {
                font-size: clamp(16px, 4vw, 25px);
            }
            h3 {
                font-size: clamp(22px, 5.5vw, 35px);
            }
            .description {
                font-size: clamp(17px, 4.5vw, 30px);
            }
            .photo-card p {
                font-size: clamp(15px, 3.8vw, 25px);
            }

            /* Project cards */
            article {
                margin-left: var(--mobileMargin);
                margin-right: var(--mobileMargin);
                padding: var(--mobilePad);
            }

            /* Affiliations: one column */
            #Affiliations ul {
                margin-left: var(--mobileMargin);
                margin-right: var(--mobileMargin);
                grid-template-columns: 1fr;
                grid-template-rows: none;
            }
            #Affiliations li {
                font-size: clamp(16px, 4vw, 25px);
                margin-left: 0;
            }
            #a1, #a2, #a3, #a4 {
                grid-column: 1;
                grid-row: auto;
            }

            /* Contact */
            #contactInformation {
                margin: 15px var(--mobileMargin);
                padding: 10px var(--mobilePad);
            }

            /* Footer (higher specificity because .footer sits below the media queries) */
            footer .footer {
                font-size: clamp(16px, 4vw, 25px);
            }
        }
        Margins and padding: the 50px side margins become --mobileMargin (10px to 28px). The section headings, About text, cards, Affiliations, and Contact all use it, so their edges still line up like on desktop.
        Font sizes: all of them use clamp() and shrink with the viewport. They max out at your current desktop sizes.
        Affiliations: the 8-column grid would crush “MSU College of Communication Arts and Sciences” on a phone. The four items stack in one column, in HTML order. I also zeroed their 10px left margin so they match the headings’ edges.
        Widths over 700px: nothing changes there. They keep your current desktop values.
        Slick arrows: I was wrong to flag these earlier. calc(50% - 131px) is measured from the center, and the dots are centered too, so the arrows already bookend the dots at any width. They only break if the slider is narrower than about 262px. I left slick-vendor.css alone.
After struggling with Claude's suggestions, I switched to Gemini.
    **Prompt:** what in this css is causing the image to not be centered in the gallery2 format?
    **Response:** The image is not centered because .gallery2 is missing horizontal alignment while .gallery2 img is set to width: 70%;.
    In CSS Grid, align-items: center only aligns items vertically (top-to-bottom), while horizontal alignment defaults to the left (start). Because your images only take up 70% of their grid cell's width, they sit flush against the left edge of their column.

    How to Fix It

    You have two simple ways to center the images horizontally:
    • Option 1: Add justify-items: center; to .gallery2
    This tells the CSS grid to horizontally center every item inside its column cell.css
    .gallery2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
        column-gap: 15px;
        row-gap: 20px;
        align-items: center;
        justify-items: center; /* Centers items horizontally */
        width: 100%;
    }
    Use code with caution.
    • Option 2: Add margin: 0 auto; to .gallery2 img
    Because .gallery2 img already has display: block; and a set width (70%), adding automatic left and right margins will push it into the center of its container.css
    .gallery2 img {
        width: 70%;
        margin: 0 auto; /* Centers the block element horizontally */
        height: auto;
        display: block;
        object-fit: cover;
        aspect-ratio: 4/3;
        border-radius: 10px;
        border: 2px solid var(--myBlue);  
    }
    Use code with caution.
    (Note: If your images are wrapped inside a <figure> or <div class="photo-card"> inside .gallery2, Option 2 is the better choice because .photo-card has width: 100%;, meaning centering the card won't center the 70% image inside it.)
    Are the images placed directly inside .gallery2, or are they wrapped inside a .photo-card or <figure> tag? Let me know if you also want to center any captions underneath them!
**Follow-up Prompt:** Now help me wrap the header so the items are centered and stacked when in mobile. I want this site to work on mobile and desktop
**Follow-up Response:** To make your header stack and center cleanly on mobile while keeping your horizontal layout on desktop, design mobile-first (stacking by default) and use a @media (min-width: 666px) query to switch back to your row layout on larger screens.
Currently, your base header has flex-wrap: nowrap;, large 50px side margins, and tiny vw font sizes that make everything squeeze together on a phone.
    Step 1: Update Your Base CSS (Mobile-First Stacked Layout)
    Replace your current header, header > a, .headshot, .titles, nav, and .personalLogo base rules with these mobile-friendly defaults:
    css
    header {
        background-color: var(--myYellow);
        display: flex;
        flex-direction: column; /* Stacks items vertically on mobile */
        align-items: center;    /* Centers items horizontally */
        text-align: center;     /* Centers text inside titles and nav */
        gap: 15px;
        border: 2px solid var(--myRed);
        border-radius: 10px;
        margin: 15px 20px;      /* Smaller side margins so mobile has room */
        padding: 20px 15px;
    }
    header > a {
        width: 140px;           /* Fixed, readable headshot size on mobile */
        flex: none;
    }
    .headshot {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 10px;    /* Rounded on all corners when stacked */
        display: block;
        margin: 0;
    }
    .titles {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .titles h1,
    .titles h2 {
        margin: 0;              /* Removes desktop left offset on mobile */
    }
    #name {
        color: var(--myRed);
        font-size: 32px;        /* Readable mobile font size instead of tiny vw */
        font-family: var(--headerFont);
        font-weight: 400;
    }
    #welcome {
        color: var(--myBlue);
        font-size: 20px;
        font-family: var(--bodyFont);
        font-weight: 200;
    }
    nav {
        width: 100%;
    }
    nav ul {
        list-style: none;
        display: flex;
        flex-direction: row;    /* Puts nav links side-by-side on mobile */
        flex-wrap: wrap;        /* Wraps links onto a new line if screen is very narrow */
        justify-content: center;
        gap: 12px;
        background-color: var(--myLightBlue);
        border-radius: 8px;
        padding: 12px;
        margin: 0;
    }
    .navList,
    nav button {
        font-size: 16px;
    }
    .personalLogo {
        font-family: "Monoton", sans-serif;
        font-weight: 30;
        color: var(--myRed);
        font-size: 40px;
        margin: 0;
        white-space: nowrap;
    }
    Use code with caution.
    Step 2: Switch to Horizontal Layout on Desktop (@media (min-width: 666px))
    Remove your @media (min-width: 333px) block (since 333px is still a phone width, which caused desktop styles to trigger too early) and update your @media (min-width: 666px) block so desktop gets your original horizontal design:
    css
    @media (min-width: 666px) {
        :root {
            --myBlue: #003D64;
        }
        header {
            flex-direction: row;    /* Switches back to side-by-side row */
            flex-wrap: nowrap;
            text-align: left;
            gap: max(1.25vw, 4px);
            margin: 15px 50px;      /* Restores wider desktop margins */
            padding: 0 15px 0 0;    /* Restores flush-left headshot spacing */
        }
        header > a {
            width: auto;
            flex: 0 1 clamp(125px, 18.75vw, 300px);
        }
        .headshot {
            border-radius: clamp(3px, 0.5vw, 8px) 0 0 clamp(3px, 0.5vw, 8px);
        }
        .titles {
            align-items: flex-start;
            flex: 1 1 auto;
        }
        .titles h1,
        .titles h2 {
            margin-left: clamp(12px, 1.875vw, 30px);
        }
        #name {
            font-size: clamp(29px, 4.375vw, 70px);
        }
        #welcome {
            font-size: clamp(17px, 2.5vw, 40px);
        }
        nav {
            width: auto;
            margin-left: auto;
            margin-right: auto;
            flex: 0 1 auto;
        }
        nav ul {
            flex-direction: column; /* Restores vertical nav stack on desktop */
            gap: clamp(8px, 1.25vw, 20px);
            padding: clamp(16px, 1.5vw, 40px);
            border-radius: clamp(4px, 0.625vw, 10px);
        }
        .navList {
            font-size: clamp(12px, 1.875vw, 30px);
        }
        button {
            border-radius: clamp(4px, 0.625vw, 10px);
            padding: clamp(3px, 0.3125vw, 5px) clamp(6px, 0.625vw, 10px);
        }
        nav button {
            font-size: clamp(12px, 1.875vw, 30px);
        }
        nav li {
            font-size: clamp(10px, 1.5625vw, 25px);
        }
        .personalLogo {
            margin-left: clamp(12px, 1.875vw, 30px);
            margin-right: clamp(12px, 1.875vw, 30px);
            font-size: clamp(40px, 6.25vw, 100px);
        }
    }
    Use code with caution.
    Key Changes That Fix Mobile
    • Removed @media (min-width: 333px): Most smartphones are 360px to 430px wide, so a 333px breakpoint forced phones into your desktop layout. Starting the desktop layout at 666px (or 768px) keeps phones in the stacked view.
    • Replaced vw units on mobile with px: On a 375px phone screen, 1.875vw shrinks text down to 7px (unreadable). Using fixed px sizes on mobile keeps buttons and titles legible.
    • Adjusted side margins: margin: 15px 50px takes up 100px of horizontal space, leaving very little room on a phone screen. Switching to 20px on mobile gives your content breathing room.
    Would you like help adjusting the 50px side margins on your <main> sections (article, #Affiliations, #contactInformation) so the rest of your page also fits nicely on mobile screens?
When confirming these changes would work with my HTML and JavaScript, Gemini pointed this out:
    However, looking at your JavaScript alongside your HTML, there are two subtle bugs in your existing code (one with Dark Mode and one with Slick Carousel) that you will want to fix so everything works smoothly on mobile and desktop:

    1. Dark Mode Double-Trigger Bug

    In your HTML, your button has an inline onclick attribute:
    html
    <button onclick="applyDarkModeColors()" id="darkModeToggle">Dark Mode</button>
    Use code with caution.
    And in your JavaScript, you also attached an addEventListener('click', ...) to the same button:
    javascript
    darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    ...
    Use code with caution.
    • What happens: Every time you click the button, both functions run. When switching back to Light Mode, addEventListener removes the dark mode properties, and onclick="applyDarkModeColors()" immediately turns them back on.
    • How to fix it: Remove onclick="applyDarkModeColors()" from your HTML button so only your JavaScript event listener controls it:html
    <button id="darkModeToggle">Dark Mode</button>
    Use code with caution.

    2. Slick Carousel & Typed.js (adaptiveHeight: true)

    Your Slick Carousel uses adaptiveHeight: true, and your Typed.js animation types out a multi-line paragraph inside #about.
    • What happens: Neither interferes with the header CSS at all. However, on mobile screens, Slick's default left and right arrows (.slick-prev and .slick-next) sit slightly outside the container (-25px). Because your article elements currently have margin-left: 50px; margin-right: 50px;, the arrows fit on desktop, but if you shrink those margins on mobile, the arrows could get cut off at the edge of the screen.
    • How to fix it: Keep at least 25px to 30px of left/right margin on .slickClass (or article) on mobile so the Slick navigation arrows remain clickable and visible.

    Summary

    Your ScrollReveal, Typed.js, Slick, and Dark Mode functions do not touch <header> at all, so the stacked mobile header CSS is 100% safe to apply.
    Would you like to see the CSS for the bottom half of your page (<main>, article, #Affiliations, and #Contact) to make sure the margins and Slick arrows look great on mobile too?
After making the suggested changes, I confirmed the accuracy of my CSS. It suggested altering my media queries, and I instructed it to do so at 3 breakpoints. Those are now in my style.css file, and the old/edited ones are in Old-Media-Queries.md.

After all of the CSS edits, there were still some errors to take care of with the header.
    **Prompt:** I need to make some edits to my header still. The headshot should remain square even in desktop view, and should always line up against the borders of the header. The navigation should also be wider so that the button does not wrap to two lines, and it shouldn't make the header taller than the headshot. When in mobile, the four items (headshot, name and welcome, navigation, and logo) should all stack, centered on the page.
    **Response:** To achieve that exact layout across both mobile and desktop, the key on desktop is using align-items: stretch on header and making the headshot's width automatically match the header's height (height: 100%; width: auto; aspect-ratio: 1 / 1;), while giving nav ul enough breathing room and white-space: nowrap on the button.
        Here is the updated header CSS for your base mobile view and your 3 breakpoints (666px, 900px, 1601px):
        1. Base CSS (Mobile: Stacked & Centered)
        Replace your current header, header > a, .headshot, .titles, nav, nav ul, button, and .personalLogo base rules with these:
        css
        header {
            background-color: var(--myYellow);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
            border: 2px solid var(--myRed);
            border-radius: 10px;
            margin: 15px 20px;
            padding: 20px 15px;
        }
        header > a {
            display: block;
            width: 150px;
            aspect-ratio: 1 / 1;
            flex: none;
        }
        .headshot {
            width: 100%;
            height: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 10px;
            display: block;
            margin: 0;
        }
        .titles {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        .titles h1,
        .titles h2 {
            margin: 0;
        }
        #name {
            color: var(--myRed);
            font-size: 32px;
            font-family: var(--headerFont);
            font-weight: 400;
        }
        #welcome {
            color: var(--myBlue);
            font-size: 20px;
            font-family: var(--bodyFont);
            font-weight: 400;
        }
        nav {
            width: 100%;
        }
        nav ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 12px;
            background-color: var(--myLightBlue);
            border-radius: 8px;
            padding: 12px 16px;
            margin: 0;
        }
        button {
            color: var(--myLightBlue);
            background-color: var(--myBlue);
            border-radius: 8px;
            font-family: var(--bodyFont);
            padding: 6px 12px;
            white-space: nowrap; /* Keeps "Dark Mode" / "Light Mode" on one line */
        }
        nav button {
            text-align: center;
        }
        .navList {
            color: var(--myBlue);
            text-decoration: none;
        }
        .navList,
        nav button {
            font-size: 16px;
        }
        .personalLogo {
            font-family: "Monoton", sans-serif;
            font-weight: 30;
            color: var(--myRed);
            font-size: 40px;
            margin: 0;
            white-space: nowrap;
        }
        Use code with caution.
        2. Desktop Breakpoints (Square Edge-to-Edge Headshot & Wider Single-Line Nav)
        Replace the header rules inside your @media (min-width: 666px) and @media (min-width: 1601px) breakpoints with these:
        css
        /* BREAKPOINT 1: Tablet / Small Laptop (666px and up) */
        @media (min-width: 666px) {
            header {
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: stretch;   /* Stretches headshot container to full header height */
                text-align: left;
                gap: clamp(10px, 1.5vw, 24px);
                margin: 15px 50px;
                padding: 0 20px 0 0;    /* Zero top, bottom, and left padding so headshot touches borders */
                overflow: hidden;       /* Keeps headshot cleanly clipped inside the header's rounded corners */
            }
            header > a {
                width: auto;
                height: auto;
                aspect-ratio: 1 / 1;    /* Locks container into a square matching header height */
                flex: 0 0 auto;
                align-self: stretch;
            }
            .headshot {
                width: 100%;
                height: 100%;
                aspect-ratio: 1 / 1;
                object-fit: cover;
                border-radius: 8px 0 0 8px;
            }
            .titles {
                justify-content: center;
                align-items: flex-start;
                flex: 1 1 auto;
                min-width: 0;
                padding: 12px 0;
            }
            .titles h1,
            .titles h2 {
                margin-left: clamp(12px, 1.875vw, 30px);
            }
            #name {
                font-size: clamp(28px, 4vw, 68px);
            }
            #welcome {
                font-size: clamp(16px, 2.2vw, 36px);
            }
            nav {
                width: auto;
                display: flex;
                align-items: center;
                margin-left: auto;
                flex: 0 0 auto;         /* Prevents nav from shrinking and squishing the button */
                padding: 10px 0;
            }
            nav ul {
                flex-direction: column;
                flex-wrap: nowrap;
                min-width: clamp(135px, 14vw, 220px); /* Wide enough so the button never wraps */
                gap: clamp(6px, 0.9vw, 14px);         /* Compact vertical spacing so nav stays shorter than headshot */
                padding: clamp(10px, 1.2vw, 22px) clamp(16px, 1.8vw, 32px);
                border-radius: 8px;
            }
            .navList {
                font-size: clamp(13px, 1.6vw, 26px);
            }
            button {
                border-radius: 6px;
                padding: clamp(4px, 0.4vw, 6px) clamp(10px, 1vw, 16px);
            }
            nav button {
                font-size: clamp(12px, 1.4vw, 24px);
            }
            nav li {
                font-size: clamp(12px, 1.4vw, 24px);
            }
            .personalLogo {
                align-self: center;
                margin-left: clamp(10px, 1.5vw, 24px);
                margin-right: clamp(6px, 1vw, 16px);
                font-size: clamp(40px, 5.5vw, 96px);
            }
        }
        /* BREAKPOINT 2: Standard Desktop (900px and up) */
        @media (min-width: 900px) {
            .gallery {
                flex-direction: row;
            }
            .photo-card {
                width: auto;
            }
        }
        /* BREAKPOINT 3: Large Desktop / Widescreen (1601px and up) */
        @media (min-width: 1601px) {
            header {
                gap: 24px;
                padding-right: 30px;
            }
            .titles h1,
            .titles h2 {
                margin-left: 30px;
            }
            #name {
                font-size: 70px;
            }
            #welcome {
                font-size: 40px;
            }
            nav ul {
                min-width: 230px;
                gap: 14px;
                padding: 22px 34px;
                border-radius: 10px;
            }
            .navList {
                font-size: 28px;
            }
            button {
                border-radius: 10px;
                padding: 6px 18px;
            }
            nav button {
                font-size: 26px;
            }
            nav li {
                font-size: 26px;
            }
            .personalLogo {
                margin-left: 30px;
                margin-right: 20px;
                font-size: 100px;
            }
        }
        Use code with caution.
        How Each Requirement Was Solved
        • Square headshot flush with top, bottom, and left borders: Setting align-items: stretch; and padding: 0 20px 0 0; on header stretches header > a from the top border to the bottom border, while aspect-ratio: 1 / 1; forces its width to equal that exact height.
        • Wider navigation with single-line button: Adding white-space: nowrap; on button, flex: 0 0 auto; on nav, and min-width: clamp(135px, 14vw, 220px); on nav ul prevents the box from shrinking and keeps "Dark Mode" / "Light Mode" on a single line.
        • Header height driven by the headshot, not the nav: Tightening the vertical gap (clamp(6px, 0.9vw, 14px)) and top/bottom padding inside nav ul keeps the navigation box compact so the headshot sets the header's height cleanly.
        • Stacked & centered mobile view: The base CSS stacks all four direct children (a, .titles, nav, .personalLogo) in a centered column below 666px.
        Would you like to test how this looks on your screen and let me know if the navigation box width or headshot size needs any fine-tuning at tablet widths (666px–900px)?
This process took extreme amounts of trouble shooting. I will attach all of my prompts used below; the edits I chose to include are in my style.css with comments.
    **Prompt:** can I copy and replace the whole media queries above?
    **Prompt:** Why is my headshot giant? Reduce it to maximum 300 px
    **Prompt:** Instead of reducing the headshot's width, the headshot, name and welcome, navigation, and logo should stack when smaller than 768 pixels. because mobile devices start at 320 pixels, anywhere between 320-700 px should show the stacked header. use 320, 480, 768, and 1024 px as the breakpoints
    **Prompt:** In the stacked view, make the Navigation IL items vertically centered and make the background only as wide as it needs to be
    **Prompt:** how would I shrink the margins even further? I only want 5px margins on the nav
    **Prompt:** I need the headshot to be bigger and have less of a gap between the name in mobile
    **Prompt:** the headshot should always be square, with rounded edges in stacked view and half rounded/half flat in extended view.
    **Prompt:** why is the text stacking with the nav in this case? the nav could be narrower
    the second screenshot also shows an example of a non-square headshot
    **Prompt:** the border of the header should always align with the border of the sections and articles.