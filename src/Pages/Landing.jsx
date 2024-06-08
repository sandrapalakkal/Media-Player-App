import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import manageImg from '../assets/manage-video.gif'
import historyImg from '../assets/history.gif'
import videoImg from '../assets/videos.gif'
import { Card } from 'react-bootstrap'

function Landing() {
  return (
    <>
      <div className="landingsection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their uploaded videos from YouTube and also allow them to arrange it in different categories by drag and drop.User can also have the provision to manage their watch history as well.What are you waiting for,Let's start exploring our site!!</p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
          </div>
          <div className="col-lg-6">
            <img src={landingImg} className='ms-5' alt="Landing Page Image" />
          </div>
        </div>
        {/* Features */}
        <div className="Features my-5">
          <h3 className='text-center'>Features</h3>
          <div className="row mx-5">
            <div className="col-lg-4">
              <Card style={{ width: '18rem',height:'400px'}}>
                <Card.Img style={{height:'250px'}} variant="top" className='img-fluid' src={manageImg} />
                <Card.Body>
                  <Card.Title className='text-center'>Managing Videos</Card.Title>
                  <Card.Text className='text-center'>
                    User can upload,view and remove the videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '18rem',height:'400px' }}>
                <Card.Img style={{height:'250px'}} variant="top" className='img-fluid' src={videoImg} />
                <Card.Body>
                  <Card.Title className='text-center'>Categorize Videos</Card.Title>
                  <Card.Text className='text-center'>
                    User can categorize the videos by drag and drop feature.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '18rem',height:'400px' }}>
                <Card.Img style={{height:'250px'}} variant="top" className='img-fluid' src={historyImg} />
                <Card.Body>
                  <Card.Title className='text-center'>Managing History</Card.Title>
                  <Card.Text className='text-center'>
                    User can manage the watch history of all videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row my-5 p-5 border rounded">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple,Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates nobis, quod qui.
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Manage History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolor beatae rem, repudiandae.
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur amet labore a error.
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="360" src="https://www.youtube.com/embed/5a460PXYU0A" title="We Can&#39;t Stop Laughing | Educational Videos | Kids Cartoons | Sheriff Labrador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing