const Data = document.getElementById('dynamicData');
var mercuryDistance = () => {
    Data.style.color = 'greenyellow';
    Data.style.fontFamily = "cursive";
    const distance = '0.39 AU';
    dynamicData.innerHTML =`Distance: ${distance}`;
    console.log(distance)
}

var mercurySpeed = () => {
    Data.style.color = 'pink';
    Data.style.fontFamily = "Courier New";
    const speed = '47.87 km/s';
    dynamicData.innerHTML = `Speed : ${speed}`;
    console.log(speed);
}
var mercurySize = () => {
    Data.style.color = 'aqua';
    Data.style.fontFamily = 'Comic Sans MS';
    const size = '4,880 km';
    dynamicData.innerHTML = `Size : ${size}`;
}
const venusData = document.getElementById('venusDynamicData');
var venusDistance = () => {
    venusData.style.color = 'salmon';
    venusData.style.fontFamily = 'system-ui';
    const distance = '0.72 AU';
    venusDynamicData.innerHTML = `Distance : ${distance}`;
}
var venusSpeed = () => {
    venusData.style.color = 'springgreen';
    venusData.style.fontFamily = 'Times New Roman';
    const speed = '35.02 km/s';
    venusDynamicData.innerHTML = `Speed : ${speed}`;
    console.log(speed);
}
var venusSize = () => {
    venusData.style.color = 'darkorange';
    venusData.style.fontFamily = 'Arial Narrow';
    const size = '12,104 km';
    venusDynamicData.innerHTML = `Size : ${size}`;
}
const earthData = document.getElementById('earthDynamicData');
var earthDistance = () => {
    earthData.style.color = 'brown';
    earthData.style.fontFamily = 'Franklin Gothic Medium';
    const distance = '1 AU';
    earthDynamicData.innerHTML = `Distance : ${distance}`;
}
var earthSpeed = () => {
    earthData.style.color = 'chartreuse';
    earthData.style.fontFamily = 'Lucida Grande';
    const speed = '29.78 km/s';
    earthDynamicData.innerHTML = `Speed : ${speed}`;
}
var earthSize = () => {
    earthData.style.color = 'fuchsia';
    earthData.style.fontFamily = 'Verdana';
    const size = '12,742 km';
    earthDynamicData.innerHTML = `Size : ${size}`;
}
const marsData = document.getElementById('marsDynamicData');
var marsDistance = () => {
    marsData.style.color = 'indigo';
    marsData.style.fontFamily = 'Geneva';
    const distance = '1.52 AU';
    marsDynamicData.innerHTML = `Distance : ${distance}`;
}
var marsSpeed = () => {
    marsData.style.color = 'lightcoral';
    marsData.style.fontFamily = 'Georgia';
    const speed = '24.07 km/s';
    marsDynamicData.innerHTML = `Speed : ${speed}`;
}
var marsSize = () => {
    marsData.style.color = 'maroon';
    marsData.style.fontFamily = 'Times New Roman';
    const size = '6,779 km';
    marsDynamicData.innerHTML = `Size : ${size}`;
}
const jupiterData = document.getElementById('jupiterDynamicData');
var jupiterDistance = () => {
    jupiterData.style.color = 'mediumspringgreen';
    jupiterData.style.fontFamily = 'Segoe UI';
    const distance = '5.20 AU';
    jupiterDynamicData.innerHTML = `Distance : ${distance}`;
}
var jupiterSpeed = () => {
    jupiterData.style.color = 'mediumvioletred';
    jupiterData.style.fontFamily = 'Impact';
    const speed = '13.07 km/s';
    jupiterDynamicData.innerHTML = `Speed : ${speed}`;
}
var jupiterSize = () => {
    jupiterData.style.color = 'olivedrab';
    jupiterData.style.fontFamily = 'Arial Narrow Bold';
    const size = '139,820 km';
    jupiterDynamicData.innerHTML = `Size : ${size}`;
}
const saturnData = document.getElementById('saturnDynamicData');
var saturnDistance = () => {
    saturnData.style.color = 'mediumspringgreen';
    saturnData.style.fontFamily = 'sans-serif';
    const distance = '9.58 AU';
    saturnDynamicData.innerHTML = `Distance : ${distance}`;
}
var saturnSpeed = () => {
    saturnData.style.color = 'palevioletred';
    saturnData.style.fontFamily = 'Franklin Gothic Medium';
    const speed = '9.69 km/s';
    saturnDynamicData.innerHTML = `Speed : ${speed}`;
}
var saturnSize = () => {
    saturnData.style.color = 'sienna';
    saturnData.style.fontFamily = 'Helvetica';
    const size = '116,460 km';
    saturnDynamicData.innerHTML = `Size : ${size}`;
}
var uranusData = document.getElementById('uranusDynamicData');
var uranusDistance = () => {
    uranusData.style.color = 'slateblue';
    uranusData.style.fontFamily = 'Trebuchet MS';
    const distance = '19.18 AU';
    uranusDynamicData.innerHTML = `Distance : ${distance}`;
}
var uranusSpeed = () => {
    uranusData.style.color = 'aquamarine';
    uranusData.style.fontFamily = 'Lucida Sans Unicode';
    const speed = '6.81 km/s';
    uranusDynamicData.innerHTML = `Speed : ${speed}`;
}
var uranusSize = () => {
    uranusData.style.color = 'lightgreen';
    uranusData.style.fontFamily = 'Trebuchet MS';
    const size = '50,724 km';
    uranusDynamicData.innerHTML = `Size : ${size}`;
}
var neptuneData = document.getElementById('neptuneDynamicData');
var neptuneDistance = () => {
    neptuneData.style.color = 'crimson';
    neptuneData.style.fontFamily = 'Open Sans';
    const distance = '30.07 AU';
    neptuneDynamicData.innerHTML = `Distance : ${distance}`;
}
var neptuneSpeed = () => {
    neptuneData.style.color = 'indianred';
    neptuneData.style.fontFamily = 'Calibri';
    const speed = '5.43 km/s';
    neptuneDynamicData.innerHTML = `Speed : ${speed}`;
}
var neptuneSize = () => {
    neptuneData.style.color = 'cyan';
    neptuneData.style.fontFamily = 'Gill Sans MT';
    const size = '49,244 km';
    neptuneDynamicData.innerHTML = `Size : ${size}`;
}
const captureBtn = document.getElementById('download');
const solarSystem = document.getElementById('pic');   
captureBtn.addEventListener('click',()=>{
const clone = solarSystem.cloneNode(true);
document.body.appendChild(clone);

const planets = solarSystem.querySelectorAll('.rotation');
const clonedPlanets = clone.querySelectorAll('.rotation');

planets.forEach((planet, index) => {
const computedStyle = window.getComputedStyle(planet);
const transform = computedStyle.transform;
clonedPlanets[index].style.transform = transform;
clonedPlanets[index].style.animation = 'none'; // Stop animation
            });
 // Capture the cloned solar system
html2canvas(clone).then(canvas => {
document.body.removeChild(clone); // Remove the clone after capturing

// Convert canvas to image and create a download link
const link = document.createElement('a');
link.href = canvas.toDataURL("image/png");
link.download = 'solar-system-animated.png';
link.click();
});
});