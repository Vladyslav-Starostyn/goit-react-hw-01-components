import { Profile } from "./Profile/Profile"
import users from "./Profile/users.json"
import { Statistics } from "./Statistics/Statistics"
import data from "./Statistics/data.json"
import { FriendList } from "./Friends/FriendList"
import friends from "./Friends/friends.json"
import { TransactionHistory } from "./Transactions/TransactionHistory"
import transactions from "./Transactions/transactions.json"


export const App = () => {
  return (
   
    <div>
        {users.map(user =>(  
          <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
        ))}
      
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </div>   
   
  );
};