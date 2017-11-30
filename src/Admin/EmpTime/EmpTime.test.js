const fns = require('./EmpTime.functions.js')

test("id is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[0].id).toEqual(133);
    })
}),

test("clock in time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[0].clock_in).toEqual("11/29 14:40");
    })
}),

test("clock out time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[0].clock_out).toEqual("11/29 14:40");
    })
}),
test("totlhour is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[0].total_hours).toEqual("04");
    })
}),
test("id is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[1].id).toEqual(132);
    })
}),
test("clock in time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[1].clock_in).toEqual("11/29 14:31");
    })
}),

test("clock out time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[1].clock_out).toEqual("11/29 14:31");
    })
}),
test("totlhour is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[1].total_hours).toEqual("08");
    })
}),
test("id is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[2].id).toEqual(119);
    })
}),
test("clock in time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[2].clock_in).toEqual("11/29 11:51");
    })
}),

test("clock out time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[2].clock_out).toEqual("11/29 11:51");
    })
}),
test("totlhour is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[2].total_hours).toEqual("10");
    })
}),
test("id is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[3].id).toEqual(117);
    })
}),
test("clock in time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[3].clock_in).toEqual("11/28 16:42");
    })
}),

test("clock out time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[3].clock_out).toEqual("11/28 16:42");
    })
}),
test("totlhour is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[3].total_hours).toEqual("06");
    })
}),
test("id is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[4].id).toEqual(116);
    })
}),
test("clock in time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[4].clock_in).toEqual("11/28 16:23");
    })
}),

test("clock out time is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[4].clock_out).toEqual("11/28 16:23");
    })
}),
test("totlhour is correct", ()=>{
    expect.assertions(1);
    const url = 'http://localhost:3005/api/admin/get_emp_timecard/Eunbin%20Kang'
    return fns.getEmpTimeCard(url).then(response => {
        expect(response[4].total_hours).toEqual("11");
    })
})