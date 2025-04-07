// assets/app.js
import './styles/app.css'; // Notre CSS custom

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

console.log('--- app.js Execution Start ---');

// --- Un seul écouteur DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('--- DOMContentLoaded Event Fired ---');

    // --- Initialisation pour la Vidéo Homepage ---
    const playPauseButton = document.getElementById('play-pause-button');
    const video = document.getElementById('background-video');

    if (playPauseButton && video) {
        console.log('Homepage Video elements FOUND. Initializing video controls...');
        // Logique du bouton Play/Pause (légèrement simplifiée)
        playPauseButton.addEventListener('click', () => {
            console.log('Play/Pause Button CLICKED!');
            if (video.paused) {
                video.play().then(() => {
                    playPauseButton.classList.add('playing');
                    playPauseButton.setAttribute('aria-label', 'Mettre la vidéo en pause');
                }).catch(error => console.error("Video Play Error:", error));
            } else {
                video.pause();
                playPauseButton.classList.remove('playing');
                playPauseButton.setAttribute('aria-label', 'Lancer la vidéo');
            }
        });

        // Synchronisation état bouton / état vidéo
        video.addEventListener('play', () => {
             if (!playPauseButton.classList.contains('playing')) {
                console.log('Video PLAY detected, syncing button.');
                playPauseButton.classList.add('playing');
                playPauseButton.setAttribute('aria-label', 'Mettre la vidéo en pause');
            }
        });
        video.addEventListener('pause', () => {
             if (playPauseButton.classList.contains('playing')) {
                console.log('Video PAUSE detected, syncing button.');
                playPauseButton.classList.remove('playing');
                playPauseButton.setAttribute('aria-label', 'Lancer la vidéo');
            }
        });
         video.addEventListener('ended', () => {
             console.log('Video ENDED, syncing button.');
             playPauseButton.classList.remove('playing');
             playPauseButton.setAttribute('aria-label', 'Relancer la vidéo');
        });

         // Gérer l'état initial basé sur l'autoplay (si la vidéo a déjà commencé à jouer avant que le JS s'exécute)
         // L'attribut 'autoplay' peut être capricieux, on se fie plutôt à l'état réel au chargement du JS
         if (!video.paused) {
             console.log('Video was already playing on JS load, syncing button.');
             playPauseButton.classList.add('playing');
             playPauseButton.setAttribute('aria-label', 'Mettre la vidéo en pause');
         } else {
             console.log('Video was paused on JS load.');
             playPauseButton.classList.remove('playing');
             playPauseButton.setAttribute('aria-label', 'Lancer la vidéo');
         }


    } else {
        console.log('Homepage Video elements NOT FOUND on this page.');
    }

    // --- Initialisation pour le Carrousel Réalisations ---
    const swiperContainer = document.querySelector('.projects-swiper');
    if (swiperContainer) {
        console.log('Swiper container FOUND. Initializing Swiper...');
        try {
            new Swiper(swiperContainer, {
                // --- MODIFICATION ICI ---
                // Afficher ~2.2 slides par défaut sur grand écran
                slidesPerView: 3.2,
                // OU si tu préfères exactement 2 :
                // slidesPerView: 2,

                // Garder un espace raisonnable
                spaceBetween: 50, // Ajuste si besoin
                // ------------------------

                freeMode: false,
                mousewheel: {
                    forceToAxis: false,
                    sensitivity: 1,
                    releaseOnEdges: true,
                },
                slidesOffsetAfter: 100,
                 // Ajuster les breakpoints pour le nombre de slides
                 breakpoints: {
                    // En dessous de 1200px, peut-être 2 slides
                    1200: {
                        slidesPerView: 2.8,
                        spaceBetween: 40
                    },
                     // En dessous de 768px (tablette), 1.5 slides (voir un bout de la 2e)
                     768: {
                       slidesPerView: 1.5,
                       spaceBetween: 25
                     },
                     // En dessous de 480px (mobile), 1.1 slides (focus sur une seule)
                     480: {
                        slidesPerView: 1.1,
                        spaceBetween: 20
                     }
                 }
            });
            console.log('Swiper initialized successfully.');
        } catch (error) {
            console.error('!!! Swiper Initialization Error:', error);
        }
    } else {
        console.log('Swiper container NOT FOUND on this page.');
    }
}); // Fin de DOMContentLoaded

console.log('--- app.js Execution End ---');