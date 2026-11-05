# Cochin Reclaim & Rubbers – Company Website

Company website I designed and built for Cochin Reclaim & Rubbers, a reclaimed rubber manufacturer in Aluva, Kerala. The site introduces the company, walks through its manufacturing process and presents its product range to industrial buyers. It was not launched, because the company restructured before it went live.

## Pages

| Page | What's on it |
|---|---|
| Home | Hero section, company stats and the three-step manufacturing process |
| About | Company background |
| Products | Overview of the product range, with a page for each product |
| Product pages | Reclaimed Rubber Grade 1, Grade 3, Extruded Rubber Profiles and Rubber Mats, each with photo, description and key features |
| Contact | Address, phone numbers and an embedded Google Map |

## Features

- **Shared navbar and footer.** `navbar.html` and `footer.html` are written once and loaded into every page by `js/include-html.js`, so a change to the menu or footer updates the whole site.
- **Products dropdown** in the navigation that links straight to each product.
- **Breadcrumb navigation** on inner pages.
- **Scroll animations** using the AOS library.
- **Responsive layout** for phones and tablets, with a collapsible menu on small screens.
- **Tap-to-call phone numbers** on the contact page and footer.

## Running it locally

Because the navbar and footer are loaded with `fetch()`, browsers block them when you open `index.html` directly from your files. Serve the folder instead:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

In VS Code, the Live Server extension works too.

## Structure

```
index.html, about.html, products.html, contact.html
grade1.html, grade3.html, extruded.html, mats.html   product pages
navbar.html, footer.html                             shared components
css/style.css                                        all styles
js/include-html.js                                   loads navbar and footer
images/                                              product and factory photos
```

## Built with

HTML · CSS · JavaScript · [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)

Designed and built by Farhan Naeem.
