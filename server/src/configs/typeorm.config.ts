import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "user_db",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true
}

