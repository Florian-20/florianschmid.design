<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projecttop>
            <div class="project slidein">
              <div id="howwork">
                <h2>Okay, but how does it actually work?</h2>
                <p @click="substance">→The full principle explained on Substance←</p>
              </div>
              <div id="svg-back">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.1 511.46">
                  <g id="Ebene_2" data-name="Ebene 2">
                    <g class="Lamp"><line x1="68.84" y1="238.21" x2="74.72" y2="244.08" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="73.01" y1="231" x2="81.04" y2="233.15" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="73.01" y1="222.67" x2="81.04" y2="220.52" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="68.84" y1="215.46" x2="74.72" y2="209.58" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="61.63" y1="211.3" x2="63.78" y2="203.27" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="53.31" y1="211.3" x2="51.15" y2="203.27" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="46.09" y1="215.46" x2="40.22" y2="209.58" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="41.93" y1="222.67" x2="33.9" y2="220.52" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="41.93" y1="231" x2="33.9" y2="233.15" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="46.09" y1="238.21" x2="40.22" y2="244.08" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="53.31" y1="242.37" x2="51.15" y2="250.4" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="61.63" y1="242.37" x2="63.78" y2="250.4" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="57.33 226.83 56.68 441.79 101.85 486.97 228.04 486.97 317.28 397.74 317.28 271.54 272.56 226.83 57.33 226.83" style="fill:#f5f5f5"/><polyline points="194.46 305.13 302.17 412.84 243.15 471.87 135.44 364.15 194.46 305.13" style="fill:#151515"/><rect id="R8" x="211.37" y="104.5" width="12.76" height="19.12" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="4.91" y1="348.24" x2="0.75" y2="355.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="12.95" y1="350.4" x2="12.95" y2="358.71" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="20.99" y1="348.24" x2="25.15" y2="355.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="26.88" y1="342.36" x2="34.08" y2="346.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="29.03" y1="334.31" x2="37.35" y2="334.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="26.88" y1="326.27" x2="34.08" y2="322.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="20.99" y1="320.38" x2="25.15" y2="313.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="12.95" y1="318.23" x2="12.95" y2="309.91" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="4.91" y1="320.38" x2="0.75" y2="313.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="12.95 334.31 164.95 182.31 228.04 182.31 317.28 271.54 317.28 397.74 228.04 486.97 165.11 486.97 12.95 334.31" style="fill:#f5f5f5"/><rect x="194.46" y="305.13" width="122.82" height="59.02" style="fill:#151515"/><rect id="R7" x="196.06" y="104.57" width="12.76" height="19.05" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="46.09" y1="453.17" x2="40.22" y2="459.04" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="53.31" y1="457.33" x2="51.15" y2="465.36" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="61.63" y1="457.33" x2="63.78" y2="465.36" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="68.84" y1="453.17" x2="74.72" y2="459.04" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="73.01" y1="445.96" x2="81.04" y2="448.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="73.01" y1="437.63" x2="81.04" y2="435.48" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="68.84" y1="430.42" x2="74.72" y2="424.54" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="61.63" y1="426.26" x2="63.78" y2="418.23" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="53.31" y1="426.26" x2="51.15" y2="418.23" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="46.09" y1="430.42" x2="40.22" y2="424.54" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="41.93" y1="437.63" x2="33.9" y2="435.48" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="41.93" y1="445.96" x2="33.9" y2="448.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="57.47 442.58 57.47 226.7 101.85 182.31 228.04 182.31 317.28 271.54 317.28 397.74 272.43 442.58 57.47 442.58" style="fill:#f5f5f5"/><polyline points="135.44 305.13 194.46 364.15 302.17 256.44 243.4 197.67 135.44 305.13" style="fill:#151515"/><rect id="R6" x="180.76" y="104.65" width="12.76" height="18.98" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="164.95" y1="470.23" x2="164.95" y2="461.91" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="156.91" y1="472.38" x2="152.75" y2="465.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="151.02" y1="478.27" x2="143.82" y2="474.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="148.86" y1="486.31" x2="140.55" y2="486.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="151.02" y1="494.36" x2="143.82" y2="498.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="156.91" y1="500.24" x2="152.75" y2="507.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="164.95" y1="502.4" x2="164.95" y2="510.71" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="172.99" y1="500.24" x2="177.15" y2="507.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="178.88" y1="494.36" x2="186.08" y2="498.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="181.03" y1="486.31" x2="189.35" y2="486.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="178.88" y1="478.27" x2="186.08" y2="474.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="172.99" y1="472.38" x2="177.15" y2="465.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="164.95 486.31 316.95 334.64 317.28 271.54 228.04 182.31 101.85 182.31 12.62 271.54 12.62 334.64 164.95 486.31" style="fill:#f5f5f5"/><rect x="135.44" y="182.31" width="59.02" height="122.82" style="fill:#1b1b1b"/><rect id="R5" x="165.46" y="104.72" width="12.76" height="18.91" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="283.8" y1="453.17" x2="289.68" y2="459.04" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="287.97" y1="445.96" x2="296" y2="448.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="287.97" y1="437.63" x2="296" y2="435.48" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="283.8" y1="430.42" x2="289.68" y2="424.54" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="276.59" y1="426.26" x2="278.74" y2="418.23" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="268.27" y1="426.26" x2="266.11" y2="418.23" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="261.06" y1="430.42" x2="255.18" y2="424.54" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="256.89" y1="437.63" x2="248.86" y2="435.48" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="256.89" y1="445.96" x2="248.86" y2="448.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="261.06" y1="453.17" x2="255.18" y2="459.04" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="268.27" y1="457.33" x2="266.11" y2="465.36" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="276.59" y1="457.33" x2="278.74" y2="465.36" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="272.43 441.79 272.43 226.7 228.04 182.31 101.85 182.31 12.62 271.54 12.62 397.74 57.47 442.58 272.43 441.79" style="fill:#f5f5f5"/><polyline points="194.46 305.13 135.44 364.15 27.73 256.44 86.59 197.58 194.46 305.13" style="fill:#151515"/><rect id="R4" x="150.15" y="104.79" width="12.76" height="18.84" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="300.86" y1="334.31" x2="292.55" y2="334.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="303.02" y1="342.36" x2="295.82" y2="346.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="308.91" y1="348.24" x2="304.75" y2="355.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="316.95" y1="350.4" x2="316.95" y2="358.71" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="324.99" y1="348.24" x2="329.15" y2="355.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="330.88" y1="342.36" x2="338.08" y2="346.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="333.03" y1="334.31" x2="341.35" y2="334.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="330.88" y1="326.27" x2="338.08" y2="322.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="324.99" y1="320.38" x2="329.15" y2="313.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="316.95" y1="318.23" x2="316.95" y2="309.91" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="308.91" y1="320.38" x2="304.75" y2="313.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="303.02" y1="326.27" x2="295.82" y2="322.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="316.95 334.31 164.95 182.31 101.85 182.31 12.62 271.54 12.62 397.74 101.85 486.97 164.78 486.31 316.95 334.31" style="fill:#f5f5f5"/><polyline points="135.44 305.13 12.62 305.13 12.62 364.15 135.44 364.15 135.44 305.13" style="fill:#151515"/><rect id="R3" x="134.85" y="104.86" width="12.76" height="18.77" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="261.06" y1="238.21" x2="255.18" y2="244.08" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="268.27" y1="242.37" x2="266.11" y2="250.4" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="276.59" y1="242.37" x2="278.74" y2="250.4" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="283.8" y1="238.21" x2="289.68" y2="244.08" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="287.97" y1="231" x2="296" y2="233.15" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="287.97" y1="222.67" x2="296" y2="220.52" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="283.8" y1="215.46" x2="289.68" y2="209.58" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="276.59" y1="211.3" x2="278.74" y2="203.27" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="268.27" y1="211.3" x2="266.11" y2="203.27" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="261.06" y1="215.46" x2="255.18" y2="209.58" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="256.89" y1="222.67" x2="248.86" y2="220.52" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="256.89" y1="231" x2="248.86" y2="233.15" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="272.43 226.7 272.43 442.58 228.04 486.97 101.85 486.97 12.62 397.74 12.62 271.54 57.33 226.83 272.43 226.7" style="fill:#f5f5f5"/><polyline points="194.46 364.15 135.44 305.13 27.73 412.84 87.07 472.19 194.46 364.15" style="fill:#151515"/><rect id="R2" x="119.55" y="104.93" width="12.76" height="18.7" style="fill:#f5f5f5"/></g>
                    <g class="Lamp"><line x1="164.95" y1="166.23" x2="164.95" y2="157.91" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="156.91" y1="168.38" x2="152.75" y2="161.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="151.02" y1="174.27" x2="143.82" y2="170.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="148.86" y1="182.31" x2="140.55" y2="182.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="151.02" y1="190.36" x2="143.82" y2="194.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="156.91" y1="196.24" x2="152.75" y2="203.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="164.95" y1="198.4" x2="164.95" y2="206.71" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="172.99" y1="196.24" x2="177.15" y2="203.44" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="178.88" y1="190.36" x2="186.08" y2="194.51" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="181.03" y1="182.31" x2="189.35" y2="182.31" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="178.88" y1="174.27" x2="186.08" y2="170.11" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><line x1="172.99" y1="168.38" x2="177.15" y2="161.18" style="fill:none;stroke:#f5f5f5;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px"/><polygon points="164.95 182.31 316.95 334.31 317.28 397.74 228.04 486.97 101.85 486.97 12.62 398.13 12.95 334.31 164.95 182.31" style="fill:#f5f5f5"/><polyline id="shadow" points="194.46 364.15 194.46 486.97 135.44 486.97 135.44 364.15" style="fill:#1b1b1b"/><rect id="R1" x="104.24" y="105" width="12.76" height="18.63" style="fill:#f5f5f5"/></g>
                    <g id="Scanner"><polygon points="228.04 182.31 101.85 182.31 12.62 271.54 12.62 397.74 101.85 486.97 228.04 486.97 317.28 397.74 317.28 271.54 228.04 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><rect x="135.44" y="305.13" width="59.02" height="59.02" style="fill:#151515;stroke:#f5f5f5;stroke-miterlimit:10"/><circle cx="57.47" cy="226.83" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><circle cx="272.43" cy="441.79" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><circle cx="272.43" cy="226.83" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><circle cx="57.47" cy="441.79" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><circle cx="12.95" cy="334.31" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><circle cx="316.95" cy="334.31" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><circle cx="164.95" cy="182.31" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10"/><circle cx="164.95" cy="486.31" r="11.14" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/></g>
                    <g id="Rspi"><rect x="101.07" y="0.75" width="126.08" height="126.08" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/>
                      <g id="Relay"><rect x="104.24" y="105" width="12.76" height="18.63" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="119.55" y="104.93" width="12.76" height="18.7" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="134.85" y="104.86" width="12.76" height="18.77" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="150.15" y="104.79" width="12.76" height="18.84" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="165.46" y="104.72" width="12.76" height="18.91" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="180.76" y="104.65" width="12.76" height="18.98" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="196.06" y="104.57" width="12.76" height="19.05" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/><rect x="211.37" y="104.5" width="12.76" height="19.12" style="fill:none;stroke:#f5f5f5;stroke-miterlimit:10;stroke-width:1.5px"/></g>
                      <g id="RspiTxt"><path d="M111.65,9.44h3.74c2.69,0,4.4.63,4.4,3.15a2.38,2.38,0,0,1-2.09,2.66v.39H119c.64,0,.9.25.9.84v4.25h-1.32V16.2H113v4.53h-1.31Zm3.74,5.63c1.92,0,3.09-.19,3.09-2.25s-1.17-2.26-3.09-2.26H113v4.51Z" style="fill:#f5f5f5"/><path d="M124.48,16.2l3.17-.31a2,2,0,0,0-2.24-2.18c-1.16,0-2.23.52-2.23,2H121.9a3.18,3.18,0,0,1,3.51-3.12,3.35,3.35,0,0,1,3.55,3.6V19.6h1.17v1.13h-1.41a.85.85,0,0,1-.94-.93v-.43l.2-.84h-.38a2.9,2.9,0,0,1-3.07,2.36c-2.31,0-2.66-1.54-2.66-2.37C121.87,17.25,122.62,16.39,124.48,16.2Zm.21,3.56a2.8,2.8,0,0,0,3-2.89l-3,.3c-1,.1-1.52.4-1.52,1.19A1.33,1.33,0,0,0,124.69,19.76Z" style="fill:#f5f5f5"/><path d="M134.65,20.89c-2.57,0-3.63-1.21-3.63-3.09h1.31c0,1.37.8,2,2.34,2,1.23,0,1.81-.29,1.81-1.1,0-1-1.07-1.22-2.37-1.62-1.5-.48-2.72-.94-2.72-2.38,0-1.27,1.07-2.1,2.9-2.1,2.48,0,3.23,1.36,3.23,2.67h-1.31c0-1.07-.66-1.6-1.92-1.6-.88,0-1.59.26-1.59,1s.55,1,1.83,1.42c1.56.52,3.26.87,3.26,2.58C137.79,19.86,137,20.89,134.65,20.89Z" style="fill:#f5f5f5"/><path d="M140.75,12.77v1.17l-.21.91h.37a3.06,3.06,0,0,1,3.22-2.24c2.3,0,3.79,1.78,3.79,4.15a3.8,3.8,0,0,1-3.79,4.13,3.08,3.08,0,0,1-3.22-2.23h-.37l.21.9v4.08h-1.31V12.77Zm3,7a2.67,2.67,0,0,0,2.87-3,2.69,2.69,0,0,0-2.87-3,2.77,2.77,0,0,0-3,3A2.75,2.75,0,0,0,143.74,19.76Z" style="fill:#f5f5f5"/><path d="M149.82,9h1.31v5l-.2.91h.36a3.09,3.09,0,0,1,3.24-2.24c2.3,0,3.77,1.78,3.77,4.13s-1.47,4.15-3.77,4.15a3.1,3.1,0,0,1-3.24-2.23h-.36l.2.9v1.17h-1.31Zm4.31,10.8c1.65,0,2.86-.89,2.86-3a2.66,2.66,0,0,0-2.86-3,2.76,2.76,0,0,0-3,3A2.76,2.76,0,0,0,154.13,19.76Z" style="fill:#f5f5f5"/><path d="M163.65,12.61a3.51,3.51,0,0,1,3.71,3.87V17h-6.29a2.6,2.6,0,0,0,2.77,2.8,2.31,2.31,0,0,0,2.48-1.86h1.31a3.66,3.66,0,0,1-3.79,2.95c-2.85,0-4.05-2-4.05-4.25A3.69,3.69,0,0,1,163.65,12.61ZM166.08,16a2.22,2.22,0,0,0-2.43-2.29A2.35,2.35,0,0,0,161.07,16Z" style="fill:#f5f5f5"/><path d="M169.44,13.71c0-.75.35-1.12,1.1-1.08l4.42.14v1.12l-4.21-.14v7h-1.31Z" style="fill:#f5f5f5"/><path d="M176.46,13.71c0-.75.35-1.12,1.11-1.08l4.41.14v1.12l-4.2-.14v7h-1.32Z" style="fill:#f5f5f5"/><path d="M191.28,12.77l-3.46,7.88v2.22c0,.61-.35,1-1.1.94l-3.07-.14V22.55l2.86.14v-2L183,12.77h1.44L187,19v.61h.38V19l2.5-6.19Z" style="fill:#f5f5f5"/><path d="M119.47,32.32c0,3-1.81,3.72-4.66,3.72H113v3.89h-1.31V28.64h3.16C117.66,28.64,119.47,29.38,119.47,32.32Zm-1.31,0c0-2.21-1.41-2.56-3.33-2.56H113v5.16h1.87C116.75,34.92,118.16,34.56,118.16,32.32Z" style="fill:#f5f5f5"/><path d="M120.68,38.8h2.25V33l-1.65.14V32l1.84-.16a.85.85,0,0,1,1,1v6h2.24v1.13h-5.72Zm1.51-9.21a1.15,1.15,0,1,1,1.15,1.12A1.12,1.12,0,0,1,122.19,29.59Z" style="fill:#f5f5f5"/><path d="M134.51,35.62c0,2.45,1.06,3.35,3.33,3.35,2,0,2.91-.84,2.91-2.36s-.81-2.06-2.18-2.06H137V33.43h1.56c1.37,0,2-.56,2-1.78s-.7-2-2.75-2c-2.27,0-3.17.9-3.17,2.74h-1.31c0-2.51,1.58-3.86,4.48-3.86,2.7,0,4.06,1.27,4.06,3,0,1.38-.73,2.1-2.17,2.33v.36c1.44.29,2.33.92,2.33,2.64,0,2-1.52,3.29-4.22,3.29-2.9,0-4.64-1.35-4.64-4.47Z" style="fill:#f5f5f5"/><path d="M152,36.44h-3.28v3.28h-1.07V36.44H144.4V35.36h3.28V32.08h1.07v3.28H152Z" style="fill:#f5f5f5"/></g></g>
                    <g id="Cabels"><polyline points="110.48 123.63 110.48 136.35 140.44 166.31 140.44 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="125.75 123.63 125.75 136.35 147.16 166.31 147.16 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="141.03 123.63 141.03 136.35 153.87 166.31 153.87 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="156.31 123.63 156.31 136.35 160.59 166.31 160.59 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="171.59 123.63 171.59 136.35 167.31 166.31 167.31 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="186.87 123.63 186.87 136.35 174.03 166.31 174.03 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="202.14 123.63 202.14 136.35 180.74 166.31 180.74 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/><polyline points="217.42 123.63 217.42 136.35 187.46 166.31 187.46 182.31" style="fill:none;stroke:#f5f5f5;stroke-linejoin:round;stroke-width:1.5px"/></g>
                  </g>
                </svg>
              </div>
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_08.gif" alt="scanner diy">
                </div>
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_09.gif" alt="scanner diy">
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import projecttop from "@/components/projecttop.vue";
import { gsap } from "gsap";

export default {
  components: {
    projecttop,
  },
  data() {
    return {
      projectdata: {
        name: "Mat Scanner",
        date: "2019",
        counter: "❻",
        type: "DIY",
        desc: "Texture scanner for 3d materials",
        client: "ME",
        credits: "-",
        desc1: "A key factor to create realistic materials in 3D is a high quality normal map. A normal map is a texture type used in 3D to represent height and depth of a surface.",
        desc2: "This scanner automates parts of the otherwise manual scanning process, which leads to faster and more precise scan results, who again lead to a more accurate representation of the real world. ",
      },
      pageLoaded: false
    };
  },
  created() {
    window.scroll(0, 0);
  },
  methods: {
    scanner() {
      const tl = gsap.timeline({ repeat: -1 });
      const dur = 0.3;

      gsap.set(".Lamp", { fill: "transparent" });

      gsap.utils.toArray(".Lamp").forEach((lamp, i) => {
        tl.set(lamp, { opacity: 1 }, i * dur);
        tl.set(lamp, { opacity: 0 }, (i + 1) * dur);
      });
    },
    substance() {
      window.open("https://academy.substance3d.com/courses/your-smartphone-is-a-material-scanner", "_blank")
    },
    gsapin() {
      var tl = gsap.timeline()
      tl.to('.slidein', {
          duration: 0.8,
          y: 0,
          opacity: 1,
          delay: 1,
          ease: "circ.out"
      })
    }
  },
  mounted() {
    gsap.set('.slidein', {
        opacity: 0,
        y: 100
    })
    this.pageLoaded = true;
    this.gsapin()
    this.scanner()
  }
};
</script>

<style lang="scss" scoped>
#page {
  position: absolute;
  height: auto;
  width: 100%;
  background-position: center;
}

.Lamp {
  opacity: 0;
}


#svg-back {
  background-color: #151515;
  display: flex;
  justify-content: center;
  svg {
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 40%;
  }
}

.full-size {
  margin-top: 0.1rem;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.half-half {
  margin-top: 0.1rem;
  display: flex;
  span {
    width: 0.5rem;
  }
}

.half {
  width: auto;
  padding: 4rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

#howwork {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 5rem;
  p {
    text-transform: unset;
    margin-top: 1rem;
  }
}

// --- Media --- //

@media screen and(max-width: 600px) {
    .half-half {
        margin-top: 0;
        flex-direction: column;
    }
    .half {
        margin-top: 0.1rem;
        padding: 4rem;
    }
}
</style>
