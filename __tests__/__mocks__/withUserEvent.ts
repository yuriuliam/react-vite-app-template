import { userEvent } from '@testing-library/user-event'

const withUserEvent = userEvent.setup.bind(userEvent)

export { withUserEvent }
