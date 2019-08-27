[
	{
		"name": "🏷️ Task",
		"color": "#1d76db"
	},
	{
		"name": "🏷️ Bug",
		"color": "#b60205"
	},
	{
		"name": "🏷️ Feature",
		"color": "#f1f1f1"
	},
	{
		"name": "🏷️ To Do",
		"color": "#fbca04"
  },
	{
		"name": "🏷️ Doing",
		"color": "#1d76db"
  },
	{
		"name": "🏷️ In QA",
		"color": "#d93f0b"
	},
	{
		"name": "🏷️ Done",
		"color": "#0e8a16"
	},
	{
		"name": "🏷️ Priority high",
		"color": "#b60205"
	},
	{
		"name": "🏷️ Priority normal",
		"color": "#0e8a16"
	},
	{
		"name": "🏷️ Priority low",
		"color": "#fdf1bf"
	}
]
.forEach(function(label) {
	document.querySelector(".js-details-target-new-label").click();
  document.querySelector("#label-name-").value = label.name;
  document.querySelector("#label-color-").value = label.color;
  btn[0].removeAttribute('disabled');
  btn[0].click();
});
