console.log("[Lunaar]", "main.js");

function se() {
    try {
        const searchengine = localStorage.getItem("se");
        const seElement = document.getElementById("uv-search-engine");

        if (searchengine === "google") {
            seElement.value = "https://www.google.com/search?q=%s";
        } else if (searchengine === "bing") {
            seElement.value = "https://www.bing.com/search?q=%s";
        } else if (searchengine === "ddg") {
            seElement.value = "https://duckduckgo.com/?q=%s";
        } else if (searchengine === "brave") {
            seElement.value = "https://search.brave.com/search?q=%s";
        }
    } catch (err) {
        console.log("[Lunaar]", "Something bad happened", err);
    }
}

se();

var navbarHTML = `
<div class="nav">
    <a href="/./" class="nohov">
        <svg viewBox="0 0.587 494.972 413.945" version="1.1" id="svg5" sodipodi:docname="logggo.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview id="namedview5" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="0.45235477" inkscape:cx="-63.003646" inkscape:cy="23.21187" inkscape:window-width="1920" inkscape:window-height="949" inkscape:window-x="1920" inkscape:window-y="27" inkscape:window-maximized="1" inkscape:current-layer="svg5" />
            <defs id="defs1" />
            <path class="st1" d="M 209.353 407.486 C 269.933 407.486 325.261 379.925 361.917 334.762 C 367.339 328.081 361.427 318.321 353.046 319.916 C 257.758 338.064 170.251 265.003 170.251 168.813 C 170.251 113.404 199.913 62.452 248.121 35.018 C 255.552 30.789 253.683 19.522 245.239 17.963 C 233.402 15.78 221.39 14.681 209.353 14.679 C 100.941 14.679 12.95 102.532 12.95 211.083 C 12.95 319.495 100.803 407.486 209.353 407.486 Z" id="path1" style="fill:#7600c3;fill-opacity:1" />
            <g transform="matrix(0.19536555,-0.08235951,0.08235951,0.19536555,191.47,189.14735)" id="g5" style="fill:#7711ff;fill-opacity:1">
                <g id="g4" style="fill:#7711ff;fill-opacity:1">
                    <g transform="translate(660.61987,-430.64142)" id="g2" style="fill:#7711ff;fill-opacity:1">
                        <path class="st0" d="m 331.9,56.7 32.6,79.8 c 2.5,6.2 8,10.1 14.6,10.6 l 86,6.4 c 14.2,1 25.7,10.1 30.1,23.6 4.4,13.5 0.4,27.6 -10.5,36.8 l -65.9,55.7 c -5.1,4.3 -7.2,10.7 -5.6,17.2 l 20.5,83.8 c 3.4,13.8 -1.6,27.6 -13.2,35.9 -11.5,8.4 -26.1,8.9 -38.2,1.4 l -82.4,-51 -82.4,51 c -12.1,7.5 -26.7,7 -38.2,-1.4 -11.5,-8.4 -16.5,-22.1 -13.2,-35.9 l 20.5,-83.8 c 1.6,-6.5 -0.5,-12.9 -5.6,-17.2 l -65.9,-55.7 c -10.9,-9.2 -14.9,-23.3 -10.5,-36.8 4.4,-13.5 15.9,-22.6 30.1,-23.6 l 86,-6.4 c 6.7,-0.5 12.1,-4.4 14.6,-10.6 l 32.6,-79.8 c 5.4,-13.2 17.5,-21.3 31.8,-21.3 14.7,-0.1 26.8,8.1 32.2,21.3 z" style="clip-rule:evenodd;fill:#7711ff;fill-opacity:1;fill-rule:evenodd" id="path2" />
                    </g>
                    <g transform="translate(627.2677,362.79053)" id="g3" style="fill:#7711ff;fill-opacity:1">
                        <path class="st0" d="m 331.9,56.7 32.6,79.8 c 2.5,6.2 8,10.1 14.6,10.6 l 86,6.4 c 14.2,1 25.7,10.1 30.1,23.6 4.4,13.5 0.4,27.6 -10.5,36.8 l -65.9,55.7 c -5.1,4.3 -7.2,10.7 -5.6,17.2 l 20.5,83.8 c 3.4,13.8 -1.6,27.6 -13.2,35.9 -11.5,8.4 -26.1,8.9 -38.2,1.4 l -82.4,-51 -82.4,51 c -12.1,7.5 -26.7,7 -38.2,-1.4 -11.5,-8.4 -16.5,-22.1 -13.2,-35.9 l 20.5,-83.8 c 1.6,-6.5 -0.5,-12.9 -5.6,-17.2 l -65.9,-55.7 c -10.9,-9.2 -14.9,-23.3 -10.5,-36.8 4.4,-13.5 15.9,-22.6 30.1,-23.6 l 86,-6.4 c 6.7,-0.5 12.1,-4.4 14.6,-10.6 l 32.6,-79.8 c 5.4,-13.2 17.5,-21.3 31.8,-21.3 14.7,-0.1 26.8,8.1 32.2,21.3 z" style="clip-rule:evenodd;fill:#7711ff;fill-opacity:1;fill-rule:evenodd" id="path3" />
                    </g>
                    <path class="st0" d="m 331.9,56.7 32.6,79.8 c 2.5,6.2 8,10.1 14.6,10.6 l 86,6.4 c 14.2,1 25.7,10.1 30.1,23.6 4.4,13.5 0.4,27.6 -10.5,36.8 l -65.9,55.7 c -5.1,4.3 -7.2,10.7 -5.6,17.2 l 20.5,83.8 c 3.4,13.8 -1.6,27.6 -13.2,35.9 -11.5,8.4 -26.1,8.9 -38.2,1.4 l -82.4,-51 -82.4,51 c -12.1,7.5 -26.7,7 -38.2,-1.4 -11.5,-8.4 -16.5,-22.1 -13.2,-35.9 l 20.5,-83.8 c 1.6,-6.5 -0.5,-12.9 -5.6,-17.2 l -65.9,-55.7 c -10.9,-9.2 -14.9,-23.3 -10.5,-36.8 4.4,-13.5 15.9,-22.6 30.1,-23.6 l 86,-6.4 c 6.7,-0.5 12.1,-4.4 14.6,-10.6 l 32.6,-79.8 c 5.4,-13.2 17.5,-21.3 31.8,-21.3 14.7,-0.1 26.8,8.1 32.2,21.3 z" style="clip-rule:evenodd;fill:#7711ff;fill-opacity:1;fill-rule:evenodd" id="path4" />
                </g>
            </g>
        </svg>
    </a>
    <a href="/./projects"><i class="ti ti-device-gamepad-2">&nbsp;</i>Games</a>
    <a href="/./apps"><i class="ti ti-apps">&nbsp;</i>Apps</a>
    <a href="/./settings"><i class="ti ti-settings">&nbsp;</i>Settings</a>
    <a href="/./extra"><i class="ti ti-menu-2">&nbsp;</i>Extras</a>
    <a href="https://dsc.gg/parcoil"><i class="ti ti-brand-discord">&nbsp;</i>Discord</a>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">

</div>


`;

const texts = [
    "Welcome to Lunaar v5!",
    "Rip Nativegames",
    "What's up brother!",
    "Do not insert text here",
    "They not like us",
    "1 + 1 = 11",
    "Rip Nativegames",
    "LUNAARR",
    "insert text here",
    "🧀",
    "🥚",
    "🌙",
    "My CPU is 156 degrees :)",
    "Spicy Nacho Doritos are good",
    "Yo so games are cool",
    "Aiden does questionable things...",
    "Rip Native",
    "Bonelab = Garys mod",
    "Elden Ring on top - wavy ",
    "Insert text here",
    "Request games in our discord server!",
    "Rip Native",
    'Join our Discord: <a href="https://dsc.gg/parcoil">https://dsc.gg/parcoil</a>',
    'Join our Discord For <a href="https://dsc.gg/parcoil">Links</a>',
    "Or what!",
    "Ewww Homework whats that",
    "shit",
    "Powerade Sucks!",
    "The site to cure total boardness",
    "Activate Lunaar.",
    "Rip Nativegames",
    "Rip Native",
    'Did you know lunaar used to be a <a href="https://sites.google.com/view/thebestonlinegames/index?authuser=1">google site?</a>',
];

fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
        const ipText = `${data.ip}`;
        texts.push(ipText);
    })
    .catch((error) => {
        console.error("Error fetching IP:", error);
    })
    .finally(() => {
        try {
            document.getElementById("rng").innerHTML = getRandomText();
        } catch (e) {
            console.warn("[Lunaar]", "Failed to set RNG Text.");
        }
    });

function getRandomText() {
    return texts[Math.floor(Math.random() * texts.length)];
}

if (navigator.userAgent.indexOf("Firefox") > 0) {
    alert("Firefox is not supported. Please use a Chromium-based browser.");
}

const websites = [
    "YouTube",
    "Facebook",
    "Reddit",
    "X",
    "TikTok",
    "Twitch",
    "my lost socks",
    "Wikipedia",
    "Instagram",
    "Wikipedia",
    "Amazon",
];

const siteurl = window.location.hostname;

$(document).ready(function() {
    if (window.location.hostname.includes("nativegames")) {
        $(".sitetext").text("native.");
        console.log("[Lunaar]", "Site: nativegames");
    }
});
const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
const uvaddress = document.getElementById("uv-address");

try {
    uvaddress.placeholder = `Try Searching "${randomWebsite}"`;
} catch (e) {
    console.warn("[Lunaar]", "Failed to set Dynamic placeholder");
}
