import React from 'react';
import ContactDetails from '../components/products_page/ContactDetails';
import DetailledProductThumbnail from '../components/products_page/DetailledProductThumbnail';
import VehicleDescription from '../components/products_page/VehicleDescription';
import withPreloader from '../withPreloader';

function ProductPage({ product }) {
  // Extracting necessary details from the product object
  const { images, title, oldPrice, Price, ...otherDetails } = product;

  // Creating a new object for the data prop excluding image-related keys and id
  const data = Object.fromEntries(
    Object.entries(otherDetails).filter(([key]) => !key.includes('image') && key !== 'id')
  );

  return (
    <section>
      <div className="container">
        <DetailledProductThumbnail
          images={images}
          title={title}
          price={Price}
          oldPrice={oldPrice}$
          data={data}
        />
        <div className="row">
          <VehicleDescription
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
              "Vestibulum in lorem nec ligula ultricies ultricies.\n" +
              "Pellentesque habitant morbi tristique sen"
            }
          />

          <ContactDetails
            name="Z B"
            phone="+33 1 23 45 67 89"
            mobilePhone="+33 6 12 34 56 78"
            email="z.b@depot-car.com"
          />
        </div>
      </div>
    </section>
  );
}

export default withPreloader(ProductPage);
