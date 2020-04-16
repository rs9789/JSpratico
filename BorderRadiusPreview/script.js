function modifyBorRad(id, value) {
    const comp = document.getElementById(id);
    const divBord = document.getElementById('interno');
    const textfield = document.getElementById('text');

    let topL = $("#top-left").val();
    let topR = $("#top-right").val();
    let bottomL = $("#bottom-left").val();
    let bottomR = $("#bottom-right").val();

    switch (id) {
        case "top-left":
            divBord.style.borderTopLeftRadius = `${value}px`;

            break;
        case "top-right":
            divBord.style.borderTopRightRadius = `${value}px`;
            break;
        case "bottom-left":
            divBord.style.borderBottomLeftRadius = `${value}px`;
            break;
        case "bottom-right":
            divBord.style.borderBottomRightRadius = `${value}px`;
    }

    textfield.textContent = `border-top-right-radius: ${topR}px;
border-top-left-radius: ${topL}px;
border-bottom-right-radius: ${bottomR}px;
border-bottom-left-radius: ${bottomL}px;`;
}


function topL() {
    let value = $("#top-left").val();
    if (value == "") { value = "0" }
    modifyBorRad("top-left", value);
}

function topR() {
    let value = $("#top-right").val();
    if (value == "") { value = "0" }
    modifyBorRad("top-right", value);

}

function bottomL() {
    let value = $("#bottom-left").val();
    if (value == "") { value = "0" }
    modifyBorRad("bottom-left", value);

}

function bottomR() {
    let value = $("#bottom-right").val();
    if (value == "") { value = "0" }
    modifyBorRad("bottom-right", value);

}

function copyCSS() {
    let textCopy = document.getElementById("text");
    textCopy.select();
    document.execCommand('copy');

    window.alert("Copied the text: " + text.value);
}