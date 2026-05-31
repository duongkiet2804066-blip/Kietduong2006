const QuickViewModal = () => (
    <div className="modal fade" id="modaltoggle" aria-hidden="true" tabIndex={-1}>
      <div className="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="col-lg-12 col-md-12 me-3">
              <div className="image-holder">
                <img src="images/summary-item1.jpg" alt="Shoes" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="summary">
                <div className="summary-content fs-6">
                  <div className="product-header d-flex justify-content-between mt-4">
                    <h3 className="display-7">Running Shoes For Men</h3>
                    <div className="modal-close-btn">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <span className="product-price fs-3">$99</span>
                  <div className="product-details">
                    <p className="fs-7">
                      Buy good shoes and a good mattress, because when you're not in one you're in the
                      other. With four pairs of shoes, I can travel the world.
                    </p>
                  </div>
                  <ul className="select">
                    <li>
                      <strong>Colour Shown:</strong> Red, White, Black
                    </li>
                    <li>
                      <strong>Style:</strong> SM3018-100
                    </li>
                  </ul>
                  <div className="variations-form shopify-cart">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="quantity d-flex pb-4">
                          <div className="qty-number align-top qty-number-plus d-flex justify-content-center align-items-center text-center">
                            <span className="increase-qty plus">
                              <svg className="plus">
                                <use xlinkHref="#plus" />
                              </svg>
                            </span>
                          </div>
                          <input
                            type="number"
                            id="quantity_001"
                            className="input-text text-center"
                            step={1}
                            min={1}
                            name="quantity"
                            defaultValue={1}
                            title="Qty"
                          />
                          <div className="qty-number qty-number-minus d-flex justify-content-center align-items-center text-center">
                            <span className="increase-qty minus">
                              <svg className="minus">
                                <use xlinkHref="#minus" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <a rel="nofollow" href="#" className="out-stock button">
                          Out of stock
                        </a>
                        <button
                          type="submit"
                          className="btn btn-medium btn-black hvr-sweep-to-right"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="categories d-flex flex-wrap pt-3">
                    <strong className="pe-2">Categories:</strong>
                    <a href="#" title="categories">Clothing,</a>
                    <a href="#" title="categories">Men's Clothes,</a>
                    <a href="#" title="categories">Tops &amp; T-Shirts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default QuickViewModal;