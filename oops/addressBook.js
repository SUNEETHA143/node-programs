let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/oops/editAddressBook.js');

function addressBook() {
    var book = new utility();

    while (1) {
        console.log(' 1 : To add new address  \
        2 : To edit address book  \
        3 : Exit ');
        console.log();    
        let choice = parseInt(prompt('Select the Choice :'));

        switch (choice) {
            case 1:
                book.add();
                break;

            case 2:
                while (1) {
                    console.log('1 : Delete \
                    2 : Update \
                    3 : Arrange \
                    4 : search \
                    5 : save \
                    6 : Quit');
                    console.log();
                    let choice = parseInt(prompt('Select the Choice :'));

                    switch (choice) {
                        case 1:
                            book.delete();
                            break;
                        case 2:
                            book.update();
                            break;
                        case 3:
                            book.arrange();
                            break;
                        case 4:
                            book.search();
                            break;
                        case 5:
                            book.save();
                            break;
                        case 6:
                            addressBook();
                        default:
                            console.log('choose valid Choice...!');
                            break;
                    }
                }
            case 3:
                process.exit();
            default:
                console.log('choose valid Choice...!');
                break;
        }
    }
}
addressBook();
