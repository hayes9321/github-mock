import FileExplorer from './file-explorer'
import FileExplorerSideBar from './file-explorer-sidebar'

const FileExplorerContainer = () => {
  return (
    <div className="mx-auto my-8 px-4 flex flex-col lg:flex-row">
      <FileExplorer/>
      <FileExplorerSideBar/>
    </div>
  )
}

export default FileExplorerContainer;
