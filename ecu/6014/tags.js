// prep needed code for everything
let allTags = {
  "list": [

  ]
};

// create tags
console.log("working on " + document.getElementsByClassName("tags").length + " tags");
if (location.href.includes("organisations") || location.href.includes("other")) {
  // do nothing
} else {
  document.getElementById("list-desktop").innerHTML += '<p class="tag desktop">all</p>';
  document.getElementById("list-mobile").innerHTML += '<p class="tag row mobile">all</p>';
}
// add tags for each item in a list but inverted? where you PUSH the item element in the JSON object for that tag name
// if the tag only holds the current element, add it to the tags with addTag

// This goes through all tags under the specific item
for (let tag of document.querySelectorAll(".item .tag")) {
  let parent = tag.parentElement.parentElement;
  // add the tag, if it doesn't exist, to the list
  if(!(tag.innerText in allTags["list"])) {
    console.log("working on " + tag.innerText);
    // create tag
    allTags["list"][tag.innerText] = { "0": parent, };
    document.getElementById("list-desktop").innerHTML += '<p class="tag desktop">' + tag.innerText + '</p>';
    document.getElementById("list-mobile").innerHTML += '<p class="tag row mobile">' + tag.innerText + '</p>';
    console.log("added new tag " + tag.innerText);
  } else {
    // add element with push
    let spot = Object.keys(allTags["list"][tag.innerText]).length;
    console.log("tag " + tag.innerText + " was at " + spot + " number of entries");
    allTags["list"][tag.innerText][spot] = parent;
    console.log("added to existing " + tag.innerText);
  }
}

console.log(allTags);

//function addTag(name, index, array) {
//  document.getElementById("list").innerHTML += '<p class="tag" id="'+ name + '" onclick="switchTags(document.getElementById("' + name + '"))">' + name + '</p>';
//  //connect switchTags(tagName) on each of these elements
//  console.log("added " + name);
//}

// use a function to hide all elements first
function hide(item, index, array) {
  item.style.display = "none";
}

function hideAll() {
  let allItems = document.getElementsByClassName("item");

  [...allItems].forEach(hide);
}

function showAll() {
  [...document.getElementsByClassName("item")].forEach(function (item, index, array){ item.style.display ="block"; });
}

document.getElementsByClassName("list").innerHTML = "";

function showTag(tagName) {
  hideAll();
  console.log("hidden and next is the sort of " + tagName);
  if(tagName === "all") {
    showAll();
  } else {
    for (let item in allTags["list"][tagName]) {
      console.log("added an entry for " + tagName);
      allTags["list"][tagName][item].style.display = "block";
    }
  }
}

showTag("all");

for (let element of document.getElementsByClassName("tag")) {
  element.addEventListener("click", function () {showTag(element.innerText)});
  console.log(element.innerText + " is now clickable?");
}
