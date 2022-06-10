const drums = new Howl({
    "src": [
        "/assets/drums/drums.webm",
        "/assets/drums/drums.mp3"
    ],
    "sprite": {
        "Clap": [
            0,
            1029.8185941043082
        ],
        "Crash": [
            3000,
            3361.7913832199547
        ],
        "closed_hh": [
            8000,
            886.7120181405887
        ],
        "kick": [
            10000,
            935.7596371882089
        ],
        "open_hh": [
            12000,
            1944.7619047619041
        ],
        "snare": [
            15000,
            954.5804988662123
        ]
    }
});

let snare = document.querySelector('.snare');
let kick = document.querySelector('.kick');
let open_hh = document.querySelector('.open_hh');
let closed_hh = document.querySelector('.closed_hh');
let crash = document.querySelector('.crash');
let clap = document.querySelector('.clap');

let snare_img = document.querySelector('#snare');
let kick_img = document.querySelector('#kick');
let open_hh_img = document.querySelector('#open_hh');
let closed_hh_img = document.querySelector('#closed_hh');
let crash_img = document.querySelector('#crash');
let clap_img = document.querySelector('#clap');

snare.addEventListener('click', (e) => {
    drums.play('snare');
    scale(snare_img);
})
kick.addEventListener('click', (e) => {
    drums.play('kick')
    scale(kick_img);
})
open_hh.addEventListener('click', (e) => {
    drums.play('open_hh')
    scale(open_hh_img);
})
closed_hh.addEventListener('click', (e) => {
    drums.play('closed_hh')
    scale(closed_hh_img);
})
crash.addEventListener('click', (e) => {
    drums.play('Crash')
    scale(crash_img);
})
clap.addEventListener('click', (e) => {
    drums.play('Clap')
    scale(clap_img);
})

document.addEventListener('keydown', (e) => {
    if(e.key == 'q'){
        drums.play('kick')
        scale(kick_img);
    }
    else if(e.key == 'k'){
        drums.play('snare')
        scale(snare_img);
    }
    else if(e.key == 'n'){
        drums.play('Crash')
        scale(crash_img);
    }
    else if(e.key == 'g'){
        drums.play('Clap')
        scale(clap_img);
    }
    else if(e.key == 'c'){
        drums.play('closed_hh')
        scale(closed_hh_img);
    }
    else if(e.key == 'x'){
        drums.play('open_hh')
        scale(open_hh_img);
    }
})

function scale(img){
    img.style.transform = "scale(1.1)";
    setTimeout(() => {
        img.style.transform = "scale(1)";
        
    }, 100);
}