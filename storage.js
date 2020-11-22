if (yes.indexOf(searchValue) === -1) {
    yes.push(searchValue);
    window.localStorage.setItem("yes", JSON.stringify(yes));

    makeRow(searchValue);
  }

  const yes = JSON.parse(window.localStorage.getItem("yeslist")) || [];

  if (history.length > 0) {
    searchWeather(history[history.length-1]);
  }

  for (var i = 0; i < history.length; i++) {
    makeRow(history[i]);
  }
  const maybe = JSON.parse(window.localStorage.getItem("maybeList")) || [];
  const no = JSON.parse(window.localStorage.getItem("nolist")) || [];