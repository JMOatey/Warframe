const Items = require('warframe-items');
require('core-js/modules/es.promise');
require('core-js/modules/es.object.assign');
require('core-js/modules/es.object.keys');
require('regenerator-runtime/runtime');
const Excel = require('exceljs/dist/es5');


var list = [
    'Arcanes',
    'Archwing',
    'Arch-Gun',
    'Arch-Melee',
    // 'Corpus',
    'Enemy',
    'Fish',
    'Gear',
    'Glyphs',
    'Melee',
    'Misc',
    'Mods',
    'Pets',
    'Primary',
    'Quests',
    'Relics',
    'Resources',
    'Secondary',
    'Sentinels',
    'Warframes',
    'Skins',
];

const grey = '111111';

var workbook = new Excel.Workbook();
list.forEach(item => {
    var number = 0;
    var row = 2;
    var sheet = workbook.addWorksheet(item);
    category = new Items({category: [item]});
    sheet.columns = [
        { header: 'Have it?', key: 'owned', width: 15 },
        { header: 'Mastered?', key: 'mastery', width: 15},
        { header: 'Name', key: 'name', width: 20 },
        { header: 'AmountRequired', key: 'required', width: 20},
        // { header: 'Locations', key: 'locations', width: 50}
      ];
    category.forEach(thing => {
        // if(number < 1){
        //     console.log('thing: ', thing);
        //     number = 1;
        // }
            
        sheet.addRow({owned: false, mastery: false, name: thing.name, required: 0});

        if(thing.components) {
            sheet.getRow(row).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FF00FF00'}
            };
            thing.components.forEach(component => {
                // if(number < 2)
                // {
                //     console.log('Component: ', component);
                //     number = 2;
                // }
                // var description;
                // if(component.drops) {
                //     description = component.drops.filter(dropLocale => dropLocale.location);
                // } else {
                //     if(component.description && component.description.includes("location")) {
                //         description = component.description.split("location")[1];
                //     }
                // }
                // var locations = component.drops.map(dropLocale => dropLocale.location);
                sheet.addRow({owned: false, mastery: false, name: component.name, required: component.itemCount});
                row++;
            });
        }
        row++;
    });
});

// write to a file
workbook.xlsx.writeFile('test.xlsx');

// console.log(items);