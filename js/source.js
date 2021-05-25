// NOTE Kod sdelan na kolenke v spehshke, poetomy code optimization plohoi( netu )

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

const lines = document.getElementById('linesAmount'),
      sellPosition = document.getElementById('sellPosition'),
      setSettingsBtn = document.querySelector('.userCommandler .dataInput .button'),
      linesContainer = document.querySelector('.lines');

function disableInputs(fstInput, scndInput, ...other) {
    fstInput.childNodes[1].setAttribute('disabled', 'disabled');
    scndInput.childNodes[1].setAttribute('disabled', 'disabled');
}

function convertButtonColor(name, color = '#7289DA', bgColor = '#fff') {
    name.style.color = color;
    name.style.backgroundColor = bgColor;
}

let isSettingsApplied = false;

let linesAmount;
setSettingsBtn.addEventListener('click', () => {

      // read data from user inputs
      linesAmount = lines.childNodes[1].value;
      let sellPos = parseFloat(sellPosition.childNodes[1].value);

      // Apply Settings monitor
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


    // read data from lines

        let lineArr = document.querySelectorAll('.line'),
            liness = document.querySelector('.lines');

            

          // collect data from user
        lineArr.forEach(line => {
          line.addEventListener('click', e => readDataFromLines(e, line));
        });


        // display general profit
        



        

    }

}, {once: true});
let profitList = [];
let eventCounter = 0;
function readDataFromLines(e, line) {
  if (e.target.classList.contains('button')) {
    
    // declare variables
    const fixedTarget = e.target.parentNode,
          cryptoValue = fixedTarget.childNodes[1].firstElementChild.firstElementChild.value,
          USDTValue = fixedTarget.childNodes[1].lastElementChild.firstElementChild.value;
    
    // Monitor offers
    console.log(`${cryptoValue} : ${USDTValue}`)
  
    // save data to sessionStorage
    // sessionStorage.setItem(cryptoValue, USDTValue);

    // calculate how much coins we have
    let coins = USDTValue / cryptoValue;

    // calculate profit

    let sell = parseFloat(sellPosition.childNodes[1].value);
    
    let lineProfit = coins * sell;
        lineProfit = (Math.round(lineProfit)) / 10; 

        profitList.push(lineProfit);
    line.childNodes[1].lastElementChild.innerHTML = `+ ${lineProfit}`;
    console.log(coins);
    
    // change visual view
    convertButtonColor(e.target, '#fff', '#ccc');
    e.target.innerHTML = 'Applied';
    
    console.log(linesAmount);
    console.log(eventCounter)
    console.log(profitList);
    eventCounter++;
    if(eventCounter >= linesAmount) {
      console.log('all buttons pressed!')

      let generalProfit = document.querySelector('.profit__counter');
      let gProfitValue = 0;
      profitList.forEach(e => {
        gProfitValue += e;
      });
      generalProfit.innerHTML = `${gProfitValue}$`;
    }
  }
}



// #TODO Optimize all this 'code' to normal view
