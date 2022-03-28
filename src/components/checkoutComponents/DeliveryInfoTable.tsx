import { CSSProperties } from "react";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";

interface Props {
  deliveryInfo: DeliveryDataInfo;
}

function DeliveryInfoTable(props: Props) {
  return (
    <div>
      <table style={{ gap: "1rem" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.firstName + " " + props.deliveryInfo.lastName}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td style={{ paddingLeft: "1rem" }}>{props.deliveryInfo.email}</td>
          </tr>
          <tr>
            <td>Phone#</td>
            <td style={{ paddingLeft: "1rem" }}>{props.deliveryInfo.number}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.address}
            </td>
          </tr>
          <tr>
            <td>Zipcode</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.zipCode}
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td style={{ paddingLeft: "1rem" }}>{props.deliveryInfo.city}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.country}
            </td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td style={{ paddingLeft: "1rem" }}>
              {props.deliveryInfo.deliveryMethod}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryInfoTable;

const infoBox: CSSProperties = {
  border: "1px solid white",
};
