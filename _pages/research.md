---
title: "Research"
layout: textlay
excerpt: "Research"
sitemap: false
permalink: /research/
---

# Highlights

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit><span class="pub-title-textbox">{{ publi.title }}</span></pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="100%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
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

<p> &nbsp; </p>


## Patents
{% for pat in site.data.patlist %}

  {{ pat.title }} <br />
  <em>{{ pat.authors }} </em><br /><a href="{{ pat.link.url }}">{{ pat.link.display }}</a>

{% endfor %}


## Publications

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}

<style>
.pub-title-textbox {
      display: flex;
    align-items: flex-start;     /* Vertically center the content */
    justify-content: center; /* Optional: Center text horizontally */
    line-height: 1.5;        /* Defines single-line height */
    height: 3em;             /* Fixed two-line height */
    text-align: center;      /* Optional: Align text in the center */

    box-sizing: border-box;  /* Includes padding in height calculations */
}
</style>