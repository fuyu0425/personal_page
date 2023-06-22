---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "CoqQFBV: A Scalable Certiﬁed SMT Quantiﬁer-Free Bit-Vector Solver"
authors: ["Xiaomu Shi", "Yu-Fu Fu", "Jiaxiang Liu",  "Ming-Hsien Tsai", "Bow-Yaw Wang", "Bo-Yin Yang"]
date: 2021-06-14T11:32:11-04:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-06-14T11:32:11-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "International Conference on Computer-Aided Verification"
publication_short: "CAV'21"

abstract: "We present a certiﬁed SMT QF BV solver CoqQFBV built from a veriﬁed bit blasting algorithm, Kissat, and the veriﬁed SAT certiﬁcate checker GratChk in this paper. Our veriﬁed bit blasting algorithm supports the full QF BV logic of SMT-LIB; it is speciﬁed and formally veriﬁed in the proof assistant Coq. We compare CoqQFBV with CVC4, Bitwuzla, and Boolector on benchmarks from the QF BV division of the single query track in the 2020 SMT Competition, and real-world cryptographic program veriﬁcation problems. CoqQFBV surprisingly solves more program veriﬁcation problems with certiﬁcation than the 2020 SMT QF BV division winner Bitwuzla without certiﬁcation."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

links:
  - name: Coq-QFBV
    url: "https://github.com/fmlab-iis/coq-qfbv"

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
