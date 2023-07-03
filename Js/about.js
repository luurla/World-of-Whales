const displacerlinks = document.querySelector('.displacerlinks');
const displacerrechts = document.querySelector('.displacerrechts');

window.onscroll = () => {
    let pos = window.scrollY - 300;
    console.log(pos);

    if (pos < 150) {
        displacerlinks.style.left = `${pos}px`;
    }

    if (pos < 150) {
        displacerrechts.style.right = `${pos}px`;
    }

}