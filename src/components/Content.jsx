
function bellowContent({ contentList }) {
  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      
        {contentList.map((item, index) => (
          <ul key={index}>
          
            <div className="w-9/12 mt-5 pb-3 border-b-[3px] flex justify-between">
              <div className="flex">
                <i icon="material-symbols:delete-outline" className="w-7 h-7 bg-red-400 mr-2 rounded-md text-white"/>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{item.petName}</h3>
                  <p>
                    <span className="text-lg font-medium text-blue-400">
                      Owner:
                    </span>{" "}
                    {item.ownerName}
                  </p>
                  <p>{item.Note}</p>
                </div>
              </div>
              <div className="text-sm">
                <p>{item.Date}</p>
              </div>
            </div>

          </ul>

        ))}
      
    </div>
  );
}


export default bellowContent




