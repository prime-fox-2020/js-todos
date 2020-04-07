const Model=require('./model')
const View=require('./view')

class Controllers{
    static help(){
        View.help()
    }
    static list(){
        const data=Model.read()
        View.list(data)
    }
    static add(list){
        const data=Model.read()
        Model.write(View.add(data,list))
    }
    static findById(id){
        const data=Model.read()
        View.findById(data,id)
    }
    static delete(id){
        const data=Model.read()
        Model.write(View.delete(data,id))
    }
    static complete(id){
        const data=Model.read()
        Model.write(View.complete(data,id))
    }
    static uncomplete(id){
        const data=Model.read()
        Model.write(View.uncomplete(data,id))
    }
    static listCreateAt(sort){
        const data=Model.read()
        View.listCreateAt(data,sort)
    }
    static listCompleteAt(sort){
        const data=Model.read()
        View.listCompleteAt(data,sort)
    }
    static tag(id,sort,sort1,sort2,sort3){
        const data=Model.read()
        Model.write(View.tag(data,id,sort,sort1,sort2,sort3))
    }
    static filter(tag){
        const data=Model.read()
        View.filter(data,tag)
    }
    static outStanding(sort){
        const data=Model.read()
        View.outStanding(data,sort)
    }

}
module.exports=Controllers