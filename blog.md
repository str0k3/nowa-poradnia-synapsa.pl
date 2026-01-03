---
layout: default
title: Blog
permalink: /blog/
---

<section class="blog-section" style="padding: 4rem 0;">
    <div class="container">
        <h1 class="text-center">Blog</h1>
        <p class="text-center" style="max-width: 600px; margin: 0 auto 3rem auto;">
            Artykuły, porady i ciekawostki ze świata psychologii dziecięcej.
        </p>
        
        <div class="grid-3">
            {% for post in site.posts %}
            <article class="post-card">
                <div class="post-content">
                    <span class="post-date">{{ post.date | date: "%d.%m.%Y" }}</span>
                    <h3 class="post-title" style="margin: 0.5rem 0;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                    <p style="margin-bottom: 1.5rem; flex-grow: 1;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                    <a href="{{ post.url | relative_url }}" style="color: var(--color-accent-purple); font-weight: 500; text-decoration: none; display: inline-block;">Czytaj więcej &rarr;</a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>
