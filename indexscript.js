if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    console.log("This is an iOS device.");

    let button = document.getElementById('button');
    button.setAttribute('ontouchstart', `
        
        const overlay = document.getElementById('foreground');
        overlay.classList.add('puff-out-center');
        
        setTimeout(() => {
          overlay.remove();
        }, 1000);
        
        document.getElementById('movideo').play();
        document.getElementById('movideo').muted = false;
      `);

} else {
    console.log("This is not an iOS device!");
    document.getElementById('button').addEventListener('click', () => {
        let foreground = document.getElementById('foreground');
        document.getElementById('foreground').classList.add('puff-out-center');
        setTimeout(() => { foreground.remove(); }, 1000);
        var x = document.getElementById('movideo');
        document.getElementById('movideo').muted = false;
        x.play();
    });
}

