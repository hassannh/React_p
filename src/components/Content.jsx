
function bellowContent({ contentList }) {
    localStorage.setItem("contentList", JSON.stringify(contentList));
    return (
        <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <h2>Content Below:</h2>
          <ul>
            {contentList.map((item, index) => (
              <li key={index}>
                <div>--------------------------------</div>
                - {item.ownerName}  <br></br>
                - {item.petName} <br></br>
                - {item.Time}<br></br>
                - {item.Date} <br></br>
                - {item.Note}
                <div>--------------------------------</div>

              </li>
              
            ))}
          </ul>
        </div>
      );
}


export default bellowContent




