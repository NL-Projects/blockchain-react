import React from "react";

function Tx({ numOfRow = 3 }) {
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
  let filledArray = new Array(numOfRow).fill(row);

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
