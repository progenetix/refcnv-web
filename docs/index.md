# refCNV Documentation - Genomic Copy Number Variation (CNV) data from reference samples

refCNV is a  represents the subset of
the [_progenetix_](https://progenetix.org) data for which probe-specific data from
genomic array experiments is available.

!!! example "Citation Options"

    The refCNV resource and associated data have not been published yet. Articles below
    refer to the [Progenetix](https://progenetix.org) and Beacon resources and
    standards used for implementation.

    Huang Q, Carrio-Cordo P, Gao B, Paloots R, Baudis M. (2021) **The Progenetix oncogenomic resource in 2021.** _Database (Oxford)._ 2021 Jul 17    
    progenetix.org: **Progenetix oncogenomic online resource** (2022)   
    Baudis M, Cleary ML. (2001) **Progenetix.net: an online repository for molecular cytogenetic aberration data.** _Bioinformatics._ 17:1228-1229      
    Cai H, Kumar N, Ai N, Gupta S, Rath P, Baudis M.  **Progenetix: 12 years of oncogenomic data curation.** Nucleic Acids Res (2014) Jan;42   
    Baudis M. (2006) **Online database and bioinformatics toolbox to support data mining in cancer cytogenetics.** _Biotechniques._ 40:296-272.

??? info "Registration & Licenses"

    No specific registration is required for using the refCNV resource. While the data is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0) we suggest that you contact [Michael Baudis](https://info.baudisgroup.org/group/Michael_Baudis/) if you plan any commercial use of the database or are interested to incorporate the data into your research projects.
    
Additional information - e.g. about contacts or related publications - is available through the [group page](http://info.baudisgroup.org) of the Baudis group at the University of Zürich. For a list of publication by the Baudis group you can go to the [group's website](https://info.baudisgroup.org/categories/publications.html),  [EuropePMC](https://europepmc.org/search?query=0000-0002-9903-4248) or any of the links here.

----

## refCNV Source Code

With exception of some utility scripts and external dependencies (e.g. [MongoDB](https://www.mongodb.com/try/download/community)) the following projects provide the vast majority of the software (from database interaction to website) behind Progenetix and Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>.

### [`bycon`](https://github.com/progenetix/bycon) and [`byconaut`](https://github.com/progenetix/byconaut)

- Python based service based on the [GA4GH Beacon protocol](http://beacon-project.io)
- software powering the Progenetix resource
- [Beacon<span style="vertical-align: super; color: red; font-weight: 800;">+</span>](http://beaconplus.progenetix.org/) implementation(s) use the same code base

### [`refcnv-web`](https://github.com/progenetix/refcnv-web)

- website code  for the refCNV implementation
- provides Beacon interfaces for the `bycon` server, as well as other Progenetix sevices (e.g. the [publications](http://progenetix.org/publications/) repository)
- implemented as [React](https://reactjs.org) / [Next.js](https://nextjs.org) project
- contains this documentation tree here as `mkdocs` project, with files in the `docs` directory
