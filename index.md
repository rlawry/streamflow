<!DOCTYPE html>
<html>

<head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />

    <link rel="stylesheet" href="streamflow.css">
    <title>Streamflow Game</title>
</head>



<body onkeyup="event.preventDefault()">
    <script type="module" src="streamflow.js"></script>
    <div class="instructions">
        <div class="row">The Top of the Screen is Always North.</div>
        <div class="row">Press Space to spin the stream valley.</div>
    </div>
    <div class="points" id="points"></div>
    <div class="status" id="status"></div>
    <div class="control-panel">
        <div class="direction-buttons">
            <div class="pie">
                <button style="transform: rotate(-22.5deg) skewY(-45deg);" value="0" class="btn">
                    <span style="transform: skewY(-45deg) rotate(45deg)" class="text"></span>
                </button>
                <button style="transform: rotate(22.5deg) skewY(-45deg);" value="1" class="btn">
                    <span style="transform: skewY(45deg) rotate(-22.5deg)" class="text"></span>
                </button>
                <button style="transform: rotate(67.5deg) skewY(-45deg);" value="2" class="btn">
                    <span style="transform: skewY(-45deg) rotate(-22.5deg)" class="text"></span>
                </button>
                <button style="transform: rotate(112.5deg) skewY(-45deg);" value="3" class="btn">
                    <span style="transform: skewY(-45deg) rotate(-22.5deg)" class="text"></span>
                </button>
                <button style="transform: rotate(157.5deg) skewY(-45deg);" value="4" class="btn">
                    <span style="transform: skewY(-45deg) rotate(-22.5deg)" class="text"></span>
                </button>
                <button style="transform: rotate(202.5deg) skewY(-45deg);" value="5" class="btn">
                    <span style="transform: skewY(-45deg) rotate(-22.5deg)" class="text"></span>
                </button>
                <button style="transform: rotate(247.5deg) skewY(-45deg);" value="6" class="btn">
                    <span style="transform: skewY(-45deg) rotate(-22.5deg)" class="text"></span>
                </button>
                <button style="transform: rotate(292.5deg) skewY(-45deg);" value="7" class="btn">
                    <span style="transform: skewY(-45deg) rotate(-22.5deg)" class="text"></span>
                </button>

            </div>
            <div id='warped'>
                <span class='w0'>N</span><span class='w1'> </span><span class='w2'> </span><span
                    class='w3'>N</span><span class='w4'>E</span><span class='w5'> </span><span class='w6'> </span><span
                    class='w7'>E</span><span class='w8'> </span><span class='w9'> </span><span class='w10'>S</span><span
                    class='w11'>E</span><span class='w12'> </span><span class='w13'> </span><span
                    class='w14'>S</span><span class='w15'> </span><span class='w16'> </span><span
                    class='w17'>S</span><span class='w18'>W</span><span class='w19'> </span><span class='w20'>
                </span><span class='w21'>W</span><span class='w22'> </span><span class='w23'> </span><span
                    class='w24'>N</span><span class='w25'>W</span>
            </div>
        </div>
    </div>
</body>

</html>
