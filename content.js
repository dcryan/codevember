var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://s.gravatar.com/avatar/7bb1b3eea5af1b2c429803cb5f6dea2f?' + images[i].width;
}
