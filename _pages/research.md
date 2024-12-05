---
title: "Research"
layout: textlay
excerpt: "Research"
sitemap: false
permalink: /research/
---

### Highlights

Want to see more of my projects? Click <a href="/projects">here</a>! 

{% assign number_printed = 0 %}

<!-- papers -->
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <span class="pub-title-textbox">{{ publi.title }}</span>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="100%" style="float: left" />
  <p style="text-align: justify;">{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

<!-- patents -->
{% for pat in site.data.patlist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if pat.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <span class="pub-title-textbox">{{ pat.title }}</span>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ pat.image }}" class="img-responsive" width="100%" style="float: left" />
  <p style="text-align: justify;">{{ pat.description }}</p>
  <p><em>{{ pat.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ pat.link.display }}</a></strong></p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<hr>
### Patents

{% assign number_printed = 0 %}
{% for pat in site.data.patlist %}
{% assign number_printed = number_printed | plus: 1 %}

  [{{ number_printed }}] {{ pat.title }} ({{ pat.number }};{{ pat.date}})<br />
  <em>{{ pat.authors }} </em><br /><a href="{{ pat.link.url }}">{{ pat.link.display }}</a>

{% endfor %}

<hr>
### Publications

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}
{% assign number_printed = number_printed | plus: 1 %}

<span style="display: inline;">[{{ number_printed }}]</span> <span style="display: inline;">{{ publi.title }}</span> {% if publi.under-review %}<span style="display: inline;">(<i>under review</i>)</span>{% endif %}
<br />
<em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}

<hr>
