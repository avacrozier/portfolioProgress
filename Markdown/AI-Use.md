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