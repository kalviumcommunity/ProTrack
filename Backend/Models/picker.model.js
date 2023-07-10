const mongoose = require('mongoose');

const pickerSchema = new mongoose.Schema({
    "name" : String,
    "shift" : String,
    "scrum_id" : String ,
    "password" : String,
    "doj" : String,
    "current_task" : String,   
    "current_id" : String,
    "current_status" : String,    
    "shift_status" : String,
    "cluster_productivity" : Number , 
    "packing_productivity" : Number ,  
    "odd_case_productivity" : Number ,
    "pending_hu" : Number, 
    
    "absent" : [{ "date" : Date , "reason" : String }],

    "day" : [
        {
            "start_time" : Date,
            "end_time" : Date,
            "shift" : String,

            "cluster_lines" : Number,
            "cluster_duration" : Number,
            "odd_case_hu" : Number,
            "odd_case_duration" : Number,
            "packing_orders" : Number,
            "packing_duration" : Number,
            
            "task_list" : [
                {
                    "task" : String,
                    "user_id" : String,
                    "start_time" : Date,
                    "end_time" : Date,
                    "work_done" : Number,
                    "remark" : String
                }
            ]
        }
    ]
})

const Picker = mongoose.model("Picker" , pickerSchema);

module.exports = Picker;