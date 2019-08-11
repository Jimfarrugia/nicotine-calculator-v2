import React from 'react'

export default function ImgMolecule() {
  const styledImg = {
    display: "block",
    minWidth: "240px",
    height: "auto",
    margin: "0 auto"
  }

  return (
    <React.Fragment>
      <img style={styledImg} src="molecule.svg" alt="nicotine molecule" />
    </React.Fragment>
  )
}
