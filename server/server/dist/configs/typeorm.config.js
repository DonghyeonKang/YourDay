"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "gold3819",
    database: "user_db",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map