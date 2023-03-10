const db = require('../database/db');

class User {
    constructor(firstname, last_name, password, location) {
        this.firstname = firstname;
        this.last_name = last_name;
        this.password = password;
        this.location = location;
    }

    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1 ;
        let dd = d.getDay();

        let createdAtDate = `${yyyy}-${mm}-${dd }`; 

        let sql = `
        INSERT INTO user(
            first_name,
            last_name,
            password,
            location,
            created_at
        )
        VALUES (
            '${this.firstname}',
            '${this.last_name}',
            '${this.password}',
            '${this.location}',
            '${createdAtDate}'
        )
        `;

        return db.execute(sql);  
 
    }
    static getAll(){
        let sql = `SELECT * FROM user;`

        return db.execute(sql);
    }
    static findByfirstname(firstname) {
        let sql = `SELECT * FROM user WHERE first_name LIKE '%${firstname}%';`;

        return db.execute(sql); 
    }

}

module.exports = User;
