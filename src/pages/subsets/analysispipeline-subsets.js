import React from "react"
import { Layout } from "../../site-specific/Layout"
import Panel from "../../components/Panel"
import SubsetsHierarchyLoader from  "../../components/SubsetsHierarchyLoader"

export default function analysispipeline_SubsetsPage() {
  return (
    <Layout title="Subsets" headline="Analysis Pipelines">
      <div className="content">
        <p>
          This page represents samples with analyses from different pipelines.
        </p>
      </div>
      <Panel heading="Analysis Pipelines">
        <SubsetsHierarchyLoader collationTypes="analysisPipeline" datasetIds="refcnv" />
      </Panel>
    </Layout>
  )
}

