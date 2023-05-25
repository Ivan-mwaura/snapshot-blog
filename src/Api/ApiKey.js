

export const APIKE = "0bc96654a5a7ac04d618217e1597d059";



function handledownload (){
    fetch(webformatURL)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.jpg";

        // Programmatically click the link to initiate the download
        link.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
}



