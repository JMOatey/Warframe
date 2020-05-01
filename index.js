const Items = require('warframe-items');
require('core-js/modules/es.promise');
require('core-js/modules/es.object.assign');
require('core-js/modules/es.object.keys');
require('regenerator-runtime/runtime');
const Excel = require('exceljs/dist/es5')


const items = new Items();
var list = ['Arcanes', 'Archwing', 'Arch-Gun', 'Fish', 'Gear', 'Glyphs', 'Melee', 'Misc', 'Mods', 'Node', 'Pets', 'Primary', 'Quests', 'Relics', 'Resources', 'Secondary', 'Sentinels',
            'Sigils', 'Skins', 'Warframes'];

var workbook = new Excel.Workbook();
workbook.creator = 'Me';
list.forEach(item => {
    var sheet = workbook.addWorksheet(item);
});

// console.log(items);