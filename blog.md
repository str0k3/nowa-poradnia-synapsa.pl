---
layout: default
title: Warto wiedzieć
permalink: /blog/
---

<section class="blog-section" style="padding: 4rem 0;">
    <div class="container">
        <h1 class="text-center">Warto wiedzieć</h1>
        <p class="text-center" style="max-width: 600px; margin: 0 auto 3rem auto;">
            Artykuły, porady i ciekawostki ze świata psychologii.
        </p>
        
        <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            {% for post in site.posts %}
            <article class="post-card" style="border: 1px solid #eee; border-radius: 8px; overflow: hidden; transition: box-shadow 0.3s;">
                <div style="padding: 1.5rem;">
                    <span style="font-size: 0.8rem; color: #666;">{{ post.date | date: "%d.%m.%Y" }}</span>
                    <h3 style="margin: 0.5rem 0;"><a href="{{ post.url | relative_url }}" style="text-decoration: none; color: var(--color-text);">{{ post.title }}</a></h3>
                    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                    <a href="{{ post.url | relative_url }}" style="color: var(--color-accent-purple); font-weight: 500; text-decoration: none; margin-top: 1rem; display: inline-block;">Czytaj więcej &rarr;</a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>
