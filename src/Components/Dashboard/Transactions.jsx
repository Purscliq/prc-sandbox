import { useState } from "react";
import { useGetTransactionsQuery } from "../../features/api/transactionApiSlice";
import Loader from "../../utils/Loader";
import TransactionTable from "./TransactionTable";
const Transactions = () => {
  const [params, setParams] = useState(1);
  // const { data: res, isLoading } = useGetTransactionsQuery(params);
  // const limit = res?.total / 10;
  const limit = 10;
  const iterator = new Array(limit).fill(1);
  return (
    <>
      {/* <nav>
        <ul className="flex pagination-pink pagination">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => setParams(params + 1)}
              aria-label="Previous"
            >
              <span className="material-icons">{"<"}</span>
            </a>
          </li>
          {iterator.map((_, index) => (
            <li className="page-item active">
              <a className="page-link" onClick={() => setParams(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span className="material-icons">{">"}</span>
            </a>
          </li>
        </ul>
      </nav> */}
      {/* {isLoading ? <Loader /> : <TransactionTable />} */}
      <TransactionTable />
    </>
  );
};

export default Transactions;
