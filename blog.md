---
layout: default
title: Blog
subtitle: "thoughts, musings, dispatches from the in-between"
permalink: /blog/
---

<div class="page-header">
  <h1 class="page-title">Blog</h1>
  <p class="page-subtitle">thoughts, musings, dispatches from the in-between</p>
</div>

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <div class="post-meta">
      <span class="post-date">{{ post.date | date: "%Y.%m.%d" }}</span>
      {% for tag in post.tags %}
        <span class="post-tag">{{ tag }}</span>
      {% endfor %}
    </div>
    <h2 class="post-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    {% endif %}
    <a class="read-more" href="{{ post.url | relative_url }}">read more</a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p style="color: var(--text-muted); font-family: 'DM Mono', monospace; font-size: 0.85rem;">
  // no posts yet — the silence before the first word
</p>
{% endif %}
