const menuItems = document.querySelectorAll('ul [href^="#"]');

 menuItems.forEach(item => {
     item.addEventListener('click', scrollToIdOnClick);
 })

 function getScrollTopByHref(element) {
     const id = element.getAttribute('href');
     return document.querySelector(id).offsetTop;
 }

 function scrollToIdOnClick(event) {
     event.preventDefault();
     const to = getScrollTopByHref(event.target) - 30;
     scrollToPosition(to).css("marginBottom: 1px solid yellow");
 }

 function scrollToPosition(to) {
     window.scroll({
         top: to,
         behavior: "smooth",
     });
 }