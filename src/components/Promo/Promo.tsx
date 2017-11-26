import * as React from 'react'
const Scroll: any = require('react-scroll')
const ScrollLink = Scroll.Link
const loadTemplateJs = require('../../vendor/js/main.js')

export class Promo extends React.Component<null, null> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    loadTemplateJs()
  }

  public render() {

    return (
      <div>
        <header>
          <div className='header_wrapper'>
            <nav className='navbar navbar-default pt-10'>
              <div className='container-fluid pl-30 pr-30'>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#my_nav' aria-expanded='false'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                  <a className='navbar-brand' href='#'>
                    <img src='images/brand_logo.png' alt='brand logo' className='img-responsive main_logo default-logo' />
                  </a>
                </div>
                {/* End of .navbar-header */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className='collapse navbar-collapse' id='my_nav'>
                    <ul className='nav navbar-nav navbar-right'>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='home' spy={true} smooth={true} offset={0} duration={500}>home</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='services' spy={true} smooth={true} offset={0} duration={500}>services</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='team' spy={true} smooth={true} offset={0} duration={500}>team</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='feedback' spy={true} smooth={true} offset={0} duration={500}>feedback</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='pricing' spy={true} smooth={true} offset={0} duration={500}>pricing</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='blog' spy={true} smooth={true} offset={0} duration={500}>blog</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='faq' spy={true} smooth={true} offset={0} duration={500}>faq</ScrollLink></li>
                      <li style={{cursor: 'pointer'}}><ScrollLink to='contact' spy={true} smooth={true} offset={0} duration={500}>contact</ScrollLink></li>
                    </ul>
                    {/* End of .nav */}
                </div>
                {/* End of .navbar-collapse */}
              </div>
              {/* End of .container-fluid */}
            </nav>
            {/* End of nav */}
          </div>
          {/* End of .header_wrapper */}
        </header>
        {/* End of header */}
        {/* section banner starts ============================================ */}
        <section className='banner bg_2 pt-80 style_2' data-stellar-background-ratio='.7' id='home'>
          <div className='overlay' />
          <div className='container text-center'>
            <h1 className='mb-20'>A Gold standard cryptocurrency</h1>
            <a href='#' className='ml-5 mr-5 mb-20 btn '>get started</a>
          </div>
          {/* End of .container */}
        </section>
        {/* End of .banner */}
        {/* section startup starts ============================================ */}
        <section className='startup pt-50 pb-20 bg-off'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <h3 className='mb-10'>A short overview</h3>
                <p className='mb-20'>This should be a short description to encourage the user to explore further</p>
              </div>
              {/* End of .col-sm-8 */}
              <div className='col-sm-4 text-right'>
                <a href='#' className='btn mt-10 wow fadeInRight'>get started</a>
              </div>
              {/* End of .col-sm-4 */}
            </div>
            {/* End fo .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .startup */}
        {/* section services starts ============================================ */}
        <section className='services pt-80 pb-80' id='services'>
          <div className='container'>
            <div className='section_title text-center mb-60'>
              <h2>What does Kairos offer?</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row text-center m-0'>
              <div className='col-xs-6 col-sm-4 border-bottom border-right'>
                <div className='content'>
                  <i className='icon-camera' />
                  <h3>photography</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-bottom border-right'>
                <div className='content'>
                  <i className='icon-tools2' />
                  <h3>graphic design</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-bottom'>
                <div className='content'>
                  <i className='icon-upload' />
                  <h3>web design</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <i className='icon-tools' />
                  <h3>web development</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4 border-right'>
                <div className='content'>
                  <i className='icon-apartment_building' />
                  <h3>architecture</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
              <div className='col-xs-6 col-sm-4'>
                <div className='content'>
                  <i className='icon-adjustments' />
                  <h3>SEO</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .content */}
              </div>
              {/* End fo .col-sm-4 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .services */}
        {/* section others starts ============================================ */}
        <section className='others ptb-100 bg-off'>
          <div className='main_content bg-off'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 text-left pr-50'>
                  <div className='section_title clearfix mb-50'>
                    <h2>other areas we expertise</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                  {/* End of .section_title */}
                  <div className='row'>
                    <div className='col-sm-12 mb-10 clearfix wow fadeInLeft' data-wow-delay={0}>
                      <div className='content'>
                        <i className='icon-mobile' />
                        <h3>App development</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      </div>
                      {/* End fo .content */}
                    </div>
                    {/* End of .col-sm-12 */}
                    <div className='col-sm-12 mb-10 clearfix wow fadeInLeft' data-wow-delay='.2s'>
                      <div className='content'>
                        <i className='icon-home' />
                        <h3>interior design</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      </div>
                      {/* End fo .content */}
                    </div>
                    {/* End of .col-sm-12 */}
                    <div className='col-sm-12 mb-10 clearfix wow fadeInLeft' data-wow-delay='.4s'>
                      <div className='content'>
                        <i className='icon-presentation' />
                        <h3>content marketing</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      </div>
                      {/* End fo .content */}
                    </div>
                    {/* End of .col-sm-12 */}
                  </div>
                  {/* End of .row */}
                </div>
                {/* End fo .col-sm-6 */}
              </div>
              {/* End of .row */}
            </div>
            {/* End of .container */}
          </div>
          {/* End of .main_content */}
        </section>
        {/* End of .others */}
        {/* section subscribe starts ============================================ */}
        <section className='subscribe pt-60 pb-30'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <h3 className='mb-10'>Let's get started today</h3>
                <p className='mb-20'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
              {/* End of .col-sm-8 */}
              <div className='col-sm-4 text-right'>
                <a href='#' className='btn  mt-15 wow fadeInRight' data-wow-delay='.5s'>Get started</a>
              </div>
              {/* End of .col-sm-4 */}
            </div>
            {/* End fo .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .subscbribe */}
        {/* section about starts ============================================ */}
        <section className='video ptb-100 bg-off'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='section_title mb-50 text-left'>
                  <h2>about the company</h2>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna.</p>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor
                    incididunt.
                  </p>
                  <a href='#' className='btn mt-10 '>read more</a>
                </div>
                {/* End of .section_title */}
              </div>
              {/* End of .col-sm-6 */}
              <div className='col-sm-6 col-md-6 col-lg-6 wow fadeInRight'>
                <div className='embed-responsive embed-responsive-16by9'>
                  {/* youtube video content */}
                  <iframe width={560} height={315} src='https://www.youtube.com/embed/nrJtHemSPW4' frameBorder={0} allowFullScreen />
                </div>
                {/* End of .embed-responsive */}
              </div>
              {/* End of .video */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .video */}
        {/* section team starts ============================================ */}
        <section className='team ptb-80' id='team'>
          <div className='container'>
            <div className='section_title mb-50 text-center'>
              <h2>our excellent team members</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/1.jpg' alt='team' className='img-responsive' />
                    <div className='overlay'>
                      <ul className='social list-inline mt-5 mb-0'>
                        <li><a href='#'><i className='fa fa-facebook' /></a></li>
                        <li><a href='#'><i className='fa fa-twitter' /></a></li>
                        <li><a href='#'><i className='fa fa-linkedin' /></a></li>
                      </ul>
                      {/* End of .social */}
                    </div>
                    {/* End of .overaly */}
                    <h3 className='team_info wow fadeInUp'>
                      steve martin
                      <span>founder &amp; ceo</span>
                    </h3>
                    {/* End of .team_info */}
                  </div>
                  {/* End of .img_container */}
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/2.jpg' alt='team' className='img-responsive' />
                    <div className='overlay'>
                      <ul className='social list-inline mt-5 mb-0'>
                        <li><a href='#'><i className='fa fa-facebook' /></a></li>
                        <li><a href='#'><i className='fa fa-twitter' /></a></li>
                        <li><a href='#'><i className='fa fa-linkedin' /></a></li>
                      </ul>
                      {/* End of .social */}
                    </div>
                    {/* End of .overaly */}
                    <h3 className='team_info wow fadeInUp'>
                      sarah samanta
                      <span>UI Designer</span>
                    </h3>
                    {/* End of .team_info */}
                  </div>
                  {/* End of .img_container */}
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-4 col-xs-6'>
                <div className='content'>
                  <div className='img_container'>
                    <img src='images/team/3.jpg' alt='team' className='img-responsive' />
                    <div className='overlay'>
                      <ul className='social list-inline mt-5 mb-0'>
                        <li><a href='#'><i className='fa fa-facebook' /></a></li>
                        <li><a href='#'><i className='fa fa-twitter' /></a></li>
                        <li><a href='#'><i className='fa fa-linkedin' /></a></li>
                      </ul>
                      {/* End of .social */}
                    </div>
                    {/* End of .overaly */}
                    <h3 className='team_info wow fadeInUp'>
                      john doe
                      <span>web designer</span>
                    </h3>
                    {/* End of .team_info */}
                  </div>
                  {/* End of .img_container */}
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .team */}
        {/* section skills starts
============================================ */}
        <section className='skills text-left pt-80 pb-80 bg-off'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='section_title mb-30 mt-10'>
                  <h2>skills and experiences</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* End of .section_title */}
                <div className='progress-element mb-50'>
                  <p>HTML</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      <span>95%</span>
                    </div>
                  </div>
                  {/* End of .progress */}
                  <p>CSS</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                      <span>80%</span>
                    </div>
                  </div>
                  {/* End of .progress */}
                  <p>JavaScript</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                      <span>70%</span>
                    </div>
                  </div>
                  {/* End of .progress */}
                  <p>bootstrap</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                      <span>85%</span>
                    </div>
                  </div>
                  {/* End of .progress */}
                  <p>Wordpress</p>
                  <div className='progress'>
                    <div className='progress-bar' role='progressbar' aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                      <span>90%</span>
                    </div>
                  </div>
                  {/* End of .progress */}
                </div>
                {/* End of .progress-element */}
              </div>
              {/* End of .col-sm-6 */}
              <div className='col-sm-6'>
                <div className='content pt-10 pl-80'>
                  <h3>html</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>css</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>javascript</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>bootstrap</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                  <h3>wordpress</h3>
                  <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad.</p>
                </div>
              </div>
              {/* End of .col-sm-6 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .skills */}
        {/* feedback starts
====================================================== */}
        <section className='feedback text-center ptb-80' id='feedback'>
          <div className='container'>
            <div className='section_title mb-50 text-center'>
              <h2>client's feedback</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='owl-carousel owl-theme'>
              <div className='item text-center'>
                <i className='fa fa-user' />
                <p>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.</p>
                <h4 className='text-uppercase'>richard marks <span className='text-capitalize'>creative director, apple</span></h4>
              </div>
              {/* End of .item */}
              <div className='item text-center'>
                <i className='fa fa-user' />
                <p>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.</p>
                <h4 className='text-uppercase'>Kelly Clarkson <span className='text-capitalize'>Graphic designer, Google</span></h4>
              </div>
              {/* End of .item */}
              <div className='item text-center'>
                <i className='fa fa-user' />
                <p>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.</p>
                <h4 className='text-uppercase'>jonathan doe <span className='text-capitalize'>Web Developer, Instagram</span></h4>
              </div>
              {/* End of .item */}
              <div className='item text-center'>
                <i className='fa fa-user' />
                <p>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.</p>
                <h4 className='text-uppercase'>jonathan doe <span className='text-capitalize'>Web Developer, Instagram</span></h4>
              </div>
              {/* End of .item */}
              {/* Last item */}
              {/* To add more items to this section simply copy
        and past any of the items underneath the last item */}
            </div>
            {/* End of .owl-carousel */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .feedback */}
        {/* fun_facts starts
====================================================== */}
        <section className='fun_facts ptb-100' data-stellar-background-ratio='.5'>
          <div className='overlay' />
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 mb-30'>
                <div className='content text-center'>
                  <i className='icon-layers mb-30' />
                  <div className='counter'>69</div>
                  <h4 className='text-uppercase'>projects completed</h4>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-3 mb-30'>
                <div className='content text-center'>
                  <i className='icon-happy mb-30' />
                  <div className='counter'>83</div>
                  <h4 className='text-uppercase'>happy clients</h4>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-3 mb-30'>
                <div className='content text-center'>
                  <i className='icon-glass_coffee mb-30' />
                  <div className='counter'>78</div>
                  <h4 className='text-uppercase'>won coffees</h4>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-3 mb-30'>
                <div className='content text-center'>
                  <i className='icon-linegraph mb-30' />
                  <div className='counter'>94</div>
                  <h4 className='text-uppercase'>positive feedback</h4>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-3 */}
            </div>
          </div>
          {/* End of .container */}
        </section>
        {/* End of .fun_facts */}
        {/* pricing_table starts
====================================================== */}
        <section className='pricing_table ptb-80 text-center' id='pricing'>
          <div className='container'>
            <div className='section_title mb-50 text-center'>
              <h2>pricing table</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-6 col-md-4'>
                <ul className='pricing text-center tr-mid'>
                  <li className='heading'>Basic</li>
                  <li className='price'><span>$59</span> per month</li>
                  <li>24/7 tech support</li>
                  <li>25 projects</li>
                  <li>10GB storage</li>
                  <li>unlimited users</li>
                  <li><a href='#' className='link btn   mt-25 mb-20'>sign up</a></li>
                </ul>
                {/* End of .pricing */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-6 col-md-4'>
                <ul className='pricing text-center tr-mid'>
                  <li className='heading'>standard</li>
                  <li className='price'><span>$89</span> per month</li>
                  <li>24/7 tech support</li>
                  <li>50 projects</li>
                  <li>20GB storage</li>
                  <li>unlimited users</li>
                  <li><a href='#' className='link btn  mt-25 mb-20'> sign up</a></li>
                </ul>
                {/* End of .pricing */}
              </div>
              {/* End of .col-sm-3 */}
              <div className='col-sm-6 col-md-4'>
                <ul className='pricing text-center tr-mid recommend'>
                  <li className='heading'>Pro</li>
                  <li className='price'><span>$129</span> per month</li>
                  <li>24/7 tech support</li>
                  <li>100 projects</li>
                  <li>50GB storage</li>
                  <li>unlimited users</li>
                  <li><a href='#' className='link btn  mt-25 mb-20'>sign up</a></li>
                </ul>
                {/* End of .pricing */}
              </div>
              {/* End of .col-sm-3 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .pricing_table */}
        {/* blog starts
============================================ */}
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
        {/* End of .blog */}
        {/* faq starts
============================================ */}
        <section className='faq pt-80 pb-50' id='faq'>
          <div className='container'>
            <div className='section_title mb-70 text-center'>
              <h2>Frequently asked questions</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row'>
              <div className='col-sm-8'>
                <div className='content mb-100'>
                  <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingOne'>
                        <h4 className='panel-title'>
                          <a role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                            How to install? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseOne' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingTwo'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                            How can I change the font-size of the buttons? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingTwo'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingThree'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                            How to get a support? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseThree' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingThree'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingfour'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapsefour' aria-expanded='false' aria-controls='collapsefour'>
                            How to change the images? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapsefour' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingfour'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingFive'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseFive' aria-expanded='false' aria-controls='collapseFive'>
                            How to change the recipient email address of the contact form? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseFive' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingFive'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                    <div className='panel panel-default'>
                      <div className='panel-heading' role='tab' id='headingSix'>
                        <h4 className='panel-title'>
                          <a className='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>
                            How to change background colors? <i className='fa fa-caret-up' />
                          </a>
                        </h4>
                      </div>
                      {/* End of .panel-heading */}
                      <div id='collapseSix' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingSix'>
                        <div className='panel-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        </div>
                        {/* End of .panel-body */}
                      </div>
                      {/* End of .panel-collapse */}
                    </div>
                    {/* End of .panel */}
                  </div>
                  {/* End of .panel-group */}
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-8 */}
              <div className='col-sm-4'>
                <div className='widget mb-60 pl-20'>
                  <form className='form-inline' action='#'>
                    <div className='search-row clearfix'>
                      <input type='text' name='search' defaultValue='' className='form-control' placeholder='Search your question...' />
                      <button type='submit' className='search-btn' title='search'>
                        <i className='fa fa-search' />
                      </button>
                    </div>
                    {/* End of .search-row */}
                  </form>
                  {/* End of form */}
                </div>
                {/* End of .widget */}
                <div className='widget text-left mb-60 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>our history</h5>
                  </div>
                  <p className='mb-20'>Persuaded to return to the shoemaker's shop, young Edward struggled on till three years of his wretched apprenticeship had passed over.</p>
                  <a href='#' className='link btn '>Read more</a>
                </div>
                {/* End of .widget */}
                <div className='widget quote text-left mb-60 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>quote from the author</h5>
                  </div>
                  <p className='mb-20'>' Persuaded to return to the shoemaker's shop, young Edward struggled on till three years of his wretched apprenticeship had passed over. ' <span>- Kayle Anderson</span></p>
                </div>
                {/* End of .widget */}
              </div>
              {/* End of .col-sm-4 */}
            </div>
            {/* End of .row */}
          </div>
          {/* End of .container*/}
        </section>
        {/* End of .faq */}
        {/* section contact starts
============================================ */}
        <section className='contact pt-80 pb-50 bg-off' id='contact'>
          <div className='container'>
            <div className='section_title mb-70 text-center'>
              <h2>contact us</h2>
              <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
            </div>
            {/* End of .section_title */}
            <div className='row'>
                  <form className='quform' method='post' encType='multipart/form-data'>
                    <div className='row quform-elements'>
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>First Name</label>
                        <input type='text' className='form-control' name='fname' defaultValue='' placeholder='First Name *' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>Last Name</label>
                        <input type='text' className='form-control' name='lname' defaultValue='' placeholder='Last Name *' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>Email</label>
                        <input type='email' className='form-control' name='email' defaultValue='' placeholder='Email Address *' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input form-group col-sm-6'>
                        <label className='sr-only'>Subject</label>
                        <input type='text' className='form-control' name='subj' defaultValue='' placeholder='Subject' required />
                      </div>
                      {/* End of .form-group */}
                      <div className='quform-input textarea form-group col-sm-12'>
                        <label className='sr-only'>Message</label>
                        <textarea name='message' className='form-control' placeholder='Enter Your Message *' defaultValue={''} />
                      </div>
                      {/* End of .col-sm-12 */}
                      <div className='col-sm-12 mt-20 mb-20'>
                        <button type='submit' className='btn '>Send Message</button>
                      </div>
                      {/* End of .col-sm-12 */}
                    </div>
                    {/* End of .row */}
                  </form>
                </div>
                {/* End of .content */}
              </div>
              {/* End of .col-sm-8 */}
              <div className='col-sm-4'>
                <div className='widget mt-55 mb-60 pl-20'>
                  <form className='form-inline' action='#'>
                    <div className='search-row clearfix'>
                      <input type='text' name='search' defaultValue='' className='form-control' placeholder='Search for Location...' />
                      <button type='submit' className='search-btn' title='search'>
                        <i className='fa fa-search' />
                      </button>
                    </div>
                    {/* End of .search-row */}
                  </form>
                  {/* End of form */}
                </div>
                {/* End of .widget */}
                <div className='widget text-left mb-40 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>head office</h5>
                  </div>
                  <address>
                    <p><span>address:</span> 1600 Amphitheatre Parkway, Mountain View, CA, 94043</p>
                    <p><span>phone:</span> (+000) 1252 000522</p>
                    <p><span>email:</span> index@email.com</p>
                  </address>
                </div>
                {/* End of .widget */}
                <div className='widget text-left mb-40 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>Local office</h5>
                  </div>
                  <address>
                    <p><span>address:</span> Victoria 8007, Envato HQ, 121 King Street, Melbourne, Australia.</p>
                    <p><span>phone:</span> (+000) 1252 000522</p>
                    <p><span>email:</span> index@email.com</p>
                  </address>
                </div>
                {/* End of .widget */}
                <div className='widget mb-40 pl-20'>
                  <div className='mb-10'>
                    <h5 className='text-uppercase'>we are social</h5>
                  </div>
                  <div className='widget-social-link clearfix'>
                    <a href='#'><i className='fa fa-facebook' /></a>
                    <a href='#'><i className='fa fa-twitter' /></a>
                    <a href='#'><i className='fa fa-dribbble' /></a>
                    <a href='#'><i className='fa fa-google-plus' /></a>
                    <a href='#'><i className='fa fa-behance' /></a>
                  </div>
                </div>
                {/* End of .widget */}
              </div>
              {/* End of .col-sm-4 */}
            </section>
        <section className='partners ptb-80'>
          <div className='section_title mb-70 text-center'>
            <h2>media partners</h2>
            <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut enim minim beniaps quis nostrual exercitationullamco laboris sed.</p>
          </div>
          {/* End of .section_title */}
          <div className='container'>
            <div className='partner_logos owl-carousel owl-theme'>
              <div className='item'>
                <img src='images/partners/logo1-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo2-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo3-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo4-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo5-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo6-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo1-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo2-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo3-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              <div className='item'>
                <img src='images/partners/logo4-1.png' alt='partners logo' className='img-responsive' />
              </div>
              {/* End of .item */}
              {/* to add more items copy and paste one of the items underneath the last item */}
            </div>
            {/* End of .partner_logos */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .partners */}
        {/* section purchase starts ============================================ */}
        <section className='purchase pt-50 pb-20'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <h3 className='mb-10'>purchase index today</h3>
                <p className='mb-20'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
              {/* End of .col-sm-8 */}
              <div className='col-sm-4 text-right'>
                <a href='#' className='btn style_2 mt-15 wow fadeInRight'>purchase</a>
              </div>
              {/* End of .col-sm-4 */}
            </div>
            {/* End fo .row */}
          </div>
          {/* End of .container */}
        </section>
        {/* End of .purchase */}
        {/* footer starts ============================================ */}
        <footer>
          <div className='footer_top text-left pt-80 pb-30'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-3 mb-30'>
                  <a href='index.html' className='footer_logo mb-30'><img src='images/brand_logo.png' alt='brand logo' /></a>
                  <p>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.Lorem ipsum dolor sit ame consetur adipisicing elit.Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.</p>
                </div>
                {/* End of .col-sm-3 */}
                <div className='col-sm-3 mb-30'>
                  <h3 className='mb-30'>quick access</h3>
                  <ul>
                    <li><a href='#'>home</a></li>
                    <li><a href='#'>privacy policy</a></li>
                    <li><a href='#'>terms and conditions</a></li>
                    <li><a href='#'>FAQ</a></li>
                  </ul>
                </div>
                {/* End of .col-sm-3 */}
                <div className='col-sm-3 mb-30'>
                  <h3 className='mb-30'>latest news</h3>
                  <ul className='twitter'>
                    <li className='mb-15 pl-30'><i className='fa fa-twitter'> </i>En France jugé mais si tu gifles Valls en 2 sec t dvt le juge 😒 <a href='#'>#adama</a> <a href='#'>#justicepourtheo</a></li>
                    <li className='mb-15 pl-30'><i className='fa fa-twitter'> </i>Le <a href='#'>#Gémeaux</a> est gentil mais pas con. Retenez bien ça.</li>
                  </ul>
                </div>
                {/* End of .col-sm-3 */}
                <div className='col-sm-3 mb-30'>
                  <h3 className='mb-30'>newsletter</h3>
                  <p>Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.</p>
                  <div className='newsletter clearfix'>
                    <form action='#' method='get' acceptCharset='utf-8'>
                      <input type='text' name='email' className='form-control mb-10' placeholder='Enter Your Email Address' required />
                      <button type='submit' className='btn'>submit</button>
                    </form>
                  </div>
                </div>
                {/* End of .col-sm-3 */}
              </div>
              {/* End of .row */}
            </div>
            {/* End of .container */}
          </div>
          {/* End of .footer_top */}
          <div className='footer_bottom bg-off pt-30 pb-10'>
            <div className='container'>
              <p className='mb-20 pull-left'>© 2017. VERTICAL. All rights reserved.</p>
              <ul className='list-inline pull-right mb-20'>
                <li><a href='#'><i className='fa fa-facebook' /></a></li>
                <li><a href='#'><i className='fa fa-twitter' /></a></li>
                <li><a href='#'><i className='fa fa-behance' /></a></li>
                <li><a href='#'><i className='fa fa-google-plus' /></a></li>
                <li><a href='#'><i className='fa fa-linkedin' /></a></li>
              </ul>
            </div>
            {/* End of .container */}
          </div>
          {/* End of .footer_bottom */}
        </footer>
        {/* End of footer */}
      </div>
    )
  }
}
