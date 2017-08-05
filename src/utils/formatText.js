export default function formatText(txt) {
  return txt
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })
};