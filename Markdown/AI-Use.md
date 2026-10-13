Date: 10/13/26

I used AI to identify an issue with duplicate IDs because my cards with the same programming were appearing differently.
    Prompt: "why is the coffeeshop concerts card showing up differently than the others"

I prompted Copilot to fix my width and gap issues between example images, as the percentage of browser function was shrinking my images too small. 
    Prompt: "how do i use a percentage to have dynamic widths of my images? I want each image to be 30% of the width of the page iwth 5% of the width of the page as the gaps"
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
    Prompt: "i want the captions to show up right below their corresponding example image, how do i do this using the flexbox?"
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
    Prompt #1: I would like the text within the about, projects (except for the photo-card captions), affiliations, and contact sections left aligned. Please add padding between the background of these sections by 15px to my CSS and bring the text in another 10px from the edge of the backgrounds. All text should be within the same line, with the exception of the photo-card captions, regardless of if it has a background or not. Streamline the natural view of the page so it is all aligned with itself.
    Prompt #2: Please remove the vertical padding you added, that was not part of the request.
    Prompt #3: Please also restore the padding between each section
    Prompt #4: Restore margin-top above the About section, between the Affiliations section and its text, and between Affiliations and Contact.
    Prompt #5: Why did you not restore the space between the header and About? Why did you not restore the space between affiliations and study abroad? Why did you not restore the space between Contact and Affiliations?
    Prompt #6: There is still not a gap between the affiliations and study abroad sections, and there is no gap between the Contact and affiliations sections.
    Prompt #7: Please restore the original vertical padding. Keep the modified horizontal padding, but remove the new vertical padding. Then, adjust the backgrounds of the section H2s and project cards so they do not reach all the way to the edge of the brower. I would like 15 px padding.
Copilot did not understand my request to keep the original vertical padding, so I had to go back in and fix it manually. It also did not uniformly apply everything I requested, especially when dealing with the Affiliations and Contact sections, so I used its responses to replicate the formatting.

I noticed my editing shifted my headshot in further on the header than intended, so I used Copilot to modify my CSS:
    Please return the headshot to the edge of the Header border. It should fit right inside the border-radius, and not have padding because it is not text.

    It changed "padding: 0 25px;" to "padding: 0;"
