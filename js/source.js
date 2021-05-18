// draggable menu
let windowTopBar = document.createElement('div')
windowTopBar.style.width = "100%"
windowTopBar.style.height = "32px"
windowTopBar.style.backgroundColor = "rgba(255,255,255,0)"
windowTopBar.style.position = "absolute"
windowTopBar.style.top = windowTopBar.style.left = 0
windowTopBar.style.webkitAppRegion = "drag"
document.body.appendChild(windowTopBar)

// main

const profitCounter = document.querySelector('.profit__counter'),
      lines = document.getElementById('linesAmount'),
      sellPosition = document.getElementById('sellPosition'),
      setSettingsBtn = document.querySelector('.userCommandler .dataInput .button'),
      linesContainer = document.querySelector('.lines');




function disableInputs(fstInput, scndInput, ...other) {
    fstInput.childNodes[1].setAttribute('disabled', 'disabled');
    scndInput.childNodes[1].setAttribute('disabled', 'disabled');
}

function convertButtonColor(name, color, bgColor) {
    name.style.color = color;
    name.style.backgroundColor = bgColor;
}

let isSettingsApplied = false;

setSettingsBtn.addEventListener('click', () => {

    if(!isSettingsApplied) {

    // read data from user inputs
    let linesAmount = lines.childNodes[1].value;
    let sellPos = parseFloat(sellPosition.childNodes[1].value);

    console.log(`Lines: ${linesAmount}, Sell Position: ${sellPos}`);

    // set settings to disabled mode
    disableInputs(lines, sellPosition)

    // convert color palette for button
    convertButtonColor(setSettingsBtn, '#7289DA', '#fff');


    // add n lines to the lines container

        for (let i = 1; i <= linesAmount; i++) {
            let lineTemplate = `
            <div class="line">
                <div class="line__data">
                  <div class="line__numberOfLine">
                    <div class="line__iterator">Line ${i}</div>
                  </div>
                  <div class="dataInput">
                    <div class="dataInput__field">
                      <div class="dataInput__short">
                        <input type="text" placeholder=" Value of crypto...">
                      </div>
                      <div class="dataInput__long">
                        <input type="text" placeholder=" How much you want to spent? (USDT)">
                      </div>
                    </div>
                    <div class="button">Apply</div>
                  </div>
                  <div class="line__profit"></div>
                </div>
                <div class="line__hr"></div>
              </div>
            `
            linesContainer.innerHTML += lineTemplate;
            
        }
    
    // read data from lines



    // change switcher
    isSettingsApplied = true;

    }

});