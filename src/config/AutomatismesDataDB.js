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
        icon: <FaPlus />,
        question: "Calculer: 27 + 48",
        answer: "75",
        detailedAnswer: "27 + 48 = (20 + 40) + (7 + 8) = 60 + 15 = 75",
        color: "#3498db"
    },
    {
        id: 2,
        title: "Soustraction",
        icon: <FaMinus />,
        question: "Calculer: 92 - 57",
        answer: "35",
        detailedAnswer: "92 - 57 = (90 - 50) + (2 - 7) = 40 - 5 = 35",
        color: "#e74c3c"
    },
    {
        id: 3,
        title: "Multiplication",
        icon: <FaTimes />,
        question: "Calculer: 13 × 7",
        answer: "91",
        detailedAnswer: "13 × 7 = (10 × 7) + (3 × 7) = 70 + 21 = 91",
        color: "#2ecc71"
    },
    {
        id: 4,
        title: "Division",
        icon: <FaDivide />,
        question: "Calculer: 144 ÷ 12",
        answer: "12",
        detailedAnswer: "144 ÷ 12 = 12 car 12 × 12 = 144",
        color: "#f39c12"
    },
    {
        id: 5,
        title: "Opérations combinées",
        icon: <FaCalculator />,
        question: "Calculer: (15 + 3) × 2",
        answer: "36",
        detailedAnswer: "(15 + 3) × 2 = 18 × 2 = 36",
        color: "#9b59b6"
    },
    {
        id: 6,
        title: "Puissances simples",
        icon: <FaCalculator />,
        question: "Calculer: 5³",
        answer: "125",
        detailedAnswer: "5³ = 5 × 5 × 5 = 25 × 5 = 125",
        color: "#1abc9c"
    },
    {
        id: 7,
        title: "Racine carrée",
        icon: <FaSquare />,
        question: "Calculer: √64",
        answer: "8",
        detailedAnswer: "√64 = 8 car 8 × 8 = 64",
        color: "#d35400"
    },
    {
        id: 8,
        title: "Double et moitié",
        icon: <FaCalculator />,
        question: "Quel est le double de 23 ?",
        answer: "46",
        detailedAnswer: "Double de 23 = 23 × 2 = 46",
        color: "#34495e"
    },
    {
        id: 9,
        title: "Triple et tiers",
        icon: <FaCalculator />,
        question: "Quel est le tiers de 99 ?",
        answer: "33",
        detailedAnswer: "Tiers de 99 = 99 ÷ 3 = 33",
        color: "#7f8c8d"
    },
    {
        id: 10,
        title: "Pourcentage simple",
        icon: <FaPercentage />,
        question: "50% de 80",
        answer: "40",
        detailedAnswer: "50% de 80 = 80 × 0,5 = 40",
        color: "#27ae60"
    },
    {
        id: 11,
        title: "Comparaison",
        icon: <FaGreaterThan />,
        question: "Comparer: 5÷8 et 0,6",
        answer: "5/8 < 0,6 (0,625 > 0,6)",
        detailedAnswer: "5 ÷ 8 = 0,625. Comparaison: 0,625 > 0,6 donc 5/8 > 0,6",
        color: "#8e44ad"
    },
    {
        id: 12,
        title: "Équation simple",
        icon: <FaEquals />,
        question: "Résoudre: x + 7 = 15",
        answer: "x = 8",
        detailedAnswer: "x + 7 = 15 ⇒ x = 15 - 7 ⇒ x = 8",
        color: "#c0392b"
    },
    {
        id: 13,
        title: "Inéquation",
        icon: <FaLessThan />,
        question: "Résoudre: 2x < 10",
        answer: "x < 5",
        detailedAnswer: "2x < 10 ⇒ x < 10 ÷ 2 ⇒ x < 5",
        color: "#16a085"
    },
    {
        id: 14,
        title: "Calcul mental",
        icon: <FaCalculator />,
        question: "25 × 4 - 10",
        answer: "90",
        detailedAnswer: "(25 × 4) - 10  = 100 - 10 = 90",
        color: "#e67e22"
    },
    {
        id: 15,
        title: "Ordre de grandeur",
        icon: <FaCalculator />,
        question: "Estimer: 49 × 51",
        answer: "≈ 2500 (exact: 2499)",
        detailedAnswer: "49 × 51 ≈ 50 × 50 = 2500 (exact: 49 × 51 = (50-1)(50+1) = 2500 - 1 = 2499)",
        color: "#2c3e50"
    },

    // Fractions et décimaux (16-30)
    {
        id: 16,
        title: "Addition fractions",
        icon: <FaPercentage />,
        question: "Calculer: 1/4 + 1/2",
        answer: "3/4",
        detailedAnswer: "1/4 + 1/2 = 1/4 + 2/4 = 3/4",
        color: "#3498db"
    },
    {
        id: 17,
        title: "Soustraction fractions",
        icon: <FaPercentage />,
        question: "Calculer: 5/6 - 1/3",
        answer: "3/6 = 1/2",
        detailedAnswer: "5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2",
        color: "#e74c3c"
    },
    {
        id: 18,
        title: "Multiplication fractions",
        icon: <FaPercentage />,
        question: "Calculer: 2/3 × 3/4",
        answer: "6/12 = 1/2",
        detailedAnswer: "2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2",
        color: "#2ecc71"
    },
    {
        id: 19,
        title: "Division fractions",
        icon: <FaPercentage />,
        question: "Calculer: 3/5 ÷ 2/5",
        answer: "15/10 = 3/2",
        detailedAnswer: "3/5 ÷ 2/5 = 3/5 × 5/2 = 15/10 = 3/2",
        color: "#f39c12"
    },
    {
        id: 20,
        title: "Fraction → Décimal",
        icon: <FaPercentage />,
        question: "Convertir 3/8 en décimal",
        answer: "0,375",
        detailedAnswer: "3 ÷ 8 = 0,375",
        color: "#9b59b6"
    },
    {
        id: 21,
        title: "Décimal → Fraction",
        icon: <FaPercentage />,
        question: "Convertir 0,6 en fraction",
        answer: "3/5",
        detailedAnswer: "0,6 = 6/10 = 3/5",
        color: "#1abc9c"
    },
    {
        id: 22,
        title: "Pourcentage → Fraction",
        icon: <FaPercentage />,
        question: "Convertir 40% en fraction",
        answer: "2/5",
        detailedAnswer: "40% = 40/100 = 2/5",
        color: "#d35400"
    },
    {
        id: 23,
        title: "Fraction → Pourcentage",
        icon: <FaPercentage />,
        question: "Convertir 3/4 en pourcentage",
        answer: "75%",
        detailedAnswer: "3/4 = 0,75 = 75%",
        color: "#34495e"
    },
    {
        id: 24,
        title: "Simplification",
        icon: <FaPercentage />,
        question: "Simplifier 18/24",
        answer: "3/4",
        detailedAnswer: "18/24 = (18÷6)/(24÷6) = 3/4",
        color: "#7f8c8d"
    },
    {
        id: 25,
        title: "Fraction égale",
        icon: <FaEquals />,
        question: "Trouver x tel que 1/2 = x/4",
        answer: "x = 2",
        detailedAnswer: "1/2 = x/4 ⇒ x = (1×4)/2 = 2",
        color: "#27ae60"
    },
    {
        id: 26,
        title: "Comparaison fractions",
        icon: <FaGreaterThan />,
        question: "Comparer: 5/7 et 3/4",
        answer: "5/7 ≈ 0,714 < 3/4 = 0,75",
        detailedAnswer: "5 ÷ 7 ≈ 0,714 et 3 ÷ 4 = 0,75 ⇒ 0,714 < 0,75",
        color: "#8e44ad"
    },
    {
        id: 27,
        title: "Fraction d'une quantité",
        icon: <FaPercentage />,
        question: "Calculer 3/5 de 45",
        answer: "27",
        detailedAnswer: "3/5 de 45 = (45 ÷ 5) × 3 = 9 × 3 = 27",
        color: "#c0392b"
    },
    {
        id: 28,
        title: "Problème fraction",
        icon: <FaPercentage />,
        question: "Si 1/4 = 7, quelle est la totalité ?",
        answer: "28",
        detailedAnswer: "Si 1/4 = 7 alors le total = 7 × 4 = 28",
        color: "#16a085"
    },
    {
        id: 29,
        title: "Addition décimaux",
        icon: <FaCalculator />,
        question: "Calculer: 3,25 + 1,75",
        answer: "5",
        detailedAnswer: "3,25 + 1,75 = (3 + 1) + (0,25 + 0,75) = 4 + 1 = 5",
        color: "#e67e22"
    },
    {
        id: 30,
        title: "Multiplication décimaux",
        icon: <FaCalculator />,
        question: "Calculer: 0,4 × 0,5",
        answer: "0,2",
        detailedAnswer: "0,4 × 0,5 = (4 × 5) ÷ 100 = 20 ÷ 100 = 0,2",
        color: "#2c3e50"
    },

    // Géométrie (31-45)
    {
        id: 31,
        title: "Aire carré",
        icon: <FaSquare />,
        question: "Aire d'un carré de côté 5 cm",
        answer: "25 cm²",
        detailedAnswer: "Aire carré = côté × côté = 5 × 5 = 25 cm²",
        color: "#3498db"
    },
    {
        id: 32,
        title: "Périmètre rectangle",
        icon: <FaSquare />,
        question: "Périmètre d'un rectangle 6cm × 4cm",
        answer: "20 cm",
        detailedAnswer: "Périmètre = 2 × (longueur + largeur) = 2 × (6 + 4) = 2 × 10 = 20 cm",
        color: "#e74c3c"
    },
    {
        id: 33,
        title: "Aire disque",
        icon: <FaCircle />,
        question: "Aire d'un disque de rayon 3 cm (π≈3,14)",
        answer: "28,26 cm²",
        detailedAnswer: "Aire = π × r² = 3,14 × 3² = 3,14 × 9 = 28,26 cm²",
        color: "#2ecc71"
    },
    {
        id: 34,
        title: "Circonférence",
        icon: <FaCircle />,
        question: "Circonférence d'un cercle diamètre 10 cm",
        answer: "10π ≈ 31,4 cm",
        detailedAnswer: "Circonférence = π × diamètre = π × 10 ≈ 31,4 cm",
        color: "#f39c12"
    },
    {
        id: 35,
        title: "Volume cube",
        icon: <FaSquare />,
        question: "Volume d'un cube d'arête 3 cm",
        answer: "27 cm³",
        detailedAnswer: "Volume = arête³ = 3³ = 27 cm³",
        color: "#9b59b6"
    },
    {
        id: 36,
        title: "Volume pavé",
        icon: <FaSquare />,
        question: "Volume d'un pavé 5cm×4cm×2cm",
        answer: "40 cm³",
        detailedAnswer: "Volume = L × l × h = 5 × 4 × 2 = 40 cm³",
        color: "#1abc9c"
    },
    {
        id: 37,
        title: "Conversion longueur",
        icon: <FaRuler />,
        question: "Convertir 3,5 km en m",
        answer: "3500 m",
        detailedAnswer: "1 km = 1000 m ⇒ 3,5 km = 3,5 × 1000 = 3500 m",
        color: "#d35400"
    },
    {
        id: 38,
        title: "Conversion surface",
        icon: <FaRuler />,
        question: "Convertir 2 m² en cm²",
        answer: "20000 cm²",
        detailedAnswer: "1 m² = 10000 cm² ⇒ 2 m² = 2 × 10000 = 20000 cm²",
        color: "#34495e"
    },
    {
        id: 39,
        title: "Conversion volume",
        icon: <FaRuler />,
        question: "Convertir 1 dm³ en cm³",
        answer: "1000 cm³",
        detailedAnswer: "1 dm³ = 1000 cm³",
        color: "#7f8c8d"
    },
    {
        id: 40,
        title: "Pythagore simple",
        icon: <FaShapes />,
        question: "Triangle rectangle 3cm, 4cm, hypoténuse ?",
        answer: "5 cm",
        detailedAnswer: "Par le théorème de Pythagore: √(3² + 4²) = √(9 + 16) = √25 = 5 cm",
        color: "#27ae60"
    },
    {
        id: 41,
        title: "Thalès simple",
        icon: <FaShapes />,
        question: "Si AD/AB = 1/3 et DE=4cm, BC=?",
        answer: "12 cm",
        detailedAnswer: "Par Thalès, BC = DE × (AB/AD) = 4 × 3 = 12 cm",
        color: "#8e44ad"
    },
    {
        id: 42,
        title: "Angles triangle",
        icon: <FaShapes />,
        question: "Dans un triangle, deux angles 30° et 70°, le troisième ?",
        answer: "80°",
        detailedAnswer: "Somme des angles = 180° ⇒ 180 - (30 + 70) = 80°",
        color: "#c0392b"
    },
    {
        id: 43,
        title: "Aire triangle",
        icon: <FaShapes />,
        question: "Aire triangle base 6cm, hauteur 4cm",
        answer: "12 cm²",
        detailedAnswer: "Aire = (base × hauteur) / 2 = (6 × 4) / 2 = 24 / 2 = 12 cm²",
        color: "#16a085"
    },
    {
        id: 44,
        title: "Repérage",
        icon: <FaShapes />,
        question: "Quelle est l'abscisse du point A(3;2) ?",
        answer: "3",
        detailedAnswer: "Dans un repère (x,y), l'abscisse est la première valeur ⇒ x = 3",
        color: "#e67e22"
    },
    {
        id: 45,
        title: "Symétrie",
        icon: <FaShapes />,
        question: "Quelle est l'image du point A(2;4) par symétrie axiale d'axe x = 0 ?",
        answer: "A'(-2;4)",
        detailedAnswer: "Symétrie par rapport à l'axe des y (x=0) inverse l'abscisse ⇒ A'(-2,4)",
        color: "#2c3e50"
    },

    // Algèbre (46-60)
    {
        id: 46,
        title: "Développement",
        icon: <FaCalculator />,
        question: "Développer: 2(x + 3)",
        answer: "2x + 6",
        detailedAnswer: "2(x + 3) = 2×x + 2×3 = 2x + 6",
        color: "#3498db"
    },
    {
        id: 47,
        title: "Factorisation",
        icon: <FaCalculator />,
        question: "Factoriser: 3x + 6",
        answer: "3(x + 2)",
        detailedAnswer: "3x + 6 = 3×x + 3×2 = 3(x + 2)",
        color: "#e74c3c"
    },
    {
        id: 48,
        title: "Équation 1er degré",
        icon: <FaEquals />,
        question: "Résoudre: 5x - 3 = 12",
        answer: "x = 3",
        detailedAnswer: "5x - 3 = 12 ⇒ 5x = 15 ⇒ x = 3",
        color: "#2ecc71"
    },
    {
        id: 49,
        title: "Système simple",
        icon: <FaEquals />,
        question: "Résoudre: x + 1 = 5",
        answer: "x = 4",
        detailedAnswer: "x + 1 = 5 ⇒ x = 5 - 1 ⇒ x = 4",
        color: "#f39c12"
    },
    {
        id: 50,
        title: "Identité remarquable",
        icon: <FaCalculator />,
        question: "Développer: (x + 2)²",
        answer: "x² + 4x + 4",
        detailedAnswer: "(x + 2)² = x² + 2×x×2 + 2² = x² + 4x + 4",
        color: "#9b59b6"
    },
    {
        id: 51,
        title: "Expression littérale",
        icon: <FaCalculator />,
        question: "Calculer 3x + 5 pour x = 4",
        answer: "17",
        detailedAnswer: "3x + 5 = 3×4 + 5 = 12 + 5 = 17",
        color: "#1abc9c"
    },
    {
        id: 52,
        title: "Inéquation",
        icon: <FaLessThan />,
        question: "Résoudre: 2x + 3 ≤ 11",
        answer: "x ≤ 4",
        detailedAnswer: "2x + 3 ≤ 11 ⇒ 2x ≤ 8 ⇒ x ≤ 4",
        color: "#d35400"
    },
    {
        id: 53,
        title: "Proportionnalité",
        icon: <FaPercentage />,
        question: "Si 5kg coûtent 20€, prix pour 8kg ?",
        answer: "32€",
        detailedAnswer: "Prix au kg = 20€ ÷ 5 = 4€/kg ⇒ 8kg = 8 × 4 = 32€",
        color: "#34495e"
    },
    {
        id: 54,
        title: "Pourcentage augmentation",
        icon: <FaPercentage />,
        question: "Augmentation de 20% sur 50€",
        answer: "60€",
        detailedAnswer: "Augmentation = 50 × 0,20 = 10€ ⇒ Nouveau prix = 50 + 10 = 60€",
        color: "#7f8c8d"
    },
    {
        id: 55,
        title: "Pourcentage diminution",
        icon: <FaPercentage />,
        question: "Réduction de 15% sur 80€",
        answer: "68€",
        detailedAnswer: "Réduction = 80 × 0,15 = 12€ ⇒ Nouveau prix = 80 - 12 = 68€",
        color: "#27ae60"
    },
    {
        id: 56,
        title: "Vitesse moyenne",
        icon: <FaCalculator />,
        question: "Vitesse moyenne pour 240km en 3h",
        answer: "80 km/h",
        detailedAnswer: "Vitesse = distance ÷ temps = 240 ÷ 3 = 80 km/h",
        color: "#8e44ad"
    },
    {
        id: 57,
        title: "Pourcentage augmentation",
        icon: <FaPercentage />,
        question: "Augmentation de 15% sur 80€",
        answer: "92€",
        detailedAnswer: "Augmentation = 80 × 0,15 = 12€ ⇒ Nouveau prix = 80 + 12 = 92€",
        color: "#c0392b"
    },
    {
        id: 58,
        title: "Coefficient multiplicateur",
        icon: <FaPercentage />,
        question: "Coefficient pour une augmentation de 25%",
        answer: "1,25",
        detailedAnswer: "Coefficient = 1 + (25/100) = 1,25",
        color: "#16a085"
    },
    {
        id: 59,
        title: "Échelle",
        icon: <FaRuler />,
        question: "Sur une carte à 1:10000, 2cm = ? en réalité",
        answer: "200 m",
        detailedAnswer: "1 cm sur carte = 10000 cm en réalité = 100 m ⇒ 2 cm = 200 m",
        color: "#e67e22"
    },
    {
        id: 60,
        title: "Puissances",
        icon: <FaCalculator />,
        question: "Calculer: 10³ × 10²",
        answer: "10⁵ = 100000",
        detailedAnswer: "10³ × 10² = 10^(3+2) = 10⁵ = 100000",
        color: "#2c3e50"
    },
    {
        id: 61,
        title: "Addition de relatifs",
        icon: <FaPlus />,
        question: "Calculer: (-5) + 8",
        answer: "3",
        detailedAnswer: "(-5) + 8 = 8 - 5 = 3",
        color: "#3498db"
    },
    {
        id: 62,
        title: "Soustraction de relatifs",
        icon: <FaMinus />,
        question: "Calculer: 4 - (-3)",
        answer: "7",
        detailedAnswer: "4 - (-3) = 4 + 3 = 7",
        color: "#e74c3c"
    },
    {
        id: 63,
        title: "Multiplication de relatifs",
        icon: <FaTimes />,
        question: "Calculer: (-6) × (-2)",
        answer: "12",
        detailedAnswer: "(-6) × (-2) = 12 (négatif × négatif = positif)",
        color: "#2ecc71"
    },
    {
        id: 64,
        title: "Division de relatifs",
        icon: <FaDivide />,
        question: "Calculer: (-15) ÷ 3",
        answer: "-5",
        detailedAnswer: "(-15) ÷ 3 = -5 (négatif ÷ positif = négatif)",
        color: "#f39c12"
    },
    {
        id: 65,
        title: "Opérations combinées",
        icon: <FaCalculator />,
        question: "Calculer: 3 + 2 × 4",
        answer: "11",
        detailedAnswer: "Priorité à la multiplication: 2 × 4 = 8 puis 3 + 8 = 11",
        color: "#9b59b6"
    },
    {
        id: 66,
        title: "Équation simple",
        icon: <FaEquals />,
        question: "Résoudre: 2x + 5 = 15",
        answer: "x = 5",
        detailedAnswer: "2x + 5 = 15 ⇒ 2x = 10 ⇒ x = 5",
        color: "#1abc9c"
    },
    {
        id: 67,
        title: "Calcul de durée",
        icon: <FaCalculator />,
        question: "De 14h30 à 17h15, combien de minutes ?",
        answer: "165 minutes",
        detailedAnswer: "De 14h30 à 17h15 = 2h45 = (2×60) + 45 = 165 minutes",
        color: "#d35400"
    },
    {
        id: 68,
        title: "Proportionnalité",
        icon: <FaPercentage />,
        question: "5 cahiers coûtent 7,50€. Prix pour 3 cahiers ?",
        answer: "4,50€",
        detailedAnswer: "Prix unitaire = 7,50€ ÷ 5 = 1,50€ ⇒ 3 cahiers = 3 × 1,50 = 4,50€",
        color: "#34495e"
    },
    {
        id: 69,
        title: "Pourcentage simple",
        icon: <FaPercentage />,
        question: "30% de 90",
        answer: "27",
        detailedAnswer: "30% de 90 = 90 × 0,30 = 27",
        color: "#7f8c8d"
    },
    {
        id: 70,
        title: "Aire rectangle",
        icon: <FaSquare />,
        question: "Aire d'un rectangle 7m × 4m",
        answer: "28 m²",
        detailedAnswer: "Aire = longueur × largeur = 7 × 4 = 28 m²",
        color: "#27ae60"
    },
    {
        id: 71,
        title: "Périmètre carré",
        icon: <FaSquare />,
        question: "Périmètre d'un carré de côté 6 cm",
        answer: "24 cm",
        detailedAnswer: "Périmètre = 4 × côté = 4 × 6 = 24 cm",
        color: "#8e44ad"
    },
    {
        id: 72,
        title: "Volume prisme",
        icon: <FaShapes />,
        question: "Volume d'un prisme avec base 5cm² et hauteur 8cm",
        answer: "40 cm³",
        detailedAnswer: "Volume = Aire base × hauteur = 5 × 8 = 40 cm³",
        color: "#c0392b"
    },
    {
        id: 73,
        title: "Conversion masse",
        icon: <FaRuler />,
        question: "Convertir 4500 g en kg",
        answer: "4,5 kg",
        detailedAnswer: "1000 g = 1 kg ⇒ 4500 g = 4500 ÷ 1000 = 4,5 kg",
        color: "#16a085"
    },
    {
        id: 74,
        title: "Taux d'évolution",
        icon: <FaPercentage />,
        question: "Un prix passe de 80€ à 92€. Quel est le taux d'augmentation ?",
        answer: "15%",
        detailedAnswer: "Augmentation = 92 - 80 = 12€ ⇒ Taux = (12/80) × 100 = 15%",
        color: "#e67e22"
    },
    {
        id: 75,
        title: "Échelle simple",
        icon: <FaRuler />,
        question: "Sur un plan à l'échelle 1:200, 3 cm représentent ?",
        answer: "6 m",
        detailedAnswer: "1 cm = 200 cm = 2 m ⇒ 3 cm = 3 × 2 = 6 m",
        color: "#2c3e50"
    },

    // Suite pour lycée pro (76-90)
    {
        id: 76,
        title: "Expression littérale",
        icon: <FaCalculator />,
        question: "Calculer 4a - 2b pour a=3 et b=1",
        answer: "10",
        detailedAnswer: "4a - 2b = (4×3) - (2×1) = 12 - 2 = 10",
        color: "#3498db"
    },
    {
        id: 77,
        title: "Développement simple",
        icon: <FaCalculator />,
        question: "Développer: 3(2x - 4)",
        answer: "6x - 12",
        detailedAnswer: "3(2x - 4) = 3×2x - 3×4 = 6x - 12",
        color: "#e74c3c"
    },
    {
        id: 78,
        title: "Factorisation simple",
        icon: <FaCalculator />,
        question: "Factoriser: 5x + 10",
        answer: "5(x + 2)",
        detailedAnswer: "5x + 10 = 5×x + 5×2 = 5(x + 2)",
        color: "#2ecc71"
    },
    {
        id: 79,
        title: "Équation produit",
        icon: <FaEquals />,
        question: "Résoudre: (x + 3)(2x - 4) = 0",
        answer: "x = -3 ou x = 2",
        detailedAnswer: "Un produit est nul si l'un des facteurs est nul ⇒ x + 3 = 0 ou 2x - 4 = 0 ⇒ x = -3 ou x = 2",
        color: "#f39c12"
    },
    {
        id: 80,
        title: "Inéquation simple",
        icon: <FaLessThan />,
        question: "Résoudre: 3x - 5 < 10",
        answer: "x < 5",
        detailedAnswer: "3x - 5 < 10 ⇒ 3x < 15 ⇒ x < 5",
        color: "#9b59b6"
    },
    {
        id: 81,
        title: "Calcul de salaire brut",
        icon: <FaCalculator />,
        question: "Un employé travaille 35h à 12€/h. Quel est son salaire brut ?",
        answer: "420€",
        detailedAnswer: "35 × 12 = 420€",
        color: "#1abc9c"
    },
    {
        id: 82,
        title: "Calcul de remise commerciale",
        icon: <FaPercentage />,
        question: "Une remise de 30% sur un article à 150€. Quel est le montant de la remise ?",
        answer: "45€",
        detailedAnswer: "150 × 0.30 = 45€",
        color: "#d35400"
    },
    {
        id: 83,
        title: "Calcul de surface murale",
        icon: <FaSquare />,
        question: "Un mur fait 3m de haut et 8m de long. Quelle est sa surface ?",
        answer: "24 m²",
        detailedAnswer: "3 × 8 = 24 m²",
        color: "#34495e"
    },
    {
        id: 84,
        title: "Calcul de quantité de peinture",
        icon: <FaRuler />,
        question: "Il faut 1L de peinture pour 5m². Combien pour 35m² ?",
        answer: "7L",
        detailedAnswer: "35 ÷ 5 = 7L",
        color: "#7f8c8d"
    },
    {
        id: 85,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator />,
        question: "Un appareil de 800W fonctionne 3h. Quelle énergie en kWh ?",
        answer: "2.4 kWh",
        detailedAnswer: "800W = 0.8kW ; 0.8 × 3 = 2.4 kWh",
        color: "#27ae60"
    },
    {
        id: 86,
        title: "Calcul de vitesse moyenne",
        icon: <FaCalculator />,
        question: "Parcourir 240km en 4h. Vitesse moyenne ?",
        answer: "60 km/h",
        detailedAnswer: "240 ÷ 4 = 60 km/h",
        color: "#8e44ad"
    },
    {
        id: 87,
        title: "Calcul de rendement",
        icon: <FaPercentage />,
        question: "Un moteur consomme 500W pour 400W utiles. Rendement ?",
        answer: "80%",
        detailedAnswer: "(400 ÷ 500) × 100 = 80%",
        color: "#c0392b"
    },
    {
        id: 88,
        title: "Calcul de quantité de carrelage",
        icon: <FaSquare />,
        question: "Carreaux de 25cm × 25cm. Combien pour 10m² ?",
        answer: "160 carreaux",
        detailedAnswer: "0.25 × 0.25 = 0.0625m² par carreau ; 10 ÷ 0.0625 = 160",
        color: "#16a085"
    },
    {
        id: 89,
        title: "Calcul de volume de béton",
        icon: <FaShapes />,
        question: "Volume pour une dalle 5m × 4m × 0.15m ?",
        answer: "3 m³",
        detailedAnswer: "5 × 4 × 0.15 = 3 m³",
        color: "#e67e22"
    },
    {
        id: 90,
        title: "Calcul de prix au kg",
        icon: <FaCalculator />,
        question: "5kg de fruits coûtent 12.50€. Prix au kg ?",
        answer: "2.50€/kg",
        detailedAnswer: "12.50 ÷ 5 = 2.50€/kg",
        color: "#2c3e50"
    },
    {
        id: 91,
        title: "Calcul de durée de travail",
        icon: <FaCalculator />,
        question: "De 8h15 à 12h30, durée en heures ?",
        answer: "4.25 heures",
        detailedAnswer: "12h30 - 8h15 = 4h15 = 4.25 heures",
        color: "#3498db"
    },
    {
        id: 92,
        title: "Calcul de pourcentage d'augmentation",
        icon: <FaPercentage />,
        question: "Un salaire passe de 1500€ à 1575€. Taux d'augmentation ?",
        answer: "5%",
        detailedAnswer: "(1575 - 1500) ÷ 1500 × 100 = 5%",
        color: "#e74c3c"
    },
    {
        id: 93,
        title: "Calcul de consommation de carburant",
        icon: <FaCalculator />,
        question: "Une voiture consomme 6L/100km. Combien pour 350km ?",
        answer: "21L",
        detailedAnswer: "(350 ÷ 100) × 6 = 21L",
        color: "#2ecc71"
    },
    {
        id: 94,
        title: "Calcul de prix TTC",
        icon: <FaPercentage />,
        question: "Prix HT 200€ avec TVA 20%. Prix TTC ?",
        answer: "240€",
        detailedAnswer: "200 × 1.20 = 240€",
        color: "#f39c12"
    },
    {
        id: 95,
        title: "Calcul de longueur de câble",
        icon: <FaRuler />,
        question: "5 morceaux de 3.5m chacun. Longueur totale ?",
        answer: "17.5m",
        detailedAnswer: "5 × 3.5 = 17.5m",
        color: "#9b59b6"
    },
    {
        id: 96,
        title: "Calcul de quantité de sable",
        icon: <FaShapes />,
        question: "Volume nécessaire pour remplir un bac 2m × 1m × 0.5m ?",
        answer: "1 m³",
        detailedAnswer: "2 × 1 × 0.5 = 1 m³",
        color: "#1abc9c"
    },
    {
        id: 97,
        title: "Calcul de production horaire",
        icon: <FaCalculator />,
        question: "Un ouvrier produit 12 pièces/h. Combien en 6h30 ?",
        answer: "78 pièces",
        detailedAnswer: "6.5 × 12 = 78 pièces",
        color: "#d35400"
    },
    {
        id: 98,
        title: "Calcul de surface de toiture",
        icon: <FaSquare />,
        question: "Toit en pente 10m × 8m. Surface ?",
        answer: "80 m²",
        detailedAnswer: "10 × 8 = 80 m²",
        color: "#34495e"
    },
    {
        id: 99,
        title: "Calcul de quantité de papier peint",
        icon: <FaRuler />,
        question: "Rouleaux de 10m × 0.5m. Combien pour 25m² ?",
        answer: "5 rouleaux",
        detailedAnswer: "10 × 0.5 = 5m² par rouleau ; 25 ÷ 5 = 5 rouleaux",
        color: "#7f8c8d"
    },
    {
        id: 100,
        title: "Calcul de temps de séchage",
        icon: <FaCalculator />,
        question: "Séchage 2h/cm pour 3cm d'épaisseur. Temps total ?",
        answer: "6 heures",
        detailedAnswer: "2 × 3 = 6 heures",
        color: "#27ae60"
    },
    {
        id: 101,
        title: "Calcul de coût de revient",
        icon: <FaCalculator />,
        question: "Matériel : 250€, main d'œuvre : 180€. Coût total ?",
        answer: "430€",
        detailedAnswer: "250 + 180 = 430€",
        color: "#8e44ad"
    },
    {
        id: 102,
        title: "Calcul de marge bénéficiaire",
        icon: <FaPercentage />,
        question: "Coût : 120€, prix vente : 180€. Marge en % ?",
        answer: "50%",
        detailedAnswer: "((180 - 120) ÷ 120) × 100 = 50%",
        color: "#c0392b"
    },
    {
        id: 103,
        title: "Calcul de nombre de sacs",
        icon: <FaShapes />,
        question: "Sacs de ciment de 25kg. Combien pour 500kg ?",
        answer: "20 sacs",
        detailedAnswer: "500 ÷ 25 = 20 sacs",
        color: "#16a085"
    },
    {
        id: 104,
        title: "Calcul de longueur de tuyau",
        icon: <FaRuler />,
        question: "5 sections de 2.5m. Longueur totale ?",
        answer: "12.5m",
        detailedAnswer: "5 × 2.5 = 12.5m",
        color: "#e67e22"
    },
    {
        id: 105,
        title: "Calcul de consommation d'eau",
        icon: <FaCalculator />,
        question: "Un robinet fuit à 5L/h. Perte en 24h ?",
        answer: "120L",
        detailedAnswer: "5 × 24 = 120L",
        color: "#2c3e50"
    },
    {
        id: 106,
        title: "Calcul de surface de vitrage",
        icon: <FaSquare />,
        question: "Fenêtre 1.2m × 1.5m. Surface ?",
        answer: "1.8 m²",
        detailedAnswer: "1.2 × 1.5 = 1.8 m²",
        color: "#3498db"
    },
    {
        id: 107,
        title: "Calcul de quantité de parquet",
        icon: <FaRuler />,
        question: "Lames de 0.8m × 0.1m. Combien pour 20m² ?",
        answer: "250 lames",
        detailedAnswer: "0.8 × 0.1 = 0.08m² par lame ; 20 ÷ 0.08 = 250 lames",
        color: "#e74c3c"
    },
    {
        id: 108,
        title: "Calcul de temps de travail",
        icon: <FaCalculator />,
        question: "3 ouvriers font un travail en 8h. Temps pour 1 ouvrier ?",
        answer: "24 heures",
        detailedAnswer: "3 × 8 = 24 heures",
        color: "#2ecc71"
    },
    {
        id: 109,
        title: "Calcul de volume de gravier",
        icon: <FaShapes />,
        question: "Volume pour une allée 10m × 2m × 0.1m ?",
        answer: "2 m³",
        detailedAnswer: "10 × 2 × 0.1 = 2 m³",
        color: "#f39c12"
    },
    {
        id: 110,
        title: "Calcul de prix soldé",
        icon: <FaPercentage />,
        question: "Article à 80€ avec 25% de réduction. Prix final ?",
        answer: "60€",
        detailedAnswer: "80 × 0.75 = 60€",
        color: "#9b59b6"
    },
    {
        id: 111,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator />,
        question: "4 ampoules de 60W allumées 5h. Energie en kWh ?",
        answer: "1.2 kWh",
        detailedAnswer: "4 × 60 = 240W ; 240 × 5 = 1200Wh = 1.2 kWh",
        color: "#1abc9c"
    },
    {
        id: 112,
        title: "Calcul de surface à peindre",
        icon: <FaSquare />,
        question: "Pièce 4m × 5m avec hauteur 2.5m (sans portes/fenêtres). Surface murale ?",
        answer: "45 m²",
        detailedAnswer: "2 × (4 + 5) × 2.5 = 45 m²",
        color: "#d35400"
    },
    {
        id: 113,
        title: "Calcul de quantité de carrelage",
        icon: <FaRuler />,
        question: "Carreaux 20cm × 20cm. Combien pour 12m² ?",
        answer: "300 carreaux",
        detailedAnswer: "0.2 × 0.2 = 0.04m² ; 12 ÷ 0.04 = 300 carreaux",
        color: "#34495e"
    },
    {
        id: 114,
        title: "Calcul de temps de trajet",
        icon: <FaCalculator />,
        question: "Distance : 210km, vitesse : 70km/h. Temps de trajet ?",
        answer: "3 heures",
        detailedAnswer: "210 ÷ 70 = 3 heures",
        color: "#7f8c8d"
    },
    {
        id: 115,
        title: "Calcul de quantité de peinture",
        icon: <FaRuler />,
        question: "1L pour 6m². Combien pour 45m² ?",
        answer: "7.5L",
        detailedAnswer: "45 ÷ 6 = 7.5L",
        color: "#27ae60"
    },
    {
        id: 116,
        title: "Calcul de prix unitaire",
        icon: <FaCalculator />,
        question: "Lot de 10 à 35€. Prix unitaire ?",
        answer: "3.50€",
        detailedAnswer: "35 ÷ 10 = 3.50€",
        color: "#8e44ad"
    },
    {
        id: 117,
        title: "Calcul de volume de béton",
        icon: <FaShapes />,
        question: "Dalle circulaire rayon 2m, épaisseur 0.15m (π≈3.14). Volume ?",
        answer: "≈1.88 m³",
        detailedAnswer: "3.14 × 2² × 0.15 ≈ 1.88 m³",
        color: "#c0392b"
    },
    {
        id: 118,
        title: "Calcul de consommation d'essence",
        icon: <FaCalculator />,
        question: "Voiture : 7L/100km. Combien pour 280km ?",
        answer: "19.6L",
        detailedAnswer: "(280 ÷ 100) × 7 = 19.6L",
        color: "#16a085"
    },
    {
        id: 119,
        title: "Calcul de surface de moquette",
        icon: <FaSquare />,
        question: "Pièce 3.5m × 4.2m. Surface ?",
        answer: "14.7 m²",
        detailedAnswer: "3.5 × 4.2 = 14.7 m²",
        color: "#e67e22"
    },
    {
        id: 120,
        title: "Calcul de temps de montage",
        icon: <FaCalculator />,
        question: "Montage d'une étagère : 45min par étagère. Temps pour 5 étagères ?",
        answer: "3h45",
        detailedAnswer: "45 × 5 = 225min = 3h45",
        color: "#2c3e50"
    },
    {
        id: 121,
        title: "Calcul de quantité de clous",
        icon: <FaShapes />,
        question: "50 clous/kg. Combien de clous dans 3.5kg ?",
        answer: "175 clous",
        detailedAnswer: "50 × 3.5 = 175 clous",
        color: "#3498db"
    },
    {
        id: 122,
        title: "Calcul de longueur de câble",
        icon: <FaRuler />,
        question: "Bobine de 100m, déjà utilisés 37.5m. Reste ?",
        answer: "62.5m",
        detailedAnswer: "100 - 37.5 = 62.5m",
        color: "#e74c3c"
    },
    {
        id: 123,
        title: "Calcul de prix après augmentation",
        icon: <FaPercentage />,
        question: "Prix initial 80€, augmentation de 12%. Nouveau prix ?",
        answer: "89.60€",
        detailedAnswer: "80 × 1.12 = 89.60€",
        color: "#2ecc71"
    },
    {
        id: 124,
        title: "Calcul de surface de toit",
        icon: <FaSquare />,
        question: "Toit à 2 pans 6m × 4m chacun. Surface totale ?",
        answer: "48 m²",
        detailedAnswer: "2 × (6 × 4) = 48 m²",
        color: "#f39c12"
    },
    {
        id: 125,
        title: "Calcul de consommation de gaz",
        icon: <FaCalculator />,
        question: "Chaudière 5kWh/m³. Combien pour 15m³ ?",
        answer: "75 kWh",
        detailedAnswer: "5 × 15 = 75 kWh",
        color: "#9b59b6"
    },
    {
        id: 126,
        title: "Calcul de quantité de sable",
        icon: <FaShapes />,
        question: "Bac 1m × 0.8m × 0.2m. Volume ?",
        answer: "0.16 m³",
        detailedAnswer: "1 × 0.8 × 0.2 = 0.16 m³",
        color: "#1abc9c"
    },
    {
        id: 127,
        title: "Calcul de temps de séchage",
        icon: <FaCalculator />,
        question: "Séchage 30min/cm pour 4cm. Temps total ?",
        answer: "2 heures",
        detailedAnswer: "30 × 4 = 120min = 2h",
        color: "#d35400"
    },
    {
        id: 128,
        title: "Calcul de nombre de planches",
        icon: <FaRuler />,
        question: "Planches de 2.4m. Combien pour 36m ?",
        answer: "15 planches",
        detailedAnswer: "36 ÷ 2.4 = 15 planches",
        color: "#34495e"
    },
    {
        id: 129,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator />,
        question: "Four 2000W utilisé 1h30. Energie en kWh ?",
        answer: "3 kWh",
        detailedAnswer: "2kW × 1.5h = 3 kWh",
        color: "#7f8c8d"
    },
    {
        id: 130,
        title: "Calcul de surface de mur",
        icon: <FaSquare />,
        question: "Mur 5m × 2.4m avec porte 2m × 0.8m. Surface à peindre ?",
        answer: "10.4 m²",
        detailedAnswer: "(5 × 2.4) - (2 × 0.8) = 12 - 1.6 = 10.4 m²",
        color: "#27ae60"
    },
    {
        id: 131,
        title: "Calcul de quantité de papier",
        icon: <FaRuler />,
        question: "Feuilles A4 (21cm × 29.7cm). Combien pour 10m² ?",
        answer: "≈160 feuilles",
        detailedAnswer: "0.21 × 0.297 ≈ 0.062m² ; 10 ÷ 0.062 ≈ 160 feuilles",
        color: "#8e44ad"
    },
    {
        id: 132,
        title: "Calcul de temps de production",
        icon: <FaCalculator />,
        question: "1 pièce/12min. Combien pour 25 pièces ?",
        answer: "5 heures",
        detailedAnswer: "25 × 12 = 300min = 5h",
        color: "#c0392b"
    },
    {
        id: 133,
        title: "Calcul de volume de terre",
        icon: <FaShapes />,
        question: "Trou 1.5m × 1.5m × 0.6m. Volume ?",
        answer: "1.35 m³",
        detailedAnswer: "1.5 × 1.5 × 0.6 = 1.35 m³",
        color: "#16a085"
    },
    {
        id: 134,
        title: "Calcul de consommation d'eau",
        icon: <FaCalculator />,
        question: "Douche 12L/min pendant 8min. Consommation ?",
        answer: "96L",
        detailedAnswer: "12 × 8 = 96L",
        color: "#e67e22"
    },
    {
        id: 135,
        title: "Calcul de prix au mètre",
        icon: <FaCalculator />,
        question: "Rouleau de 50m à 75€. Prix au mètre ?",
        answer: "1.50€/m",
        detailedAnswer: "75 ÷ 50 = 1.50€/m",
        color: "#2c3e50"
    },
    {
        id: 136,
        title: "Calcul de surface de carrelage",
        icon: <FaSquare />,
        question: "Salle de bain 2.2m × 1.8m. Surface ?",
        answer: "3.96 m²",
        detailedAnswer: "2.2 × 1.8 = 3.96 m²",
        color: "#3498db"
    },
    {
        id: 137,
        title: "Calcul de quantité de peinture",
        icon: <FaRuler />,
        question: "1L pour 8m². Combien pour 60m² ?",
        answer: "7.5L",
        detailedAnswer: "60 ÷ 8 = 7.5L",
        color: "#e74c3c"
    },
    {
        id: 138,
        title: "Calcul de temps de travail",
        icon: <FaCalculator />,
        question: "Tâche : 3h45 par jour pendant 5 jours. Temps total ?",
        answer: "18h45",
        detailedAnswer: "3h45 = 225min ; 225 × 5 = 1125min = 18h45",
        color: "#2ecc71"
    },
    {
        id: 139,
        title: "Calcul de consommation électrique",
        icon: <FaCalculator />,
        question: "TV 100W allumée 4h/j pendant 30j. Energie en kWh ?",
        answer: "12 kWh",
        detailedAnswer: "0.1kW × 4 × 30 = 12 kWh",
        color: "#f39c12"
    },
    {
        id: 140,
        title: "Calcul de quantité de gravier",
        icon: <FaShapes />,
        question: "Allée 8m × 2m × 0.1m. Volume ?",
        answer: "1.6 m³",
        detailedAnswer: "8 × 2 × 0.1 = 1.6 m³",
        color: "#9b59b6"
    },
    {
        id: 141,
        title: "Calcul de prix après remise",
        icon: <FaPercentage />,
        question: "Prix initial 240€, remise 15%. Prix final ?",
        answer: "204€",
        detailedAnswer: "240 × 0.85 = 204€",
        color: "#1abc9c"
    },
    {
        id: 142,
        title: "Calcul de longueur de tuyau",
        icon: <FaRuler />,
        question: "4 sections de 3.2m. Longueur totale ?",
        answer: "12.8m",
        detailedAnswer: "4 × 3.2 = 12.8m",
        color: "#d35400"
    },
    {
        id: 143,
        title: "Calcul de surface de vitrage",
        icon: <FaSquare />,
        question: "3 fenêtres 1.2m × 1.5m. Surface totale ?",
        answer: "5.4 m²",
        detailedAnswer: "3 × (1.2 × 1.5) = 5.4 m²",
        color: "#34495e"
    },
    {
        id: 144,
        title: "Calcul de consommation de gazole",
        icon: <FaCalculator />,
        question: "Chauffage : 2L/h. Combien pour 18h ?",
        answer: "36L",
        detailedAnswer: "2 × 18 = 36L",
        color: "#7f8c8d"
    },
    {
        id: 145,
        title: "Calcul de quantité de parquet",
        icon: <FaRuler />,
        question: "Lames 1m × 0.12m. Combien pour 30m² ?",
        answer: "250 lames",
        detailedAnswer: "1 × 0.12 = 0.12m² ; 30 ÷ 0.12 = 250 lames",
        color: "#27ae60"
    },
    {
        id: 146,
        title: "Calcul de temps de trajet",
        icon: <FaCalculator />,
        question: "Distance : 180km, vitesse : 90km/h. Temps ?",
        answer: "2 heures",
        detailedAnswer: "180 ÷ 90 = 2 heures",
        color: "#8e44ad"
    },
    {
        id: 147,
        title: "Calcul de surface de mur",
        icon: <FaSquare />,
        question: "Mur 6m × 2.5m moins porte 0.9m × 2.1m. Surface ?",
        answer: "13.11 m²",
        detailedAnswer: "(6 × 2.5) - (0.9 × 2.1) = 15 - 1.89 = 13.11 m²",
        color: "#c0392b"
    },
    {
        id: 148,
        title: "Calcul de quantité de ciment",
        icon: <FaShapes />,
        question: "Mélange 1:3 (ciment:sable). Combien de ciment pour 12m³ ?",
        answer: "3 m³",
        detailedAnswer: "12 ÷ (1+3) = 3 m³ de ciment",
        color: "#16a085"
    },
    {
        id: 149,
        title: "Calcul de consommation d'essence",
        icon: <FaCalculator />,
        question: "Voiture : 6.5L/100km. Combien pour 420km ?",
        answer: "27.3L",
        detailedAnswer: "(420 ÷ 100) × 6.5 = 27.3L",
        color: "#e67e22"
    },
    {
        id: 150,
        title: "Calcul de prix de revient",
        icon: <FaCalculator />,
        question: "Matériaux : 450€, main d'œuvre : 320€. Coût total ?",
        answer: "770€",
        detailedAnswer: "450 + 320 = 770€",
        color: "#2c3e50"
    }
];