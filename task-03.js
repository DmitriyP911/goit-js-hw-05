`use strict`

class Storage {
    constructor ( productsArr ) {
        this.productsArr = productsArr;
    }

    getItems () {
        return this.productsArr;
    };

    addItem ( product ) {
        this.productsArr.push( product );
    };

    removeItem ( product ) {
        this.productsArr.splice( this.productsArr.indexOf( product ), 1 );
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


