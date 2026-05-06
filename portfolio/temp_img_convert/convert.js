const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  try {
    console.log('Reading image...');
    const inputBuffer = await promisify(fs.readFile)('../src/assets/IMG_0674.HEIC');
    console.log('Converting image (this might take a moment)...');
    const outputBuffer = await convert({
      buffer: inputBuffer, 
      format: 'JPEG',      
      quality: 1           
    });

    await promisify(fs.writeFile)('../src/assets/IMG_0674.jpg', outputBuffer);
    console.log("Conversion successful! Saved as IMG_0674.jpg");
  } catch(e) {
    console.error("Error during conversion:", e);
  }
})();
