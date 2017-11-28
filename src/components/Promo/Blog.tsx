import * as React from 'react'

export class Blog extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public render() {

    return (
      <div>
        <section className='blog ptb-80 bg-off' id='blog'>
          <div className='container'>
            <div className='section_title mb-50 text-center'>
              <h2>latest blog posts</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            <div className='owl-carousel owl-theme'>
              <div className='item'>
                <a className='img_container' href='blog_single.html'>
                  <img src='images/blog/1.jpg' className='img-responsive' alt='blog image' />
                </a>
                {/* End of .img_container */}
                <div className='content p-30'>
                  <h3><a href='#' className='tr-fast'>winter morning</a></h3>
                  <h6 className='mb-20'>3 hours ago<a className='ml-10 pl-10 tr-fast' href='#'>5 comments</a></h6>
                  <p className='mb-20'>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.Lorem ipsum dolor. </p>
                  <a href='blog_single.html' className='tr-fast'>read more <i className='icon-arrows_slim_right' /></a>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .item */}
              <div className='item'>
                <a className='img_container' href='blog_single.html'>
                  <img src='images/blog/2.jpg' className='img-responsive' alt='blog image' />
                </a>
                {/* End of .img_container */}
                <div className='content p-30'>
                  <h3><a href='#' className='tr-fast'>bull head</a></h3>
                  <h6 className='mb-20'>3 hours ago<a className='ml-10 pl-10 tr-fast' href='#'>5 comments</a></h6>
                  <p className='mb-20'>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.Lorem ipsum dolor. </p>
                  <a href='blog_single.html' className='tr-fast'>read more <i className='icon-arrows_slim_right' /></a>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .item */}
              <div className='item'>
                <a className='img_container' href='blog_single.html'>
                  <img src='images/blog/3.jpg' className='img-responsive' alt='blog image' />
                </a>
                {/* End of .img_container */}
                <div className='content p-30'>
                  <h3><a href='#' className='tr-fast'>walk alone</a></h3>
                  <h6 className='mb-20'>3 hours ago<a className='ml-10 pl-10 tr-fast' href='#'>5 comments</a></h6>
                  <p className='mb-20'>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.Lorem ipsum dolor. </p>
                  <a href='blog_single.html' className='tr-fast'>read more <i className='icon-arrows_slim_right' /></a>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .item */}
              <div className='item'>
                <a className='img_container' href='blog_single.html'>
                  <img src='images/blog/4.jpg' className='img-responsive' alt='blog image' />
                </a>
                {/* End of .img_container */}
                <div className='content p-30'>
                  <h3><a href='#' className='tr-fast'>bull head</a></h3>
                  <h6 className='mb-20'>3 hours ago<a className='ml-10 pl-10 tr-fast' href='#'>5 comments</a></h6>
                  <p className='mb-20'>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.Lorem ipsum dolor. </p>
                  <a href='blog_single.html' className='tr-fast'>read more <i className='icon-arrows_slim_right' /></a>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .item */}
            </div>
            {/* End of .owl-carousel */}
          </div>
          {/* End of .container */}
        </section>
      </div>
    )
  }
}
