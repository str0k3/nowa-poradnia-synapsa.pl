---
layout: default
title: Warto wiedzieć
permalink: /blog/
---

<section class="blog-section section">
    <div class="container">
        <h1 class="text-center">Warto wiedzieć</h1>
        <p class="text-center section__subtitle" style="max-width: 600px; margin: 0 auto 3rem auto;">
            Artykuły, porady i ciekawostki ze świata psychologii.
        </p>
        
        <div class="card-grid card-grid--posts">
            {% for post in site.posts %}
            <article class="post-card card card--outlined">
                <div class="post-card__inner">
                    <span class="post-card__date">{{ post.date | date: "%d.%m.%Y" }}</span>
                    <h3 class="post-card__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                    <a href="{{ post.url | relative_url }}" class="post-card__link">Czytaj więcej &rarr;</a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>
