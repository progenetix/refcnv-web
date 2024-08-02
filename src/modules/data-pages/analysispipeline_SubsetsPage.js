import React from "react"
import { Layout } from "../../components/Layout"
import Panel from "../../components/Panel"
import SubsetsLoader from  "../../components/SubsetsLoader"

export default function analysispipeline_SubsetsPage() {
  return (
    <Layout title="Subsets" headline="Analysis Pipelines">
      <div className="content">
        <p>
          This page represents samples with analyses from different pipelines.
        </p>
      </div>
      <Panel heading="Analysis Pipelines">
        <SubsetsLoader collationTypes="analysisPipeline" datasetIds="refcnv" />
      </Panel>
    </Layout>
  )
}

