import React from 'react'

const ClientSection = () => {
  return (
    <div className="tm-clients-wrap">
  <div className="empty-space col-md-b100 col-xs-b70" />
  <div className="container">
    <div className="tm-clients-curosor owl-carousel">
      <div className="tm-client">
        <img src="assets/img/client-logo-01.png" alt="client logo" />
      </div>
      <div className="tm-client">
        <img src="assets/img/client-logo-02.png" alt="client logo" />
      </div>
      <div className="tm-client">
        <img src="assets/img/client-logo-03.png" alt="client logo" />
      </div>
      <div className="tm-client">
        <img src="assets/img/client-logo-04.png" alt ="client logo" />
      </div>
      <div className="tm-client">
        <img src="assets/img/client-logo-05.png" alt="client logo" />
      </div>
      <div className="tm-client">
        <img src="assets/img/client-logo-06.png" alt="client logo" />
      </div>
    </div>
  </div>
  <div className="empty-space col-md-b100 col-xs-b70" />
</div>

  );
}

export default ClientSection