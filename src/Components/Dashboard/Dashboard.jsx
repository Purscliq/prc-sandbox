import "./Dashboard.scss";
import Img from "../../assets/cardblackH.jpg";
import { useEffect } from "react";
import useActions from "../../utils/hookActions";
import { getTransactions } from "../../features/actions.transactions";
import { updateBalance } from "../../features/actions.balance";
const Dashboard = () => {
  const { dispatch, state } = useActions();
  const balance = state.balance.value;
  const user = state.user.value;
  const transactions = state.transactions.value.transactions;
  useEffect(() => {
    if (user.email) {
      dispatch(updateBalance({ email: user.email }));
      dispatch(getTransactions({ email: user.email }));
      console.log(transactions,transactions?.length);
    }
  }, []);
  return (
    <div className="ml-[18%] mt-[4%] relative">
      <div className="pt-[2%]">
        <img src={Img} className="h-[15rem] w-[25rem]" />
        <h2>{user?.userName}</h2>
        <p>Balance:</p>
        <h5 className="balance">NGN {balance?.balance}.00</h5>
      </div>
      {/* <div className="flex flex-col w-[80%] bg-gray-400">
        {
          transactions?.length > 0 ? transactions.map((transactions)=>(<div>you {transactions?.Receive && `received ${transactions?.Receive}`} {transactions.Sent && `sent ${transactions?.Sent}`} {transactions?.receiverUserEmail && `to ${transactions?.receiverUserEmail}`} {transactions?.senderUserEmail && `from ${transactions?.senderUserEmail}`}</div>)) : (<div className="">No Transactions History</div>)
        }
      </div> */}
    </div>
  );
};

export default Dashboard;