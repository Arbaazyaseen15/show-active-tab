const tab = await chrome.tabs.query({
    active:true,
    currentWindow:true
  });
console.log(tab);
const button = document.querySelector("button");

button.addEventListener("click", async () => {
    const list = document.querySelector("ul");
    list.innerHTML = "";
    const template = document.getElementById("li_template");
    const elements = new Set();
    const element = template.content.firstElementChild.cloneNode(true);
    const title = " " + tab[0].title;
    element.querySelector(".title").textContent = title;
    // For icon
    if(tab[0].favIconUrl !== ""){
        element.querySelector(".icon").src = tab[0].favIconUrl;
        element.querySelector(".icon").style.display='inline';
    }
   
    elements.add(element);
    list.append(...elements);
    elements.clear();
});