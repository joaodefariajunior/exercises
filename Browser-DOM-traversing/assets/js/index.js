<<<<<<< HEAD
let elem1 = document.querySelector('h1').closest('header');
elem1.style.border = "5px solid purple";


//   let elem13 = document.querySelector('package-title').closest('package-title');


// function isInPage(node) {
//   return (node === section.info) ? false : section.info.contains('.info-package');
// }
// const info=document.querySelector('.info');
const infoArray = document.querySelector(".info");
const packages = document.querySelector('.info-package');
const allPackageTitles = document.querySelectorAll(".package-title");
if (infoArray.contains(packages)) {
  allPackageTitles.forEach(item => {
    item.previousElementSibling.classList.add('imgBorder');
  })
};

const allLabels=document.querySelectorAll("label")
allLabels.forEach(label=>{
  if (label.matches(".mild")){
    label.classList.add('borderYellow');
  }else if(label.matches('.intense')) {
    label.classList.add('borderOrange');

  }else {
    label.classList.add('borderRed');}
})
const navList=document.querySelector('.nav-list');
const siteMap=document.querySelector('.site-map');
const children=navList.children;
for(let i=0;i<children.lenght;i++){
  const newLi=document.createElement('li');
  const content=children[i].innerText;
  newLi.innerText=content;
  siteMap.append(newLi);
}

// infoArray.forEach(item => {
//   if(item.matches('.info-package') === true) {
//     const allPackageTitles = document.querySelectorAll(".package-title");
//     allPackageTitles.forEach(item => {
//       item.previousElementSibling.classList.add('imgBorder');
//     })
//   } else {
//     console.log('There is no .info-package')
//   }
// })
=======
// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px. 
const h1 = document.querySelector('h1');
console.log(h1);
const header = h1.closest('header');
console.log(header);
// header.style.border = '5px solid darkblue';
header.classList.add('borderGray');

//If the .info section contains an .info-package, select all package-titles and give the title's previous element a border. 
const infoArray = document.querySelector(".info");
const packages = document.querySelector('.info-package');
const allPackageTitles = document.querySelectorAll(".package-title");

if (infoArray.contains(packages)) {
    allPackageTitles.forEach(item => {
        item.previousElementSibling.classList.add('imgBorder');
    })
};

// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. 

const allLabels = document.querySelectorAll('label');
console.log(allLabels);
allLabels.forEach(label => {
    if (label.matches('.mild')) {
        label.classList.add('borderYellow');
    } else if (label.matches('.intense')) {
        label.classList.add('borderOrange');
    } else {
        label.classList.add('borderRed');
    }
});

//Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children. 
const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');
const children = navList.children;
console.log(children);
for (let i = 0; i < children.length; i++) {
    const newLi = document.createElement('li');
    const content = children[i].innerText;
    newLi.innerText = content;
    siteMap.append(newLi);
}
>>>>>>> 98dc5440db84ac10902c5b49aceb6201320b1031
