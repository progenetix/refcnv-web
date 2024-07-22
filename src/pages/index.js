import { Layout } from "../components/Layout"
import Panel from "../components/Panel"
import { SubsetHistogram } from "../components/SVGloaders"
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
        ... under construction ...
    </p>
  </Panel>
</Layout>

  )
}
