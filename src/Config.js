/**
 * Configuration File
 * Replace values with your information
 */

const Config = {
  title: 'Neurotech Tech Tree',
  subtitle: 'Prototype',
  key: [
    {
      title: 'Core Technology',
      color: '#9FC4FF',
    },
    {
      title: 'Neurotech Tech',
      color: '#FFC6FE',
    },
    {
      title: 'General Improvement',
      color: '#FDFFB6',
    }
  ],
  github_repo_owner: 'Foresight-Institute',
  github_repo_name: 'neurotech-tree',
  github_base_branch: 'staging',
  github_token: process.env.REACT_APP_TOKEN,
  cover_image_url: 'https://foresight.org/wp-content/uploads/2022/01/neurotech-background3.jpg',
  tree_background_color: '#1D243C'
}

export default Config;