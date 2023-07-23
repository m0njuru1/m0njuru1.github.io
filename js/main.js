/*------------ about section tabs ------------------*/

(() =>{
       const aboutSection = document.querySelector(".about-section"),
       tabsContainer = document.querySelector(".about-tabs");

       tabsContainer.addEventListener("click", (event) =>{
         /* if event.target contains 'tab-item' class and not contains
         'active' class */
          if(event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")){
             const target = event.target.getAttribute("data-target");
             // deactivate existing active 'tab-item'
             tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
             // activate new 'tab-item'
             event.target.classList.add("active","outer-shadow");
             // deactivate existing active 'tab-content'
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
             // activate new 'tab-content'
             aboutSection.querySelector(target).classList.add("active");
          }
       })
})();

function bodyScrollingToggle(){
  document.body.classList.toggle("hidden-scrolling");
}


// status
  window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Message sent successfully!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
