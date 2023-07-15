const Notification = require('./../Models/notification.model')



async function addNotification ( data ) {
    let dta = await Notification.create(data);
    return dta;
}

async function getNotification(){
    let dta = await  Notification.find();
    return dta;
}

async function deleteNotification(id){
    let dta = await Notification.findOneAndDelete({ _id : id });
    return dta;
}
async function updateNotification(dta){
    let Ndta = await Notification.findByIdAndUpdate(dta.id , {
        Title : dta.Title,
        Body : dta.Body
    });
    return Ndta;
}

module.exports ={
    addNotification,
    getNotification,
    deleteNotification,
    updateNotification
}