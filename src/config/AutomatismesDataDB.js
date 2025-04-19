import {
    FaPlus, FaMinus, FaTimes, FaDivide, FaCalculator,
    FaPercentage, FaEquals, FaSquare, FaGreaterThan, FaLessThan, FaCircle, FaRuler, FaShapes
} from "react-icons/fa";
import React from "react";

export const AutomatismesDataDB = [
    // Calculs de base (1-15)
    {
        id: 1,
        title: "Addition simple",
        icon: <FaPlus/>,
        question: "Calculer: 27 + 48",
        answer: "75",
        detailedAnswer: "27 + 48 = (20 + 40) + (7 + 8) = 60 + 15 = 75",
        color: "#3498db"
    },
    {
        id: 2,
        title: "Soustraction",
        icon: <FaMinus/>,
        question: "Calculer: 92 - 57",
        answer: "35",
        detailedAnswer: "92 - 57 = (90 - 50) + (2 - 7) = 40 - 5 = 35",
        color: "#e74c3c"
    },
    {
        id: 3,
        title: "Multiplication",
        icon: <FaTimes/>,
        question: "Calculer: 13 × 7",
        answer: "91",
        detailedAnswer: "13 × 7 = (10 × 7) + (3 × 7) = 70 + 21 = 91",
        color: "#2ecc71"
    },
    {
        id: 4,
        title: "Division",
        icon: <FaDivide/>,
        question: "Calculer: 144 ÷ 12",
        answer: "12",
        detailedAnswer: "144 ÷ 12 = 12 car 12 × 12 = 144",
        color: "#f39c12"
    },
    {
        id: 5,
        title: "Opérations combinées",
        icon: <FaCalculator/>,
        question: "Calculer: (15 + 3) × 2",
        answer: "36",
        detailedAnswer: "(15 + 3) × 2 = 18 × 2 = 36",
        color: "#9b59b6"
    },
    {
        id: 6,
        title: "Puissances simples",
        icon: <FaCalculator/>,
        question: "Calculer: 5³",
        answer: "125",
        detailedAnswer: "5³ = 5 × 5 × 5 = 25 × 5 = 125",
        color: "#1abc9c"
    },
    {
        id: 7,
        title: "Racine carrée",
        icon: <FaSquare/>,
        question: "Calculer: √64",
        answer: "8",
        detailedAnswer: "√64 = 8 car 8 × 8 = 64",
        color: "#d35400"
    },
    {
        id: 8,
        title: "Double et moitié",
        icon: <FaCalculator/>,
        question: "Quel est le double de 23 ?",
        answer: "46",
        detailedAnswer: "Double de 23 = 23 × 2 = 46",
        color: "#34495e"
    },
    {
        id: 9,
        title: "Triple et tiers",
        icon: <FaCalculator/>,
        question: "Quel est le tiers de 99 ?",
        answer: "33",
        detailedAnswer: "Tiers de 99 = 99 ÷ 3 = 33",
        color: "#7f8c8d"
    },
    {
        id: 10,
        title: "Pourcentage simple",
        icon: <FaPercentage/>,
        question: "50% de 80",
        answer: "40",
        detailedAnswer: "50% de 80 = 80 × 0,5 = 40",
        color: "#27ae60"
    },
    {
        id: 11,
        title: "Comparaison",
        icon: <FaGreaterThan/>,
        question: "Comparer: 5÷8 et 0,6",
        answer: "5/8 < 0,6 (0,625 > 0,6)",
        detailedAnswer: "5 ÷ 8 = 0,625. Comparaison: 0,625 > 0,6 donc 5/8 > 0,6",
        color: "#8e44ad"
    },
    {
        id: 12,
        title: "Équation simple",
        icon: <FaEquals/>,
        question: "Résoudre: x + 7 = 15",
        answer: "x = 8",
        detailedAnswer: "x + 7 = 15 ⇒ x = 15 - 7 ⇒ x = 8",
        color: "#c0392b"
    },
    {
        id: 13,
        title: "Inéquation",
        icon: <FaLessThan/>,
        question: "Résoudre: 2x < 10",
        answer: "x < 5",
        detailedAnswer: "2x < 10 ⇒ x < 10 ÷ 2 ⇒ x < 5",
        color: "#16a085"
    },
    {
        id: 14,
        title: "Calcul mental",
        icon: <FaCalculator/>,
        question: "25 × 4 - 10",
        answer: "90",
        detailedAnswer: "(25 × 4) - 10  = 100 - 10 = 90",
        color: "#e67e22"
    },
    {
        id: 15,
        title: "Ordre de grandeur",
        icon: <FaCalculator/>,
        question: "Estimer: 49 × 51",
        answer: "≈ 2500 (exact: 2499)",
        detailedAnswer: "49 × 51 ≈ 50 × 50 = 2500 (exact: 49 × 51 = (50-1)(50+1) = 2500 - 1 = 2499)",
        color: "#2c3e50"
    },

    // Fractions et décimaux (16-30)
    {
        id: 16,
        title: "Addition fractions",
        icon: <FaPercentage/>,
        question: "Calculer: 1/4 + 1/2",
        answer: "3/4",
        detailedAnswer: "1/4 + 1/2 = 1/4 + 2/4 = 3/4",
        color: "#3498db"
    },
    {
        id: 17,
        title: "Soustraction fractions",
        icon: <FaPercentage/>,
        question: "Calculer: 5/6 - 1/3",
        answer: "3/6 = 1/2",
        detailedAnswer: "5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2",
        color: "#e74c3c"
    },
    {
        id: 18,
        title: "Multiplication fractions",
        icon: <FaPercentage/>,
        question: "Calculer: 2/3 × 3/4",
        answer: "6/12 = 1/2",
        detailedAnswer: "2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2",
        color: "#2ecc71"
    },
    {
        id: 19,
        title: "Division fractions",
        icon: <FaPercentage/>,
        question: "Calculer: 3/5 ÷ 2/5",
        answer: "15/10 = 3/2",
        detailedAnswer: "3/5 ÷ 2/5 = 3/5 × 5/2 = 15/10 = 3/2",
        color: "#f39c12"
    },
    {
        id: 20,
        title: "Fraction → Décimal",
        icon: <FaPercentage/>,
        question: "Convertir 3/8 en décimal",
        answer: "0,375",
        detailedAnswer: "3 ÷ 8 = 0,375",
        color: "#9b59b6"
    },
    {
        id: 21,
        title: "Décimal → Fraction",
        icon: <FaPercentage/>,
        question: "Convertir 0,6 en fraction",
        answer: "3/5",
        detailedAnswer: "0,6 = 6/10 = 3/5",
        color: "#1abc9c"
    },
    {
        id: 22,
        title: "Pourcentage → Fraction",
        icon: <FaPercentage/>,
        question: "Convertir 40% en fraction",
        answer: "2/5",
        detailedAnswer: "40% = 40/100 = 2/5",
        color: "#d35400"
    },
    {
        id: 23,
        title: "Fraction → Pourcentage",
        icon: <FaPercentage/>,
        question: "Convertir 3/4 en pourcentage",
        answer: "75%",
        detailedAnswer: "3/4 = 0,75 = 75%",
        color: "#34495e"
    },
    {
        id: 24,
        title: "Simplification",
        icon: <FaPercentage/>,
        question: "Simplifier 18/24",
        answer: "3/4",
        detailedAnswer: "18/24 = (18÷6)/(24÷6) = 3/4",
        color: "#7f8c8d"
    },
    {
        id: 25,
        title: "Fraction égale",
        icon: <FaEquals/>,
        question: "Trouver x tel que 1/2 = x/4",
        answer: "x = 2",
        detailedAnswer: "1/2 = x/4 ⇒ x = (1×4)/2 = 2",
        color: "#27ae60"
    },
    {
        id: 26,
        title: "Comparaison fractions",
        icon: <FaGreaterThan/>,
        question: "Comparer: 5/7 et 3/4",
        answer: "5/7 ≈ 0,714 < 3/4 = 0,75",
        detailedAnswer: "5 ÷ 7 ≈ 0,714 et 3 ÷ 4 = 0,75 ⇒ 0,714 < 0,75",
        color: "#8e44ad"
    },
    {
        id: 27,
        title: "Fraction d'une quantité",
        icon: <FaPercentage/>,
        question: "Calculer 3/5 de 45",
        answer: "27",
        detailedAnswer: "3/5 de 45 = (45 ÷ 5) × 3 = 9 × 3 = 27",
        color: "#c0392b"
    },
    {
        id: 28,
        title: "Problème fraction",
        icon: <FaPercentage/>,
        question: "Si 1/4 = 7, quelle est la totalité ?",
        answer: "28",
        detailedAnswer: "Si 1/4 = 7 alors le total = 7 × 4 = 28",
        color: "#16a085"
    },
    {
        id: 29,
        title: "Addition décimaux",
        icon: <FaCalculator/>,
        question: "Calculer: 3,25 + 1,75",
        answer: "5",
        detailedAnswer: "3,25 + 1,75 = (3 + 1) + (0,25 + 0,75) = 4 + 1 = 5",
        color: "#e67e22"
    },
    {
        id: 30,
        title: "Multiplication décimaux",
        icon: <FaCalculator/>,
        question: "Calculer: 0,4 × 0,5",
        answer: "0,2",
        detailedAnswer: "0,4 × 0,5 = (4 × 5) ÷ 100 = 20 ÷ 100 = 0,2",
        color: "#2c3e50"
    },

    // Géométrie (31-45)
    {
        id: 31,
        title: "Aire carré",
        icon: <FaSquare/>,
        question: "Aire d'un carré de côté 5 cm",
        answer: "25 cm²",
        detailedAnswer: "Aire carré = côté × côté = 5 × 5 = 25 cm²",
        color: "#3498db"
    },
    {
        id: 32,
        title: "Périmètre rectangle",
        icon: <FaSquare/>,
        question: "Périmètre d'un rectangle 6cm × 4cm",
        answer: "20 cm",
        detailedAnswer: "Périmètre = 2 × (longueur + largeur) = 2 × (6 + 4) = 2 × 10 = 20 cm",
        color: "#e74c3c"
    },
    {
        id: 33,
        title: "Aire disque",
        icon: <FaCircle/>,
        question: "Aire d'un disque de rayon 3 cm (π≈3,14)",
        answer: "28,26 cm²",
        detailedAnswer: "Aire = π × r² = 3,14 × 3² = 3,14 × 9 = 28,26 cm²",
        color: "#2ecc71"
    },
    {
        id: 34,
        title: "Circonférence",
        icon: <FaCircle/>,
        question: "Circonférence d'un cercle diamètre 10 cm",
        answer: "10π ≈ 31,4 cm",
        detailedAnswer: "Circonférence = π × diamètre = π × 10 ≈ 31,4 cm",
        color: "#f39c12"
    },
    {
        id: 35,
        title: "Volume cube",
        icon: <FaSquare/>,
        question: "Volume d'un cube d'arête 3 cm",
        answer: "27 cm³",
        detailedAnswer: "Volume = arête³ = 3³ = 27 cm³",
        color: "#9b59b6"
    },
    {
        id: 36,
        title: "Volume pavé",
        icon: <FaSquare/>,
        question: "Volume d'un pavé 5cm×4cm×2cm",
        answer: "40 cm³",
        detailedAnswer: "Volume = L × l × h = 5 × 4 × 2 = 40 cm³",
        color: "#1abc9c"
    },
    {
        id: 37,
        title: "Conversion longueur",
        icon: <FaRuler/>,
        question: "Convertir 3,5 km en m",
        answer: "3500 m",
        detailedAnswer: "1 km = 1000 m ⇒ 3,5 km = 3,5 × 1000 = 3500 m",
        color: "#d35400"
    },
    {
        id: 38,
        title: "Conversion surface",
        icon: <FaRuler/>,
        question: "Convertir 2 m² en cm²",
        answer: "20000 cm²",
        detailedAnswer: "1 m² = 10000 cm² ⇒ 2 m² = 2 × 10000 = 20000 cm²",
        color: "#34495e"
    },
    {
        id: 39,
        title: "Conversion volume",
        icon: <FaRuler/>,
        question: "Convertir 1 dm³ en cm³",
        answer: "1000 cm³",
        detailedAnswer: "1 dm³ = 1000 cm³",
        color: "#7f8c8d"
    },
    {
        id: 40,
        title: "Pythagore simple",
        icon: <FaShapes/>,
        question: "Triangle rectangle 3cm, 4cm, hypoténuse ?",
        answer: "5 cm",
        detailedAnswer: "Par le théorème de Pythagore: √(3² + 4²) = √(9 + 16) = √25 = 5 cm",
        color: "#27ae60"
    },
    {
        id: 41,
        title: "Thalès simple",
        icon: <FaShapes/>,
        question: "Si AD/AB = 1/3 et DE=4cm, BC=?",
        answer: "12 cm",
        detailedAnswer: "Par Thalès, BC = DE × (AB/AD) = 4 × 3 = 12 cm",
        color: "#8e44ad"
    },
    {
        id: 42,
        title: "Angles triangle",
        icon: <FaShapes/>,
        question: "Dans un triangle, deux angles 30° et 70°, le troisième ?",
        answer: "80°",
        detailedAnswer: "Somme des angles = 180° ⇒ 180 - (30 + 70) = 80°",
        color: "#c0392b"
    },
    {
        id: 43,
        title: "Aire triangle",
        icon: <FaShapes/>,
        question: "Aire triangle base 6cm, hauteur 4cm",
        answer: "12 cm²",
        detailedAnswer: "Aire = (base × hauteur) / 2 = (6 × 4) / 2 = 24 / 2 = 12 cm²",
        color: "#16a085"
    },
    {
        id: 44,
        title: "Repérage",
        icon: <FaShapes/>,
        question: "Quelle est l'abscisse du point A(3;2) ?",
        answer: "3",
        detailedAnswer: "Dans un repère (x,y), l'abscisse est la première valeur ⇒ x = 3",
        color: "#e67e22"
    },
    {
        id: 45,
        title: "Symétrie",
        icon: <FaShapes/>,
        question: "Quelle est l'image du point A(2;4) par symétrie axiale d'axe x = 0 ?",
        answer: "A'(-2;4)",
        detailedAnswer: "Symétrie par rapport à l'axe des y (x=0) inverse l'abscisse ⇒ A'(-2,4)",
        color: "#2c3e50"
    },

    // Algèbre (46-60)
    {
        id: 46,
        title: "Développement",
        icon: <FaCalculator/>,
        question: "Développer: 2(x + 3)",
        answer: "2x + 6",
        detailedAnswer: "2(x + 3) = 2×x + 2×3 = 2x + 6",
        color: "#3498db"
    },
    {
        id: 47,
        title: "Factorisation",
        icon: <FaCalculator/>,
        question: "Factoriser: 3x + 6",
        answer: "3(x + 2)",
        detailedAnswer: "3x + 6 = 3×x + 3×2 = 3(x + 2)",
        color: "#e74c3c"
    },
    {
        id: 48,
        title: "Équation 1er degré",
        icon: <FaEquals/>,
        question: "Résoudre: 5x - 3 = 12",
        answer: "x = 3",
        detailedAnswer: "5x - 3 = 12 ⇒ 5x = 15 ⇒ x = 3",
        color: "#2ecc71"
    },
    {
        id: 49,
        title: "Système simple",
        icon: <FaEquals/>,
        question: "Résoudre: x + 1 = 5",
        answer: "x = 4",
        detailedAnswer: "x + 1 = 5 ⇒ x = 5 - 1 ⇒ x = 4",
        color: "#f39c12"
    },
    {
        id: 50,
        title: "Identité remarquable",
        icon: <FaCalculator/>,
        question: "Développer: (x + 2)²",
        answer: "x² + 4x + 4",
        detailedAnswer: "(x + 2)² = x² + 2×x×2 + 2² = x² + 4x + 4",
        color: "#9b59b6"
    },
    {
        id: 51,
        title: "Expression littérale",
        icon: <FaCalculator/>,
        question: "Calculer 3x + 5 pour x = 4",
        answer: "17",
        detailedAnswer: "3x + 5 = 3×4 + 5 = 12 + 5 = 17",
        color: "#1abc9c"
    },
    {
        id: 52,
        title: "Inéquation",
        icon: <FaLessThan/>,
        question: "Résoudre: 2x + 3 ≤ 11",
        answer: "x ≤ 4",
        detailedAnswer: "2x + 3 ≤ 11 ⇒ 2x ≤ 8 ⇒ x ≤ 4",
        color: "#d35400"
    },
    {
        id: 53,
        title: "Proportionnalité",
        icon: <FaPercentage/>,
        question: "Si 5kg coûtent 20€, prix pour 8kg ?",
        answer: "32€",
        detailedAnswer: "Prix au kg = 20€ ÷ 5 = 4€/kg ⇒ 8kg = 8 × 4 = 32€",
        color: "#34495e"
    },
    {
        id: 54,
        title: "Pourcentage augmentation",
        icon: <FaPercentage/>,
        question: "Augmentation de 20% sur 50€",
        answer: "60€",
        detailedAnswer: "Augmentation = 50 × 0,20 = 10€ ⇒ Nouveau prix = 50 + 10 = 60€",
        color: "#7f8c8d"
    },
    {
        id: 55,
        title: "Pourcentage diminution",
        icon: <FaPercentage/>,
        question: "Réduction de 15% sur 80€",
        answer: "68€",
        detailedAnswer: "Réduction = 80 × 0,15 = 12€ ⇒ Nouveau prix = 80 - 12 = 68€",
        color: "#27ae60"
    },
    {
        id: 56,
        title: "Vitesse moyenne",
        icon: <FaCalculator/>,
        question: "Vitesse moyenne pour 240km en 3h",
        answer: "80 km/h",
        detailedAnswer: "Vitesse = distance ÷ temps = 240 ÷ 3 = 80 km/h",
        color: "#8e44ad"
    },
    {
        id: 57,
        title: "Pourcentage augmentation",
        icon: <FaPercentage/>,
        question: "Augmentation de 15% sur 80€",
        answer: "92€",
        detailedAnswer: "Augmentation = 80 × 0,15 = 12€ ⇒ Nouveau prix = 80 + 12 = 92€",
        color: "#c0392b"
    },
    {
        id: 58,
        title: "Coefficient multiplicateur",
        icon: <FaPercentage/>,
        question: "Coefficient pour une augmentation de 25%",
        answer: "1,25",
        detailedAnswer: "Coefficient = 1 + (25/100) = 1,25",
        color: "#16a085"
    },
    {
        id: 59,
        title: "Échelle",
        icon: <FaRuler/>,
        question: "Sur une carte à 1:10000, 2cm = ? en réalité",
        answer: "200 m",
        detailedAnswer: "1 cm sur carte = 10000 cm en réalité = 100 m ⇒ 2 cm = 200 m",
        color: "#e67e22"
    },
    {
        id: 60,
        title: "Puissances",
        icon: <FaCalculator/>,
        question: "Calculer: 10³ × 10²",
        answer: "10⁵ = 100000",
        detailedAnswer: "10³ × 10² = 10^(3+2) = 10⁵ = 100000",
        color: "#2c3e50"
    },
    {
        id: 61,
        title: "Addition de relatifs",
        icon: <FaPlus/>,
        question: "Calculer: (-5) + 8",
        answer: "3",
        detailedAnswer: "(-5) + 8 = 8 - 5 = 3",
        color: "#3498db"
    },
    {
        id: 62,
        title: "Soustraction de relatifs",
        icon: <FaMinus/>,
        question: "Calculer: 4 - (-3)",
        answer: "7",
        detailedAnswer: "4 - (-3) = 4 + 3 = 7",
        color: "#e74c3c"
    },
    {
        id: 63,
        title: "Multiplication de relatifs",
        icon: <FaTimes/>,
        question: "Calculer: (-6) × (-2)",
        answer: "12",
        detailedAnswer: "(-6) × (-2) = 12 (négatif × négatif = positif)",
        color: "#2ecc71"
    },
    {
        id: 64,
        title: "Division de relatifs",
        icon: <FaDivide/>,
        question: "Calculer: (-15) ÷ 3",
        answer: "-5",
        detailedAnswer: "(-15) ÷ 3 = -5 (négatif ÷ positif = négatif)",
        color: "#f39c12"
    },
    {
        id: 65,
        title: "Opérations combinées",
        icon: <FaCalculator/>,
        question: "Calculer: 3 + 2 × 4",
        answer: "11",
        detailedAnswer: "Priorité à la multiplication: 2 × 4 = 8 puis 3 + 8 = 11",
        color: "#9b59b6"
    },
    {
        id: 66,
        title: "Équation simple",
        icon: <FaEquals/>,
        question: "Résoudre: 2x + 5 = 15",
        answer: "x = 5",
        detailedAnswer: "2x + 5 = 15 ⇒ 2x = 10 ⇒ x = 5",
        color: "#1abc9c"
    },
    {
        id: 67,
        title: "Calcul de durée",
        icon: <FaCalculator/>,
        question: "De 14h30 à 17h15, combien de minutes ?",
        answer: "165 minutes",
        detailedAnswer: "De 14h30 à 17h15 = 2h45 = (2×60) + 45 = 165 minutes",
        color: "#d35400"
    },
    {
        id: 68,
        title: "Proportionnalité",
        icon: <FaPercentage/>,
        question: "5 cahiers coûtent 7,50€. Prix pour 3 cahiers ?",
        answer: "4,50€",
        detailedAnswer: "Prix unitaire = 7,50€ ÷ 5 = 1,50€ ⇒ 3 cahiers = 3 × 1,50 = 4,50€",
        color: "#34495e"
    },
    {
        id: 69,
        title: "Pourcentage simple",
        icon: <FaPercentage/>,
        question: "30% de 90",
        answer: "27",
        detailedAnswer: "30% de 90 = 90 × 0,30 = 27",
        color: "#7f8c8d"
    },
    {
        id: 70,
        title: "Aire rectangle",
        icon: <FaSquare/>,
        question: "Aire d'un rectangle 7m × 4m",
        answer: "28 m²",
        detailedAnswer: "Aire = longueur × largeur = 7 × 4 = 28 m²",
        color: "#27ae60"
    },
    {
        id: 71,
        title: "Périmètre carré",
        icon: <FaSquare/>,
        question: "Périmètre d'un carré de côté 6 cm",
        answer: "24 cm",
        detailedAnswer: "Périmètre = 4 × côté = 4 × 6 = 24 cm",
        color: "#8e44ad"
    },
    {
        id: 72,
        title: "Volume prisme",
        icon: <FaShapes/>,
        question: "Volume d'un prisme avec base 5cm² et hauteur 8cm",
        answer: "40 cm³",
        detailedAnswer: "Volume = Aire base × hauteur = 5 × 8 = 40 cm³",
        color: "#c0392b"
    },
    {
        id: 73,
        title: "Conversion masse",
        icon: <FaRuler/>,
        question: "Convertir 4500 g en kg",
        answer: "4,5 kg",
        detailedAnswer: "1000 g = 1 kg ⇒ 4500 g = 4500 ÷ 1000 = 4,5 kg",
        color: "#16a085"
    },
    {
        id: 74,
        title: "Taux d'évolution",
        icon: <FaPercentage/>,
        question: "Un prix passe de 80€ à 92€. Quel est le taux d'augmentation ?",
        answer: "15%",
        detailedAnswer: "Augmentation = 92 - 80 = 12€ ⇒ Taux = (12/80) × 100 = 15%",
        color: "#e67e22"
    },
    {
        id: 75,
        title: "Échelle simple",
        icon: <FaRuler/>,
        question: "Sur un plan à l'échelle 1:200, 3 cm représentent ?",
        answer: "6 m",
        detailedAnswer: "1 cm = 200 cm = 2 m ⇒ 3 cm = 3 × 2 = 6 m",
        color: "#2c3e50"
    },

    // Suite pour lycée pro (76-90)
    {
        id: 76,
        title: "Expression littérale",
        icon: <FaCalculator/>,
        question: "Calculer 4a - 2b pour a=3 et b=1",
        answer: "10",
        detailedAnswer: "4a - 2b = (4×3) - (2×1) = 12 - 2 = 10",
        color: "#3498db"
    },
    {
        id: 77,
        title: "Développement simple",
        icon: <FaCalculator/>,
        question: "Développer: 3(2x - 4)",
        answer: "6x - 12",
        detailedAnswer: "3(2x - 4) = 3×2x - 3×4 = 6x - 12",
        color: "#e74c3c"
    },
    {
        id: 78,
        title: "Factorisation simple",
        icon: <FaCalculator/>,
        question: "Factoriser: 5x + 10",
        answer: "5(x + 2)",
        detailedAnswer: "5x + 10 = 5×x + 5×2 = 5(x + 2)",
        color: "#2ecc71"
    },
    {
        id: 79,
        title: "Équation produit",
        icon: <FaEquals/>,
        question: "Résoudre: (x + 3)(2x - 4) = 0",
        answer: "x = -3 ou x = 2",
        detailedAnswer: "Un produit est nul si l'un des facteurs est nul ⇒ x + 3 = 0 ou 2x - 4 = 0 ⇒ x = -3 ou x = 2",
        color: "#f39c12"
    },
    {
        id: 80,
        title: "Inéquation simple",
        icon: <FaLessThan/>,
        question: "Résoudre: 3x - 5 < 10",
        answer: "x < 5",
        detailedAnswer: "3x - 5 < 10 ⇒ 3x < 15 ⇒ x < 5",
        color: "#9b59b6"
    },
    {
        id: 81,
        title: "Calcul de salaire brut",
        icon: <FaCalculator/>,
        question: "Un employé travaille 35h à 12€/h. Quel est son salaire brut ?",
        answer: "420€",
        detailedAnswer: "35 × 12 = 420€",
        color: "#1abc9c"
    },
    {
        id: 82,
        title: "Calcul de remise commerciale",
        icon: <FaPercentage/>,
        question: "Une remise de 30% sur un article à 150€. Quel est le montant de la remise ?",
        answer: "45€",
        detailedAnswer: "150 × 0.30 = 45€",
        color: "#d35400"
    },
    {
        id: 83,
        title: "Calcul de surface murale",
        icon: <FaSquare/>,
        question: "Un mur fait 3m de haut et 8m de long. Quelle est sa surface ?",
        answer: "24 m²",
        detailedAnswer: "3 × 8 = 24 m²",
        color: "#34495e"
    },
    {
        id: 84,
        title: "Calcul de quantité de peinture",
        icon: <FaRuler/>,
        question: "Il faut 1L de peinture pour 5m². Combien pour 35m² ?",
        answer: "7L",
        detailedAnswer: "35 ÷ 5 = 7L",
        color: "#7f8c8d"
    },
    {
        id: 85,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator/>,
        question: "Un appareil de 800W fonctionne 3h. Quelle énergie en kWh ?",
        answer: "2.4 kWh",
        detailedAnswer: "800W = 0.8kW ; 0.8 × 3 = 2.4 kWh",
        color: "#27ae60"
    },
    {
        id: 86,
        title: "Calcul de vitesse moyenne",
        icon: <FaCalculator/>,
        question: "Parcourir 240km en 4h. Vitesse moyenne ?",
        answer: "60 km/h",
        detailedAnswer: "240 ÷ 4 = 60 km/h",
        color: "#8e44ad"
    },
    {
        id: 87,
        title: "Calcul de rendement",
        icon: <FaPercentage/>,
        question: "Un moteur consomme 500W pour 400W utiles. Rendement ?",
        answer: "80%",
        detailedAnswer: "(400 ÷ 500) × 100 = 80%",
        color: "#c0392b"
    },
    {
        id: 88,
        title: "Calcul de quantité de carrelage",
        icon: <FaSquare/>,
        question: "Carreaux de 25cm × 25cm. Combien pour 10m² ?",
        answer: "160 carreaux",
        detailedAnswer: "0.25 × 0.25 = 0.0625m² par carreau ; 10 ÷ 0.0625 = 160",
        color: "#16a085"
    },
    {
        id: 89,
        title: "Calcul de volume de béton",
        icon: <FaShapes/>,
        question: "Volume pour une dalle 5m × 4m × 0.15m ?",
        answer: "3 m³",
        detailedAnswer: "5 × 4 × 0.15 = 3 m³",
        color: "#e67e22"
    },
    {
        id: 90,
        title: "Calcul de prix au kg",
        icon: <FaCalculator/>,
        question: "5kg de fruits coûtent 12.50€. Prix au kg ?",
        answer: "2.50€/kg",
        detailedAnswer: "12.50 ÷ 5 = 2.50€/kg",
        color: "#2c3e50"
    },
    {
        id: 91,
        title: "Calcul de durée de travail",
        icon: <FaCalculator/>,
        question: "De 8h15 à 12h30, durée en heures ?",
        answer: "4.25 heures",
        detailedAnswer: "12h30 - 8h15 = 4h15 = 4.25 heures",
        color: "#3498db"
    },
    {
        id: 92,
        title: "Calcul de pourcentage d'augmentation",
        icon: <FaPercentage/>,
        question: "Un salaire passe de 1500€ à 1575€. Taux d'augmentation ?",
        answer: "5%",
        detailedAnswer: "(1575 - 1500) ÷ 1500 × 100 = 5%",
        color: "#e74c3c"
    },
    {
        id: 93,
        title: "Calcul de consommation de carburant",
        icon: <FaCalculator/>,
        question: "Une voiture consomme 6L/100km. Combien pour 350km ?",
        answer: "21L",
        detailedAnswer: "(350 ÷ 100) × 6 = 21L",
        color: "#2ecc71"
    },
    {
        id: 94,
        title: "Calcul de prix TTC",
        icon: <FaPercentage/>,
        question: "Prix HT 200€ avec TVA 20%. Prix TTC ?",
        answer: "240€",
        detailedAnswer: "200 × 1.20 = 240€",
        color: "#f39c12"
    },
    {
        id: 95,
        title: "Calcul de longueur de câble",
        icon: <FaRuler/>,
        question: "5 morceaux de 3.5m chacun. Longueur totale ?",
        answer: "17.5m",
        detailedAnswer: "5 × 3.5 = 17.5m",
        color: "#9b59b6"
    },
    {
        id: 96,
        title: "Calcul de quantité de sable",
        icon: <FaShapes/>,
        question: "Volume nécessaire pour remplir un bac 2m × 1m × 0.5m ?",
        answer: "1 m³",
        detailedAnswer: "2 × 1 × 0.5 = 1 m³",
        color: "#1abc9c"
    },
    {
        id: 97,
        title: "Calcul de production horaire",
        icon: <FaCalculator/>,
        question: "Un ouvrier produit 12 pièces/h. Combien en 6h30 ?",
        answer: "78 pièces",
        detailedAnswer: "6.5 × 12 = 78 pièces",
        color: "#d35400"
    },
    {
        id: 98,
        title: "Calcul de surface de toiture",
        icon: <FaSquare/>,
        question: "Toit en pente 10m × 8m. Surface ?",
        answer: "80 m²",
        detailedAnswer: "10 × 8 = 80 m²",
        color: "#34495e"
    },
    {
        id: 99,
        title: "Calcul de quantité de papier peint",
        icon: <FaRuler/>,
        question: "Rouleaux de 10m × 0.5m. Combien pour 25m² ?",
        answer: "5 rouleaux",
        detailedAnswer: "10 × 0.5 = 5m² par rouleau ; 25 ÷ 5 = 5 rouleaux",
        color: "#7f8c8d"
    },
    {
        id: 100,
        title: "Calcul de temps de séchage",
        icon: <FaCalculator/>,
        question: "Séchage 2h/cm pour 3cm d'épaisseur. Temps total ?",
        answer: "6 heures",
        detailedAnswer: "2 × 3 = 6 heures",
        color: "#27ae60"
    },
    {
        id: 101,
        title: "Calcul de coût de revient",
        icon: <FaCalculator/>,
        question: "Matériel : 250€, main d'œuvre : 180€. Coût total ?",
        answer: "430€",
        detailedAnswer: "250 + 180 = 430€",
        color: "#8e44ad"
    },
    {
        id: 102,
        title: "Calcul de marge bénéficiaire",
        icon: <FaPercentage/>,
        question: "Coût : 120€, prix vente : 180€. Marge en % ?",
        answer: "50%",
        detailedAnswer: "((180 - 120) ÷ 120) × 100 = 50%",
        color: "#c0392b"
    },
    {
        id: 103,
        title: "Calcul de nombre de sacs",
        icon: <FaShapes/>,
        question: "Sacs de ciment de 25kg. Combien pour 500kg ?",
        answer: "20 sacs",
        detailedAnswer: "500 ÷ 25 = 20 sacs",
        color: "#16a085"
    },
    {
        id: 104,
        title: "Calcul de longueur de tuyau",
        icon: <FaRuler/>,
        question: "5 sections de 2.5m. Longueur totale ?",
        answer: "12.5m",
        detailedAnswer: "5 × 2.5 = 12.5m",
        color: "#e67e22"
    },
    {
        id: 105,
        title: "Calcul de consommation d'eau",
        icon: <FaCalculator/>,
        question: "Un robinet fuit à 5L/h. Perte en 24h ?",
        answer: "120L",
        detailedAnswer: "5 × 24 = 120L",
        color: "#2c3e50"
    },
    {
        id: 106,
        title: "Calcul de surface de vitrage",
        icon: <FaSquare/>,
        question: "Fenêtre 1.2m × 1.5m. Surface ?",
        answer: "1.8 m²",
        detailedAnswer: "1.2 × 1.5 = 1.8 m²",
        color: "#3498db"
    },
    {
        id: 107,
        title: "Calcul de quantité de parquet",
        icon: <FaRuler/>,
        question: "Lames de 0.8m × 0.1m. Combien pour 20m² ?",
        answer: "250 lames",
        detailedAnswer: "0.8 × 0.1 = 0.08m² par lame ; 20 ÷ 0.08 = 250 lames",
        color: "#e74c3c"
    },
    {
        id: 108,
        title: "Calcul de temps de travail",
        icon: <FaCalculator/>,
        question: "3 ouvriers font un travail en 8h. Temps pour 1 ouvrier ?",
        answer: "24 heures",
        detailedAnswer: "3 × 8 = 24 heures",
        color: "#2ecc71"
    },
    {
        id: 109,
        title: "Calcul de volume de gravier",
        icon: <FaShapes/>,
        question: "Volume pour une allée 10m × 2m × 0.1m ?",
        answer: "2 m³",
        detailedAnswer: "10 × 2 × 0.1 = 2 m³",
        color: "#f39c12"
    },
    {
        id: 110,
        title: "Calcul de prix soldé",
        icon: <FaPercentage/>,
        question: "Article à 80€ avec 25% de réduction. Prix final ?",
        answer: "60€",
        detailedAnswer: "80 × 0.75 = 60€",
        color: "#9b59b6"
    },
    {
        id: 111,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator/>,
        question: "4 ampoules de 60W allumées 5h. Energie en kWh ?",
        answer: "1.2 kWh",
        detailedAnswer: "4 × 60 = 240W ; 240 × 5 = 1200Wh = 1.2 kWh",
        color: "#1abc9c"
    },
    {
        id: 112,
        title: "Calcul de surface à peindre",
        icon: <FaSquare/>,
        question: "Pièce 4m × 5m avec hauteur 2.5m (sans portes/fenêtres). Surface murale ?",
        answer: "45 m²",
        detailedAnswer: "2 × (4 + 5) × 2.5 = 45 m²",
        color: "#d35400"
    },
    {
        id: 113,
        title: "Calcul de quantité de carrelage",
        icon: <FaRuler/>,
        question: "Carreaux 20cm × 20cm. Combien pour 12m² ?",
        answer: "300 carreaux",
        detailedAnswer: "0.2 × 0.2 = 0.04m² ; 12 ÷ 0.04 = 300 carreaux",
        color: "#34495e"
    },
    {
        id: 114,
        title: "Calcul de temps de trajet",
        icon: <FaCalculator/>,
        question: "Distance : 210km, vitesse : 70km/h. Temps de trajet ?",
        answer: "3 heures",
        detailedAnswer: "210 ÷ 70 = 3 heures",
        color: "#7f8c8d"
    },
    {
        id: 115,
        title: "Calcul de quantité de peinture",
        icon: <FaRuler/>,
        question: "1L pour 6m². Combien pour 45m² ?",
        answer: "7.5L",
        detailedAnswer: "45 ÷ 6 = 7.5L",
        color: "#27ae60"
    },
    {
        id: 116,
        title: "Calcul de prix unitaire",
        icon: <FaCalculator/>,
        question: "Lot de 10 à 35€. Prix unitaire ?",
        answer: "3.50€",
        detailedAnswer: "35 ÷ 10 = 3.50€",
        color: "#8e44ad"
    },
    {
        id: 117,
        title: "Calcul de volume de béton",
        icon: <FaShapes/>,
        question: "Dalle circulaire rayon 2m, épaisseur 0.15m (π≈3.14). Volume ?",
        answer: "≈1.88 m³",
        detailedAnswer: "3.14 × 2² × 0.15 ≈ 1.88 m³",
        color: "#c0392b"
    },
    {
        id: 118,
        title: "Calcul de consommation d'essence",
        icon: <FaCalculator/>,
        question: "Voiture : 7L/100km. Combien pour 280km ?",
        answer: "19.6L",
        detailedAnswer: "(280 ÷ 100) × 7 = 19.6L",
        color: "#16a085"
    },
    {
        id: 119,
        title: "Calcul de surface de moquette",
        icon: <FaSquare/>,
        question: "Pièce 3.5m × 4.2m. Surface ?",
        answer: "14.7 m²",
        detailedAnswer: "3.5 × 4.2 = 14.7 m²",
        color: "#e67e22"
    },
    {
        id: 120,
        title: "Calcul de temps de montage",
        icon: <FaCalculator/>,
        question: "Montage d'une étagère : 45min par étagère. Temps pour 5 étagères ?",
        answer: "3h45",
        detailedAnswer: "45 × 5 = 225min = 3h45",
        color: "#2c3e50"
    },
    {
        id: 121,
        title: "Calcul de quantité de clous",
        icon: <FaShapes/>,
        question: "50 clous/kg. Combien de clous dans 3.5kg ?",
        answer: "175 clous",
        detailedAnswer: "50 × 3.5 = 175 clous",
        color: "#3498db"
    },
    {
        id: 122,
        title: "Calcul de longueur de câble",
        icon: <FaRuler/>,
        question: "Bobine de 100m, déjà utilisés 37.5m. Reste ?",
        answer: "62.5m",
        detailedAnswer: "100 - 37.5 = 62.5m",
        color: "#e74c3c"
    },
    {
        id: 123,
        title: "Calcul de prix après augmentation",
        icon: <FaPercentage/>,
        question: "Prix initial 80€, augmentation de 12%. Nouveau prix ?",
        answer: "89.60€",
        detailedAnswer: "80 × 1.12 = 89.60€",
        color: "#2ecc71"
    },
    {
        id: 124,
        title: "Calcul de surface de toit",
        icon: <FaSquare/>,
        question: "Toit à 2 pans 6m × 4m chacun. Surface totale ?",
        answer: "48 m²",
        detailedAnswer: "2 × (6 × 4) = 48 m²",
        color: "#f39c12"
    },
    {
        id: 125,
        title: "Calcul de consommation de gaz",
        icon: <FaCalculator/>,
        question: "Chaudière 5kWh/m³. Combien pour 15m³ ?",
        answer: "75 kWh",
        detailedAnswer: "5 × 15 = 75 kWh",
        color: "#9b59b6"
    },
    {
        id: 126,
        title: "Calcul de quantité de sable",
        icon: <FaShapes/>,
        question: "Bac 1m × 0.8m × 0.2m. Volume ?",
        answer: "0.16 m³",
        detailedAnswer: "1 × 0.8 × 0.2 = 0.16 m³",
        color: "#1abc9c"
    },
    {
        id: 127,
        title: "Calcul de temps de séchage",
        icon: <FaCalculator/>,
        question: "Séchage 30min/cm pour 4cm. Temps total ?",
        answer: "2 heures",
        detailedAnswer: "30 × 4 = 120min = 2h",
        color: "#d35400"
    },
    {
        id: 128,
        title: "Calcul de nombre de planches",
        icon: <FaRuler/>,
        question: "Planches de 2.4m. Combien pour 36m ?",
        answer: "15 planches",
        detailedAnswer: "36 ÷ 2.4 = 15 planches",
        color: "#34495e"
    },
    {
        id: 129,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator/>,
        question: "Four 2000W utilisé 1h30. Energie en kWh ?",
        answer: "3 kWh",
        detailedAnswer: "2kW × 1.5h = 3 kWh",
        color: "#7f8c8d"
    },
    {
        id: 130,
        title: "Calcul de surface de mur",
        icon: <FaSquare/>,
        question: "Mur 5m × 2.4m avec porte 2m × 0.8m. Surface à peindre ?",
        answer: "10.4 m²",
        detailedAnswer: "(5 × 2.4) - (2 × 0.8) = 12 - 1.6 = 10.4 m²",
        color: "#27ae60"
    },
    {
        id: 131,
        title: "Calcul de quantité de papier",
        icon: <FaRuler/>,
        question: "Feuilles A4 (21cm × 29.7cm). Combien pour 10m² ?",
        answer: "≈160 feuilles",
        detailedAnswer: "0.21 × 0.297 ≈ 0.062m² ; 10 ÷ 0.062 ≈ 160 feuilles",
        color: "#8e44ad"
    },
    {
        id: 132,
        title: "Calcul de temps de production",
        icon: <FaCalculator/>,
        question: "1 pièce/12min. Combien pour 25 pièces ?",
        answer: "5 heures",
        detailedAnswer: "25 × 12 = 300min = 5h",
        color: "#c0392b"
    },
    {
        id: 133,
        title: "Calcul de volume de terre",
        icon: <FaShapes/>,
        question: "Trou 1.5m × 1.5m × 0.6m. Volume ?",
        answer: "1.35 m³",
        detailedAnswer: "1.5 × 1.5 × 0.6 = 1.35 m³",
        color: "#16a085"
    },
    {
        id: 134,
        title: "Calcul de consommation d'eau",
        icon: <FaCalculator/>,
        question: "Douche 12L/min pendant 8min. Consommation ?",
        answer: "96L",
        detailedAnswer: "12 × 8 = 96L",
        color: "#e67e22"
    },
    {
        id: 135,
        title: "Calcul de prix au mètre",
        icon: <FaCalculator/>,
        question: "Rouleau de 50m à 75€. Prix au mètre ?",
        answer: "1.50€/m",
        detailedAnswer: "75 ÷ 50 = 1.50€/m",
        color: "#2c3e50"
    },
    {
        id: 136,
        title: "Calcul de surface de carrelage",
        icon: <FaSquare/>,
        question: "Salle de bain 2.2m × 1.8m. Surface ?",
        answer: "3.96 m²",
        detailedAnswer: "2.2 × 1.8 = 3.96 m²",
        color: "#3498db"
    },
    {
        id: 137,
        title: "Calcul de quantité de peinture",
        icon: <FaRuler/>,
        question: "1L pour 8m². Combien pour 60m² ?",
        answer: "7.5L",
        detailedAnswer: "60 ÷ 8 = 7.5L",
        color: "#e74c3c"
    },
    {
        id: 138,
        title: "Calcul de temps de travail",
        icon: <FaCalculator/>,
        question: "Tâche : 3h45 par jour pendant 5 jours. Temps total ?",
        answer: "18h45",
        detailedAnswer: "3h45 = 225min ; 225 × 5 = 1125min = 18h45",
        color: "#2ecc71"
    },
    {
        id: 139,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator/>,
        question: "TV 100W allumée 4h/j pendant 30j. Energie en kWh ?",
        answer: "12 kWh",
        detailedAnswer: "0.1kW × 4 × 30 = 12 kWh",
        color: "#f39c12"
    },
    {
        id: 140,
        title: "Calcul de quantité de gravier",
        icon: <FaShapes/>,
        question: "Allée 8m × 2m × 0.1m. Volume ?",
        answer: "1.6 m³",
        detailedAnswer: "8 × 2 × 0.1 = 1.6 m³",
        color: "#9b59b6"
    },
    {
        id: 141,
        title: "Calcul de prix après remise",
        icon: <FaPercentage/>,
        question: "Prix initial 240€, remise 15%. Prix final ?",
        answer: "204€",
        detailedAnswer: "240 × 0.85 = 204€",
        color: "#1abc9c"
    },
    {
        id: 142,
        title: "Calcul de longueur de tuyau",
        icon: <FaRuler/>,
        question: "4 sections de 3.2m. Longueur totale ?",
        answer: "12.8m",
        detailedAnswer: "4 × 3.2 = 12.8m",
        color: "#d35400"
    },
    {
        id: 143,
        title: "Calcul de surface de vitrage",
        icon: <FaSquare/>,
        question: "3 fenêtres 1.2m × 1.5m. Surface totale ?",
        answer: "5.4 m²",
        detailedAnswer: "3 × (1.2 × 1.5) = 5.4 m²",
        color: "#34495e"
    },
    {
        id: 144,
        title: "Calcul de consommation de gazole",
        icon: <FaCalculator/>,
        question: "Chauffage : 2L/h. Combien pour 18h ?",
        answer: "36L",
        detailedAnswer: "2 × 18 = 36L",
        color: "#7f8c8d"
    },
    {
        id: 145,
        title: "Calcul de quantité de parquet",
        icon: <FaRuler/>,
        question: "Lames 1m × 0.12m. Combien pour 30m² ?",
        answer: "250 lames",
        detailedAnswer: "1 × 0.12 = 0.12m² ; 30 ÷ 0.12 = 250 lames",
        color: "#27ae60"
    },
    {
        id: 146,
        title: "Calcul de temps de trajet",
        icon: <FaCalculator/>,
        question: "Distance : 180km, vitesse : 90km/h. Temps ?",
        answer: "2 heures",
        detailedAnswer: "180 ÷ 90 = 2 heures",
        color: "#8e44ad"
    },
    {
        id: 147,
        title: "Calcul de surface de mur",
        icon: <FaSquare/>,
        question: "Mur 6m × 2.5m moins porte 0.9m × 2.1m. Surface ?",
        answer: "13.11 m²",
        detailedAnswer: "(6 × 2.5) - (0.9 × 2.1) = 15 - 1.89 = 13.11 m²",
        color: "#c0392b"
    },
    {
        id: 148,
        title: "Calcul de quantité de ciment",
        icon: <FaShapes/>,
        question: "Mélange 1:3 (ciment:sable). Combien de ciment pour 12m³ ?",
        answer: "3 m³",
        detailedAnswer: "12 ÷ (1+3) = 3 m³ de ciment",
        color: "#16a085"
    },
    {
        id: 149,
        title: "Calcul de consommation d'essence",
        icon: <FaCalculator/>,
        question: "Voiture : 6.5L/100km. Combien pour 420km ?",
        answer: "27.3L",
        detailedAnswer: "(420 ÷ 100) × 6.5 = 27.3L",
        color: "#e67e22"
    },
    {
        id: 150,
        title: "Calcul de prix de revient",
        icon: <FaCalculator/>,
        question: "Matériaux : 450€, main d'œuvre : 320€. Coût total ?",
        answer: "770€",
        detailedAnswer: "450 + 320 = 770€",
        color: "#2c3e50"
    },
    {
        id: 151,
        title: "Addition simple",
        question: "Calculer: 27 + 48",
        answer: "75",
        detailedAnswer: "27 + 48 = (20 + 40) + (7 + 8) = 60 + 15 = 75"
    },
    {
        id: 152,
        title: "Soustraction",
        question: "Calculer: 92 - 57",
        answer: "35",
        detailedAnswer: "92 - 57 = (90 - 50) + (2 - 7) = 40 - 5 = 35"
    },
    {
        id: 153,
        title: "Multiplication",
        question: "Calculer: 13 × 7",
        answer: "91",
        detailedAnswer: "13 × 7 = (10 × 7) + (3 × 7) = 70 + 21 = 91"
    },
    {
        id: 154,
        title: "Division",
        question: "Calculer: 144 ÷ 12",
        answer: "12",
        detailedAnswer: "144 ÷ 12 = 12 car 12 × 12 = 144"
    },
    {
        id: 155,
        title: "Opérations combinées",
        question: "Calculer: (15 + 3) × 2",
        answer: "36",
        detailedAnswer: "(15 + 3) × 2 = 18 × 2 = 36"
    },
    {
        id: 156,
        title: "Puissances simples",
        question: "Calculer: 5³",
        answer: "125",
        detailedAnswer: "5³ = 5 × 5 × 5 = 25 × 5 = 125"
    },
    {
        id: 157,
        title: "Racine carrée",
        question: "Calculer: √64",
        answer: "8",
        detailedAnswer: "√64 = 8 car 8 × 8 = 64"
    },
    {
        id: 158,
        title: "Double et moitié",
        question: "Quel est le double de 23 ?",
        answer: "46",
        detailedAnswer: "Double de 23 = 23 × 2 = 46"
    },
    {
        id: 159,
        title: "Triple et tiers",
        question: "Quel est le tiers de 99 ?",
        answer: "33",
        detailedAnswer: "Tiers de 99 = 99 ÷ 3 = 33"
    },
    {
        id: 160,
        title: "Pourcentage simple",
        question: "50% de 80",
        answer: "40",
        detailedAnswer: "50% de 80 = 80 × 0,5 = 40"
    },
    {
        id: 161,
        title: "Comparaison",
        question: "Comparer: 5÷8 et 0,6",
        answer: "5/8 < 0,6 (0,625 > 0,6)",
        detailedAnswer: "5 ÷ 8 = 0,625. Comparaison: 0,625 > 0,6 donc 5/8 > 0,6"
    },
    {
        id: 162,
        title: "Équation simple",
        question: "Résoudre: x + 7 = 15",
        answer: "x = 8",
        detailedAnswer: "x + 7 = 15 ⇒ x = 15 - 7 ⇒ x = 8"
    },
    {
        id: 163,
        title: "Inéquation",
        question: "Résoudre: 2x < 10",
        answer: "x < 5",
        detailedAnswer: "2x < 10 ⇒ x < 10 ÷ 2 ⇒ x < 5"
    },
    {
        id: 164,
        title: "Calcul mental",
        question: "25 × 4 - 10",
        answer: "90",
        detailedAnswer: "(25 × 4) - 10  = 100 - 10 = 90"
    },
    {
        id: 165,
        title: "Ordre de grandeur",
        question: "Estimer: 49 × 51",
        answer: "≈ 2500 (exact: 2499)",
        detailedAnswer: "49 × 51 ≈ 50 × 50 = 2500 (exact: 49 × 51 = (50-1)(50+1) = 2500 - 1 = 2499)"
    },
    {
        id: 166,
        title: "Addition fractions",
        question: "Calculer: 1/4 + 1/2",
        answer: "3/4",
        detailedAnswer: "1/4 + 1/2 = 1/4 + 2/4 = 3/4"
    },
    {
        id: 167,
        title: "Soustraction fractions",
        question: "Calculer: 5/6 - 1/3",
        answer: "3/6 = 1/2",
        detailedAnswer: "5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2"
    },
    {
        id: 168,
        title: "Multiplication fractions",
        question: "Calculer: 2/3 × 3/4",
        answer: "6/12 = 1/2",
        detailedAnswer: "2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2"
    },
    {
        id: 169,
        title: "Division fractions",
        question: "Calculer: 3/5 ÷ 2/5",
        answer: "15/10 = 3/2",
        detailedAnswer: "3/5 ÷ 2/5 = 3/5 × 5/2 = 15/10 = 3/2"
    },
    {
        id: 170,
        title: "Fraction → Décimal",
        question: "Convertir 3/8 en décimal",
        answer: "0,375",
        detailedAnswer: "3 ÷ 8 = 0,375"
    },
    {
        id: 171,
        title: "Décimal → Fraction",
        question: "Convertir 0,6 en fraction",
        answer: "3/5",
        detailedAnswer: "0,6 = 6/10 = 3/5"
    },
    {
        id: 172,
        title: "Pourcentage → Fraction",
        question: "Convertir 40% en fraction",
        answer: "2/5",
        detailedAnswer: "40% = 40/100 = 2/5"
    },
    {
        id: 173,
        title: "Fraction → Pourcentage",
        question: "Convertir 3/4 en pourcentage",
        answer: "75%",
        detailedAnswer: "3/4 = 0,75 = 75%"
    },
    {
        id: 174,
        title: "Simplification",
        question: "Simplifier 18/24",
        answer: "3/4",
        detailedAnswer: "18/24 = (18÷6)/(24÷6) = 3/4"
    },
    {
        id: 175,
        title: "Fraction égale",
        question: "Trouver x tel que 1/2 = x/4",
        answer: "x = 2",
        detailedAnswer: "1/2 = x/4 ⇒ x = (1×4)/2 = 2"
    },
    {
        id: 176,
        title: "Comparaison fractions",
        question: "Comparer: 5/7 et 3/4",
        answer: "5/7 ≈ 0,714 < 3/4 = 0,75",
        detailedAnswer: "5 ÷ 7 ≈ 0,714 et 3 ÷ 4 = 0,75 ⇒ 0,714 < 0,75"
    },
    {
        id: 177,
        title: "Fraction d'une quantité",
        question: "Calculer 3/5 de 45",
        answer: "27",
        detailedAnswer: "3/5 de 45 = (45 ÷ 5) × 3 = 9 × 3 = 27"
    },
    {
        id: 178,
        title: "Problème fraction",
        question: "Si 1/4 = 7, quelle est la totalité ?",
        answer: "28",
        detailedAnswer: "Si 1/4 = 7 alors le total = 7 × 4 = 28"
    },
    {
        id: 179,
        title: "Addition décimaux",
        question: "Calculer: 3,25 + 1,75",
        answer: "5",
        detailedAnswer: "3,25 + 1,75 = (3 + 1) + (0,25 + 0,75) = 4 + 1 = 5"
    },
    {
        id: 180,
        title: "Multiplication décimaux",
        question: "Calculer: 0,4 × 0,5",
        answer: "0,2",
        detailedAnswer: "0,4 × 0,5 = (4 × 5) ÷ 100 = 20 ÷ 100 = 0,2"
    },
    {
        id: 181,
        title: "Aire carré",
        question: "Aire d'un carré de côté 5 cm",
        answer: "25 cm²",
        detailedAnswer: "Aire carré = côté × côté = 5 × 5 = 25 cm²"
    },
    {
        id: 182,
        title: "Périmètre rectangle",
        question: "Périmètre d'un rectangle 6cm × 4cm",
        answer: "20 cm",
        detailedAnswer: "Périmètre = 2 × (longueur + largeur) = 2 × (6 + 4) = 2 × 10 = 20 cm"
    },
    {
        id: 183,
        title: "Aire disque",
        question: "Aire d'un disque de rayon 3 cm (π≈3,14)",
        answer: "28,26 cm²",
        detailedAnswer: "Aire = π × r² = 3,14 × 3² = 3,14 × 9 = 28,26 cm²"
    },
    {
        id: 184,
        title: "Circonférence",
        question: "Circonférence d'un cercle diamètre 10 cm",
        answer: "10π ≈ 31,4 cm",
        detailedAnswer: "Circonférence = π × diamètre = π × 10 ≈ 31,4 cm"
    },
    {
        id: 185,
        title: "Volume cube",
        question: "Volume d'un cube d'arête 3 cm",
        answer: "27 cm³",
        detailedAnswer: "Volume = arête³ = 3³ = 27 cm³"
    },
    {
        id: 186,
        title: "Volume pavé",
        question: "Volume d'un pavé 5cm×4cm×2cm",
        answer: "40 cm³",
        detailedAnswer: "Volume = L × l × h = 5 × 4 × 2 = 40 cm³"
    },
    {
        id: 187,
        title: "Conversion longueur",
        question: "Convertir 3,5 km en m",
        answer: "3500 m",
        detailedAnswer: "1 km = 1000 m ⇒ 3,5 km = 3,5 × 1000 = 3500 m"
    },
    {
        id: 188,
        title: "Conversion surface",
        question: "Convertir 2 m² en cm²",
        answer: "20000 cm²",
        detailedAnswer: "1 m² = 10000 cm² ⇒ 2 m² = 2 × 10000 = 20000 cm²"
    },
    {
        id: 189,
        title: "Conversion volume",
        question: "Convertir 1 dm³ en cm³",
        answer: "1000 cm³",
        detailedAnswer: "1 dm³ = 1000 cm³"
    },
    {
        id: 190,
        title: "Pythagore simple",
        question: "Triangle rectangle 3cm, 4cm, hypoténuse ?",
        answer: "5 cm",
        detailedAnswer: "Par le théorème de Pythagore: √(3² + 4²) = √(9 + 16) = √25 = 5 cm"
    },
    {
        id: 191,
        title: "Thalès simple",
        question: "Si AD/AB = 1/3 et DE=4cm, BC=?",
        answer: "12 cm",
        detailedAnswer: "Par Thalès, BC = DE × (AB/AD) = 4 × 3 = 12 cm"
    },
    {
        id: 192,
        title: "Angles triangle",
        question: "Dans un triangle, deux angles 30° et 70°, le troisième ?",
        answer: "80°",
        detailedAnswer: "Somme des angles = 180° ⇒ 180 - (30 + 70) = 80°"
    },
    {
        id: 193,
        title: "Aire triangle",
        question: "Aire triangle base 6cm, hauteur 4cm",
        answer: "12 cm²",
        detailedAnswer: "Aire = (base × hauteur) / 2 = (6 × 4) / 2 = 24 / 2 = 12 cm²"
    },
    {
        id: 194,
        title: "Repérage",
        question: "Quelle est l'abscisse du point A(3;2) ?",
        answer: "3",
        detailedAnswer: "Dans un repère (x,y), l'abscisse est la première valeur ⇒ x = 3"
    },
    {
        id: 195,
        title: "Symétrie",
        question: "Quelle est l'image du point A(2;4) par symétrie axiale d'axe x = 0 ?",
        answer: "A'(-2;4)",
        detailedAnswer: "Symétrie par rapport à l'axe des y (x=0) inverse l'abscisse ⇒ A'(-2,4)"
    },
    {
        id: 196,
        title: "Développement",
        question: "Développer: 2(x + 3)",
        answer: "2x + 6",
        detailedAnswer: "2(x + 3) = 2×x + 2×3 = 2x + 6"
    },
    {
        id: 197,
        title: "Factorisation",
        question: "Factoriser: 3x + 6",
        answer: "3(x + 2)",
        detailedAnswer: "3x + 6 = 3×x + 3×2 = 3(x + 2)"
    },
    {
        id: 198,
        title: "Équation 1er degré",
        question: "Résoudre: 5x - 3 = 12",
        answer: "x = 3",
        detailedAnswer: "5x - 3 = 12 ⇒ 5x = 15 ⇒ x = 3"
    },
    {
        id: 199,
        title: "Système simple",
        question: "Résoudre: x + 1 = 5",
        answer: "x = 4",
        detailedAnswer: "x + 1 = 5 ⇒ x = 5 - 1 ⇒ x = 4"
    },
    {
        id: 200,
        title: "Identité remarquable",
        question: "Développer: (x + 2)²",
        answer: "x² + 4x + 4",
        detailedAnswer: "(x + 2)² = x² + 2×x×2 + 2² = x² + 4x + 4"
    },
    {
        id: 201,
        title: "Expression littérale",
        question: "Calculer 3x + 5 pour x = 4",
        answer: "17",
        detailedAnswer: "3x + 5 = 3×4 + 5 = 12 + 5 = 17"
    },
    {
        id: 202,
        title: "Inéquation",
        question: "Résoudre: 2x + 3 ≤ 11",
        answer: "x ≤ 4",
        detailedAnswer: "2x + 3 ≤ 11 ⇒ 2x ≤ 8 ⇒ x ≤ 4"
    },
    {
        id: 203,
        title: "Proportionnalité",
        question: "Si 5kg coûtent 20€, prix pour 8kg ?",
        answer: "32€",
        detailedAnswer: "Prix au kg = 20€ ÷ 5 = 4€/kg ⇒ 8kg = 8 × 4 = 32€"
    },
    {
        id: 204,
        title: "Pourcentage augmentation",
        question: "Augmentation de 20% sur 50€",
        answer: "60€",
        detailedAnswer: "Augmentation = 50 × 0,20 = 10€ ⇒ Nouveau prix = 50 + 10 = 60€"
    },
    {
        id: 205,
        title: "Pourcentage diminution",
        question: "Réduction de 15% sur 80€",
        answer: "68€",
        detailedAnswer: "Réduction = 80 × 0,15 = 12€ ⇒ Nouveau prix = 80 - 12 = 68€"
    },
    {
        id: 206,
        title: "Vitesse moyenne",
        question: "Vitesse moyenne pour 240km en 3h",
        answer: "80 km/h",
        detailedAnswer: "Vitesse = distance ÷ temps = 240 ÷ 3 = 80 km/h"
    },
    {
        id: 207,
        title: "Pourcentage augmentation",
        question: "Augmentation de 15% sur 80€",
        answer: "92€",
        detailedAnswer: "Augmentation = 80 × 0,15 = 12€ ⇒ Nouveau prix = 80 + 12 = 92€"
    },
    {
        id: 208,
        title: "Coefficient multiplicateur",
        question: "Coefficient pour une augmentation de 25%",
        answer: "1,25",
        detailedAnswer: "Coefficient = 1 + (25/100) = 1,25"
    },
    {
        id: 209,
        title: "Échelle",
        question: "Sur une carte à 1:10000, 2cm = ? en réalité",
        answer: "200 m",
        detailedAnswer: "1 cm sur carte = 10000 cm en réalité = 100 m ⇒ 2 cm = 200 m"
    },
    {
        id: 210,
        title: "Puissances",
        question: "Calculer: 10³ × 10²",
        answer: "10⁵ = 100000",
        detailedAnswer: "10³ × 10² = 10^(3+2) = 10⁵ = 100000"
    },
    {
        id: 211,
        title: "Addition de relatifs",
        question: "Calculer: (-5) + 8",
        answer: "3",
        detailedAnswer: "(-5) + 8 = 8 - 5 = 3"
    },
    {
        id: 212,
        title: "Soustraction de relatifs",
        question: "Calculer: 4 - (-3)",
        answer: "7",
        detailedAnswer: "4 - (-3) = 4 + 3 = 7"
    },
    {
        id: 213,
        title: "Multiplication de relatifs",
        question: "Calculer: (-6) × (-2)",
        answer: "12",
        detailedAnswer: "(-6) × (-2) = 12 (négatif × négatif = positif)"
    },
    {
        id: 214,
        title: "Division de relatifs",
        question: "Calculer: (-15) ÷ 3",
        answer: "-5",
        detailedAnswer: "(-15) ÷ 3 = -5 (négatif ÷ positif = négatif)"
    },
    {
        id: 215,
        title: "Opérations combinées",
        question: "Calculer: 3 + 2 × 4",
        answer: "11",
        detailedAnswer: "Priorité à la multiplication: 2 × 4 = 8 puis 3 + 8 = 11"
    },
    {
        id: 216,
        title: "Équation simple",
        question: "Résoudre: 2x + 5 = 15",
        answer: "x = 5",
        detailedAnswer: "2x + 5 = 15 ⇒ 2x = 10 ⇒ x = 5"
    },
    {
        id: 217,
        title: "Calcul de durée",
        question: "De 14h30 à 17h15, combien de minutes ?",
        answer: "165 minutes",
        detailedAnswer: "De 14h30 à 17h15 = 2h45 = (2×60) + 45 = 165 minutes"
    },
    {
        id: 218,
        title: "Proportionnalité",
        question: "5 cahiers coûtent 7,50€. Prix pour 3 cahiers ?",
        answer: "4,50€",
        detailedAnswer: "Prix unitaire = 7,50€ ÷ 5 = 1,50€ ⇒ 3 cahiers = 3 × 1,50 = 4,50€"
    },
    {
        id: 219,
        title: "Pourcentage simple",
        question: "30% de 90",
        answer: "27",
        detailedAnswer: "30% de 90 = 90 × 0,30 = 27"
    },
    {
        id: 220,
        title: "Aire rectangle",
        question: "Aire d'un rectangle 7m × 4m",
        answer: "28 m²",
        detailedAnswer: "Aire = longueur × largeur = 7 × 4 = 28 m²"
    },
    {
        id: 221,
        title: "Périmètre carré",
        question: "Périmètre d'un carré de côté 6 cm",
        answer: "24 cm",
        detailedAnswer: "Périmètre = 4 × côté = 4 × 6 = 24 cm"
    },
    {
        id: 222,
        title: "Volume prisme",
        question: "Volume d'un prisme avec base 5cm² et hauteur 8cm",
        answer: "40 cm³",
        detailedAnswer: "Volume = Aire base × hauteur = 5 × 8 = 40 cm³"
    },
    {
        id: 223,
        title: "Conversion masse",
        question: "Convertir 4500 g en kg",
        answer: "4,5 kg",
        detailedAnswer: "1000 g = 1 kg ⇒ 4500 g = 4500 ÷ 1000 = 4,5 kg"
    },
    {
        id: 224,
        title: "Taux d'évolution",
        question: "Un prix passe de 80€ à 92€. Quel est le taux d'augmentation ?",
        answer: "15%",
        detailedAnswer: "Augmentation = 92 - 80 = 12€ ⇒ Taux = (12/80) × 100 = 15%"
    },
    {
        id: 225,
        title: "Échelle simple",
        question: "Sur un plan à l'échelle 1:200, 3 cm représentent ?",
        answer: "6 m",
        detailedAnswer: "1 cm = 200 cm = 2 m ⇒ 3 cm = 3 × 2 = 6 m"
    },
    {
        id: 226,
        title: "Expression littérale",
        question: "Calculer 4a - 2b pour a=3 et b=1",
        answer: "10",
        detailedAnswer: "4a - 2b = (4×3) - (2×1) = 12 - 2 = 10"
    },
    {
        id: 227,
        title: "Développement simple",
        question: "Développer: 3(2x - 4)",
        answer: "6x - 12",
        detailedAnswer: "3(2x - 4) = 3×2x - 3×4 = 6x - 12"
    },
    {
        id: 228,
        title: "Factorisation simple",
        question: "Factoriser: 5x + 10",
        answer: "5(x + 2)",
        detailedAnswer: "5x + 10 = 5×x + 5×2 = 5(x + 2)"
    },
    {
        id: 229,
        title: "Équation produit",
        question: "Résoudre: (x + 3)(2x - 4) = 0",
        answer: "x = -3 ou x = 2",
        detailedAnswer: "Un produit est nul si l'un des facteurs est nul ⇒ x + 3 = 0 ou 2x - 4 = 0 ⇒ x = -3 ou x = 2"
    },
    {
        id: 230,
        title: "Inéquation simple",
        question: "Résoudre: 3x - 5 < 10",
        answer: "x < 5",
        detailedAnswer: "3x - 5 < 10 ⇒ 3x < 15 ⇒ x < 5"
    },
    {
        id: 231,
        title: "Calcul de salaire brut",
        question: "Un employé travaille 35h à 12€/h. Quel est son salaire brut ?",
        answer: "420€",
        detailedAnswer: "35 × 12 = 420€"
    },
    {
        id: 232,
        title: "Calcul de remise commerciale",
        question: "Une remise de 30% sur un article à 150€. Quel est le montant de la remise ?",
        answer: "45€",
        detailedAnswer: "150 × 0.30 = 45€"
    },
    {
        id: 233,
        title: "Calcul de surface murale",
        question: "Un mur fait 3m de haut et 8m de long. Quelle est sa surface ?",
        answer: "24 m²",
        detailedAnswer: "3 × 8 = 24 m²"
    },
    {
        id: 234,
        title: "Calcul de quantité de peinture",
        question: "Il faut 1L de peinture pour 5m². Combien pour 35m² ?",
        answer: "7L",
        detailedAnswer: "35 ÷ 5 = 7L"
    },
    {
        id: 235,
        title: "Calcul de consommation électrique",
        question: "Un appareil de 800W fonctionne 3h. Quelle énergie en kWh ?",
        answer: "2.4 kWh",
        detailedAnswer: "800W = 0.8kW ; 0.8 × 3 = 2.4 kWh"
    },
    {
        id: 236,
        title: "Calcul de vitesse moyenne",
        question: "Parcourir 240km en 4h. Vitesse moyenne ?",
        answer: "60 km/h",
        detailedAnswer: "240 ÷ 4 = 60 km/h"
    },
    {
        id: 237,
        title: "Calcul de rendement",
        question: "Un moteur consomme 500W pour 400W utiles. Rendement ?",
        answer: "80%",
        detailedAnswer: "(400 ÷ 500) × 100 = 80%"
    },
    {
        id: 238,
        title: "Calcul de quantité de carrelage",
        question: "Carreaux de 25cm × 25cm. Combien pour 10m² ?",
        answer: "160 carreaux",
        detailedAnswer: "0.25 × 0.25 = 0.0625m² par carreau ; 10 ÷ 0.0625 = 160"
    },
    {
        id: 239,
        title: "Calcul de volume de béton",
        question: "Volume pour une dalle 5m × 4m × 0.15m ?",
        answer: "3 m³",
        detailedAnswer: "5 × 4 × 0.15 = 3 m³"
    },
    {
        id: 240,
        title: "Calcul de prix au kg",
        question: "5kg de fruits coûtent 12.50€. Prix au kg ?",
        answer: "2.50€/kg",
        detailedAnswer: "12.50 ÷ 5 = 2.50€/kg"
    },
    {
        id: 241,
        title: "Calcul de durée de travail",
        question: "De 8h15 à 12h30, durée en heures ?",
        answer: "4.25 heures",
        detailedAnswer: "12h30 - 8h15 = 4h15 = 4.25 heures"
    },
    {
        id: 242,
        title: "Calcul de pourcentage d'augmentation",
        question: "Un salaire passe de 1500€ à 1575€. Taux d'augmentation ?",
        answer: "5%",
        detailedAnswer: "(1575 - 1500) ÷ 1500 × 100 = 5%"
    },
    {
        id: 243,
        title: "Calcul de consommation de carburant",
        question: "Une voiture consomme 6L/100km. Combien pour 350km ?",
        answer: "21L",
        detailedAnswer: "(350 ÷ 100) × 6 = 21L"
    },
    {
        id: 244,
        title: "Calcul de prix TTC",
        question: "Prix HT 200€ avec TVA 20%. Prix TTC ?",
        answer: "240€",
        detailedAnswer: "200 × 1.20 = 240€"
    },
    {
        id: 245,
        title: "Calcul de longueur de câble",
        question: "5 morceaux de 3.5m chacun. Longueur totale ?",
        answer: "17.5m",
        detailedAnswer: "5 × 3.5 = 17.5m"
    },
    {
        id: 246,
        title: "Calcul de quantité de sable",
        question: "Volume nécessaire pour remplir un bac 2m × 1m × 0.5m ?",
        answer: "1 m³",
        detailedAnswer: "2 × 1 × 0.5 = 1 m³"
    },
    {
        id: 247,
        title: "Calcul de production horaire",
        question: "Un ouvrier produit 12 pièces/h. Combien en 6h30 ?",
        answer: "78 pièces",
        detailedAnswer: "6.5 × 12 = 78 pièces"
    },
    {
        id: 248,
        title: "Calcul de surface de toiture",
        question: "Toit en pente 10m × 8m. Surface ?",
        answer: "80 m²",
        detailedAnswer: "10 × 8 = 80 m²"
    },
    {
        id: 249,
        title: "Calcul de quantité de papier peint",
        question: "Rouleaux de 10m × 0.5m. Combien pour 25m² ?",
        answer: "5 rouleaux",
        detailedAnswer: "10 × 0.5 = 5m² par rouleau ; 25 ÷ 5 = 5 rouleaux"
    },
    {
        id: 250,
        title: "Calcul de temps de séchage",
        question: "Séchage 2h/cm pour 3cm d'épaisseur. Temps total ?",
        answer: "6 heures",
        detailedAnswer: "2 × 3 = 6 heures"
    },
    {
        id: 251,
        title: "Addition de fractions",
        question: "Calculer 1/4 + 3/8",
        answer: "5/8",
        detailedAnswer: "1/4 = 2/8 ; 2/8 + 3/8 = 5/8"
    },
    {
        id: 252,
        title: "Problème de partage",
        question: "Partage de 45 bonbons entre 5 enfants, combien chaque enfant ?",
        answer: "9",
        detailedAnswer: "45 ÷ 5 = 9"
    },
    {
        id: 253,
        title: "Équation simple",
        question: "Résoudre x + 3 = 8",
        answer: "x = 5",
        detailedAnswer: "x = 8 - 3 = 5"
    },
    {
        id: 254,
        title: "Calcul de pourcentage",
        question: "Quel est 25% de 60 ?",
        answer: "15",
        detailedAnswer: "60 × 0,25 = 15"
    },
    {
        id: 255,
        title: "Multiplication avec un chiffre",
        question: "Calculer 7 × 6",
        answer: "42",
        detailedAnswer: "7 × 6 = 42"
    },
    {
        id: 256,
        title: "Carré d’un nombre",
        question: "Quel est le carré de 12 ?",
        answer: "144",
        detailedAnswer: "12 × 12 = 144"
    },
    {
        id: 257,
        title: "Addition avec nombres décimaux",
        question: "Calculer 3,6 + 4,2",
        answer: "7,8",
        detailedAnswer: "3,6 + 4,2 = 7,8"
    },
    {
        id: 258,
        title: "Soustraction avec nombres décimaux",
        question: "Calculer 7,8 - 3,5",
        answer: "4,3",
        detailedAnswer: "7,8 - 3,5 = 4,3"
    },
    {
        id: 259,
        title: "Division de nombres",
        question: "Calculer 45 ÷ 5",
        answer: "9",
        detailedAnswer: "45 ÷ 5 = 9"
    },
    {
        id: 260,
        title: "Conversion d’unités",
        question: "Convertir 5 km en mètres",
        answer: "5000 mètres",
        detailedAnswer: "5 × 1000 = 5000"
    },
    {
        id: 261,
        title: "Problème de multiplication",
        question: "Quel est le produit de 8 et 12 ?",
        answer: "96",
        detailedAnswer: "8 × 12 = 96"
    },
    {
        id: 262,
        title: "Calcul du périmètre d’un carré",
        question: "Un carré avec un côté de 4 cm, périmètre ?",
        answer: "16 cm",
        detailedAnswer: "4 × 4 = 16 cm"
    },
    {
        id: 263,
        title: "Complément à 100",
        question: "Quel est le complément à 100 de 32 ?",
        answer: "68",
        detailedAnswer: "100 - 32 = 68"
    },
    {
        id: 264,
        title: "Calcul d’un angle droit",
        question: "Quel est l’angle d’un angle droit ?",
        answer: "90°",
        detailedAnswer: "Un angle droit mesure toujours 90°"
    },
    {
        id: 265,
        title: "Divisibilité",
        question: "Est-ce que 36 est divisible par 6 ?",
        answer: "Oui",
        detailedAnswer: "36 ÷ 6 = 6"
    },
    {
        id: 266,
        title: "Addition avec retenue",
        question: "Calculer 487 + 536",
        answer: "1023",
        detailedAnswer: "487 + 536 = 1023"
    },
    {
        id: 267,
        title: "Multiplication avec un chiffre",
        question: "Calculer 9 × 11",
        answer: "99",
        detailedAnswer: "9 × 11 = 99"
    },
    {
        id: 268,
        title: "Trouver le double d’un nombre",
        question: "Quel est le double de 56 ?",
        answer: "112",
        detailedAnswer: "56 × 2 = 112"
    },
    {
        id: 269,
        title: "Trouver la moitié d’un nombre",
        question: "Quelle est la moitié de 72 ?",
        answer: "36",
        detailedAnswer: "72 ÷ 2 = 36"
    },
    {
        id: 270,
        title: "Addition de nombres décimaux",
        question: "Calculer 2,75 + 3,50",
        answer: "6,25",
        detailedAnswer: "2,75 + 3,50 = 6,25"
    },
    {
        id: 271,
        title: "Problème de pourcentage",
        question: "Quel est 10% de 150 ?",
        answer: "15",
        detailedAnswer: "150 × 0,10 = 15"
    },
    {
        id: 272,
        title: "Multiplication avec fraction",
        question: "Calculer 2/3 × 4/5",
        answer: "8/15",
        detailedAnswer: "2 × 4 = 8 ; 3 × 5 = 15 ; donc 8/15"
    },
    {
        id: 273,
        title: "Calcul de la somme de nombres entiers",
        question: "Quel est la somme de 75 et 68 ?",
        answer: "143",
        detailedAnswer: "75 + 68 = 143"
    },
    {
        id: 274,
        title: "Calcul d’un produit avec un nombre négatif",
        question: "Quel est le produit de -5 et 8 ?",
        answer: "-40",
        detailedAnswer: "-5 × 8 = -40"
    },
    {
        id: 275,
        title: "Addition de nombres à 3 chiffres",
        question: "Additionner 214 et 325",
        answer: "539",
        detailedAnswer: "214 + 325 = 539"
    },
    {
        id: 276,
        title: "Soustraction de fractions",
        question: "Calculer 5/6 - 1/3",
        answer: "1/2",
        detailedAnswer: "5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2"
    },
    {
        id: 277,
        title: "Multiplication de fractions",
        question: "Calculer 2/5 × 3/4",
        answer: "3/10",
        detailedAnswer: "2 × 3 = 6 ; 5 × 4 = 20 ; 6/20 = 3/10"
    },
    {
        id: 278,
        title: "Division de fractions",
        question: "Calculer (3/4) ÷ (2/5)",
        answer: "15/8",
        detailedAnswer: "3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8"
    },
    {
        id: 279,
        title: "Trouver le triple d’un nombre",
        question: "Quel est le triple de 17 ?",
        answer: "51",
        detailedAnswer: "17 × 3 = 51"
    },
    {
        id: 280,
        title: "Trouver le quart d’un nombre",
        question: "Quel est le quart de 64 ?",
        answer: "16",
        detailedAnswer: "64 ÷ 4 = 16"
    },
    {
        id: 281,
        title: "Calcul d’un pourcentage",
        question: "15% de 80 ?",
        answer: "12",
        detailedAnswer: "80 × 0,15 = 12"
    },
    {
        id: 282,
        title: "Produit en croix",
        question: "Si 3 stylos coûtent 6€, combien coûtent 8 stylos ?",
        answer: "16€",
        detailedAnswer: "(6 ÷ 3) × 8 = 2 × 8 = 16€"
    },
    {
        id: 283,
        title: "Problème de partage équitable",
        question: "120 bonbons partagés entre 5 enfants, combien chacun ?",
        answer: "24",
        detailedAnswer: "120 ÷ 5 = 24"
    },
    {
        id: 284,
        title: "Ordre croissant",
        question: "Ranger 1/2, 0,75 et 2/3 dans l’ordre croissant",
        answer: "1/2, 2/3, 0,75",
        detailedAnswer: "1/2 = 0,5 ; 2/3 ≈ 0,666 ; donc ordre : 0,5 < 0,666 < 0,75"
    },
    {
        id: 285,
        title: "Arrondi à l’unité",
        question: "Arrondir 7,8 à l’unité près",
        answer: "8",
        detailedAnswer: "7,8 est plus proche de 8 que de 7"
    },
    {
        id: 286,
        title: "Calcul mental",
        question: "25 × 4",
        answer: "100",
        detailedAnswer: "25 × 4 = 100"
    },
    {
        id: 287,
        title: "Moyenne de nombres",
        question: "Moyenne de 10, 20 et 40",
        answer: "23,33",
        detailedAnswer: "(10 + 20 + 40) ÷ 3 = 70 ÷ 3 ≈ 23,33"
    },
    {
        id: 288,
        title: "Complément à 100",
        question: "Quel est le complément à 100 de 67 ?",
        answer: "33",
        detailedAnswer: "100 - 67 = 33"
    },
    {
        id: 289,
        title: "Carré d’un nombre impair",
        question: "Quel est le carré de 9 ?",
        answer: "81",
        detailedAnswer: "9 × 9 = 81"
    },
    {
        id: 290,
        title: "Calcul du périmètre d’un rectangle",
        question: "Rectangle de 6 cm par 4 cm, périmètre ?",
        answer: "20 cm",
        detailedAnswer: "(6 + 4) × 2 = 10 × 2 = 20 cm"
    },
    {
        id: 291,
        title: "Conversion cm en m",
        question: "350 cm = ? m",
        answer: "3,5 m",
        detailedAnswer: "350 ÷ 100 = 3,5 m"
    },
    {
        id: 292,
        title: "Réduction en pourcentage",
        question: "200€ avec réduction de 25%, prix final ?",
        answer: "150€",
        detailedAnswer: "200 × (1 - 0,25) = 200 × 0,75 = 150€"
    },
    {
        id: 293,
        title: "Addition avec retenue",
        question: "478 + 637",
        answer: "1115",
        detailedAnswer: "478 + 637 = 1115"
    },
    {
        id: 294,
        title: "Soustraction avec retenue",
        question: "1000 - 486",
        answer: "514",
        detailedAnswer: "1000 - 486 = 514"
    },
    {
        id: 295,
        title: "Multiplier un nombre par 0",
        question: "583 × 0",
        answer: "0",
        detailedAnswer: "Tout nombre multiplié par 0 donne 0"
    },
    {
        id: 296,
        title: "Nombres pairs et impairs",
        question: "17 est-il pair ou impair ?",
        answer: "Impair",
        detailedAnswer: "17 ÷ 2 = 8 reste 1 → donc impair"
    },
    {
        id: 297,
        title: "Notion de multiple",
        question: "Est-ce que 30 est un multiple de 6 ?",
        answer: "Oui",
        detailedAnswer: "30 ÷ 6 = 5 donc oui"
    },
    {
        id: 298,
        title: "Divisibilité",
        question: "Est-ce que 81 est divisible par 9 ?",
        answer: "Oui",
        detailedAnswer: "81 ÷ 9 = 9"
    },
    {
        id: 299,
        title: "Calcul d’un angle droit",
        question: "Quel est l’angle d’un angle droit ?",
        answer: "90°",
        detailedAnswer: "Un angle droit mesure toujours 90°"
    },
    {
        id: 300,
        title: "Lecture d’un graphique simple",
        question: "Sur un graphique, la barre bleue indique 40 élèves, combien d’élèves ?",
        answer: "40",
        detailedAnswer: "L’indicateur donne directement le nombre : 40 élèves"
    },
    {
        id: 300,
        title: "Calcul de la moyenne",
        question: "Quelle est la moyenne de 12, 15, 18 ?",
        answer: "15",
        detailedAnswer: "(12 + 15 + 18) ÷ 3 = 45 ÷ 3 = 15"
    },
    {
        id: 301,
        title: "Calcul de la distance",
        question: "Un train roule à 80 km/h pendant 3 heures. Quelle distance parcourt-il ?",
        answer: "240 km",
        detailedAnswer: "80 × 3 = 240 km"
    },
    {
        id: 302,
        title: "Problème de partage",
        question: "Partager 90 bonbons entre 6 enfants. Combien chaque enfant reçoit-il ?",
        answer: "15 bonbons",
        detailedAnswer: "90 ÷ 6 = 15 bonbons"
    },
    {
        id: 303,
        title: "Problème de pourcentage",
        question: "Quel est 20% de 150 ?",
        answer: "30",
        detailedAnswer: "150 × 0,20 = 30"
    },
    {
        id: 304,
        title: "Addition de fractions",
        question: "Additionner 1/3 et 2/5",
        answer: "11/15",
        detailedAnswer: "1/3 = 5/15 ; 2/5 = 6/15 ; donc 5/15 + 6/15 = 11/15"
    },
    {
        id: 305,
        title: "Multiplication de fractions",
        question: "Multiplier 3/4 par 2/5",
        answer: "6/20",
        detailedAnswer: "3 × 2 = 6 ; 4 × 5 = 20 ; donc 6/20 = 3/10"
    },
    {
        id: 306,
        title: "Conversion de mesures",
        question: "Convertir 2,5 mètres en centimètres",
        answer: "250 cm",
        detailedAnswer: "2,5 × 100 = 250"
    },
    {
        id: 307,
        title: "Calcul d’aire d’un rectangle",
        question: "Calculer l'aire d'un rectangle de 4 cm de largeur et 6 cm de longueur",
        answer: "24 cm²",
        detailedAnswer: "4 × 6 = 24 cm²"
    },
    {
        id: 308,
        title: "Calcul du périmètre d’un rectangle",
        question: "Un rectangle de 5 cm de largeur et 8 cm de longueur, quel est le périmètre ?",
        answer: "26 cm",
        detailedAnswer: "2 × (5 + 8) = 2 × 13 = 26 cm"
    },
    {
        id: 309,
        title: "Multiplication de nombres",
        question: "Multiplier 23 et 7",
        answer: "161",
        detailedAnswer: "23 × 7 = 161"
    },
    {
        id: 310,
        title: "Calcul de la racine carrée",
        question: "Quelle est la racine carrée de 64 ?",
        answer: "8",
        detailedAnswer: "√64 = 8"
    },
    {
        id: 311,
        title: "Problème avec division",
        question: "Diviser 120 par 8",
        answer: "15",
        detailedAnswer: "120 ÷ 8 = 15"
    },
    {
        id: 312,
        title: "Calcul de vitesse",
        question: "Si un véhicule parcourt 120 km en 2 heures, quelle est sa vitesse ?",
        answer: "60 km/h",
        detailedAnswer: "120 ÷ 2 = 60 km/h"
    },
    {
        id: 313,
        title: "Soustraction avec un nombre décimal",
        question: "Calculer 15,8 - 9,6",
        answer: "6,2",
        detailedAnswer: "15,8 - 9,6 = 6,2"
    },
    {
        id: 314,
        title: "Fraction d’un nombre",
        question: "Quelle est la moitié de 90 ?",
        answer: "45",
        detailedAnswer: "90 ÷ 2 = 45"
    },
    {
        id: 315,
        title: "Multiplication de nombres avec des décimaux",
        question: "Calculer 3,5 × 4",
        answer: "14",
        detailedAnswer: "3,5 × 4 = 14"
    },
    {
        id: 316,
        title: "Trouver un angle",
        question: "Quel est l'angle d'un triangle équilatéral ?",
        answer: "60°",
        detailedAnswer: "Dans un triangle équilatéral, chaque angle mesure 60°"
    },
    {
        id: 317,
        title: "Addition de nombres à 4 chiffres",
        question: "Additionner 1345 et 768",
        answer: "2113",
        detailedAnswer: "1345 + 768 = 2113"
    },
    {
        id: 318,
        title: "Problème de distance",
        question: "Si une voiture roule à 90 km/h pendant 3 heures, quelle distance parcourt-elle ?",
        answer: "270 km",
        detailedAnswer: "90 × 3 = 270 km"
    },
    {
        id: 319,
        title: "Calcul d’une somme",
        question: "Additionner 876 et 234",
        answer: "1110",
        detailedAnswer: "876 + 234 = 1110"
    },
    {
        id: 320,
        title: "Calcul de surface",
        question: "Quel est l'aire d'un cercle de rayon 5 cm (π ≈ 3,14) ?",
        answer: "78,5 cm²",
        detailedAnswer: "Aire = π × r² ; 3,14 × 5² = 3,14 × 25 = 78,5 cm²"
    },
    {
        id: 321,
        title: "Calcul d’angle",
        question: "Quel est l'angle intérieur d'un carré ?",
        answer: "90°",
        detailedAnswer: "Chaque angle intérieur d'un carré mesure 90°"
    },
    {
        id: 322,
        title: "Division d'un nombre décimal",
        question: "Diviser 15,6 par 3",
        answer: "5,2",
        detailedAnswer: "15,6 ÷ 3 = 5,2"
    },
    {
        id: 323,
        title: "Problème de multiplication avec des unités",
        question: "Multipler 25 cm par 4 pour trouver la longueur totale",
        answer: "100 cm",
        detailedAnswer: "25 × 4 = 100 cm"
    },
    {
        id: 324,
        title: "Calcul d’un périmètre de cercle",
        question: "Quel est le périmètre d'un cercle avec un rayon de 7 cm (π ≈ 3,14) ?",
        answer: "43,96 cm",
        detailedAnswer: "Périmètre = 2 × π × r ; 2 × 3,14 × 7 = 43,96 cm"
    },
    {
        id: 325,
        title: "Problème de partage de pizzas",
        question: "Si une pizza est partagée en 8 parts et que 3 parts sont mangées, combien de parts restent-elles ?",
        answer: "5 parts",
        detailedAnswer: "8 - 3 = 5"
    },
    {
        id: 326,
        title: "Calcul de produit de nombres",
        question: "Quel est le produit de 13 et 6 ?",
        answer: "78",
        detailedAnswer: "13 × 6 = 78"
    },
    {
        id: 327,
        title: "Addition de décimaux",
        question: "Calculer 4,7 + 6,3",
        answer: "11",
        detailedAnswer: "4,7 + 6,3 = 11"
    },
    {
        id: 328,
        title: "Division d’un nombre entier",
        question: "Diviser 144 par 12",
        answer: "12",
        detailedAnswer: "144 ÷ 12 = 12"
    },
    {
        id: 329,
        title: "Calcul d’un prix avec réduction",
        question: "Un article coûte 120 € et est soldé à 25%. Quel est son prix soldé ?",
        answer: "90 €",
        detailedAnswer: "120 × 0,25 = 30 € ; 120 - 30 = 90 €"
    },
    {
        id: 330,
        title: "Problème avec des fractions",
        question: "Si un gâteau est coupé en 5 parts égales, et que 2 parts sont mangées, quelle fraction du gâteau reste ?",
        answer: "3/5",
        detailedAnswer: "5 - 2 = 3 ; donc il reste 3/5 du gâteau"
    },
    {
        id: 331,
        title: "Conversion d’une fraction en pourcentage",
        question: "Convertir 3/4 en pourcentage",
        answer: "75%",
        detailedAnswer: "(3 ÷ 4) × 100 = 75%"
    },
    {
        id: 332,
        title: "Calcul de la surface d’un triangle",
        question: "Calculer la surface d’un triangle de base 8 cm et de hauteur 5 cm",
        answer: "20 cm²",
        detailedAnswer: "Surface = (base × hauteur) ÷ 2 ; (8 × 5) ÷ 2 = 20 cm²"
    },
    {
        id: 333,
        title: "Calcul de volume d’un cube",
        question: "Calculer le volume d’un cube de côté 3 cm",
        answer: "27 cm³",
        detailedAnswer: "Volume = côté³ ; 3³ = 27 cm³"
    },
    {
        id: 334,
        title: "Addition de trois nombres",
        question: "Additionner 7, 9 et 12",
        answer: "28",
        detailedAnswer: "7 + 9 + 12 = 28"
    },
    {
        id: 335,
        title: "Multiplication d’un nombre par 10",
        question: "Quel est le produit de 17 et 10 ?",
        answer: "170",
        detailedAnswer: "17 × 10 = 170"
    },
    {
        id: 336,
        title: "Calcul de la distance parcourue",
        question: "Si un véhicule roule à 60 km/h pendant 4 heures, quelle distance parcourt-il ?",
        answer: "240 km",
        detailedAnswer: "60 × 4 = 240 km"
    },
    {
        id: 337,
        title: "Problème de pourcentage",
        question: "Quel est 30% de 200 ?",
        answer: "60",
        detailedAnswer: "200 × 0,30 = 60"
    },
    {
        id: 338,
        title: "Soustraction avec un nombre négatif",
        question: "Calculer 8 - (-5)",
        answer: "13",
        detailedAnswer: "8 - (-5) = 8 + 5 = 13"
    },
    {
        id: 339,
        title: "Problème de distribution",
        question: "Distribuer 180 € entre 3 personnes. Combien chaque personne reçoit-elle ?",
        answer: "60 €",
        detailedAnswer: "180 ÷ 3 = 60 €"
    },
    {
        id: 340,
        title: "Problème de vitesse",
        question: "Un cycliste parcourt 90 km en 3 heures. Quelle est sa vitesse moyenne ?",
        answer: "30 km/h",
        detailedAnswer: "90 ÷ 3 = 30 km/h"
    },
    {
        id: 341,
        title: "Diviser un nombre par 5",
        question: "Diviser 125 par 5",
        answer: "25",
        detailedAnswer: "125 ÷ 5 = 25"
    },
    {
        id: 342,
        title: "Trouver un pourcentage",
        question: "Quel est 15% de 80 ?",
        answer: "12",
        detailedAnswer: "80 × 0,15 = 12"
    },
    {
        id: 343,
        title: "Multiplication avec des décimaux",
        question: "Calculer 5,5 × 4",
        answer: "22",
        detailedAnswer: "5,5 × 4 = 22"
    },
    {
        id: 344,
        title: "Conversion de millilitres en litres",
        question: "Convertir 2500 ml en litres",
        answer: "2,5 L",
        detailedAnswer: "2500 ÷ 1000 = 2,5 L"
    },
    {
        id: 345,
        title: "Problème de durée",
        question: "Si une activité dure 1h30, combien de minutes dure-t-elle ?",
        answer: "90 minutes",
        detailedAnswer: "1h30 = 60 + 30 = 90 minutes"
    },
    {
        id: 346,
        title: "Calcul du produit",
        question: "Multiplier 16 et 9",
        answer: "144",
        detailedAnswer: "16 × 9 = 144"
    },
    {
        id: 347,
        title: "Trouver un prix après réduction",
        question: "Si un article coûte 50 € et est soldé à 20%, quel est son prix soldé ?",
        answer: "40 €",
        detailedAnswer: "50 × 0,20 = 10 € ; 50 - 10 = 40 €"
    },
    {
        id: 348,
        title: "Problème de quantité",
        question: "Si 3 articles coûtent 15 €, combien coûte 1 article ?",
        answer: "5 €",
        detailedAnswer: "15 ÷ 3 = 5 €"
    },
    {
        id: 349,
        title: "Multiplication de grands nombres",
        question: "Multiplier 120 et 15",
        answer: "1800",
        detailedAnswer: "120 × 15 = 1800"
    },
    {
        id: 350,
        title: "Problème avec des fractions",
        question: "Si une pizza est coupée en 4 parts et que l'on mange 2 parts, combien de parts restent-elles ?",
        answer: "2/4",
        detailedAnswer: "4 - 2 = 2 ; donc il reste 2/4 ou 1/2"
    }
];