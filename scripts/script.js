var scrolledPercentage = 0;
var headerHeightPercentage = 0.9;
window.addEventListener('scroll', function() {
  updateInfo();
});

window.addEventListener('resize', function() {
  updateInfo();
});

function updateInfo() {
  scrolledPercentage = window.pageYOffset / window.innerHeight;
  showDebugText();
  resizeHeader();
  resizeText();
}

function resizeHeader() {
  var headerObj = document.getElementById('resize_header');
  headerHeightPercentage = Math.max(0.9 - scrolledPercentage, 0.1); //scales between 90% to 10%
  headerObj.style.height = headerHeightPercentage * window.innerHeight + 'px';
}

function resizeText() {
  var textwrapper = document.getElementById('header_text');
  var signature = document.getElementById('site_signature');
  var slogan = document.getElementById('site_slogan');
  signature.style.fontSize =
    Math.max(headerHeightPercentage * 247, window.innerHeight * 0.07) + 'px';
  slogan.style.fontSize =
    Math.max(headerHeightPercentage * 47, window.innerHeight * 0.05) + 'px';
  if (headerHeightPercentage > 0.45) {
    textwrapper.className = 'thin';
    signature.className = 'thin';
    slogan.className = 'thin';
    signature.style.paddingTop = window.innerHeight * 0.18 + 'px';
  } else {
    textwrapper.className = 'wide';
    signature.className = 'wide';
    slogan.className = 'wide';
    signature.style.paddingTop = 0 + 'px';
  }
}

function showDebugText() {
  document.getElementById('scrollValue').innerHTML = window.pageYOffset + 'px';
  document.getElementById('heightValue').innerHTML = window.innerHeight + 'px';
  document.getElementById('percentageValue').innerHTML =
    scrolledPercentage * 100 + '%';
}

function resizeElementHeight(element) {
  var height = 0;
  var body = window.document.body;
  if (window.innerHeight) {
    height = window.innerHeight;
  } else if (body.parentElement.clientHeight) {
    height = body.parentElement.clientHeight;
  } else if (body && body.clientHeight) {
    height = body.clientHeight;
  }
  //element.style.height = height - element.offsetTop + 'px';
}
