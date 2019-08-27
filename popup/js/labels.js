function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

btn = contains('button', 'Create label');

document.querySelector("#btnImport").addEventListener("click", (event) => {
  event.preventDefault();
  
  console.log("ok");

  let labels = [];
  [].slice.call(document.querySelectorAll(".label-link"))
  .forEach(function(element) {
    labels.push({
      name: element.textContent.trim(),
      // using style.backgroundColor might returns "rgb(...)"
      color: element.getAttribute("style")
      .replace("background-color:", "")
      .replace(/color:.*/,"")
      .trim()
      // github wants hex code only without # or ;
      .replace(/^#/, "")
      .replace(/;$/, "")
      .trim(),
    })
  })

  console.log(labels);

  // let labelList = document.querySelector("#labelList");
  
  // labels.forEach((label) => {
    
  //   console.log(label.name);
    
  //   let li = document.createElement('li');
  //   li.innerHTML = label.name;
  //   li.setAttribute("style", `background-color: $label.color`);
  //   labelList.appendChild(li);
  // });
});





// [
// 	{
// 		"name": "🏷️ Task",
// 		"color": "#1d76db"
// 	},
// 	{
// 		"name": "🏷️ Bug",
// 		"color": "#b60205"
// 	},
// 	{
// 		"name": "🏷️ Feature",
// 		"color": "#f1f1f1"
// 	},
// 	{
// 		"name": "🏷️ To Do",
// 		"color": "#fbca04"
//   },
// 	{
// 		"name": "🏷️ Doing",
// 		"color": "#1d76db"
//   },
// 	{
// 		"name": "🏷️ In QA",
// 		"color": "#d93f0b"
// 	},
// 	{
// 		"name": "🏷️ Done",
// 		"color": "#0e8a16"
// 	},
// 	{
// 		"name": "🏷️ Priority high",
// 		"color": "#b60205"
// 	},
// 	{
// 		"name": "🏷️ Priority normal",
// 		"color": "#0e8a16"
// 	},
// 	{
// 		"name": "🏷️ Priority low",
// 		"color": "#fdf1bf"
// 	}
// ]
// .forEach(function(label) {
// 	document.querySelector(".js-details-target-new-label").click();
//   document.querySelector("#label-name-").value = label.name;
//   document.querySelector("#label-color-").value = label.color;
//   btn[0].removeAttribute('disabled');
//   btn[0].click();
// });
