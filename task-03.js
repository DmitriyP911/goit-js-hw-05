`use strict`

class Storage {
    constructor ( array ) {
        this.array = array;
    }

    getItems () {
        return this.array;
    };

    addItem ( item ) {
        this.array.push( item );
    };

    removeItem ( item ) {
        this.array.splice( this.array.indexOf( item ), 1 );
    }
}

const storage = new Storage( [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
] );

const items = storage.getItems();
console.table( items ); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem( 'Дроид' );
console.table( items ); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem( 'Пролонгер' );
console.table( items ); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


