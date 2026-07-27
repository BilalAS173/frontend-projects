# frontend-projects
A collection of front-end projects built while learning HTML, CSS, JavaScript and more.


## Account Number Image Generator

A small vanilla JS project that overlays a generated account number onto an image using HTML5 Canvas, then lets you download the result as a PNG or copy its base64-encoded string.

### Features
- Generate a random account number with one click
- Burn the account number directly onto the displayed image (via Canvas)
- Download the final image as a PNG file
- View and copy the image's base64-encoded string

### Tech Stack
- HTML, CSS, JavaScript (no frameworks/libraries)
- HTML5 Canvas API for image manipulation

### How to Run
Open `index.html` in a browser via a local server (e.g., VS Code's Live Server extension). Opening it directly via `file://` will cause a CORS/tainted-canvas error when generating the base64 string or downloading the image.
