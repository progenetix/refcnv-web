import React from "react"
import { Layout } from "../../site-specific/Layout"
import Panel from "../../components/Panel"
import SubsetsHierarchyLoader from  "../../components/SubsetsHierarchyLoader"

export default function platforms_SubsetsPage() {
  return (
    <Layout title="Subsets" headline="Array and Sequencing Platforms">
      <div className="content">
        <p>
          This page represents samples with analyses from different technical platforms.
        </p>
      </div>
      <Panel heading="Platforms">
        <SubsetsHierarchyLoader collationTypes="GenomePlatforms" datasetIds="refcnv" />
      </Panel>
    </Layout>
  )
}

