import Nav from './nav'
import RepoStats from './repo-stats'
import RepoNav from './repo-nav'

const Header = () => {
  return (
    <div class="text-gray-900 text-sm">
      <Nav/>
      <RepoStats/>
      <RepoNav/>
    </div>
  )
}

export default Header
