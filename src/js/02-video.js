import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const vimeoPlayer = 'videoplayer-current-time';

const videoPlayer = function (data) {
  const time = JSON.stringify(data.seconds);
  localStorage.setItem(vimeoPlayer, time);
  console.log('played the video!', time);
};
player.on('timeupdate', throttle(videoPlayer, 1000));

const saveTimer = localStorage.getItem(vimeoPlayer);

player
  .setCurrentTime(saveTimer)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});