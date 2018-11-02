/*
  Script that assigns functionality to navigation list items
  to give a larger surface area for clicking
*/

//Retrieve navigation object
const nav = document.querySelector("nav");
//Retrieve array of anchor tags in nav
const items = nav.getElementsByTagName("li");

//List of urls to navigate to
const links = ["index.html", "programming.html", "school.html","extra-curricular.html"];

/* Set Actions for Navigations links */
items[0].onclick = function(){
  window.open(links[0],"_self");
  return true;
};
items[1].onclick = function(){
  window.open(links[1],"_self");
  return true;
};
items[2].onclick = function(){
  window.open(links[2],"_self");
  return true;
};
items[3].onclick = function(){
  window.open(links[3],"_self");
  return true;
};
