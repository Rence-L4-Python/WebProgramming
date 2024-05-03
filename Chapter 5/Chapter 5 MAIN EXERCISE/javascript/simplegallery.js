let galleryNumber = 1;
showContent(galleryNumber);

function nextContent(n){
showContent(galleryNumber += n);
}

function currentContent(n){
showContent(galleryNumber = n);
}

function showContent(n){
    let i;
    let content = document.getElementsByClassName("content");
    if (n > content.length) {galleryNumber = 1}
    if (n < 1) {galleryNumber = content.length}
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    content[galleryNumber-1].style.display = "block";
}
