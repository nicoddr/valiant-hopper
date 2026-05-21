const fs = require('fs');
const path = require('path');

function pngToIco(pngPath, icoPath) {
  try {
    const pngData = fs.readFileSync(pngPath);
    const size = pngData.length;

    // Allocate 22-byte ICO header buffer
    const header = Buffer.alloc(22);

    // ICO Header
    header.writeUInt16LE(0, 0);  // Reserved
    header.writeUInt16LE(1, 2);  // Type (1 = ICO)
    header.writeUInt16LE(1, 4);  // Image Count

    // Directory Entry
    header.writeUInt8(0, 6);     // Width (0 means 256px)
    header.writeUInt8(0, 7);     // Height (0 means 256px)
    header.writeUInt8(0, 8);     // Color Palette (0 = no palette)
    header.writeUInt8(0, 9);     // Reserved
    header.writeUInt16LE(1, 10); // Color Planes (1)
    header.writeUInt16LE(32, 12);// Bits Per Pixel (32)
    header.writeUInt32LE(size, 14); // Size of PNG data in bytes
    header.writeUInt32LE(22, 18);   // Offset of PNG data (header is 22 bytes)

    // Combine header and image data
    const icoData = Buffer.concat([header, pngData]);

    fs.writeFileSync(icoPath, icoData);
    console.log(`Successfully converted ${pngPath} to ${icoPath}`);
  } catch (err) {
    console.error('Error during conversion:', err);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node convert_ico.js <input.png> <output.ico>');
  process.exit(1);
}

pngToIco(args[0], args[1]);
