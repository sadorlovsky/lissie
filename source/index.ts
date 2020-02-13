import licenses from './licenses'
import { render } from './template'

type LicenseType = 'mit' | 'apache'

type LissieOptions = {
  year?: string | number
  author?: string
  email?: string
  project?: string
}

function lissie (license: LicenseType = 'mit', options?: LissieOptions): string {
  return render(licenses[license], options)
}

export default lissie
