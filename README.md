[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)

# refCNV Websites Code

The Progenetix sites such as refCNV are build from this project using 2 different toolchains:

* the refCNV resource website [refcnv.org](http://refcnv.org), as a
React project with
    - code in [`src/`](src/)
    - static files in [`public/`](public/)

* the refCNV documentation [docs.refcnv.org](http://docs.refcnv.org),
as a Mkdocs project with
    - files in [`docs/`](docs/)
    - configuration in [`mkdocs.yaml`](./mkdocs.yaml)
    - additional configuration files in [`extra/`](extra/)

More information can be found in the [Progenetix documentation](http://docs.progenetix.org/progenetix-website-builds)
