<?php
// src/Controller/PageController.php
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
        // On rendra un template pour les réalisations
        return $this->render('page/realisations.html.twig');
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