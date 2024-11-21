---
title: "Projects"
layout: textlay
excerpt: "Projects"
sitemap: false
permalink: /projects/
---

### Projects

My research interests lie in anything around Computer Systems, where I've explored many sub-areas.

<el-collapse v-model="projects_active_names">
{% assign number_printed = 0 %}
{% for topic in site.data.projects.topics %}
{% assign number_printed = number_printed | plus: 1 %}
<el-collapse-item title="{{ topic.name }}" name="{{ number_printed }}">
{% for project in topic.projects %}
<div class="well"><span class="proj-title-textbox">{{ project.title }}</span></div>
{% endfor %}
</el-collapse-item>
{% endfor %}
</el-collapse>
