import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import "../styles/index.css"
import StickyNav from '../components/stickynav'
import Hero from '../components/hero'
import Footer from '../components/footer'
import DataSection from '../components/data_section/datasection'

const IndexPage = () => {
  const costDataUrl = "./static/data/cost.csv"
  const labelDataurl = "./static/data/labels.csv"

  // TODO: dynamically change these values 
  const slug = "electrocardiogram-ekg"
  const geoLevel = "CA"

  let [costData, setCostData] = useState()
  let [labelsData, setLabelsData] = useState()

  let [pageData, setPageData] = useState()

  // Convert csv file to workable data
  useEffect(() => {
    const costResponse = fetch(costDataUrl)
      .then(response => response.text())
      .then(v => Papa.parse(v, { header: true }))
      .catch(err => console.log(err))

    costResponse.then(v => setCostData(v.data))

    const labelsResponse = fetch(labelDataurl)
      .then(response => response.text())
      .then(v => Papa.parse(v, { header: true }))
      .catch(err => console.log(err))

    labelsResponse.then(v => setLabelsData(v.data))
  }, []);

  // Initial filtering when data is ready 
  useEffect(() => {
    if (costData && labelsData) {
      let selectedCostData = {}
      let selectedLabelsData = {}

      let filteredLabelsData = labelsData.filter(d => d.slug === slug)
      if (filteredLabelsData.length > 0) {
        selectedLabelsData = filteredLabelsData[0]
      }

      let filteredCostData = costData.filter(d => d.id === selectedLabelsData.id && d.geo_level === geoLevel)
      if (filteredCostData.length > 0) {
        selectedCostData = filteredCostData[0]
      }

      let selectedData = {
        ...selectedCostData,
        ...selectedLabelsData
      }

      setPageData(selectedData)
    }
  }, [costData, labelsData])

  return (
    <main className='page_container'>
      <StickyNav />
      {pageData && <>
        <Hero head={pageData.label} deck={pageData.label_detailed} />
        <DataSection data={pageData} />
      </>
      }
      <Footer />
    </main>
  )
}

export default IndexPage