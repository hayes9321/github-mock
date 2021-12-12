const BranchNav = () => {
  return (
    <div className="branch-navigation flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <button className="border border-gray-400 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center space-x-2">
          <svg className="fill-current text-gray-600 w-4" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
        <div className="font-semibold">master</div>
        <svg className="w-3 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <a href="#" className="hidden lg:flex items-center space-x-2 py-1 group">
          <svg className="fill-current text-gray-600 group-hover:text-blue-600 w-4" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
          <span className="group-hover:text-blue-600">
            <span className="font-semibold">25 </span>
            <span className="text-gray-600">branches</span>
          </span>
        </a>
        <a href="#" className="hidden py-1 lg:flex items-center space-x-2 group">
          <svg className="fill-current text-gray-600 group-hover:text-blue-600 w-4" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>
          <span className="text-gray-700 group-hover:text-blue-600">
            <span className="font-semibold">79</span>
            <span className="text-gray-600">tags</span>
          </span>
        </a>
      </div>
      <div className="hidden lg:flex items-center space-x-2">
        <button className="border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-200 flex items-center space-x-2">
          <div className="font-semibold">Go to file</div>
        </button>
        <button className="border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-200 flex items-center space-x-1">
          <div className="font-semibold">Add file</div>
          <svg className="w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <button className="font-semibold border border-gray-400 rounded-md text-white bg-green-600 hover:bg-green-700 px-4 py-1 flex items-center space-x-2">
          <svg className="w-4 fill-current text-gray-200" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>
          <div>Code</div>
          <svg className="w-3 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default BranchNav;
