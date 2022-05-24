import App from "./App";

const obj1 = new App();

describe(
    'test getAllHolidays', () => {
        test('test 2022', () =>{
            expect(obj1.getAllHolidays(2022)).toBe("mossab")
        })
    }
)