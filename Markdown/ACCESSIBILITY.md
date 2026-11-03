When I first submitted my link to PageSpeed, I received an accessibility flag in regards to color contrast. After flipping through different color combinations and not finding any that worked, I realized the more specific issue was with my footer.

I used slightly different shades than my original CSS had, but kept it fairly similar once I realized the issue could be fixed without changing them.

The red footer against the yellow background was less of a color issue, and more of a size issue. By increasing the size and weight of the font, I cleared the alert and reached an accessibility score of 100 for desktop. 

However, I was still in the 60s for mobile accessibility because of the font size and color of my navigation text. I changed my pre-existing media queries to use a different dark blue on the smaller browser sizes (333-700px), which got me to 100 on the mobile accessibility score as well.