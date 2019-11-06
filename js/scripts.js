// assign variables
let songs = document.querySelectorAll('.music');
let albumIcons = document.querySelectorAll('.albumIcon');

// function to hide all divs
function hideAll() {
  songs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albumIcons.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'WTM':
        document.querySelector('#sun')
        	.style.display = 'block';
        break;
      case 'TIS':
        document.querySelector('#dance')
        	.style.display = 'block';
        break;
      case 'WIN1':
        document.querySelector('#foot')
        .style.display = 'block';
        break;
      case 'WIN2':
        document.querySelector('#surrender')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this
    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
  } // end of function for clicking

}); // end of forEach()
