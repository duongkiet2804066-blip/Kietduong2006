const footerMenus = [
    {
      title: 'Info',
      links: ['Track Your Order', 'Our Blog', 'Privacy policy', 'Shipping', 'Contact Us', 'Help', 'Community'],
    },
    {
      title: 'About',
      links: ['History', 'Our Team', 'Services', 'Company', 'Manufacture', 'Wholesale', 'Retail'],
    },
    {
      title: 'Women Shoes',
      links: ['Track Your Order', 'Our Blog', 'Privacy policy', 'Shipping', 'Contact Us', 'Help', 'Community'],
    },
    {
      title: 'Popular',
      links: ['Prices Drop', 'New Products', 'Best Sales', 'Stores', 'Login', 'Cart'],
    },
    {
      title: 'Mens Collection',
      links: ['Delivery', 'About Us', 'Shoes', 'Contact Us'],
    },
  ];
  
  const Footer = () => (
    <footer id="footer" className="py-5 border-top">
      <div className="container-lg">
        <div className="row">
          {footerMenus.map((menu) => (
            <div key={menu.title} className="col-lg-2 pb-3">
              <div className="footer-menu">
                <h5 className="widget-title pb-2">{menu.title}</h5>
                <ul className="menu-list list-unstyled">
                  {menu.links.map((link) => (
                    <li key={link} className="pb-2">
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
  
          {/* Get In Touch */}
          <div className="col-lg-2 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-3">Get In Touch</h5>
              <div className="footer-contact-text">
                <span>Stylish Online Store 123 Main Street, Toulouse - France. </span>
                <span> Call us: (+33) 800 456 789-987 </span>
                <span className="text-hover fw-bold light-border">
                  <a href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-6">
            <p>© Copyright Stylish 2026.</p>
          </div>
          <div className="col-md-6 text-lg-end">
            <p>
              Free HTML by{' '}
              <a href="https://templatesjungle.com/" target="_blank" rel="noreferrer">
                TemplatesJungle
              </a>
              <br />
              Distributed by{' '}
              <a href="https://themewagon.com" target="_blank" rel="noreferrer">
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;