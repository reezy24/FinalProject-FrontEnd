const breakSchedules = {
    "09/02/2020": {
        totalFifteens: 24,
        totalThirties: 13,
        totalBreakTime: 24 * 15 + 30 * 13,
        goalTime: 16 * 60,
        numFloaters: 2,
        breaks: [
            {
              employee: 'Sam',
              duration: 15,
              breakNum: 1,
              startTime: "10:00",
              endTime: "10:15",
              floater: 1
            },
            {
              employee: 'Lisa',
              duration: 15,
              breakNum: 1,
              startTime: "10:15",
              endTime: "10:30",
              floater: 1
            },
            {
              employee: 'Zach',
              duration: 15,
              breakNum: 1,
              startTime: "10:30",
              endTime: "10:45",
              floater: 1
            },
            {
              employee: 'Ferdy',
              duration: 15,
              breakNum: 1,
              startTime: "10:45",
              endTime: "11:00",
              floater: 1
            },
            {
              employee: 'Matt',
              duration: 15,
              breakNum: 1,
              startTime: "11:00",
              endTime: "11:15",
              floater: 1
            },
            {
              employee: 'Jack',
              duration: 15,
              breakNum: 1,
              startTime: "11:00",
              endTime: "11:15",
              floater: 2
            },
            {
              employee: 'Phil',
              duration: 15,
              breakNum: 1,
              startTime: "11:15",
              endTime: "11:30",
              floater: 2
            },
            {
              employee: 'Connor',
              duration: 15,
              breakNum: 1,
              startTime: "11:15",
              endTime: "11:30",
              floater: 1
            },
            {
              employee: 'Mary',
              duration: 15,
              breakNum: 1,
              startTime: "11:30",
              endTime: "11:45",
              floater: 1
            },
            {
              employee: 'Jane',
              duration: 15,
              breakNum: 1,
              startTime: "11:30",
              endTime: "11:45",
              floater: 2
            },
            {
              employee: 'Jim',
              duration: 15,
              breakNum: 1,
              startTime: "11:45",
              endTime: "12:00",
              floater: 2
            },
            {
              employee: 'Devin',
              duration: 15,
              breakNum: 1,
              startTime: "11:45",
              endTime: "12:00",
              floater: 1
            },
            {
              employee: 'Sarah',
              duration: 30,
              breakNum: 1,
              startTime: "12:00",
              endTime: "12:30",
              floater: 1
            },
            {
              employee: 'Sam',
              duration: 30,
              breakNum: 1,
              startTime: "12:00",
              endTime: "12:30",
              floater: 2
            },
            {
              employee: 'Lisa',
              duration: 30,
              breakNum: 1,
              startTime: "12:30",
              endTime: "1:00",
              floater: 2
            },
            {
              employee: 'Zach',
              duration: 30,
              breakNum: 1,
              startTime: "12:30",
              endTime: "1:00",
              floater: 1
            },
            {
              employee: 'Ferdy',
              duration: 30,
              breakNum: 1,
              startTime: "1:00",
              endTime: "1:30",
              floater: 1
            },
            {
              employee: 'Matt',
              duration: 30,
              breakNum: 1,
              startTime: "1:00",
              endTime: "1:30",
              floater: 2
            },
            {
              employee: 'Jack',
              duration: 30,
              breakNum: 1,
              startTime: "1:30",
              endTime: "2:00",
              floater: 2
            },
            {
              employee: 'Phil',
              duration: 30,
              breakNum: 1,
              startTime: "1:30",
              endTime: "2:00",
              floater: 1
            },
            {
              employee: 'Connor',
              duration: 30,
              breakNum: 1,
              startTime: "2:00",
              endTime: "2:30",
              floater: 1
            },
            {
              employee: 'Mary',
              duration: 30,
              breakNum: 1,
              startTime: "2:00",
              endTime: "2:30",
              floater: 2
            },
            {
              employee: 'Jane',
              duration: 30,
              breakNum: 1,
              startTime: "2:30",
              endTime: "3:00",
              floater: 2
            },
            {
              employee: 'Jim',
              duration: 30,
              breakNum: 1,
              startTime: "2:30",
              endTime: "3:00",
              floater: 1
            },
            {
              employee: 'Sam',
              duration: 15,
              breakNum: 2,
              startTime: "3:00",
              endTime: "3:15",
              floater: 2
            },
            {
              employee: 'Devin',
              duration: 30,
              breakNum: 1,
              startTime: "3:00",
              endTime: "3:30",
              floater: 1
            },
            {
              employee: 'Lisa',
              duration: 15,
              breakNum: 2,
              startTime: "3:15",
              endTime: "3:30",
              floater: 2
            },
            {
              employee: 'Zach',
              duration: 15,
              breakNum: 2,
              startTime: "3:30",
              endTime: "3:45",
              floater: 2
            },
            {
              employee: 'Ferdy',
              duration: 15,
              breakNum: 2,
              startTime: "3:30",
              endTime: "3:45",
              floater: 1
            },
            {
              employee: 'Matt',
              duration: 15,
              breakNum: 2,
              startTime: "3:45",
              endTime: "4:00",
              floater: 1
            },
            {
              employee: 'Jack',
              duration: 15,
              breakNum: 2,
              startTime: "3:45",
              endTime: "4:00",
              floater: 2
            },
            {
              employee: 'Phil',
              duration: 15,
              breakNum: 2,
              startTime: "4:00",
              endTime: "4:15",
              floater: 2
            },
            {
              employee: 'Connor',
              duration: 15,
              breakNum: 2,
              startTime: "4:00",
              endTime: "4:15",
              floater: 1
            },
            {
              employee: 'Mary',
              duration: 15,
              breakNum: 2,
              startTime: "4:15",
              endTime: "4:30",
              floater: 1
            },
            {
              employee: 'Jane',
              duration: 15,
              breakNum: 2,
              startTime: "4:15",
              endTime: "4:30",
              floater: 2
            },
            {
              employee: 'Jim',
              duration: 15,
              breakNum: 2,
              startTime: "4:30",
              endTime: "4:45",
              floater: 2
            },
            {
              employee: 'Sarah',
              duration: 15,
              breakNum: 1,
              startTime: "4:30",
              endTime: "4:45",
              floater: 1
            }
          ]
    },
    "08/02/2020": {
        totalFifteens: 19,
        totalThirties: 11,
        totalBreakTime: 30 * 11 + 19 * 15,
        goalTime: 16*60,
        numFloaters: 2,
        breaks: [
            {
            employee: 'Sam',
            duration: 15,
            breakNum: 1,
            startTime: "10:00",
            endTime: "10:15",
            floater: 1
            },
            {
            employee: 'Lisa',
            duration: 15,
            breakNum: 1,
            startTime: "10:15",
            endTime: "10:30",
            floater: 1
            },
            {
            employee: 'Zach',
            duration: 15,
            breakNum: 1,
            startTime: "10:45",
            endTime: "11:00",
            floater: 1
            },
            {
            employee: 'Devin',
            duration: 15,
            breakNum: 1,
            startTime: "11:00",
            endTime: "11:15",
            floater: 1
            },
            {
            employee: 'Ferdy',
            duration: 15,
            breakNum: 1,
            startTime: "11:30",
            endTime: "11:45",
            floater: 2
            },
            {
            employee: 'Mary',
            duration: 15,
            breakNum: 1,
            startTime: "11:30",
            endTime: "11:45",
            floater: 1
            },
            {
            employee: 'Matt',
            duration: 15,
            breakNum: 1,
            startTime: "11:45",
            endTime: "12:00",
            floater: 1
            },
            {
            employee: 'Jack',
            duration: 30,
            breakNum: 1,
            startTime: "12:00",
            endTime: "12:30",
            floater: 1
            },
            {
            employee: 'Sarah',
            duration: 30,
            breakNum: 1,
            startTime: "12:00",
            endTime: "12:30",
            floater: 2
            },
            {
            employee: 'Phil',
            duration: 30,
            breakNum: 1,
            startTime: "12:30",
            endTime: "1:00",
            floater: 2
            },
            {
            employee: 'Connor',
            duration: 30,
            breakNum: 1,
            startTime: "12:30",
            endTime: "1:00",
            floater: 1
            },
            {
            employee: 'Sam',
            duration: 30,
            breakNum: 1,
            startTime: "1:00",
            endTime: "1:30",
            floater: 1
            },
            {
            employee: 'Lisa',
            duration: 30,
            breakNum: 1,
            startTime: "1:00",
            endTime: "1:30",
            floater: 2
            },
            {
            employee: 'Zach',
            duration: 30,
            breakNum: 1,
            startTime: "1:30",
            endTime: "2:00",
            floater: 2
            },
            {
            employee: 'Devin',
            duration: 30,
            breakNum: 1,
            startTime: "1:30",
            endTime: "2:00",
            floater: 1
            },
            {
            employee: 'Ferdy',
            duration: 30,
            breakNum: 1,
            startTime: "2:00",
            endTime: "2:30",
            floater: 1
            },
            {
            employee: 'Mary',
            duration: 30,
            breakNum: 1,
            startTime: "2:00",
            endTime: "2:30",
            floater: 2
            },
            {
            employee: 'Lisa',
            duration: 15,
            breakNum: 2,
            startTime: "2:30",
            endTime: "2:45",
            floater: 1
            },
            {
            employee: 'Matt',
            duration: 30,
            breakNum: 1,
            startTime: "2:30",
            endTime: "3:00",
            floater: 2
            },
            {
            employee: 'Zach',
            duration: 15,
            breakNum: 2,
            startTime: "2:45",
            endTime: "3:00",
            floater: 1
            },
            {
            employee: 'Jack',
            duration: 15,
            breakNum: 1,
            startTime: "3:00",
            endTime: "3:15",
            floater: 1
            },
            {
            employee: 'Sarah',
            duration: 15,
            breakNum: 1,
            startTime: "3:00",
            endTime: "3:15",
            floater: 2
            },
            {
            employee: 'Devin',
            duration: 15,
            breakNum: 2,
            startTime: "3:15",
            endTime: "3:30",
            floater: 2
            },
            {
            employee: 'Phil',
            duration: 15,
            breakNum: 1,
            startTime: "3:15",
            endTime: "3:30",
            floater: 1
            },
            {
            employee: 'Connor',
            duration: 15,
            breakNum: 1,
            startTime: "3:30",
            endTime: "3:45",
            floater: 1
            },
            {
            employee: 'Mary',
            duration: 15,
            breakNum: 2,
            startTime: "3:30",
            endTime: "3:45",
            floater: 2
            },
            {
            employee: 'Matt',
            duration: 15,
            breakNum: 2,
            startTime: "3:45",
            endTime: "4:00",
            floater: 2
            },
            {
            employee: 'Jane',
            duration: 15,
            breakNum: 1,
            startTime: "3:45",
            endTime: "4:00",
            floater: 1
            },
            {
            employee: 'Jack',
            duration: 15,
            breakNum: 2,
            startTime: "4:00",
            endTime: "4:15",
            floater: 1
            },
            {
            employee: 'Connor',
            duration: 15,
            breakNum: 2,
            startTime: "4:00",
            endTime: "4:15",
            floater: 2
            }
        ],
    },
    "30/01/2020": {
        totalFifteens: 8,
        totalThirties: 4,
        totalBreakTime: 240,
        goalTime: 1200,
        numFloaters: 2,
        stats: {
            finalFinishTime: "3:45 PM",
            managerWasCalled: true
        },
        breaks: [
            {
                employee: "CoWorker 1", 
                startTime: "10:00",
                endTime: "10:15",
                duration: 15,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 2", 
                startTime: "10:00",
                endTime: "10:15",
                duration: 15,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 3", 
                startTime: "10:15",
                endTime: "10:30",
                duration: 15,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 4", 
                startTime: "10:15",
                endTime: "10:30",
                duration: 15,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 1", 
                startTime: "10:30",
                endTime: "11:00",
                duration: 30,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 2", 
                startTime: "10:30",
                endTime: "11:00",
                duration: 30,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 3", 
                startTime: "11:00",
                endTime: "11:30",
                duration: 30,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 4", 
                startTime: "11:00",
                endTime: "11:30",
                duration: 30,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 1", 
                startTime: "11:30",
                endTime: "11:45",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },
            {
                employee: "CoWorker 2", 
                startTime: "11:30",
                endTime: "11:45",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },
            {
                employee: "CoWorker 3", 
                startTime: "11:45",
                endTime: "12:00",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },
            {
                employee: "CoWorker 4", 
                startTime: "11:45",
                endTime: "12:00",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },
        ], 
    },
    "31/01/2020": {
        totalFifteens: 8,
        totalThirties: 4,
        totalBreakTime: 240,
        goalTime: 900,
        numFloaters: 5,
        breaks: [
            {
                employee: "CoWorker 1", 
                startTime: "10:00",
                endTime: "10:15",
                duration: 15,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 2", 
                startTime: "10:00",
                endTime: "10:15",
                duration: 15,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 3", 
                startTime: "10:15",
                endTime: "10:30",
                duration: 15,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 4", 
                startTime: "10:15",
                endTime: "10:30",
                duration: 15,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 1", 
                startTime: "10:30",
                endTime: "11:00",
                duration: 30,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 2", 
                startTime: "10:30",
                endTime: "11:00",
                duration: 30,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 3", 
                startTime: "11:00",
                endTime: "11:30",
                duration: 30,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "CoWorker 4", 
                startTime: "11:00",
                endTime: "11:30",
                duration: 30,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "CoWorker 1", 
                startTime: "11:30",
                endTime: "11:45",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },
            {
                employee: "CoWorker 2", 
                startTime: "11:30",
                endTime: "11:45",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },
            {
                employee: "CoWorker 3", 
                startTime: "11:45",
                endTime: "12:00",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },
            {
                employee: "CoWorker 4", 
                startTime: "11:45",
                endTime: "12:00",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },
        ], 
    },
    "01/02/2020": {
        totalFifteens: 18,
        totalThirties: 11,
        totalBreakTime: 600,
        goalTime: 60 * 16,
        numFloaters: 2,
        breaks: [
            {
                employee: "Ash", 
                startTime: "1:30",
                endTime: "2:00",
                duration: 30,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "Yaz", 
                startTime: "1:30",
                endTime: "2:00",
                duration: 30,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "Lill", 
                startTime: "2:00",
                endTime: "2:30",
                duration: 30,
                floater: 2,
                breakNum: 1,
            },
            {
                employee: "Sam", 
                startTime: "2:00",
                endTime: "2:30",
                duration: 15,
                floater: 1,
                breakNum: 1,
            },
            {
                employee: "Kyle", 
                startTime: "2:00",
                endTime: "2:15",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },
            {
                employee: "Paris", 
                startTime: "2:15",
                endTime: "2:30",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },{
                employee: "Tracy", 
                startTime: "2:30",
                endTime: "2:45",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },{
                employee: "Sonya", 
                startTime: "2:30",
                endTime: "2:45",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },{
                employee: "Zach", 
                startTime: "2:45",
                endTime: "3:00",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },{
                employee: "Yaz", 
                startTime: "2:45",
                endTime: "3:00",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },{
                employee: "Mahdi", 
                startTime: "3:15",
                endTime: "3:30",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },{
                employee: "Sam", 
                startTime: "3:15",
                endTime: "3:30",
                duration: 15,
                floater: 2,
                breakNum: 2,
            },{
                employee: "Lill", 
                startTime: "3:30",
                endTime: "3:45",
                duration: 15,
                floater: 1,
                breakNum: 2,
            },{
                employee: "Kyle", 
                startTime: "3:30",
                endTime: "3:45",
                duration: 15,
                floater: 2,
                breakNum: 2,
            }
        ], 
    },
}

export default breakSchedules