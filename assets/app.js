// assets/app.js

// import './bootstrap.js'; // Garder commenté

console.log('--- app.js Start Execution ---');

document.addEventListener('DOMContentLoaded', () => {
    console.log('--- DOMContentLoaded Event Fired ---');

    const playPauseButton = document.getElementById('play-pause-button');
    const video = document.getElementById('background-video');

    console.log('Button Element:', playPauseButton);
    console.log('Video Element:', video);

    if (playPauseButton && video) {
        console.log('Button and video elements FOUND.');

        // --- SUPPRIMER/COMMENTER CES LIGNES ---
        // // Au chargement, comme on a 'autoplay', on met le bouton en état 'playing' (icône Pause)
        // console.log('Setting initial button state to playing (due to autoplay)');
        // playPauseButton.classList.add('playing'); // PAS BESOIN, l'état initial est 'play' (noir)
        // playPauseButton.setAttribute('aria-label', 'Mettre la vidéo en pause'); // PAS BESOIN, HTML est déjà correct

        // --- La logique du clic reste la même ---
        playPauseButton.addEventListener('click', () => {
            console.log('--- Play/Pause Button CLICKED! ---');
            if (video.paused) { // Si en pause -> joue
                video.play().then(() => {
                    console.log('Play request successful.');
                    playPauseButton.classList.add('playing'); // Devient jaune/pause
                    playPauseButton.setAttribute('aria-label', 'Mettre la vidéo en pause');
                }).catch(error => {
                    console.error("!!! Video Play Error:", error);
                    // Important: ne pas changer l'état si play échoue
                });
            } else { // Si joue -> pause
                video.pause();
                console.log('Pause requested.');
                playPauseButton.classList.remove('playing'); // Devient noir/play
                playPauseButton.setAttribute('aria-label', 'Lancer la vidéo');
            }
        });

        console.log('Click listener ADDED to button.');

        // --- Les listeners 'play', 'pause', 'ended' sont toujours utiles ---
         video.addEventListener('play', () => {
           if (!playPauseButton.classList.contains('playing')) {
                console.log('External PLAY detected, syncing button.');
                playPauseButton.classList.add('playing');
                playPauseButton.setAttribute('aria-label', 'Mettre la vidéo en pause');
            }
        });
        video.addEventListener('pause', () => {
            if (playPauseButton.classList.contains('playing')) {
                 console.log('External PAUSE detected, syncing button.');
                 playPauseButton.classList.remove('playing');
                 playPauseButton.setAttribute('aria-label', 'Lancer la vidéo');
            }
        });
         video.addEventListener('ended', () => {
             console.log('Vidéo terminée, syncing button.');
             playPauseButton.classList.remove('playing');
             playPauseButton.setAttribute('aria-label', 'Relancer la vidéo');
        });

    } else {
        console.error('!!! Button or video element NOT FOUND!');
    }
}); // Fin de DOMContentLoaded

console.log('--- app.js End Execution ---');