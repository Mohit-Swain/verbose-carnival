import React,{useState,useEffect} from 'react';
import backendAxios from '../../Axios/backendAxios';
/*eslint-disable*/
function LeaderboardTable(){
    const [userDeatils,changeUserDetails] = useState([]);
    useEffect(()=>{
      backendAxios.get('/memes/users')
      .then(result => {
        changeUserDetails(result.data);
      })
      .catch(err => alert(err))
    },[])

    const tableRows = userDeatils.map((items,idx) => {
        let rowClassName = "divide-x-2";
        if(idx%2){
          rowClassName += " bg-gray-100"
        }
        return (
          <tr className={rowClassName}>
            <td className="w-1/5 text-left py-3 px-4">{idx + 1}</td>
            <td className="w-2/5 text-left py-3 px-4">{items.name}</td>
            <td className="w-2/5 text-left py-3 px-4">{items.memeCount}</td>
          </tr>
        )
    })
    return (
      <div className="relative top-16  w-full">
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Rank</th>
              <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold text-sm">User Name</th>
              <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold text-sm">Meme Count</th>
            </tr>
          </thead>
        <tbody className="text-gray-700">
          {tableRows}
        </tbody>
        </table>
      </div>
    </div>
    )
}

export default LeaderboardTable;
