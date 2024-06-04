import { Action } from '@stacksjs/actions'
import User from '../src/models/User'

export default new Action({
      name: 'User Destroy',
      description: 'User Destroy ORM Action',
      method: 'DELETE',
      async handle(request: any) {
        const id = request.getParam('id')

        const model = await User.findOrFail(Number(id))

        model.delete()

        return 'Model deleted!'
      },
    })
  