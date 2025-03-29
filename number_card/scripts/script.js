function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            console.log(sParameterName[1]);
            return sParameterName[1];
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var param = GetURLParameter('number');
    if (param) {
        var element = document.getElementById("number");
        if (element) {
            element.innerHTML = param;
        }
    }

    const exportButton = document.getElementById("export-button");
    if (exportButton) {
      exportButton.addEventListener("click", exportCard);
    }
});

function exportCard() {
  // Get the card element to export
  const cardElement = document.getElementById("card-content");

  // Use html2canvas to create an image with transparent background
  html2canvas(cardElement, {
    backgroundColor: null, // This makes the background transparent
    scale: 2, // Improve the quality by scaling up
    logging: false, // Disable logging to console
  }).then((canvas) => {
    // Create an image with PNG format and transparency
    const image = canvas.toDataURL("image/png");

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = image;

    // Set filename to download - include the number if available
    const numberElement = document.getElementById("number");
    const numberText = numberElement ? numberElement.innerText : "card";
    link.download = `stand-number-${numberText}.png`;

    // Append, click and remove the link to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}