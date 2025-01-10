import React, { useEffect, useRef } from 'react'
import { Viewer, Ion } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

export default function CesiumViewer() {
  const cesiumContainer = useRef(null)
  useEffect(() => {
    Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN
    if (cesiumContainer.current) {
      const viewer = new Viewer(cesiumContainer.current, {
        animation: false,
        timeline: false,
        fullscreenButton: false,
        creditContainer: document.createElement('div'),
        // homeButton: false,
        // sceneModePicker: false,
        // baseLayerPicker: false,
        // navigationHelpButton: false,
        // geocoder: false,
        // infoBox: false,
        // selectionIndicator: false,
      })
      // viewer.scene.requestRenderMode = true;
      return () => viewer.destroy()
    }
  }, [])

  return (
    <div
      ref={cesiumContainer}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    />
  )
}
