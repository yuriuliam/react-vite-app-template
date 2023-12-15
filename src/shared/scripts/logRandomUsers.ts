import { isDevelopmentMode } from '../utils/environment'
import { createFakerUsers } from '../utils/faker'

const logRandomUsers = () => {
  if (!isDevelopmentMode()) return

  const users = createFakerUsers(true)

  globalThis.logger.log({
    name: 'App',
    title: 'Vite',
    content: 'See the a deterministic list users for this app:',
    data: users,
    style: 'inline',
  })

  console.table(
    users.map(user => ({ username: user.username, password: user.password })),
  )
}

export { logRandomUsers }
