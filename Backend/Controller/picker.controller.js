const Picker = require('./../Models/picker.model');
const mongoose = require('mongoose');

async function addPicker(picker) {

    let pkr = await Picker.create(picker);
    return pkr;
}

async function getPicker() {
    let pkr = await Picker.find();
    return pkr;
}

async function changeShift(id, Shift) {

    let tsk = await Picker.findByIdAndUpdate(id, { shift: Shift });

    let pkr = await Picker.find();
    return pkr;

}

async function startShift(old_shift, id, shift) {

    if (old_shift == "end") {                           /// for starting the shift 

        let tsk = await Picker.findByIdAndUpdate(id, {
            $set: { shift_status: "start" },
            $push: { day: { start_time: new Date(), end_time: null, shift, cluster_lines: 0, odd_case_hu: 0, packing_orders: 0, cluster_duration: 0, odd_case_duration: 0, packing_duration: 0 } }
        })

    } else if (old_shift == "start") {              /// for ending the shift 

        let lastday_obj = await Picker.findById(id);           //picker object

        let dayidlast = lastday_obj.day[lastday_obj.day.length - 1];

        if (lastday_obj.day.length > 7) {
            await Picker.updateOne({ _id: id }, {
                $pop: { day: -1 }
            })
        }

        lastday_obj = dayidlast._id;                                    // day id last



        if (dayidlast.task_list.length == 0) {                     /// if task done is zero for a day 

            let remo = await Picker.updateOne({ _id: id }, {
                $pull: { day: { end_time: null } },
                $set: { shift_status: "end" }
            })



        } else {

            let oh = 0;
            let odur = 0;

            dayidlast.task_list.map((elem) => {

                if (elem.task == "Odd/Case") {
                    oh = oh + parseInt(elem.user_id);             // calculating odd/case hu   
                    let et = new Date(elem.end_time);
                    let st = new Date(elem.start_time);
                    odur = odur + (et - st);                 // saving in miliseconds
                }

            })

            let tsk = await Picker.updateOne({ _id: id },
                {
                    $set: {
                        "day.$[o].end_time": new Date(),
                        "day.$[o].odd_case_hu": oh, "day.$[o].odd_case_duration": odur,
                        shift_status: "end"
                    }
                },
                {
                    arrayFilters: [{ "o._id": lastday_obj }]                 // lastday_obj :- last day id
                }
            )


        }

    }

    return pkr = await Picker.find();
    return pkr;
}

async function changeTask( pendinghu , updatedhu , old_task, parameter, id, new_task) {

    let picker_obj = await Picker.findById(id);

    let  lastday_obj = picker_obj.day[picker_obj.day.length - 1];

    ////////////////////////  Ending the task first ////////////////////////////////

    if (old_task != "No Task" && old_task != "Odd/Case" ) {

        let old_task_id = lastday_obj.task_list[lastday_obj.task_list.length - 1]._id;

        let old_update = await Picker.updateOne({ _id: id },
            { $set: { "day.$[o].task_list.$[i].end_time": new Date() } },
            { arrayFilters: [{ 'o._id': lastday_obj._id }, { 'i._id': old_task_id }] })

    }else if( old_task == "Odd/Case"){
       
        let old_task_id = lastday_obj.task_list[lastday_obj.task_list.length - 1]._id;

        let old_update = await Picker.updateOne({ _id: id },
            { $set: { "day.$[o].task_list.$[i].end_time": new Date() , "day.$[o].task_list.$[i].user_id": updatedhu , pending_hu : pendinghu  }  },
            { arrayFilters: [{ 'o._id': lastday_obj._id }, { 'i._id': old_task_id }] })
           
           
    }

    ////////////////////////  starting the task  ////////////////////////////////
 
    if (new_task != "No Task") {

        if (new_task != "Other" && new_task != "Absent") {
            let usr = await Picker.updateOne({ day: { $elemMatch: { _id: lastday_obj._id } } }, {
                $set: { current_task: new_task , current_id : parameter },
                $push: { "day.$.task_list": { start_time: new Date(), end_time: null, task: new_task, user_id: parameter, work_done: 0, remark: "" } }

            })
        } else if (new_task == "Absent") {

            let usr = await Picker.updateOne({ day: { $elemMatch: { _id: lastday_obj._id } } }, {
                $set: { current_task: new_task },
                $push: { "day.$.task_list": { start_time: new Date(), end_time: null, task: new_task, user_id: " ", work_done: 0, remark: parameter } ,  absent : { date : new Date() , reason : parameter } }

            })

        } else {

            let usr = await Picker.updateOne({ day: { $elemMatch: { _id: lastday_obj._id } } }, {
                $set: { current_task: new_task },
                $push: { "day.$.task_list": { start_time: new Date(), end_time: null, task: new_task, user_id: " ", work_done: 0, remark: parameter } }

            })


        }

    } else {

        let usr = await Picker.updateOne({ day: { $elemMatch: { _id: lastday_obj._id } } }, {
            $set: { current_task: new_task }
        })

    }

    let usr1 = await Picker.find();

    return usr1;


}


async function fillWorkDone(user_id, day_id, task_id, work_done , Remark, task) {

    let oldid = await Picker.findById(user_id);

    let filterdata = {};
    oldid.day.map((elem, index) => {                    // day object of the cluster data entered
        if (elem._id == day_id) {
            filterdata = elem;
        }
    })


    if (task == "Cluster") {

        let cl = parseInt(work_done);                        // To store cluster lines total 
        let cdur = 0;                                       // To sum total duration of work { Cluster }

        filterdata.task_list.map((elem) => {                // for productivity calculation for a day

            if (elem.task == "Cluster") {
                cl = cl + elem.work_done;
                let et = new Date(elem.end_time);
                let st = new Date(elem.start_time);
                cdur = cdur + (et - st);
            }
        })



        let tsk = await Picker.updateOne({ _id: user_id }, {                 // Updating the task object of the day 
            $set: {
                "day.$[o].task_list.$[i].work_done": work_done,
                "day.$[o].task_list.$[i].remark": Remark,
                "day.$[o].cluster_lines": cl, "day.$[o].cluster_duration": cdur
            }
        }, {
            arrayFilters: [{ 'o._id': day_id }, { "i._id": task_id }]
        })

    } else if (task == "Packing") {                                              // For packing calculations 

        let pack = parseInt( work_done );
        let packdur = 0;

        filterdata.task_list.map((elem) => {

            if (elem.task == "Packing") {
                pack = pack + elem.work_done;
                let et = new Date(elem.end_time);
                let st = new Date(elem.start_time);
                packdur = packdur + (et - st);
            }

        })



        let tsk = await Picker.updateOne({ _id: user_id }, {
            $set: {
                "day.$[o].task_list.$[i].work_done": work_done,
                "day.$[o].task_list.$[i].remark": Remark,
                "day.$[o].packing_orders": pack, "day.$[o].packing_duration": packdur
            }
        }, {
            arrayFilters: [{ 'o._id': day_id }, { "i._id": task_id }]
        })

    }

    let pkr = await Picker.find();
    return pkr;

}




module.exports = {
    addPicker,
    getPicker,
    changeShift,
    startShift,
    changeTask,
    fillWorkDone
}