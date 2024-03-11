const loadComponent = (file, elementId, callback) => {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) {
        callback();
      }
    })
}

loadComponent('../components/header.html', 'header')
loadComponent('../components/popups/feedback.html', 'popup-feedback')