QUnit.module('New Week Methods');

covers(Tempus.prototype, 'Tempus', 'getWeek', 'week');
QUnit.test('getWeek()/week()', function () {
	
	var newdate = new Tempus(2012, 1, 13),
		week = newdate.week();
	equal(newdate.week(week).week(), week, 'week should be idempotent');
	
    newdate = new Tempus(2011, 0, 1);
    equal(newdate.getWeek(), 52, String(newdate));
    equal(newdate.week(), 52, String(newdate));
    
    newdate = new Tempus(2011, 0, 3);
    equal(newdate.getWeek(), 1, String(newdate));
    equal(newdate.week(), 1, String(newdate));

    newdate = new Tempus(2011, 0, 9);
    equal(newdate.getWeek(), 1, String(newdate));
    equal(newdate.week(), 1, String(newdate));
    
    newdate = new Tempus(2011, 0, 10);
    equal(newdate.getWeek(), 2, String(newdate));
    equal(newdate.week(), 2, String(newdate));
    
    newdate = new Tempus(2011, 0, 17);
    equal(newdate.getWeek(), 3, String(newdate));
    equal(newdate.week(), 3, String(newdate));
    
    newdate = new Tempus(2011, 0, 24);
    equal(newdate.getWeek(), 4, String(newdate));
    equal(newdate.week(), 4, String(newdate));
    
    newdate = new Tempus(2011, 3, 11);
    equal(newdate.getWeek(), 15, String(newdate));
    equal(newdate.week(), 15, String(newdate));
    
    newdate = new Tempus(2011, 4, 16);
    equal(newdate.getWeek(), 20, String(newdate));
    equal(newdate.week(), 20, String(newdate));
    
    newdate = new Tempus(2011, 6, 25);
    equal(newdate.getWeek(), 30, String(newdate));
    equal(newdate.week(), 30, String(newdate));
    
    newdate = new Tempus(2011, 8, 11);
    equal(newdate.getWeek(), 36, String(newdate));
    equal(newdate.week(), 36, String(newdate));
    
    newdate = new Tempus(2008, 0, 1);
    equal(newdate.getWeek(), 1, String(newdate));
    equal(newdate.week(), 1, String(newdate));
    
    newdate = new Tempus(2008, 1, 1);
    equal(newdate.getWeek(), 5, String(newdate));
    equal(newdate.week(), 5, String(newdate));
    
    newdate = new Tempus(2008, 1, 24);
    equal(newdate.getWeek(), 8, String(newdate));
    equal(newdate.week(), 8, String(newdate));
    
    newdate = new Tempus(2008, 1, 28);
    equal(newdate.getWeek(), 9, String(newdate));
    equal(newdate.week(), 9, String(newdate));
    
    newdate = new Tempus(2008, 1, 29);
    equal(newdate.getWeek(), 9, String(newdate));
    equal(newdate.week(), 9, String(newdate));
    
    newdate = new Tempus(2008, 2, 1);
    equal(newdate.getWeek(), 9, String(newdate));
    equal(newdate.week(), 9, String(newdate));
    
    newdate = new Tempus(2008, 2, 3);
    equal(newdate.getWeek(), 10, String(newdate));
    equal(newdate.week(), 10, String(newdate));
    
    newdate = new Tempus(2011, 6, 14);
    equal(newdate.getWeek(), 28, String(newdate));
    equal(newdate.week(), 28, String(newdate));
    
    newdate = new Tempus(2005, 11, 25);
    equal(newdate.getWeek(), 51, String(newdate));
    equal(newdate.week(), 51, String(newdate));
    
    newdate = new Tempus(2004, 1, 29);
    equal(newdate.getWeek(), 9, String(newdate));
    equal(newdate.week(), 9, String(newdate));
    
    newdate = new Tempus(1999, 11, 13);
    equal(newdate.getWeek(), 50, String(newdate));
    equal(newdate.week(), 50, String(newdate));
});

covers(Tempus.prototype, 'Tempus', 'setWeek', 'addWeek', 'subWeek');
test('setWeek()/week(N)', function () {
    var newdate = new Tempus(2010, 0, 1);
    newdate.setWeek(52);
    equal(newdate.toDateString(), 'Thu Dec 30 2010', String(newdate));
    equal(newdate.week(), 52, String(newdate));
    newdate.week(52);
    equal(newdate.toDateString(), 'Thu Dec 30 2010', String(newdate));
    equal(newdate.week(), 52, String(newdate));
    
    newdate = new Tempus(2011, 0, 1);
    newdate.setWeek(1);
    equal(newdate.toDateString(), 'Thu Jan 06 2011', String(newdate));
    equal(newdate.week(), 1, String(newdate));
    newdate.week(1);
    equal(newdate.toDateString(), 'Thu Jan 06 2011', String(newdate));
    equal(newdate.week(), 1, String(newdate));

    newdate = new Tempus(2011, 0, 3);
    newdate.addWeek();
    equal(newdate.toDateString(), 'Thu Jan 13 2011', String(newdate));
    equal(newdate.week(), 2, String(newdate));
    newdate.subWeek();
    equal(newdate.toDateString(), 'Thu Jan 06 2011', String(newdate));
    equal(newdate.week(), 1, String(newdate));

    newdate.setWeek(2);
    equal(newdate.toDateString(), 'Thu Jan 13 2011', String(newdate));
    equal(newdate.week(), 2, String(newdate));
    newdate.week(2);
    equal(newdate.toDateString(), 'Thu Jan 13 2011', String(newdate));
    equal(newdate.week(), 2, String(newdate));

    newdate.setWeek(3);
    equal(newdate.toDateString(), 'Thu Jan 20 2011', String(newdate));
    equal(newdate.week(), 3, String(newdate));
    newdate.week(3);
    equal(newdate.toDateString(), 'Thu Jan 20 2011', String(newdate));
    equal(newdate.week(), 3, String(newdate));

    newdate.setWeek(4);
    equal(newdate.toDateString(), 'Thu Jan 27 2011', String(newdate));
    equal(newdate.week(), 4, String(newdate));
    newdate.week(4);
    equal(newdate.toDateString(), 'Thu Jan 27 2011', String(newdate));
    equal(newdate.week(), 4, String(newdate));

    newdate.setWeek(5);
    equal(newdate.toDateString(), 'Thu Feb 03 2011', String(newdate));
    equal(newdate.week(), 5, String(newdate));
    newdate.week(5);
    equal(newdate.toDateString(), 'Thu Feb 03 2011', String(newdate));
    equal(newdate.week(), 5, String(newdate));

    newdate.setWeek(6);
    equal(newdate.toDateString(), 'Thu Feb 10 2011', String(newdate));
    equal(newdate.week(), 6, String(newdate));
    newdate.week(6);
    equal(newdate.toDateString(), 'Thu Feb 10 2011', String(newdate));
    equal(newdate.week(), 6, String(newdate));
    
    newdate.setWeek(15);
    equal(newdate.toDateString(), 'Thu Apr 14 2011', String(newdate));
    equal(newdate.week(), 15, String(newdate));
    newdate.week(15);
    equal(newdate.toDateString(), 'Thu Apr 14 2011', String(newdate));
    equal(newdate.week(), 15, String(newdate));

    newdate.setWeek(20);
    equal(newdate.toDateString(), 'Thu May 19 2011', String(newdate));
    equal(newdate.week(), 20, String(newdate));
    newdate.week(20);
    equal(newdate.toDateString(), 'Thu May 19 2011', String(newdate));
    equal(newdate.week(), 20, String(newdate));
    
    newdate.setWeek(30);
    equal(newdate.toDateString(), 'Thu Jul 28 2011', String(newdate));
    equal(newdate.week(), 30, String(newdate));
    newdate.week(30);
    equal(newdate.toDateString(), 'Thu Jul 28 2011', String(newdate));
    equal(newdate.week(), 30, String(newdate));
    
    newdate.setWeek(36);
    equal(newdate.toDateString(), 'Thu Sep 08 2011', String(newdate));
    equal(newdate.week(), 36, String(newdate));
    newdate.week(36);
    equal(newdate.toDateString(), 'Thu Sep 08 2011', String(newdate));
    equal(newdate.week(), 36, String(newdate));
    
    newdate = new Tempus(2008, 0, 5);
    newdate.setWeek(1);
    equal(newdate.toDateString(), 'Thu Jan 03 2008', String(newdate));
    equal(newdate.week(), 1, String(newdate));
    newdate.week(1);
    equal(newdate.toDateString(), 'Thu Jan 03 2008', String(newdate));
    equal(newdate.week(), 1, String(newdate));
    
    newdate.setWeek(5);
    equal(newdate.toDateString(), 'Thu Jan 31 2008', String(newdate));
    equal(newdate.week(), 5, String(newdate));
    newdate.week(5);
    equal(newdate.toDateString(), 'Thu Jan 31 2008', String(newdate));
    equal(newdate.week(), 5, String(newdate));
    
    newdate.setWeek(7);
    equal(newdate.toDateString(), 'Thu Feb 14 2008', String(newdate));
    equal(newdate.week(), 7, String(newdate));
    newdate.week(7);
    equal(newdate.toDateString(), 'Thu Feb 14 2008', String(newdate));
    equal(newdate.week(), 7, String(newdate));
    
    newdate.setWeek(8);
    equal(newdate.toDateString(), 'Thu Feb 21 2008', String(newdate));
    equal(newdate.week(), 8, String(newdate));
    newdate.week(8);
    equal(newdate.toDateString(), 'Thu Feb 21 2008', String(newdate));
    equal(newdate.week(), 8, String(newdate));
    
    newdate.setWeek(9);
    equal(newdate.toDateString(), 'Thu Feb 28 2008', String(newdate));
    equal(newdate.week(), 9, String(newdate));
    newdate.week(9);
    equal(newdate.toDateString(), 'Thu Feb 28 2008', String(newdate));
    equal(newdate.week(), 9, String(newdate));
    
    newdate.setWeek(10);
    equal(newdate.toDateString(), 'Thu Mar 06 2008', String(newdate));
    equal(newdate.week(), 10, String(newdate));
    newdate.week(10);
    equal(newdate.toDateString(), 'Thu Mar 06 2008', String(newdate));
    equal(newdate.week(), 10, String(newdate));
    
    newdate = new Tempus(2011, 6, 14);
    newdate.setWeek(28);
    equal(newdate.toDateString(), 'Thu Jul 14 2011', String(newdate));
    equal(newdate.week(), 28, String(newdate));
    newdate.week(28);
    equal(newdate.toDateString(), 'Thu Jul 14 2011', String(newdate));
    equal(newdate.week(), 28, String(newdate));
    
    newdate = new Tempus(2005, 11, 25);
    newdate.setWeek(51);
    equal(newdate.toDateString(), 'Thu Dec 22 2005', String(newdate));
    equal(newdate.week(), 51, String(newdate));
    newdate.week(51);
    equal(newdate.toDateString(), 'Thu Dec 22 2005', String(newdate));
    equal(newdate.week(), 51, String(newdate));
    
    newdate = new Tempus(2004, 1, 29);
    newdate.setWeek(8);
    equal(newdate.toDateString(), 'Thu Feb 19 2004', String(newdate));
    equal(newdate.week(), 8, String(newdate));
    newdate.week(8);
    equal(newdate.toDateString(), 'Thu Feb 19 2004', String(newdate));
    equal(newdate.week(), 8, String(newdate));
    
    newdate = new Tempus(1999, 11, 1);
    newdate.setWeek(50);
    equal(newdate.toDateString(), 'Thu Dec 16 1999', String(newdate));
    equal(newdate.week(), 50, String(newdate));
    newdate.week(50);
    equal(newdate.toDateString(), 'Thu Dec 16 1999', String(newdate));
    equal(newdate.week(), 50, String(newdate));
});

covers(Tempus.prototype, 'Tempus', 'getWeekOrdinal');
QUnit.test('getWeekOrdinal()', function () {
    var newdate = new Tempus(2011, 0, 1);
    equal(newdate.getWeekOrdinal(), 'nd', String(newdate));
    
    newdate = new Tempus(2011, 0, 3);
    equal(newdate.getWeekOrdinal(), 'st', String(newdate));

    newdate = new Tempus(2011, 0, 10);
    equal(newdate.getWeekOrdinal(), 'nd', String(newdate));
    
    newdate = new Tempus(2011, 0, 17);
    equal(newdate.getWeekOrdinal(), 'rd', String(newdate));
    
    newdate = new Tempus(2011, 0, 24);
    equal(newdate.getWeekOrdinal(), 'th', String(newdate));
    
    newdate = new Tempus(2011, 3, 11);
    equal(newdate.getWeekOrdinal(), 'th', String(newdate));
    
    newdate = new Tempus(2011, 4, 16);
    equal(newdate.getWeekOrdinal(), 'th', String(newdate));
    
    newdate = new Tempus(2011, 6, 25);
    equal(newdate.getWeekOrdinal(), 'th', String(newdate));
    
    newdate = new Tempus(2008, 2, 3);
    equal(newdate.getWeekOrdinal(), 'th', String(newdate));
    
    newdate = new Tempus(2005, 11, 25);
    equal(newdate.getWeekOrdinal(), 'st', String(newdate));
    
    newdate = new Tempus(1999, 11, 13);
    equal(newdate.getWeekOrdinal(), 'th', String(newdate));
});

covers(Tempus.prototype, 'Tempus', 'eachWeekOfMonth');
test('Test eachWeekOfMonth', function () {
    var newdate
    ,   c
    ,   n
    ,   ni
    ,   i = 12
    ,   months = [0, 4, 8, 12, 16, 21, 25, 30, 34, 38, 43, 47]
    ,   thursdays = [[2, 9, 16, 23, 30],
                    [3, 10, 17, 24, 3],
                    [3, 10, 17, 24, 31],
                    [31, 7, 14, 21, 28],
                    [28, 5, 12, 19, 26, 2],
                    [2, 9, 16, 23, 30],
                    [30, 7, 14, 21, 28],
                    [4, 11, 18, 25, 1],
                    [1, 8, 15, 22, 29],
                    [29, 6, 13, 20, 27, 3],
                    [3, 10, 17, 24, 1],
                    [1, 8, 15, 22, 29]]
    ,   dateObj;

    expect(228);

    while(--i >= 0) {
       newdate = new Tempus(2011, i);
       c = months[newdate.month()];
       n = thursdays[newdate.month()];
       ni = 0;
       newdate.eachWeekOfMonth(function (weekI, date) {
           equal(weekI, ++c, 'First argument is week in ' + newdate.getMonthName());
           ok(date instanceof Tempus, 'Second argument is Tempus object');
           equal(date.date(), n[ni], 'Second argument has date set to the current iterations thursday ('+n[ni]+'): ' + String(date));
           equal(this === newdate, true, '`this` is fixed to the original date: ' + String(date));
           ni++;
       });
    }
   
});

covers(Tempus.prototype, 'Tempus', 'eachWeekOfYear');
test('Test eachWeekOfYear', function () {
    var newdate
    ,   i = 0
    ,   thursdays = [6, 13, 20, 27, 3, 10, 17, 24, 3, 10, 17, 24, 31, 7, 14, 21, 28, 5, 12, 19, 
                    26, 2, 9, 16, 23, 30, 7, 14, 21, 28, 4, 11, 18, 25, 1, 8, 15, 22, 29, 6, 13,
                    20, 27, 3, 10, 17, 24, 1, 8, 15, 22, 29, 5]
    ,   dateObj;

    expect(212);

    newdate = new Tempus(2011, 0);
    var dateObj = new Date(+newdate);

    newdate.eachWeekOfYear(function (weekI, date) {
       equal(weekI, i+1 > 52 ? 53 - i : i+1, 'First argument is week in year ' + newdate.getMonthName());
       ok(date instanceof Tempus, 'Second argument is Tempus object');
       equal(date.date(), thursdays[i++], 'Second argument has date set to the current iterations thursday ('+thursdays[i]+'): ' + String(date));
       equal(this === newdate, true, '`this` is fixed to the original date: ' + String(date));
    });

});