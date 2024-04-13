

# Self Profile

## Overview
This self-profile script is designed to provide a structured representation of personal information, skills, projects, achievements, and favorites for Kyle Santowski.

## Bio Section
- `name`: Kyle
- `lastname`: Santowski
- `intro`: Passionate developer with a love for coding.
- `job`: Developer
- `education`: My Degrees, Graduation Year - University
- `contact`:
  - `primary-email`: santowskikr@gmail.com
  - `secondary-email`: santowskikylerobert@gmail.com
  - `work-email`: kyle@heartofstoneclothing.com
  - `social-media`:
    - Facebook: [Heart of Stone Clothing](https://facebook.com/heartofstoneclothing)
    - Instagram: [Heart of Stone Clothing Online](https://instagram.com/heart_of_stone_clothing_online)
    - LinkedIn: [Kyle Santowski](www.linkedin.com/in/kyle-santowski-580448195)
    - Twitter: [@KyleRSantowski](https://twitter.com/@KyleRSantowski)

## Skills
- Skill 1: HTML (placeholder)
- Skill 2: CSS (placeholder)
- Skill 3: JavaScript (placeholder)

## Projects
- Project 1: Description of Project 1 [GitHub](github.com/heartofstoneclothing)
- Project 2: Description of Project 2 [GitHub](github.com/heartofstone.io)

## Achievements
- Web Design: [Certification](https://www.freecodecamp.org/certification/fcc9d8e50d8-024e-4f1d-b49e-bc2927b1692f/responsive-web-design)
- JavaScript: [Certification](https://www.freecodecamp.org/certification/fcc9d8e50d8-024e-4f1d-b49e-bc2927b1692f/javascript-algorithms-and-data-structures)
- Front End: [Certification](https://www.freecodecamp.org/certification/fcc9d8e50d8-024e-4f1d-b49e-bc2927b1692f/front-end-development-libraries)
- Data Visualization: [Certification](https://www.freecodecamp.org/certification/fcc9d8e50d8-024e-4f1d-b49e-bc2927b1692f/data-visualization)

## Usage
1. Clone this repository.
2. Open the `self_profile.vim` file in your Vim editor.
3. Modify the script with your personal information, skills, projects, achievements, etc.
4. Save the changes.

## Contributions
Contributions are welcome! Feel free to fork this repository and make improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

> <head>
>  <meta charset="UTF-8">
>  <meta name="viewport" content="width=device-width, initial-scale=1.0">
> <title>Parts of Speech</title>
>  <style>
>    /* 
>body {
  height: 100%;
  background-color: #5ca1ab;
  animation: multicolorFadeIn 1s linear infinite;
  transition: background-color 1s ease linear;
} /* base styles */
.active:hover {
  background-color: #ff00ff;
} /* hover effects if hovered */
body:not(:hover) {
  animation: delayedFadeOut 1s ease forwards;
} /* delayed fade out */
.sect-one {
  border-left: 10px double #1ce1ce;
  border-top: 10px double #facade;
  border-right: 10px solid #facade;
  border-bottom: 10px solid #1ce1ce;
  box-shadow: 10 0px 10px #f00f00;
  padding: 10px;
} /* section one*/
h1 {
  background-color: #cafe;
  font-family: Courier;
  border-left: 10px solid #1ce1ce;
  border-top: 10px solid #facade;
  border-right: 10px double #facade;
  border-bottom: 10px double #1ce1ce;
  box-shadow: 0 15x 10px #f00f00;
} /* heading */
h1:hover {
  filter: invert(100%);
  animation: hoverAndScale 0.1s alternate;
  }
@keyframes hoverAndScale {
  50% {
    transform: scale(0.95);
  }
}
} /* heading if hovered */
.collapsible {
  cursor: pointer;
  user-select: none;
  background-color: #f9f9f9;
  border-right: 3px double #ccc;
  border-left: 3px double #ccc;
} /* collapsible elements */
.collapsible:hover {
  background-color: #ddd;
} /* hover effects */
.nested-table {
  border-collapse: collapse;
  width: 100%;
} /* nested table */
.nested-table td {
  border: 2px double #ddd;
  padding: 5px;
  text-align: left;
} /* nested table td */
.nested-table th {
  background-color: #f2f2f2;
  border: 2px double #ddd;
  text-align: center;
} /* nested table th */
.parts {
  font-family: Arial;
  font-size: 20px;
  font-weight: 900;
  border-top: 2px double black;
  border-bottom: 20px double #aeaeae;
} /* parts of speech section */
.nouns {
  font-family: Helvetica;
  font-size: 16px;
  text-decoration: underline;
  padding: 10px;
  text-indent: 10px;
  animation: flyIn 1.5s ease forwards, firework 3s ease forwards;
  animation-delay: 0.5s, 0.5s, 0.5s, 0.5s;
} /* nouns section */
.nouns:hover {
  scale: 1.05;
} /* hover effects on the nouns section */
.common-nouns {
  border-left: 1px dashed #cafe;
  border-right: 1px dashed #cafe;
  border-bottom: 1px double #cafe;
  border-top: 1px double #cafe;
} /* common nouns section */
.vertical-line {
  border-left: 4px dashed black;
  border-right: 4px dashed black;
  border-bottom: 4px double black;
  border-top: 4px double black;
  margin-top: 150px;
  margin-left: 150px;
  height: 100px;
  width: 100px;
} /* vertical line */
.vertical-line:hover {
  animation: rotateAndDrop 10s ease forwards infinite;
  scale: 2;
}
@keyframes multicolorFadeIn {
  0% {
    background-color: #5ca1ab;
    background-position: 0 50%;
  }
  25% {
    background-color: #faded2;
  }
  50% {
    background-color: #bedeaf;
    background-position: -50% -50%;
  }
  75% {
    background-color: #bfaded;
  }
  100% {
    background-color: #a5d5d6;
  }
} /* animation to change colors */
@keyframes flyIn {
  25% {
    filter: blur(50%);
  }
  50% {
    background-color: red;
    transform: opacity(50%);
  }
  75% {
    filter: brightness(120%);
  }
} /* animation to translate text */
@keyframes firework {
  25% {
    transform: scale(1);
    border-left: 8px solid #deface;
    border-top: 0px solid #00beef;
    border-right: 8px solid #deface;
    border-bottom: 0px solid #00beef;
  }
  37.50% {
    transform: scale(1);
    border-left: 0px solid #00beef;
    border-top: 8px solid #deface;
    border-right: 0px solid #00beef;
    border-bottom: 8px solid #deface;
  }

  50% {
    transform: scale(1);
    border-left: 10px double #deface;
    border-top: 10px double #deface;
    border-right: 10px double #deface;
    border-bottom: 10px double #deface;
  }
  62.50% {
    transform: scale(1);
    border-left: 8px solid #00beef;
    border-top: 0px solid #00beef;
    border-right: 8px solid #00beef;
    border-bottom: 0px solid #00beef;
  }
  75% {
    transform: scale(1);
    border-left: 0px solid #00beef;
    border-top: 8px solid #00beef;
    border-right: 0px solid #00beef;
    border-bottom: 8px solid #00beef;
  }

  from {
    opacity: 0;
    transform: translateX(200%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
} /* animation to change colors */
@keyframes rotateAndDrop {
  25% {
    transform: rotate(-45deg) translate(-5px);
  }
  50% {
    transform: rotate(45deg) translate(0px);
  }
  75% {
    transform: rotate(-45deg) translate(5px);
  }
  100% {
    transform: rotate(45deg) translate(0px);
  }
} /* animation to rotate and drop */
@keyframes delayedFadeOut {
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
} /* animation to delay fade */

/*
Let's break down the CSS rules provided and define their styling effects, along with potential outcomes if each aspect is styled differently:

1. **.vertical-line**:
   - This rule styles a vertical line element.
   - Properties:
     - `border-left`, `border-right`, `border-top`, `border-bottom`: Sets the thickness, style, and color of each border of the element, creating a double-lined border.
     - `margin-top`: Specifies the spacing above the line.
     - `height`: Defines the height of the element.
   - Styling Impact:
     - Changing border properties will alter the appearance of the vertical line, affecting its thickness, style, and color.
     - Adjusting the `margin-top` property will change the spacing between the vertical line and other elements above it.
     - Modifying the `height` property will resize the vertical line.

2. **.collapsible**:
   - This rule styles a collapsible element, typically used for interactive UI components.
   - Properties:
     - `cursor`: Sets the cursor type when hovering over the element.
     - `user-select`: Specifies whether the user can select text within the element.
     - `background-color`: Defines the background color of the element.
     - `border-right`, `border-left`: Sets the border style for the left and right sides of the element.
   - Styling Impact:
     - Changing `cursor` will alter the cursor appearance, providing visual feedback to users.
     - Modifying `user-select` will control text selection behavior within the element.
     - Adjusting `background-color` will change the background appearance of the element.
     - Changing `border-right` and `border-left` will affect the border style of the element's sides.

3. **.content**:
   - This rule styles the content area of an element.
   - Properties:
     - `display`: Specifies the display behavior of the element.
     - `padding`: Sets the padding space inside the element.
     - `border`: Defines the border properties of the element.
   - Styling Impact:
     - Adjusting `display` can change how the content is rendered, such as block or inline.
     - Modifying `padding` will change the spacing between the content and the element's border.
     - Changing `border` will affect the appearance of the element's border.

4. **.active:hover** and **.collapsible:hover**:
   - These rules define hover effects for active and collapsible elements, respectively.
   - Properties:
     - `background-color`: Sets the background color of the element when hovered over.
   - Styling Impact:
     - Changing `background-color` will alter the hover effect, providing visual feedback to users when interacting with the element.

5. **.nested-table**, **.nested-table td**, **.nested-table th**:
   - These rules style nested table elements and their cells.
   - Properties:
     - `border-collapse`: Specifies the border-collapse behavior for the table.
     - `width`: Defines the width of the table or table cells.
     - `border`: Sets the border properties for table cells and headers.
     - `background-color`: Defines the background color of table headers.
     - `text-align`: Specifies the alignment of text within table cells.
   - Styling Impact:
     - Adjusting `border-collapse` will change how borders are rendered between table cells.
     - Modifying `width` will resize the table or table cells.
     - Changing `border` will affect the appearance of table borders.
     - Adjusting `background-color` will change the background color of table headers.
     - Modifying `text-align` will change the alignment of text within table cells.

6. **.parts**:
   - This rule styles a section containing parts of a component.
   - Properties:
     - `font-family`, `font-size`, `font-weight`: Sets the font family, size, and weight of the text.
     - `border-top`, `border-bottom`: Defines the border properties for the top and bottom of the element.
   - Styling Impact:
     - Changing `font-family`, `font-size`, and `font-weight` will alter the appearance of the text within the section.
     - Modifying `border-top` and `border-bottom` will affect the appearance of the borders at the top and bottom of the section.

7. **.nouns**:
   - This rule styles elements representing nouns.
   - Properties:
     - `font-family`, `font-size`, `text-decoration`: Sets the font family, size, and decoration for the text.
     - `padding`, `text-indent`: Defines padding space and indentation for the text.
     - `animation`, `animation-delay`: Specifies animations and their delays for the element.
   - Styling Impact:
     - Changing `font-family`, `font-size`, and `text-decoration` will alter the appearance of the text.
     - Modifying `padding` and `text-indent` will change the spacing and indentation of the text.
     - Adjusting `animation` and `animation-delay` will affect the animations applied to the element and their timing.

These are the key rules defined in the CSS provided, along with their styling properties and potential outcomes when styled differently. Adjusting these properties can significantly impact the visual appearance and behavior of the elements in your web project.
*/

>    */
>  </style>
</head>

<body>
  <section class="sect-one">
  <h1><u>English</u>,<i> Motherfucker,</i><br>Do You Speak It!?</h1><!-- level 1 heading -->
    </section>
  <hr><!-- horizontal line -->
  <details class="collapsible" data-type="parts-of-speech">
    <!-- parts of speech dropdown -->
    <summary class="parts">Parts of Speech</summary>
    <defs>
      <article>

      </article>
    </defs>
    <table class="parts-of-speech">
      <!-- Table for parts of speech -->
      <tr>
        <td>
          <!-- Nouns -->
          <details class="collapsible">
            <summary class="nouns"><strong>Nouns</strong></summary>
            <summary>Nouns are the largest class of words in most languages, including English.<br>They can be either a single word or a phrase.</summary>
            <table class="nested-table">
              <tr>
                <td>
                  <details class="common-nouns">
                    <summary><strong>Common Nouns</strong></summary>
                    <ul>
                      <!-- List of common nouns -->
                      <li>Table</li>
                      <li>Chair</li>
                      <li>Dog</li>
                      <li>Cat</li>
                      <li>Tree</li>
                      <li>Car</li>
                      <li>Book</li>
                      <li>Phone</li>
                      <li>Flower</li>
                      <li>River</li>
                      <li>Sky</li>
                      <li>Sun</li>
                      <li>Moon</li>
                      <li>Beach</li>
                      <li>Computer</li>
                      <li>Music</li>
                      <li>Movie</li>
                      <li>Coffee</li>
                      <li>Friend</li>
                      <li>Family</li>
                      <li>House</li>
                      <li>Door</li>
                      <li>Window</li>
                      <li>Street</li>
                      <li>City</li>
                      <li>Country</li>
                      <li>Food</li>
                      <li>Water</li>
                      <li>Air</li>
                      <li>Time</li>
                      <li>Money</li>
                      <li>Job</li>
                      <li>School</li>
                      <li>Teacher</li>
                      <li>Student</li>
                      <li>Doctor</li>
                      <li>Nurse</li>
                      <li>Hospital</li>
                      <li>Park</li>
                      <li>Child</li>
                      <li>Parent</li>
                      <li>Love</li>
                      <li>Happiness</li>
                      <li>Sadness</li>
                      <li>Anger</li>
                      <li>Fear</li>
                      <li>Joy</li>
                      <li>Peace</li>
                      <li>Dream</li>
                      <li>Goal</li>
                      <li>Success</li>
                      <li>Failure</li>
                      <li>Journey</li>
                      <li>Adventure</li>
                      <li>Color</li>
                      <li>Shape</li>
                      <li>Number</li>
                      <li>Letter</li>
                      <li>Language</li>
                      <li>Idea</li>
                      <li>Problem</li>
                      <li>Solution</li>
                      <li>Question</li>
                      <li>Answer</li>
                      <li>Challenge</li>
                      <li>Opportunity</li>
                      <li>Technology</li>
                      <li>Science</li>
                      <li>Art</li>
                      <li>Music</li>
                      <li>Dance</li>
                      <li>Sport</li>
                      <li>Game</li>
                      <li>Team</li>
                      <li>Player</li>
                      <li>Strategy</li>
                      <li>Plan</li>
                      <li>Decision</li>
                      <li>Choice</li>
                      <li>Rule</li>
                      <li>Law</li>
                      <li>Government</li>
                      <li>Democracy</li>
                      <li>Freedom</li>
                      <li>Justice</li>
                      <li>Peace</li>
                      <li>War</li>
                      <li>Conflict</li>
                      <li>Friendship</li>
                      <li>Relationship</li>
                      <li>Marriage</li>
                      <li>Celebration</li>
                      <li>Event</li>
                      <li>Memory</li>
                      <li>Experience</li>
                      <li>Adventure</li>
                      <li>Nature</li>
                      <li>Environment</li>
                      <li>Climate</li>
                      <li>Future</li>
                      <li>Keyboard</li>
                      <!-- Add more common nouns here if needed -->
                    </ul>
                  </details>
                </td>
                <td>
                  <details>
                    <summary><strong>Proper Nouns</strong></summary>
                    <table class="nested-table">
                      <!-- Table for proper nouns -->
                      <tr>
                        
                        <td>
                          <details>
                            <summary><strong>Titles & Honorifics</strong></summary>
                            <ul>
                              <li>Mr.</li>
<li>Mrs.</li>
<li>Miss</li>
<li>Ms.</li>
<li>Dr.</li>
<li>Prof.</li>
<li>Rev.</li>
<li>Hon.</li>
<li>Sir</li>
<li>Madam</li>
<li>Esq.</li>
<li>Capt.</li>
<li>Maj.</li>
<li>Col.</li>
<li>Gen.</li>
<li>Adm.</li>
<li>Sgt.</li>
<li>Cpl.</li>
<li>Pvt.</li>
<li>Fr.</li>
<li>Sr.</li>
<li>Jr.</li>
<li>Rabbi</li>
<li>Imam</li>
<li>Sheikh</li>
<li>Pastor</li>
<li>Bishop</li>
<li>Cardinal</li>
<li>Father</li>
<li>Mother</li>
<li>Brother</li>
<li>Sister</li>
<li>Duke</li>
<li>Duchess</li>
<li>Earl</li>
<li>Count</li>
<li>Countess</li>
<li>Baron</li>
<li>Baroness</li>
<li>Lord</li>
<li>Lady</li>
<li>King</li>
<li>Queen</li>
<li>Prince</li>
<li>Princess</li>
<li>Emperor</li>
<li>Empress</li>
<li>President</li>
<li>Vice President</li>
<li>Governor</li>
<li>Mayor</li>
<li>Ambassador</li>
<li>Judge</li>
<li>Justice</li>
<li>Commissioner</li>
<li>Officer</li>
<li>Director</li>
<li>Chairman</li>
<li>Chairwoman</li>
<li>CEO</li>
<li>CFO</li>
<li>COO</li>
<li>CTO</li>
<li>CMO</li>
<li>CIO</li>
<li>CISO</li>
<li>CRO</li>
<li>CDO</li>
<li>Chancellor</li>
<li>Dean</li>
<li>Professor</li>
<li>Lecturer</li>
<li>Researcher</li>
<li>Scientist</li>
<li>Engineer</li>
<li>Architect</li>
<li>Artist</li>
<li>Composer</li>
<li>Author</li>
<li>Poet</li>
<li>Playwright</li>
<li>Journalist</li>
<li>Editor</li>
<li>Photographer</li>
<li>Filmmaker</li>
<li>Actor</li>
<li>Actress</li>
<li>Musician</li>
<li>Singer</li>
<li>Composer</li>
<li>Conductor</li>
<li>Chef</li>
<li>Sommelier</li>
<li>Winemaker</li>
<li>Philanthropist</li>
<li>Activist</li>
<li>Advocate</li>
<li>Volunteer</li>
<li>Mentor</li>
<li>Coach</li>
                            </ul>
                          </details>
                        </td>

                        <td>
                          <details>
                            <summary><strong>First Names</strong></summary>
                            <ul>
                              <!-- List of first names -->
                              <li>Emily</li>
                              <li>Michael</li>
                              <li>Sophia</li>
                              <li>James</li>
                              <li>Olivia</li>
                              <li>Benjamin</li>
                              <li>Ava</li>
                              <li>William</li>
                              <li>Isabella</li>
                              <li>Samuel</li>
                              <li>Mia</li>
                              <li>Alexander</li>
                              <li>Emma</li>
                              <li>Henry</li>
                              <li>Charlotte</li>
                              <li>Jacob</li>
                              <li>Amelia</li>
                              <li>Ethan</li>
                              <li>Harper</li>
                              <li>Daniel</li>
                              <li>Abigail</li>
                              <li>Liam</li>
                              <li>Ella</li>
                              <li>Grace</li>
                              <li>Noah</li>
                              <li>Lily</li>
                              <li>Aiden</li>
                              <li>Scarlett</li>
                              <li>Lucas</li>
                              <li>Madison</li>
                              <li>Jackson</li>
                              <li>Avery</li>
                              <li>Oliver</li>
                              <li>Chloe</li>
                              <li>Sophia</li>
                              <li>Mason</li>
                              <li>Aria</li>
                              <li>Elijah</li>
                              <li>Layla</li>
                              <li>Grace</li>
                              <li>Ethan</li>
                              <li>Zoey</li>
                              <li>Benjamin</li>
                              <li>Riley</li>
                              <li>Aiden</li>
                              <li>Penelope</li>
                              <li>Logan</li>
                              <li>Nora</li>
                              <li>Caleb</li>
                              <li>Aubrey</li>
                              <li>Dylan</li>
                              <li>Lucy</li>
                              <li>Wyatt</li>
                              <li>Stella</li>
                              <li>Carter</li>
                              <li>Zoe</li>
                              <li>Jack</li>
                              <li>Aurora</li>
                              <li>Luke</li>
                              <li>Hannah</li>
                              <li>Levi</li>
                              <li>Savannah</li>
                              <li>Owen</li>
                              <li>Addison</li>
                              <li>Samuel</li>
                              <li>Natalie</li>
                              <li>Gabriel</li>
                              <li>Skylar</li>
                              <li>Anthony</li>
                              <li>Leah</li>
                              <li>Isaac</li>
                              <li>Eleanor</li>
                              <li>Daniel</li>
                              <li>Violet</li>
                              <li>Matthew</li>
                              <li>Hazel</li>
                              <li>Joseph</li>
                              <li>Lillian</li>
                              <li>David</li>
                              <li>Aurora</li>
                              <li>Andrew</li>
                              <li>Isla</li>
                              <li>Nathan</li>
                              <li>Naomi</li>
                              <li>Sebastian</li>
                              <li>Audrey</li>
                              <li>Caleb</li>
                              <li>Claire</li>
                              <li>Julian</li>
                              <li>Alice</li>
                              <li>Aaron</li>
                              <li>Florence</li>
                              <li>Adam</li>
                              <li>Ruby</li>
                              <li>Zachary</li>
                              <li>Eliana</li>
                              <li>Nolan</li>
                              <li>Sophie</li>
                              <li>Hunter</li>
                              <li>Mia</li>
                              <!-- Add more first names here if needed -->
                            </ul>
                          </details>
                        </td>

                        <td>
                          <details>
                            <summary><strong>Middle Names</strong></summary>
                            <ul>
                              <!-- List of middle names -->
                              <li>Elizabeth</li>
                              <li>James</li>
                              <li>Marie</li>
                              <li>Alexander</li>
                              <li>Grace</li>
                              <li>William</li>
                              <li>Rose</li>
                              <li>Thomas</li>
                              <li>Anne</li>
                              <li>Michael</li>
                              <li>Louise</li>
                              <li>David</li>
                              <li>Catherine</li>
                              <li>Joseph</li>
                              <li>Amelia</li>
                              <li>Patrick</li>
                              <li>Eleanor</li>
                              <li>Charles</li>
                              <li>Margaret</li>
                              <li>Edward</li>
                              <li>Jane</li>
                              <li>Benjamin</li>
                              <li>Olivia</li>
                              <li>Henry</li>
                              <li>Victoria</li>
                              <li>Robert</li>
                              <li>Charlotte</li>
                              <li>Frances</li>
                              <li>Daniel</li>
                              <li>Alice</li>
                              <li>John</li>
                              <li>Evelyn</li>
                              <li>Andrew</li>
                              <li>Sophia</li>
                              <li>Samuel</li>
                              <li>Claire</li>
                              <li>George</li>
                              <li>Abigail</li>
                              <li>Matthew</li>
                              <li>Louise</li>
                              <li>Richard</li>
                              <li>Audrey</li>
                              <li>Christopher</li>
                              <li>Grace</li>
                              <li>Timothy</li>
                              <li>Penelope</li>
                              <li>Stephen</li>
                              <li>Harper</li>
                              <li>Anthony</li>
                              <li>Elizabeth</li>
                              <li>Paul</li>
                              <li>Josephine</li>
                              <li>Peter</li>
                              <li>Isabelle</li>
                              <li>Jonathan</li>
                              <li>Ruby</li>
                              <li>Katherine</li>
                              <li>James</li>
                              <li>Emily</li>
                              <li>Ryan</li>
                              <li>Juliet</li>
                              <li>Daniel</li>
                              <li>Scarlett</li>
                              <li>Oliver</li>
                              <li>Madeline</li>
                              <li>William</li>
                              <li>Lily</li>
                              <li>Nathaniel</li>
                              <li>Hazel</li>
                              <li>Philip</li>
                              <li>Elise</li>
                              <li>Jeffrey</li>
                              <li>Seraphina</li>
                              <li>Miles</li>
                              <li>Grace</li>
                              <li>Vincent</li>
                              <li>Penelope</li>
                              <li>Patrick</li>
                              <li>Isla</li>
                              <li>Charles</li>
                              <li>Evelyn</li>
                              <li>Gregory</li>
                              <li>Eliza</li>
                              <li>Russell</li>
                              <li>Clara</li>
                              <li>Douglas</li>
                              <li>Lucy</li>
                              <li>Russell</li>
                              <li>Caroline</li>
                              <li>Morgan</li>
                              <li>Liam</li>
                              <li>Paige</li>
                              <li>Alexander</li>
                              <li>Avery</li>
                              <li>Lawrence</li>
                              <li>Aurora</li>
                              <li>Wesley</li>
                              <li>Delilah</li>
                              <li>Calvin</li>
                              <li>Celeste</li>
                              <!-- Add more middle names here if needed -->
                            </ul>
                          </details>
                        </td>

                        <td>
                          <details>
                            <summary><strong>Last Names</strong></summary>
                            <ul>
                              <li>Smith</li>
                              <li>Johnson</li>
                              <li>Williams</li>
                              <li>Jones</li>
                              <li>Brown</li>
                              <li>Davis</li>
                              <li>Miller</li>
                              <li>Wilson</li>
                              <li>Moore</li>
                              <li>Taylor</li>
                              <li>Anderson</li>
                              <li>Thomas</li>
                              <li>Jackson</li>
                              <li>White</li>
                              <li>Harris</li>
                              <li>Martin</li>
                              <li>Thompson</li>
                              <li>Garcia</li>
                              <li>Martinez</li>
                              <li>Robinson</li>
                              <li>Clark</li>
                              <li>Rodriguez</li>
                              <li>Lewis</li>
                              <li>Lee</li>
                              <li>Walker</li>
                              <li>Hall</li>
                              <li>Allen</li>
                              <li>Young</li>
                              <li>Hernandez</li>
                              <li>King</li>
                              <li>Wright</li>
                              <li>Lopez</li>
                              <li>Hill</li>
                              <li>Scott</li>
                              <li>Green</li>
                              <li>Adams</li>
                              <li>Baker</li>
                              <li>Nelson</li>
                              <li>Carter</li>
                              <li>Mitchell</li>
                              <li>Perez</li>
                              <li>Roberts</li>
                              <li>Turner</li>
                              <li>Phillips</li>
                              <li>Campbell</li>
                              <li>Parker</li>
                              <li>Evans</li>
                              <li>Edwards</li>
                              <li>Collins</li>
                              <li>Stewart</li>
                              <li>Sanchez</li>
                              <li>Morris</li>
                              <li>Rogers</li>
                              <li>Reed</li>
                              <li>Cook</li>
                              <li>Morgan</li>
                              <li>Bell</li>
                              <li>Murphy</li>
                              <li>Bailey</li>
                              <li>Rivera</li>
                              <li>Cooper</li>
                              <li>Richardson</li>
                              <li>Cox</li>
                              <li>Howard</li>
                              <li>Ward</li>
                              <li>Torres</li>
                              <li>Peterson</li>
                              <li>Gray</li>
                              <li>Ramirez</li>
                              <li>James</li>
                              <li>Watson</li>
                              <li>Brooks</li>
                              <li>Kelly</li>
                              <li>Sanders</li>
                              <li>Price</li>
                              <li>Bennett</li>
                              <li>Wood</li>
                              <li>Barnes</li>
                              <li>Ross</li>
                              <li>Henderson</li>
                              <li>Coleman</li>
                              <li>Jenkins</li>
                              <li>Perry</li>
                              <li>Powell</li>
                              <li>Long</li>
                              <li>Patterson</li>
                              <li>Hughes</li>
                              <li>Flores</li>
                              <li>Washington</li>
                              <li>Butler</li>
                              <li>Simmons</li>
                              <li>Foster</li>
                              <li>Gonzales</li>
                              <li>Bryant</li>
                              <li>Alexander</li>
                              <li>Russell</li>
                              <li>Griffin</li>
                              <li>Diaz</li>
                              <li>Hayes</li>
                              <li>Myers</li>
                            </ul>
                          </details>
                        </td>

                      </tr>
                    </table>
                  </details>
                </td>
              </tr>
            </table>
          </details>
        </td>
        <td>
          <!-- Verbs -->
          <details>
            <summary>Verbs</summary>
            <p>A verb is a word that expresses action, occurrence, or a state of being. Verbs are the backbone of sentences, providing essential information about what is happening.</p>
            <hr>
            <!-- In the land of Verbs, the Regulars and Irregulars battle for grammatical supremacy! -->
            <table class="nested-table">
              <thead>
                <tr>
                  <th>Type of Verb</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <details>
                      <summary>Regular Verbs</summary>
                      <ul>
                        <li>Walk</li>
                        <li>Talk</li>
                        <!-- Add more regular verbs here if needed -->
                      </ul>
                    </details>
                  </td>
                </tr>
                <tr>
                  <td>
                    <details>
                      <summary>Irregular Verbs</summary>
                      <ul>
                        <li>Go</li>
                        <li>Eat</li>
                        <!-- Add more irregular verbs here if needed -->
                      </ul>
                    </details>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </td>
      </tr>
    </table>
  </details>

  <!-- Brace yourselves for the vertical line of enlightenment! -->
  <div class="vertical-line"></div>
</body>

</html>

> ---

> |[desktop-tutorial](#desktop-tutorial)|[introduction](#introduction)|
> |-------------------------------------|-----------------------------|
> | <details><summary>Welcome to the desktop tutorial repository!</summary><ul><li>This is a toolkit designed to help you navigate the programming landscape effectively.</li><li>Whether you're a beginner or an experienced coder, you'll find a wealth of resources here to enhance your skills and understanding.</li></ul></details>|<details><summary>Embarking on a coding journey can be daunting.</summary><ul><li>With the right tools and resources, you can navigate the programming landscape with confidence.</li><li>This repository serves as a compilation of essential code, challenges, notes, projects, and exercises that I've assembled throughout my own coding journey.</li></ul><details><summary></summary>I'm sharing it here as a reference for you to use and learn from.</details></details>|
> |<details><summary>|<ul><li><details><summary><ol><li></summary>list-item.</li></ol></details></li></ul></summary></details>|

> ---

## Contents

- [Challenges](#challenges)
- [Notes](#notes)
- [Projects](#projects)
- [Exercises](#exercises)

## Challenges

In this section, you'll find various coding challenges that are designed to test and improve your problem-solving skills. From basic algorithms to advanced data structures, these challenges cover a wide range of topics and difficulty levels.

## Notes

Here, you'll find my personal notes on different programming concepts, languages, tools, and techniques. These notes serve as a reference guide and can help you understand key concepts more effectively.

## Projects

This section contains a collection of projects that I've worked on. These projects cover a diverse range of topics and technologies, giving you hands-on experience with real-world coding scenarios.

## Exercises

In the exercises section, you'll find a series of coding exercises that are designed to reinforce your understanding of various programming concepts. These exercises are meant to be practical and interactive, allowing you to apply what you've learned in a structured and hands-on manner.

## Contributing

If you have any suggestions, improvements, or additional resources that you'd like to contribute to this repository, feel free to submit a pull request. Your contributions are highly appreciated!


## Acknowledgements

Special thanks to all the contributors and open-source projects that have inspired and supported this repository.

Happy coding!


|HTML[^2]|CSS[^3]|JS[^4]||
|-|-|-|-|
| [^2]: [HTML](#html) |||||
|[^3]: [CSS](#css) ||||
|[^5]: [JavaScript](#javascript) |[Go to Row 2, Column 1](#row1-col2)||||
|[Some lessons in JavaScript][^6]| [Some lessons in Python][^7]  |<!-- some text to run a camera in python-->||||

[^5]: [Go to Row 1, Column 2](#row1-col2)

---

<h1 style="background-color: red;">This is my Braille setup</h1>

---

## [Braille](#braille) 

A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
-------|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**| | |**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**| | |**`1`**|**`1`**| |**`1`**|**`1`**|**`1`**|
 |**`1`**| | | |**`1`**|**`1`**|**`1`**|**`1`**|**`1`**| |**`1`**| | | |**`1`**|**`1`**|**`1`**|**`1`**|**`1`**| |**`1`**|**`1`**| | | 
 | |**`1`** | | | | | | | |**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**| |**`1`**|**`1`**|**`1`**
 | ||**`1`**| |**`1`**|**`1`**| |**`1`**|**`1`**| | |**`1`**|**`1`**| |**`1`**|**`1`**| |**`1`**|**`1`**| | |**`1`**|**`1`**|**`1`**| 
 | | | |**`1`**| |**`1`**|**`1`**| |**`1`**| | | |**`1`**|**`1`**| |**`1`**|**`1`**|**`1`**| | | |**`1`**| |**`1`**|**`1`**
 | | | | | | | | | | | | | | | | | | | |**`1`**|**`1`**|**`1`**|**`1`**|**`1`**|**`1`**


a|||||||||b|||||||||c|||||||||
-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
A| | | | | | | ||B| | | | | | | | |C| | | | | | | | |
**A**||1|1|0|0|0|0||**B**||1|0|1|0|0|0||**C**||1|0|0|1|0|0||

---

|**Pascals's Triangle**|
|---|
|[1]|
|[1,1]|
|[1,2,1]|
|[1,3,3,1]|
|[1,4,6,4,1]|
|[1,5,10,10,5,1]|
|[1,6,15,20,15,6,1]|

## License

This project is licensed under the [MIT License](LICENSE).


[^1]: .html
[^2]: .css
[^3]: Numbers.html; Lessons.html;
[^5]: Words.html
[^6]: lesson-python
[^7]: google.com
[^8]: https://1drv.ms/t/s!AlQJte9rafrLlFh91k5Tj48C0-N1?e=CtIhdP

---

### XML (Extensible Markup Language):
XML stands for Extensible Markup Language. It's a markup language that's designed to store and transport data. Here's a basic example of XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J.K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
</bookstore>
```

- **Tags**: XML uses tags to define objects and data.
- **Attributes**: Tags can have attributes which provide additional information about the data.
- **Hierarchical Structure**: XML documents have a hierarchical structure with parent and child elements.
- **Self-Descriptive**: XML documents are self-descriptive, meaning they contain information about the data they store.


<parts_of_speech>
  <noun>
    <description>A word that represents a person, place, thing, or idea.</description>
    <examples>
      <example>dog</example>
      <example>house</example>
      <example>love</example>
    </examples>
  </noun>
  <verb>
    <description>A word that expresses an action, occurrence, or state of being.</description>
    <examples>
      <example>run</example>
      <example>eat</example>
      <example>exist</example>
    </examples>
  </verb>
  <adjective>
    <description>A word that describes or modifies a noun or pronoun.</description>
    <examples>
      <example>big</example>
      <example>beautiful</example>
      <example>happy</example>
    </examples>
  </adjective>
  <adverb>
    <description>A word that modifies a verb, adjective, or other adverb, often indicating manner, time, place, or degree.</description>
    <examples>
      <example>quickly</example>
      <example>very</example>
      <example>here</example>
    </examples>
  </adverb>
  <pronoun>
    <description>A word that can function by itself as a noun phrase and that refers either to participants in the discourse or to someone or something mentioned elsewhere in the discourse.</description>
    <examples>
      <example>I</example>
      <example>you</example>
      <example>he</example>
    </examples>
  </pronoun>
  <preposition>
    <description>A word or group of words that shows the relationship of a noun or pronoun to other words in a sentence.</description>
    <examples>
      <example>in</example>
      <example>on</example>
      <example>under</example>
    </examples>
  </preposition>
  <conjunction>
    <description>A word used to connect clauses or sentences or to coordinate words in the same clause.</description>
    <examples>
      <example>and</example>
      <example>but</example>
      <example>or</example>
    </examples>
  </conjunction>
  <interjection>
    <description>A word or phrase that expresses emotion or exclamation.</description>
    <examples>
      <example>wow</example>
      <example>ouch</example>
      <example>hey</example>
    </examples>
  </interjection>
</parts_of_speech>


---

### YAML (YAML Ain't Markup Language):
YAML is a human-readable data serialization format. It's commonly used for configuration files and data exchange between programming languages. Here's a basic example of YAML:

```yaml
bookstore:
  - category: cooking
    title: Everyday Italian
    author: Giada De Laurentiis
    year: 2005
    price: 30.00
  - category: children
    title: Harry Potter
    author: J.K. Rowling
    year: 2005
    price: 29.99
```

- **Indentation**: YAML uses indentation to represent hierarchical structure.
- **Key-Value Pairs**: YAML uses key-value pairs to represent data.
- **Lists**: YAML supports lists, allowing you to represent arrays or ordered collections of data.
- **Human Readable**: YAML is designed to be easy for humans to read and write, making it a popular choice for configuration files.

### Key Differences:
- **Syntax**: XML uses tags and angle brackets, while YAML uses indentation and colons.
- **Readability**: YAML tends to be more human-readable and concise compared to XML.
- **Flexibility**: XML has a stricter syntax and is more verbose, while YAML offers more flexibility and is often easier to write and understand.

Both XML and YAML have their own use cases and advantages. XML is commonly used in web services and document storage, while YAML is often used in configuration files and data serialization. Depending on your specific requirements and preferences, you can choose the one that best fits your needs. Let me know if you have any questions or if there's anything specific you'd like to learn more about!

---
|[English](#English)|
|---------------------------|
|Do You Speak It?|

