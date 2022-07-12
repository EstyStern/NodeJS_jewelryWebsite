//repository-generic//

//יצירת אובייקט
createObject = (Model, obj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createObj = await Model.create(obj)
            resolve(createObj);
        }
        catch (err) {
            reject(err)
        }
    })
}

//גישה לכל הנתונים
GetAll = (Model) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allData = await Model.find({});
            resolve(allData)
        }
        catch (err) {
            reject(err)
        }
    })
}

//מחיקה האובייקט 
removeObject = (obj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const removeObj = await obj.remove()
            resolve(removeObj)
        }
        catch (err) {
            reject(err)
        }
    })
}

// גישה לאובייקט לפי קוד מזהה ותנאי
findObjectById = (Model, id, condition) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findObj = await Model.findById()
            resolve(findObj)
        } catch (err) {
            reject(err)
        }
    })
}

// גישה לאובייקט לפי קוד
findObjectById = (Model, objectId) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Model",Model);
            console.log("objectId",objectId);
            const doc = await Model.findById(objectId)
            //const Alladata=await Model.find({});
           // console.log("Alladata",Alladata);
            //const doc = await Model.find(objectId)
            console.log("doc",doc);
            resolve(doc)
        } 
        
        catch (err) {
        console.log(`err,not find By Id ${err}`);
        }
    })
}



// גישה לאובייקטים לפי תנאי
findObject = (Model, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findObj = await Model.find(filter)
            resolve(findObj)
        } catch (err) {
            reject(err)
        }
    })
}

//גישה לאובייקט הראשון שעונה על התנאי 
findOneObject = (Model, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findObj = await Model.findOne({ userId: filter })
            resolve(findObj)
        } catch (err) {
            reject(err)
        }
    })
}

// מציאת אובייקט נתון עפ''י תנאי ועידכונו עי''י אובייקט נתון
findObjectAndUpdate = (Model, filterArr, updateOBJ) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findObj = await Model.findOneAndUpdate(...filterArr, updateOBJ)
            resolve(findObj)
        } catch (err) {
            reject(err)
        }
    })
}

// מציאת אובייקט נתון עפ''י קוד ועידכונו עי''י אובייקט נתון
findObjectByIdAndUpdate = (Model, id, optionsArr, updateOBJ) => {
    return new Promise(async (resolve, reject) => {
        try {

            const findObj = await Model.findByIdAndUpdate(id, updateOBJ, ...optionsArr)
            resolve(findObj)
        } catch (err) {
            reject(err)
        }
    })
}

//מציאת אובייקט עפ''י קוד ומחיקתו
findObjectByIdAndDelete = (Model, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findByIdAndDelete(id)
            resolve(doc)
        } catch (err) { }
    })
}



//מונה מופעים
countDoc = (Model) => {
    return new Promise(async (resolve, reject) => {
        Model.countDocuments({}, (err, count) => {
            if (err) {
                reject(err)
            }
            resolve(count)
        })
    })
}

initObj = (Model, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(Model)
            let obj = new Model(data)
            console.log(obj)
            resolve(obj)
        } catch (err) {
            reject(err)
        }
    })
}
//הוספת אובייקט
pushObject = (Model, val) => {
    return new Promise(async (resolve, reject) => {
        try {
            const obj = await Model.push(val)
            resolve(obj)
        } catch (err) { }
    })
}

module.exports = {
    createObject,
    removeObject,
    findObjectById,
    findObject,
    findOneObject,
    findObjectAndUpdate,
    findObjectByIdAndUpdate,
    findObjectByIdAndDelete,
    findObjectById,
    countDoc,
    // initObj,
    GetAll
}