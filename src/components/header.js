import Nav from './nav'
import RepoStats from './repo-stats'

const Header = () => {
  return (
    <div class="text-gray-900 text-sm">
      <Nav/>
      <RepoStats/>
    </div>
  )
}

export default Header
