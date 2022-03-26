// Background
const video = document.querySelector('#background-video');
const parallax_amount = 0.3;
document.addEventListener('scroll', () => requestAnimationFrame(() => video.style.top = `${-parallax_amount * window.pageYOffset}px`));

// Fade-in
function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}
document.addEventListener('DOMContentLoaded', function() {
  // navbar: while we're here, make buttons nice
  var btns = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
  for (i = 0; i < btns.length; ++i) {
    btns[i].style.backgroundColor = 'rgba(30,30,30,0.3)';
  }
  document.getElementsByClassName('navbar')[0].getElementsByClassName('navactive')[0].style.backgroundColor = 'rgba(40,40,40,0.5)';

  if (!window.AnimationEvent) { return; }
  var anchors = document.getElementsByTagName('a');
  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname ||
        anchors[idx].pathname === window.location.pathname) {
      continue;
    }
    anchors[idx].addEventListener('click', function(event) {
      var fader = document.getElementById('fader'),
          anchor = event.currentTarget;
      var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);
      event.preventDefault();
      fader.classList.add('fade-in');
    })
  }
});
 // Fade-out
window.addEventListener('pageshow', function (event) {
  if (!event.persisted) { return; }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

// Navbar fade
const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  let btns = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
  if (currentScroll <= checkpoint) {
    scrollamt = currentScroll / checkpoint;
  } else {
    scrollamt = 1;
  }
  for (var i = 0; i < btns.length; ++i) {
    btns[i].style.backgroundColor = 'rgba(30,30,30,bruh)'.replace(/bruh/g, 0.3+0.7*scrollamt);
  }
  document.getElementsByClassName('navactive')[0].style.backgroundColor = 'rgba(40,40,40,bruh)'.replace(/bruh/g, 0.5+0.5*scrollamt);
});
