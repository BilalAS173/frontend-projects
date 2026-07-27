# Account Number Image Generator

Overlays a generated account number onto an image using HTML5 Canvas, then lets you download the result as a PNG or copy its base64-encoded string.

## Features
- Generate a random account number with one click
- Burn the account number directly onto the displayed image (via Canvas)
- Download the final image as a PNG file
- View and copy the image's base64-encoded string

## How to Run
Open `index.html` via a local server (e.g., Live Server). Opening directly via `file://` causes a CORS/tainted-canvas error when generating the base64 string or downloading.
