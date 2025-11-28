---
layout: default
title: Strona Główna
description: "Poradnia psychologiczna dla dzieci i młodzieży. Profesjonalna pomoc w przyjaznej atmosferze."
---

<section class="hero" style="padding: 4rem 0;">
    <div class="container" style="display: flex; align-items: center; justify-content: space-between; gap: 3rem; flex-wrap: wrap-reverse;">
        <div style="flex: 1; min-width: 300px; text-align: left;">
            <h1 style="font-size: 2.5rem; line-height: 1.2; margin-bottom: 1.5rem;">Wspieramy małe i duże kroki w dorosłość</h1>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">
                Profesjonalna pomoc psychologiczna dla dzieci, młodzieży i młodych dorosłych. Tworzymy przestrzeń pełną zrozumienia i akceptacji.
            </p>
            <a href="{{ "/kontakt/" | relative_url }}" class="button" style="background: var(--color-accent-red); color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Umów wizytę</a>
        </div>
        <div style="flex: 1; min-width: 300px; display: flex; justify-content: center;">
            <img src="{{ "/img/hero.png" | relative_url }}" alt="Młodzież w przyjaznej atmosferze" style="max-width: 100%; max-height: 400px; border-radius: 16px; object-fit: contain;">
        </div>
    </div>
</section>

<section class="features" style="background: var(--color-bg-alt); padding: 4rem 0;">
    <div class="container">
        <h2 class="text-center">Dlaczego my?</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div class="feature-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h3 style="color: var(--color-accent-purple);">Indywidualne podejście</h3>
                <p>Każde dziecko jest inne, dlatego dostosowujemy metody pracy do jego unikalnych potrzeb.</p>
            </div>
            <div class="feature-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h3 style="color: var(--color-accent-green);">Przyjazna atmosfera</h3>
                <p>Stworzyliśmy miejsce, w którym dzieci czują się bezpiecznie i swobodnie.</p>
            </div>
            <div class="feature-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h3 style="color: var(--color-accent-orange);">Doświadczony zespół</h3>
                <p>Nasi specjaliści posiadają wieloletnie doświadczenie w pracy z dziećmi.</p>
            </div>
        </div>
    </div>
</section>
