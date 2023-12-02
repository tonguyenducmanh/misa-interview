import mongoose from "mongoose";

const filterSchema = mongoose.Schema({
    name: String,
    filter : {
        xunghoString: String,
        xunghoCondition: String,
        hovademString: String,
        hovademCondition: String,
        tenString: String,
        tenCondition: String,
        phongbanString: String,
        phongbanCondition: String,
        chucdanhString: String,
        chucdanhCondition: String,
        dtdidongString: String,
        dtdidongCondition: String,
        dtcoquanString: String,
        dtcoquanCondition: String,
        loaitiemnangString: String,
        loaitiemnangCondition: String,
        theString: String,
        theCondition: String,
        nguongocString: String,
        nguongocCondition:String,
        zaloString: String,
        zaloCondition: String,
        emailcanhanString: String,
        emailcanhanCondition: String,
        emailcoquanString: String,
        emailcoquanCondition: String,
        tochucString: String,
        tochucCondition: String,
        masothueString: String,
        masothueCondition: String,
        taikhoannganhangString: String,
        taikhoannganhangCondition: String,
        motainganhangString: String,
        motainganhangCondition: String,
        ngaythanhlapString: String,
        ngaythanhlapCondition: String,
        loaihinhString: String,
        loaihinhCondition: String,
        linhvucString: String,
        linhvucCondition: String,
        nganhngheString: String,
        nganhngheCondition: String,
        doanhthuString: String,
        doanhthuCondition: String,
        quocgiaString: String,
        quocgiaCondition: String,
        tinhthanhphoString: String,
        tinhthanhphoCondition: String,
        quanhuyenString: String,
        quanhuyenCondition: String,
        phuongxaString: String,
        phuongxaCondition: String,
        sonhaString: String,
        sonhaCondition: String,
        motaString: String,
        motaCondition:String,
        dungchungString: String,
        dungchungCondition: String,
    },
})

var customerFilter = mongoose.model('filters', filterSchema)

export default customerFilter