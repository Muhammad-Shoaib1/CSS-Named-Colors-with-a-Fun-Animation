// script.js

const colors = [
  { name: 'AliceBlue', hex: '#F0F8FF', description: 'A very pale blue color.' },
  { name: 'AntiqueWhite', hex: '#FAEBD7', description: 'A warm, soft beige color.' },
  { name: 'Aqua', hex: '#00FFFF', description: 'A bright cyan color.' },
  { name: 'Aquamarine', hex: '#7FFFD4', description: 'A light blue-green color.' },
  { name: 'Azure', hex: '#F0FFFF', description: 'A very pale blue color.' },
  { name: 'Beige', hex: '#F5F5DC', description: 'A light, sandy color.' },
  { name: 'Bisque', hex: '#FFE4C4', description: 'A light orange color.' },
  { name: 'Black', hex: '#000000', description: 'The darkest color.' },
  { name: 'BlanchedAlmond', hex: '#FFEBCD', description: 'A pale almond color.' },
  { name: 'Blue', hex: '#0000FF', description: 'A pure blue color.' },
  { name: 'BlueViolet', hex: '#8A2BE2', description: 'A deep violet-blue color.' },
  { name: 'BurlyWood', hex: '#DEB887', description: 'A medium wood color.' },
  { name: 'Brown', hex: '#A52A2A', description: 'A dark, reddish-brown color.' },
  { name: 'CadetBlue', hex: '#5F9EA0', description: 'A medium blue-green color.' },
  { name: 'Chartreuse', hex: '#7FFF00', description: 'A bright green-yellow color.' },
  { name: 'Chocolate', hex: '#D2691E', description: 'A rich brown color.' },
  { name: 'Coral', hex: '#FF7F50', description: 'A pinkish-orange color.' },
  { name: 'CornflowerBlue', hex: '#6495ED', description: 'A soft blue color.' },
  { name: 'Cornsilk', hex: '#FFF8DC', description: 'A very pale yellow color.' },
  { name: 'Crimson', hex: '#DC143C', description: 'A strong red color.' },
  { name: 'Cyan', hex: '#00FFFF', description: 'A bright cyan color.' },
  { name: 'DarkBlue', hex: '#00008B', description: 'A very dark blue color.' },
  { name: 'DarkCyan', hex: '#008B8B', description: 'A very dark cyan color.' },
  { name: 'DarkGoldenrod', hex: '#B8860B', description: 'A dark yellow-brown color.' },
  { name: 'DarkGray', hex: '#A9A9A9', description: 'A dark gray color.' },
  { name: 'DarkGreen', hex: '#006400', description: 'A very dark green color.' },
  { name: 'DarkKhaki', hex: '#BDB76B', description: 'A dark yellow-brown color.' },
  { name: 'DarkMagenta', hex: '#8B008B', description: 'A dark magenta color.' },
  { name: 'DarkOliveGreen', hex: '#556B2F', description: 'A dark greenish color.' },
  { name: 'DarkOrange', hex: '#FF8C00', description: 'A very dark orange color.' },
  { name: 'DarkOrchid', hex: '#9932CC', description: 'A dark purple color.' },
  { name: 'DarkRed', hex: '#8B0000', description: 'A very dark red color.' },
  { name: 'DarkSalmon', hex: '#E9967A', description: 'A dark pinkish color.' },
  { name: 'DarkSeaGreen', hex: '#8FBC8F', description: 'A dark greenish color.' },
  { name: 'DarkSlateBlue', hex: '#483D8B', description: 'A dark blue color.' },
  { name: 'DarkSlateGray', hex: '#2F4F4F', description: 'A dark gray-green color.' },
  { name: 'DarkTurquoise', hex: '#00CED1', description: 'A dark turquoise color.' },
  { name: 'DarkViolet', hex: '#9400D3', description: 'A very dark violet color.' },
  { name: 'DeepPink', hex: '#FF1493', description: 'A deep pink color.' },
  { name: 'DeepSkyBlue', hex: '#00BFFF', description: 'A bright sky blue color.' },
  { name: 'DimGray', hex: '#696969', description: 'A medium-dark gray color.' },
  { name: 'DodgerBlue', hex: '#1E90FF', description: 'A bright blue color.' },
  { name: 'Firebrick', hex: '#B22222', description: 'A strong red-brick color.' },
  { name: 'FloralWhite', hex: '#FFFAF0', description: 'A very pale white color.' },
  { name: 'ForestGreen', hex: '#228B22', description: 'A dark green color.' },
  { name: 'Fuchsia', hex: '#FF00FF', description: 'A vivid pink color.' },
  { name: 'Gainsboro', hex: '#DCDCDC', description: 'A very light gray color.' },
  { name: 'GhostWhite', hex: '#F8F8FF', description: 'A very pale gray color.' },
  { name: 'Gold', hex: '#FFD700', description: 'A bright yellow color.' },
  { name: 'Goldenrod', hex: '#FFD700', description: 'A dark golden color.' },
  { name: 'Gray', hex: '#808080', description: 'A medium gray color.' },
  { name: 'Green', hex: '#008000', description: 'A pure green color.' },
  { name: 'GreenYellow', hex: '#ADFF2F', description: 'A bright green-yellow color.' },
  { name: 'Honeydew', hex: '#F0FFF0', description: 'A very pale green color.' },
  { name: 'HotPink', hex: '#FF69B4', description: 'A bright pink color.' },
  { name: 'IndianRed', hex: '#CD5C5C', description: 'A reddish color.' },
  { name: 'Indigo', hex: '#4B0082', description: 'A deep blue-violet color.' },
  { name: 'Ivory', hex: '#FFFFF0', description: 'A very pale yellow color.' },
  { name: 'Khaki', hex: '#F0E68C', description: 'A light brown color.' },
  { name: 'Lavender', hex: '#E6E6FA', description: 'A pale purple color.' },
  { name: 'LavenderBlush', hex: '#FFF0F5', description: 'A very pale pink color.' },
  { name: 'LawnGreen', hex: '#7CFC00', description: 'A bright green color.' },
  { name: 'LemonChiffon', hex: '#FFFACD', description: 'A pale yellow color.' },
  { name: 'LightBlue', hex: '#ADD8E6', description: 'A light blue color.' },
  { name: 'LightCoral', hex: '#F08080', description: 'A light pinkish color.' },
  { name: 'LightCyan', hex: '#E0FFFF', description: 'A very pale cyan color.' },
  { name: 'LightGoldenrodYellow', hex: '#FAFAD2', description: 'A light yellow color.' },
  { name: 'LightGreen', hex: '#90EE90', description: 'A pale green color.' },
  { name: 'LightGray', hex: '#D3D3D3', description: 'A light gray color.' },
  { name: 'LightPink', hex: '#FFB6C1', description: 'A light pink color.' },
  { name: 'LightSalmon', hex: '#FFA07A', description: 'A light orange color.' },
  { name: 'LightSeaGreen', hex: '#20B2AA', description: 'A medium greenish color.' },
  { name: 'LightSkyBlue', hex: '#87CEFA', description: 'A light sky blue color.' },
  { name: 'LightSlateGray', hex: '#778899', description: 'A light gray-green color.' },
  { name: 'LightSteelBlue', hex: '#B0C4DE', description: 'A light blue-gray color.' },
  { name: 'LightYellow', hex: '#FFFFE0', description: 'A pale yellow color.' },
  { name: 'Lime', hex: '#00FF00', description: 'A pure lime green color.' },
  { name: 'LimeGreen', hex: '#32CD32', description: 'A bright green color.' },
  { name: 'Linen', hex: '#FAF0E6', description: 'A pale beige color.' },
  { name: 'Magenta', hex: '#FF00FF', description: 'A vivid pink color.' },
  { name: 'Maroon', hex: '#800000', description: 'A dark reddish-brown color.' },
  { name: 'MediumAquamarine', hex: '#66CDAA', description: 'A medium blue-green color.' },
  { name: 'MediumBlue', hex: '#0000CD', description: 'A medium blue color.' },
  { name: 'MediumOrchid', hex: '#BA55D3', description: 'A medium purple color.' },
  { name: 'MediumPurple', hex: '#9370DB', description: 'A medium purple color.' },
  { name: 'MediumSeaGreen', hex: '#3CB371', description: 'A medium green color.' },
  { name: 'MediumSlateBlue', hex: '#7B68EE', description: 'A medium blue-purple color.' },
  { name: 'MediumSpringGreen', hex: '#00FA9A', description: 'A medium bright green color.' },
  { name: 'MediumTurquoise', hex: '#48D1CC', description: 'A medium turquoise color.' },
  { name: 'MediumVioletRed', hex: '#C71585', description: 'A medium reddish-violet color.' },
  { name: 'MidnightBlue', hex: '#191970', description: 'A very dark blue color.' },
  { name: 'MintCream', hex: '#F5FFFA', description: 'A very pale green color.' },
  { name: 'MistyRose', hex: '#FFE4E1', description: 'A very pale pink color.' },
  { name: 'Moccasin', hex: '#FFE4B5', description: 'A light brown color.' },
  { name: 'NavajoWhite', hex: '#FFDEAD', description: 'A pale brown color.' },
  { name: 'Navy', hex: '#000080', description: 'A very dark blue color.' },
  { name: 'OldLace', hex: '#FDF5E6', description: 'A pale beige color.' },
  { name: 'Olive', hex: '#808000', description: 'A dark yellow-green color.' },
  { name: 'OliveDrab', hex: '#6B8E23', description: 'A dark greenish color.' },
  { name: 'Orange', hex: '#FFA500', description: 'A bright orange color.' },
  { name: 'OrangeRed', hex: '#FF4500', description: 'A bright red-orange color.' },
  { name: 'Orchid', hex: '#DA70D6', description: 'A light purple color.' },
  { name: 'PaleGoldenrod', hex: '#EEE8AA', description: 'A pale yellow color.' },
  { name: 'PaleGreen', hex: '#98FB98', description: 'A pale green color.' },
  { name: 'PaleTurquoise', hex: '#AFEEEE', description: 'A pale cyan color.' },
  { name: 'PaleVioletRed', hex: '#D87093', description: 'A pale reddish-violet color.' },
  { name: 'PapayaWhip', hex: '#FFEFD5', description: 'A pale peach color.' },
  { name: 'PeachPuff', hex: '#FFDAB9', description: 'A light peach color.' },
  { name: 'Peru', hex: '#CD853F', description: 'A medium brown color.' },
  { name: 'Pink', hex: '#FFC0CB', description: 'A light pink color.' },
  { name: 'Plum', hex: '#DDA0DD', description: 'A light purple color.' },
  { name: 'PowderBlue', hex: '#B0E0E6', description: 'A pale blue color.' },
  { name: 'Purple', hex: '#800080', description: 'A dark purple color.' },
  { name: 'Red', hex: '#FF0000', description: 'A pure red color.' },
  { name: 'RosyBrown', hex: '#BC8F8F', description: 'A light brownish-pink color.' },
  { name: 'RoyalBlue', hex: '#4169E1', description: 'A deep blue color.' },
  { name: 'SaddleBrown', hex: '#8B4513', description: 'A dark brown color.' },
  { name: 'Salmon', hex: '#FA8072', description: 'A pinkish-orange color.' },
  { name: 'SandyBrown', hex: '#F4A460', description: 'A light brown color.' },
  { name: 'SeaGreen', hex: '#2E8B57', description: 'A medium green color.' },
  { name: 'SeaShell', hex: '#FFF5EE', description: 'A very pale pink color.' },
  { name: 'Sienna', hex: '#A0522D', description: 'A reddish-brown color.' },
  { name: 'Silver', hex: '#C0C0C0', description: 'A light gray color.' },
  { name: 'SkyBlue', hex: '#87CEEB', description: 'A light blue color.' },
  { name: 'SlateBlue', hex: '#6A5ACD', description: 'A bluish-purple color.' },
  { name: 'SlateGray', hex: '#708090', description: 'A gray-blue color.' },
  { name: 'Snow', hex: '#FFFAFA', description: 'A very pale pink color.' },
  { name: 'SpringGreen', hex: '#00FF7F', description: 'A bright green color.' },
  { name: 'SteelBlue', hex: '#4682B4', description: 'A medium blue-gray color.' },
  { name: 'Tan', hex: '#D2B48C', description: 'A light brown color.' },
  { name: 'Teal', hex: '#008080', description: 'A dark cyan color.' },
  { name: 'Thistle', hex: '#D8BFD8', description: 'A light purple color.' },
  { name: 'Tomato', hex: '#FF6347', description: 'A bright reddish-orange color.' },
  { name: 'Turquoise', hex: '#40E0D0', description: 'A bright cyan color.' },
  { name: 'Violet', hex: '#EE82EE', description: 'A light purple color.' },
  { name: 'Wheat', hex: '#F5DEB3', description: 'A light brown color.' },
  { name: 'White', hex: '#FFFFFF', description: 'The lightest color.' },
  { name: 'WhiteSmoke', hex: '#F5F5F5', description: 'A very light gray color.' },
  { name: 'Yellow', hex: '#FFFF00', description: 'A pure yellow color.' },
  { name: 'YellowGreen', hex: '#9ACD32', description: 'A yellow-green color.' }
];

let index = 0;
const content = document.querySelector('.content');
const colorName = document.querySelector('.color-name');
const hexCode = document.querySelector('.hex-code');
const description = document.querySelector('.description');

function changeColor() {
  content.classList.remove('fade-in');
  setTimeout(() => {
    const { name, hex, description: desc } = colors[index];
    document.body.style.backgroundColor = hex;
    content.style.backgroundColor = hex;
    colorName.textContent = `Color : ${name}`;
    hexCode.textContent = `Hex Code : ${hex}`;
    description.textContent = desc;

    // Ensure text color contrasts well with background
    content.style.color = getTextColor(hex);

    index = (index + 1) % colors.length;
    content.classList.add('fade-in');
  }, 500);
}

function getTextColor(bgColor) {
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b);
  return brightness > 128 ? '#000' : '#fff'; // Choose text color based on background brightness
}

setInterval(changeColor, 2200); // Change color every 2.5 seconds
