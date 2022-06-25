import {isHolidayDay,getAllHolidays} from '../../lib/utils'


describe(
    'test getAllHolidays', () => {
        test('test getAllHolidays(2022)', () =>{
            expect(getAllHolidays(2022)).toBe("jour de l'An est 2022-1-1, lundi de Paques 2022-4-18,fete de travaille 2022-5-1,fete de victoire 1945 2022-5-8,fete de Ascension 2022-5-26,lundi de pentecote 2022-6-6,fete nationale est en 2022-7-14,fete de assomption 2022-8-15,fete de toussaint 2022-11-1,fete de armistice 2022-11-11,jour de noel 2022-12-25")
        }) 
        test('test isHolidayDay()', () =>{
            expect(isHolidayDay("2024/04/01")).toBe("lundi de ")
        })
        test('test du fonction isHolidayDay("2025/04/01")',() =>{
            expect(isHolidayDay("2025/04/01")).toBe("ce n'est pas un jour férié")
        })
    }
)