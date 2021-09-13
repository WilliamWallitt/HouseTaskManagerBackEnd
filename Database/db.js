const mongoose = require("mongoose")


class DB {
    constructor(conn, schema) {
        this._schema = schema
        this._conn = conn
        mongoose.connect(this._conn, { useNewUrlParser: true })

    }

    async createNewObject(product) {
        return this._schema.create(product).
        then(dbProduct => dbProduct).
        catch(err => err)
    }

    async getAllObjects(populate=null) {
        if (populate !== null) {
            return this._schema.find({}).populate(...populate).
            then(dbProduct => dbProduct).
            catch(err => err)
        } else {
            return this._schema.find({}).
            then(dbProduct => dbProduct).
            catch(err => err)
        }
    }

    async getObject(id, populate=null) {
        if (populate !== null) {
            return this._schema.find({_id: id}).populate().
            then(dbProduct => dbProduct).
            catch(err => err)
        } else {
            return this._schema.find({_id: id}).
            then(dbProduct => dbProduct).
            catch(err => err)
        }

    }

    async deleteObject(id) {
        return this._schema.findOneAndDelete({_id: id}).
        then(dbProduct => dbProduct).
        catch(err => err)
    }

    async editObject(id, obj) {
        return this._schema.findOneAndUpdate({_id: id}, obj).
        then(dbProduct => dbProduct).
        catch(err => err)
    }

}

module.exports = DB