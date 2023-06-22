---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Signed Cryptographic Program Verification with Typed CryptoLine"
authors: ["Yu-Fu Fu", "Jiaxiang Liu", "Xiaomu Shi", "Ming-Hsien Tsai", "Bow-Yaw Wang", "Bo-Yin Yang"]
date: 2019-11-11T21:44:53+08:00
doi: "10.1145/3319535.3354199"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-10-11T21:44:53+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 2019 ACM SIGSAC Conference on Computer and Communications Security"
publication_short: "CCS'19"

abstract: "We develop an automated formal technique to specify and verify signed computation in cryptographic programs. In addition to new instructions, we introduce a type system to detect type errors in programs. A type inference algorithm is also provided to deduce types and instruction variants in cryptographic programs. In order to verify signed cryptographic C programs, we develop a translator from the GCC intermediate representation to our language. Using our technique, we have verified 82 C functions in cryptography libraries including NaCl, wolfSSL, bitcoin, OpenSSL, and BoringSSL."

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
url_slides: "slides/ccs19-slide.pdf"
url_source:
url_video:

links:
  - name: CryptoLine
    url: "https://github.com/fmlab-iis/cryptoline"
  - name: GCC2CryptoLine
    url: "https://github.com/fmlab-iis/gcc2cryptoline"


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
