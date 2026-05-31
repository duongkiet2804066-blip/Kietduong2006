const CollectionSection = () => (
  <section className="collection-section py-5">
    <div className="container-lg">
      <h2 className="text-center mb-5">Shop by Collection</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="collection-card position-relative overflow-hidden">
            <img src="/images/collection-item1.jpg" className="img-fluid w-100" alt="Men Collection" />
            <div className="collection-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center text-white">
                <h3>Men's Collection</h3>
                <a href="#" className="btn btn-outline-light mt-3">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="collection-card position-relative overflow-hidden">
            <img src="/images/collection-item2.jpg" className="img-fluid w-100" alt="Women Collection" />
            <div className="collection-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center text-white">
                <h3>Women's Collection</h3>
                <a href="#" className="btn btn-outline-light mt-3">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CollectionSection;