import { Layout } from "../site-specific/Layout"
import Panel from "../components/Panel"
import { Admonition } from "../components/Admonitions"
import { SubsetHistogram, BiosamplePlot } from "../components/SVGloaders"
// import { InternalLink }  from "../components/helpersShared/linkHelpers"
import React from "react"
import { SITE_DEFAULTS } from "../hooks/api"

// const imgFocal = {
//   float: "right",
//   width: "300px",
//   border: "0px",
//   margin: "-35px -20px -10px 10px"
// }

// const histoLegend = {
//   margin: "-4px 0px 18px 0px",
//   display: "block"
// }

export default function Index() {

  return (
<Layout title="refCNV" headline="Genomic Copy Number Variation (CNV) data from reference samples">
  <Panel className="content">
        <Admonition
          title="Under Construction"
          content='
          <p>
            This site is currently under construction, with contributions by
            groups from the University of Zurich and Erasmus MC. Neither data
            content nor representation have been finalized. PLEASE DO NOT USE
            FOR ANY RESEARCH OR REFERENCE PURPOSES!
          </p>'
        />

    <p>
      Frequency profiles of regional
      genomic gains and losses for all categories (diagnostic entity,
      publication, cohort ...) can be accessed through the respective{" "}
      Cancer Types pages with visualization and sample retrieval options. Below is
      a typical example of the aggregated CNV data in 3201 samples
      of the 1000 Genomes <bold>Dragen CNV</bold> analysis set. The frequency of regional{" "}
      <span className="span-dup-color">copy number gains</span>{" "}
      (<span className="span-hldup-color">high level</span>){" "}and{" "}
      <span className="span-del-color">losses</span>{" "}
      (<span className="span-hldel-color">high level</span>){" "}
      displayed for the 22 autosomes as occurrence of any of these CNVs in the
      1Mb binned intervals. 
      <SubsetHistogram datasetIds={SITE_DEFAULTS.DATASETID} id="DRAGEN-CNV" />
    </p>
    <p>
      The repository contains CNV tracks for many of the 1000 Genomes samples, analyzed
      by different platforms or data pipelines and therefore allows to compare
      private analysis data to results from these different call sets, to avoid
      interpretation biases from using reference data with a different analysis
      profile from the one used in your study. The plot below shows analysis specific
      CNV tracks for chromosome 13 in the HG01572 sample from the 1000 Genomes set,
      for several calling pipelines.
      <BiosamplePlot biosid="onekgbs-HG01572" datasetIds={SITE_DEFAULTS.DATASETID} plotChros="13" />
      Please be aware that the small size of most CNVs is not correctly represented
      at this zoom level (overplotting due to limited resolution). 
    </p>
  </Panel>
</Layout>

  )
}
