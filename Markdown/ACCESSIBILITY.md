11/3/26

When I first submitted my link to PageSpeed, I received an accessibility flag due to color contrast. After flipping through different color combinations and not finding any that worked, I realized the more specific issue was with my footer.

While I thought the red text against the yellow background was a color contrast issue, the size of the font was actually at the root of the problem. The red was not distinct enough from the yellow to be used on such a small font, but was fine in other scenarios. By increasing the size and weight of the font, I cleared the alert and reached an accessibility score of 100 for desktop. 

I used slightly different shades than my original CSS had, but kept it fairly similar once I realized the issue could be fixed without changing them. I used coolors.co to compare different shades of blue, yellow, and red, and settled on #DF2201, #FFF7B6, #0073BA, and #D5E3E9.

However, I was still in the 60s for mobile accessibility scored because of the font size and color of my navigation text. I changed my pre-existing media queries to use a different dark blue (#003D64) on the smaller browser sizes (333-700px). This change increased my mobile accessibility score to 100.
