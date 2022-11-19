import { program } from 'commander'
import { getUser } from './lib/api'

const main = (dryRun: boolean) => {
  getUser(dryRun)
}

program.option('-d, --dry-run', 'dry run script')
program.parse()
const options = program.opts()

main(options.dryRun)
