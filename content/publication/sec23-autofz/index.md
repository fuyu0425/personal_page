---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "autofz: Automated Fuzzer Composition at Runtime"
authors: ["Yu-Fu Fu", "Jaehyuk Lee", "Taesoo Kim"]
date: 2023-08-09T21:44:53-05:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-02-24T21:44:53-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 32st USENIX Security Symposium"
publication_short: "SEC' 23"

abstract: "Fuzzing has gained in popularity for software vulnerability detection by virtue of the tremendous effort to develop a diverse set of fuzzers. Thanks to various fuzzing techniques, most of the fuzzers have been able to demonstrate great performance on their selected targets. However, paradoxically, this diversity in fuzzers also made it difficult to select fuzzers that are best suitable for complex real-world programs, which we call selection burden. Communities attempted to address this problem by creating a set of standard benchmarks to compare and contrast the performance of fuzzers for a wide range of applications, but the result was always a suboptimal decision - the best performing fuzzer on average does not guarantee the best outcome for the target of a user's interest.\n\n
To overcome this problem, we propose an automated, yet non-intrusive meta-fuzzer, called autofz, to maximize the benefits of existing state-of-the-art fuzzers via dynamic composition. To an end user, this means that, instead of spending time on selecting which fuzzer to adopt (similar in concept to hyperparameter tuning in ML), one can simply put all of the available fuzzers to autofz (similar in concept to AutoML), and achieve the best, optimal result. The key idea is to monitor the runtime progress of the fuzzers, called trends (similar in concept to gradient descent), and make a fine-grained adjustment of resource allocation (e.g., CPU time) of each fuzzer. This is a stark contrast to existing approaches that statically combine a set of fuzzers, or via exhaustive pre-training per target program - autofz deduces a suitable set of fuzzers of the active workload in a fine-grained manner at runtime. Our evaluation shows that, given the same amount of computation resources, autofz outperforms any best-performing individual fuzzers in 11 out of 12 available benchmarks and beats the best, collaborative fuzzing approaches in 19 out of 20 benchmarks without any prior knowledge in terms of coverage. Moreover, on average, autofz found 152% more bugs than individual fuzzers on unifuzz and fts, and 415% more bugs than collaborative fuzzing on unifuzz."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#  url: https://twitter.com
#  icon_pack: fab
#  icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides: ""
url_source:
url_video:

links:
  - name: autofz
    url: "https://github.com/sslab-gatech/autofz"


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
