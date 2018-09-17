let prompt = require('prompt-sync')();

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/addressData.json', 'utf8'));
class Open {

    constructor() {
        this.array = obj.Person
    }

    add() {
        let firstName = prompt('Enter First Name : ')
        let lastName = prompt('Enter Last Name : ')
        let city = prompt('Enter city : ')
        let state = prompt('Enter state : ')
        let zip = prompt('Enter zip : ')
        let phonenumber = prompt('Enter phonenumber : ')
        let person = {
            firstName: firstName,
            lastName: lastName,
            address: {
                city: city,
                state: state,
                zip: zip
            },
            phonenumber: phonenumber
        }
        this.array.push(person);
        console.log('\nSuccessfully added into adress book ');
        console.log(this.array);
        console.log();
        this.save();
    }
    delete() {

        let lastName = prompt('Enter Last Name of the person to be deleted  : ');

        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].lastName === lastName) {

                this.array.splice(i, 1);

            }
        }
        console.log('\nSuccessfully deleted ');
        console.log('\nData Present after deleting : ');
        console.log(this.array);

    }

    update() {

        let lastName = prompt('Enter Last Name of the person to update : ');

        for (var i = 0; i < this.array.length; i++) {

            if (this.array[i].lastName === lastName) {
                console.log('1 : Address \
                2 : Phone number \
                3 : Address and Phone number');
                console.log();    
                let choice = parseInt(prompt('Enter Choice : '));

                switch (choice) {
                    case 1:
                        console.log();
                        let city1 = prompt('Enter city : ');
                        let state1 = prompt('Enter state : ');
                        let zip1 = prompt('Enter zip : ');

                        let person1 = {
                            firstName: this.array[i].firstName,
                            lastName: this.array[i].lastName,
                            address: {
                                city: city1,
                                state: state1,
                                zip: zip1
                            },
                            phonenumber: this.array[i].phonenumber
                        }
                        this.array[i] = person1;
                        console.log('\nSuccessfully updated');
                        break;

                    case 2:
                        console.log();
                        let phonenumber2 = prompt('Enter phonenumber : ');
                        let person2 = {
                            firstName: this.array[i].firstName,
                            lastName: this.array[i].lastName,
                            address: {
                                city: this.array[i].address.city,
                                state: this.array[i].address.state,
                                zip: this.array[i].address.zip
                            },
                            phonenumber: phonenumber2
                        }
                        this.array[i] = person2;
                        console.log('\nSuccessfully updated');
                        console.log(this.array[i]);
                        break;

                    case 3:
                        console.log();
                        let city3 = prompt('Enter city : ');
                        let state3 = prompt('Enter state : ');
                        let zip3 = prompt('Enter zip : ');
                        let phonenumber3 = prompt('Enter phonenumber : ');
                        let person3 = {
                            firstName: this.array[i].firstName,
                            lastName: this.array[i].lastName,
                            address: {
                                city: city3,
                                state: state3,
                                zip: zip3
                            },
                            phonenumber: phonenumber3
                        }
                        this.array[i] = person3;
                        console.log('Successfully updated');
                        console.log(this.array[i]);
                        break;

                        default:
                        console.log('Invalid choosing :');
                        break;
                }
            }
        }
    }

    arrange() {
        this.array.sort(this.compare);
        console.log('\nSorted according to last name :');        
        console.log(this.array);
    }

    search() {
        let lastName = prompt('Enter Last Name of the person to search  : ');
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].lastName === lastName) {
                console.log('\nYour searched address :');           
                console.log(this.array[i]);
            }
        }
    }

    save() {
        let user1 = {
            Person: this.array,
        };
        console.log('Successfully saved into the File ');    
        var json = JSON.stringify(user1);
        fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/addressData.json', json, 'utf8');
    }

    compare(a, b) {
        if (a.lastName < b.lastName)
            return -1;
        if (a.lastName > b.lastName)
            return 1;
        return 0;
    }
}
module.exports = Open;