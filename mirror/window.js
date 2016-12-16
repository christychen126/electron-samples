// Run this function after the page has loaded
$(function () {

var electron = require('electron')

var display = electron.screen.getPrimaryDisplay()  // http://electron.atom.io/docs/api/screen

var constraints = {
  video: {
    width: {
      ideal: display.size.width // Ideal video width is size of screen
    },
    height: {
      ideal: display.size.height // Ideal video height is size of screen
    }
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
  var video = document.querySelector('video')
  // Play stream in <video> element
  video.srcObject = stream
}).catch(function (error) {
  console.error(error)
})

// Listen for the Rainbow Filter checkbox being clicked
$("#rainbow-toggle").change(function() {
  if (this.checked) {
    $('.rainbow-filter').show()
  } else {
    $('.rainbow-filter').hide()
  }
})

$("#goat-toggle").change(function() {
  if (this.checked) {
    $('.goat-filter').show()
  } else {
    $('.goat-filter').hide()
  }
})

$("#alien-toggle").change(function() {
  if (this.checked) {
    $('.alien-filter').show()
  } else {
    $('.alien-filter').hide()
  }
})

$("#nsync-toggle").change(function() {
  if (this.checked) {
    $('.nsync-filter').show()
  } else {
    $('.nsync-filter').hide()
  }
})

// Listen for the Rainbow Filter checkbox being clicked
$("#animal-toggle").change(function() {
  if (this.checked) {
    $('.animal-filter').show()
  } else {
    $('.animal-filter').hide()
  }
})

})
