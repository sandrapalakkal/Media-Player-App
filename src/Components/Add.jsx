import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FloatingLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';

function Add() {
  const [invalidYoutubeURL, setInvalidURL] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    caption: "", imgURL: "", youtubeURL: ""
  })
  const [show, setShow] = useState(false);
  console.log(videoDetails);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedURL = (link) => {

    {/* <iframe width="470" height="360" src="https://www.youtube.com/embed/L0yEMl8PXnw" title="AAVESHAM Official Teaser | Jithu Madhavan | Fahadh Faasil | Sushin Shyam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }

    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...videoDetails, youtubeURL: `https://www.youtube.com/embed/${videoId}` })
      setInvalidURL(false)
    } else {
      setVideoDetails({ ...videoDetails, youtubeURL: "" })
      setInvalidURL(true)
    }
  }
  const handleUpload = async () => {
    console.log("Inside handleUpload Function");
    const { caption, imgURL, youtubeURL } = videoDetails
    if (caption && imgURL && youtubeURL) {
      console.log("API Call");
      try {
        const result = await addVideoAPI(videoDetails)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          console.log(result.data);
          setVideoDetails({caption:"",imgURL:"",youtubeURL:""})
          toast.success(`${result.data.caption} added to your collection!!!`)
          handleClose();
        }
        else {
          toast.error(result.response.data)
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      toast.warning("Please fill the form completely!!")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!</p>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" label="Video Caption" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputImage" label="Image URL" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgURL: e.target.value })} type="text" placeholder="Image URL" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputURL" label="YouTube URL" className="mb-3">
              <Form.Control onChange={e => getEmbedURL(e.target.value)} type="text" placeholder="YouTube URL" />
            </FloatingLabel>
            {
              invalidYoutubeURL && <div className='text-danger fw-bolder'>Invalid YouTube Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={5000} />
    </>
  )
}

export default Add