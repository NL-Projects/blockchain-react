import React from "react";

function Tx({ numOfRows }) {
  var row = (
    <tr>
      <td className="tableLbl">$</td>
      <td>
        <input type="text" className="inputTxLength" />
      </td>
      <td className="tableLbl">From:</td>
      <td>
        <input type="text" className="inputTxLength" />
      </td>
      <td className="tableLbl">To:</td>
      <td>
        <input type="text" className="inputTxLength" />
      </td>
    </tr>
  );
  let filledArray = new Array(numOfRows).fill(row);

  return (
    <div className="tableRow">
      {" "}
      <form>
        <table>
          <tbody>{filledArray}</tbody>
        </table>
      </form>
    </div>
  );
}

export default Tx;
