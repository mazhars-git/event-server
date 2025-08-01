/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-require-imports */
'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
// eslint-disable-next-line @typescript-eslint/no-require-imports
const app_1 = __importDefault(require('./app'))
// eslint-disable-next-line @typescript-eslint/no-require-imports
const config_1 = __importDefault(require('./app/config'))
const mongoose_1 = __importDefault(require('mongoose'))
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield mongoose_1.default.connect(config_1.default.database_url)
      app_1.default.listen(config_1.default.port, () => {
        console.log(`Event server listening on port ${config_1.default.port}`)
      })
    } catch (err) {
      console.log(err)
    }
  })
}
main()
