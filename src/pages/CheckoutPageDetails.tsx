import { CSSProperties } from "react";
import CheckoutForm from "../components/checkoutComponents/CheckoutForm";

import { DeliveryDataInfo } from "../data/collections/deliveryData";

interface Props {
  deliveryInfo: DeliveryDataInfo;
  setDeliveryInfo: any;
}

function CheckoutPageDetails(props: Props) {
  return (
    <div style={rootStyle}>
      <div style={checkoutContainer}>
        <h2 style={headlineStyle}>Checkout</h2>
        <CheckoutForm
          deliveryInfo={props.deliveryInfo}
          setDeliveryInfo={props.setDeliveryInfo}
        />
      </div>
    </div>
  );
}

export default CheckoutPageDetails;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  // border: "2px solid #88D9E6",
};

const headlineStyle: CSSProperties = {
  fontSize: "2rem",
};

const checkoutContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  background: "#303339",
  boxShadow: "2px 5px 12px black",
  marginBottom: "2rem",
};
