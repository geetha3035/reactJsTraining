import React from 'react';

const Product = (props) => {
    const {title, image, description, price}= props.data;
    return(
        <div class="col-sm-3">
          <div class="card">
          <img src={ image } class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{ title }</h5>
              <p class="card-text">
                {description}
              </p>
              <h2>{ price }</h2>
              <a href="#" class="btn btn-primary btn-block">
                Add to cart
              </a>
            </div>
          </div>
        </div>
    )
}
export default Product;