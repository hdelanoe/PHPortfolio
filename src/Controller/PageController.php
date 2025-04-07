<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    // Route pour la page d'accueil
    #[Route('/', name: 'app_home')] // Changé le chemin en '/' et le nom en 'app_home'
    public function home(): Response
    {
        // On rendra un template spécifique pour l'accueil
        return $this->render('page/home.html.twig', [
            'is_homepage' => true, // Ajoute cette variable
        ]);
    }

    // Route pour la page des réalisations
    #[Route('/realisations', name: 'app_realisations')]
    public function realisations(): Response
    {
        // 1. Créer un tableau de données pour nos projets (données factices pour l'instant)
        $projectsData = [
            [
                'id' => 1,
                'title' => 'Nébuleuse Réactive',
                'category' => 'Art Génératif / Installation',
                'description' => 'Une projection interactive où des particules de lumière dessinent des formes cosmiques en réponse aux mouvements du public.',
                // On utilise un service comme placeholder.com pour les images temporaires
                'imageUrl' => '/images/lezard.png',
                'altText' => 'Simulation de nébuleuse générée par ordinateur'
            ],
            [
                'id' => 2,
                'title' => 'Flux Sonore Urbain',
                'category' => 'Visualisation de Données / Sonification',
                'description' => 'Transformation des données de trafic et de bruit ambiant d\'une ville en une composition visuelle et sonore évolutive.',
                'imageUrl' => 'https://via.placeholder.com/600x400/444/eee?text=Flux+Sonore',
                'altText' => 'Visualisation abstraite de flux de données'
            ],
            [
                'id' => 3,
                'title' => 'Jardin Kinetique Digital',
                'category' => 'Sculpture Numérique / VR',
                'description' => 'Un environnement en réalité virtuelle où des sculptures algorithmiques poussent et interagissent avec l\'utilisateur.',
                'imageUrl' => 'https://via.placeholder.com/600x400/555/eee?text=Jardin+Kinetique',
                'altText' => 'Formes organiques 3D dans un environnement virtuel'
            ],
             [
                'id' => 4,
                'title' => 'Echo Glitch',
                'category' => 'Vidéo Art / Performance',
                'description' => 'Performance audiovisuelle explorant les erreurs numériques et la mémoire à travers des boucles vidéo manipulées en temps réel.',
                'imageUrl' => 'https://via.placeholder.com/600x400/666/eee?text=Echo+Glitch',
                'altText' => 'Image vidéo avec effets de glitch art'
            ],
            [
                'id' => 5,
                'title' => 'Echo Glitch',
                'category' => 'Vidéo Art / Performance',
                'description' => 'Performance audiovisuelle explorant les erreurs numériques et la mémoire à travers des boucles vidéo manipulées en temps réel.',
                'imageUrl' => 'https://via.placeholder.com/600x400/666/eee?text=Echo+Glitch',
                'altText' => 'Image vidéo avec effets de glitch art'
            ],
        ];

        // 2. Passer le tableau 'projectsData' au template sous le nom 'projects'
        return $this->render('page/realisations.html.twig', [
            'controller_name' => 'PageController', // On peut garder ça si on veut
            'projects' => $projectsData // La variable 'projects' sera disponible dans Twig
        ]);
    }


    // Route pour la page "À Propos"
    #[Route('/a-propos', name: 'app_about')] // Utilisation d'un slug sympa pour l'URL
    public function about(): Response
    {
        // On rendra un template pour la page "À Propos"
        return $this->render('page/about.html.twig');
    }

    #[Route('/contact', name: 'app_contact')] // Route pour la page contact
    public function contact(): Response
    {
        return $this->render('page/contact.html.twig');
    }
}