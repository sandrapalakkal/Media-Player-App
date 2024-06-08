import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';

function VideoCard({ displayData, setDeleteResponse, insideCategory }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, youtubeURL } = displayData
    const systemTime = new Date()
    const formattedDate = systemTime.toLocaleString('en-US', { timeZoneName: 'short' });
    console.log(formattedDate);
    const videoHistory = { caption, youtubeURL, timeStamp: formattedDate }
    try {
      await saveHistoryAPI(videoHistory)
    } catch (err) {
      console.log(err);
    }
  }
  const handleRemoveVideo = async (videoId) => {
    try {
      const result = await removeVideoAPI(videoId)
      setDeleteResponse(result.data)
    } catch (err) {
      console.log(err);
    }
  }

  const dragStarted = (e, videoId) => {
    console.log(`Dragging started with video id :${videoId}`);
    e.dataTransfer.setData("videoId", videoId)
  }


  return (
    <>
      <Card draggable={true} onDragStart={e => dragStarted(e, displayData?.id)}>
        <Card.Img
          onClick={handleShow}
          style={{ height: "150px", cursor: "pointer" }}
          variant="top"
          src={displayData?.imgURL}
        />
        <Card.Body className="text-center w-100">
          <Card.Title className="d-flex justify-content-center">
            <p>{displayData?.caption}</p>
            {!insideCategory && <button onClick={() => handleRemoveVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>}
          </Card.Title>
        </Card.Body>
      </Card>


      <Modal size='md' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${displayData?.youtubeURL}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard