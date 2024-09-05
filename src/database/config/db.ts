import { Kysely, MssqlDialect } from 'kysely'
import * as Tedious from 'tedious'
import * as Tarn from 'tarn'
import path from "path"
import { DB } from '../../models/Schema'

require('dotenv').config({
  path: path.resolve(__dirname, "../../../.env")
})

const dialect = new MssqlDialect({
  tarn: {
    ...Tarn,
    options: {
      min: 0,
      max: 10,
    },
  },
  tedious: {
    ...Tedious,
    connectionFactory: () => new Tedious.Connection({
      server: process.env.SERVIDOR!,
      authentication: {
        options: {
          password: process.env.CONTRASENA,
          userName: process.env.USUARIO,
        },
        type: 'default',
      },
      options: {
        database: process.env.BASEDATOS,
        port: 1433,
        encrypt: false,
        //trustedConnection: false,
        trustServerCertificate: false
      }
    })
  }
})

export const db = new Kysely<DB>({dialect})