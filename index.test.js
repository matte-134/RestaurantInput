const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const seedTestRest = await Restaurant.create(seedRestaurant[0])
        expect(seedTestRest.name).toEqual(seedRestaurant[0].name)
    });

    test('can create a Menu', async () => {
        const seedTestMenu = await Menu.create(seedMenu[0])
        expect(seedTestMenu.name).toEqual(seedMenu[0].name)
    });

    test('can find Restaurants', async () => {
        const seedTestRest = await Restaurant.create(seedRestaurant[0])
        let find = await Restaurant.findOne()
        find = find.toJSON()
        expect(find.name).toEqual(seedRestaurant[0].name)
    });

    test('can find Menus', async () => {
        const seedTestMenu = await Menu.create(seedMenu[0])
        let findMenu = await Menu.findOne()
        findMenu = findMenu.toJSON()
        expect(findMenu.name).toEqual(seedMenu[0].name)
    });

    test('can delete Restaurants', async () => {
        await Restaurant.create(seedRestaurant[0])
        await Restaurant.create(seedRestaurant[1])
        const data = await Restaurant.findAll()
        await Restaurant.destroy({
            where: {
                name: seedRestaurant[0].name
            }
        })
        const data2 = await Restaurant.findOne()
        expect(data2.name).toEqual(seedRestaurant[1].name)
    });
})